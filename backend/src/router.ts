import { Router } from 'express';
import { StudentController } from './controllers/StudentController';

const studentContoller = new StudentController();

const router = Router();

router.post('/student', studentContoller.createStudent);
router.get('/student/:id_student', studentContoller.getAllStudentLesson);
router.get('/login', studentContoller.loginStudent);

export { router };