import { Repository, EntityRepository } from 'typeorm';
import { Student } from '../models/Student';
import {studentLessons, recordViews} from '../controllers/StudentController';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student>{
    async getStudent(email_student: string){
        try {
            const response = await this.findAndCount({where: {email_student: email_student}});
            return response;
        } catch (error) {
            return {status: 'error', message: `Erro interno do servidor ...`};
        }
    }

    async prepareLessons(lessons: studentLessons[], views: recordViews[]){
        const viewsMap = new Map();
        const modules  = new Map(); 

        views.forEach((value) => {
            viewsMap.set(value.id_lesson, value.is_view);
        });

        const lessonsComplets = lessons.map((lesson) => {
            return {
                idLesson: lesson.id_lesson,
                nameLesson: lesson.name_lesson,
                nameModule: lesson.name_module,
                orderModule: lesson.order_module,
                isVisualized: viewsMap.get(lesson.id_lesson) == undefined ? false : true
            }
        });
        
        lessonsComplets.forEach((value) => {
            modules.set(value.orderModule, new Array());
        })

        lessonsComplets.forEach((value) => {
            modules.get(value.orderModule).push(value);
        })

        const arrayLessons = new Array();
    
        modules.forEach((value) => {
            arrayLessons.push(value);
        })

        const data = arrayLessons.map((value) => {
            return {nameModule: value[0].nameModule, lessons: value}
        })
       
        return data;
    }
}
