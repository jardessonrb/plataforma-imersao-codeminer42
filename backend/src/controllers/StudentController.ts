import { getConnection } from 'typeorm';
import { Request, Response } from "express";    
import * as Yup from 'yup';
import { StudentRepository } from '../repositories/StudentRepository';


export type studentLessons = {
    id_lesson: string,
    name_lesson: string,
    name_module: string,
    order_module: number
}

export type recordViews = {
    id_lesson: string;
    is_view: boolean
}

export class StudentController{
    async createStudent(request: Request, response: Response){
        const data = request.body;

        const validation = Yup.object().shape({
            name_student: Yup.string().required("Username is required"),
            email_student: Yup.string().email("Invalid email").required("Email is required"),
            password_student: Yup.string().min(6).required("Senha is required ")
        });

        try {
            await validation.validate(data, {
                abortEarly: false
            });
        } catch (error) {
            return response.status(406).json({errors: [error.errors], status: 'error'});
        }

        const studentController = getConnection().getCustomRepository(StudentRepository);
        const searchStudentByEmail = await studentController.getStudent(data.email_student);

        if(searchStudentByEmail[1] > 0){
            return response.status(500).json({status: 'error', message: `Email already registered in the system`});
        }
        
        const studentObject = studentController.create(data);

        try {
            const res = await studentController.save(studentObject);
            return response.status(201).json({status: 'sucess', message: `Student ${data.name_student} successfully registered`});
        } catch (error) {
            return response.status(500).json({status: 'error', message: `Internal server error ...`});
        }
    }

    async loginStudent(request: Request, response: Response){
        const { email_student, password_student } = request.query;

        const validation = Yup.object().shape({
            email_student: Yup.string().email("Invalid email").required("Email is required"),
            password_student: Yup.string().min(6).required("password is required")
        });

        try {
            await validation.validate({email_student, password_student}, {
                abortEarly: false
            });
        } catch (error) {
            return response.status(406).json({errors: [error.errors], status: 'error'});
        }
        
        try {
            const studentController = getConnection().getCustomRepository(StudentRepository);
            const responseStudent = await studentController.find({where: {email_student: email_student, password_student: password_student}, take: 1});
            if(responseStudent.length > 0){
                const { id_student, name_student } = responseStudent[0];
                return response.status(201).json({status: 'sucess', message: 'User successfully logged in', response: {id_student, name_student}});
            }else{
                return response.status(406).json({status: 'error', message: 'Login not allowed. Invalid password or email'});
            }
        } catch (error) {
            return response.status(500).json({status: 'error', message: 'Internal server error ...'});
        }
    }

    async getAllStudentLesson(request: Request, response: Response){
        const { id_student } = request.params;

        const validation = Yup.object().shape({
            id_student: Yup.string().uuid("Invalid id student").required("Id student is required")
        });

        try {
            await validation.validate({id_student}, {
                abortEarly: false
            });
        } catch (error) {
            return response.status(406).json({errors: [error.errors], status: 'error'});
        }
        
        const studentController = getConnection().getCustomRepository(StudentRepository);
        let studentLessons: studentLessons[];
        let recordViewsLessons: recordViews[];
        let nameStudent: string;
        try {
            studentLessons         = await studentController.query('select l.id_lesson, l.name_lesson, ml.name_module, ml.order_module from table_lesson as l join table_module_lesson as ml on l.id_module_lesson = ml.id_module_lesson order by ml.order_module');
            recordViewsLessons     = await studentController.query(`select id_lesson, is_view from table_record_view_lesson where id_student = '${id_student}' and is_view = true`);
            const { name_student } = await studentController.findOne({select:['name_student'], where: {id_student: id_student}})
            nameStudent = name_student;
        } catch (error) {
            return response.status(500).json({status: 'error', message: 'Internal server error ...'});
        }

        const modulesLessons = await studentController.prepareLessons(studentLessons, recordViewsLessons);
        
        return response.status(201).json({status: 'sucess', message: '', data: {modules: modulesLessons, countLessons: studentLessons.length, countViews: recordViewsLessons.length, nameStudent}});

    }
}
