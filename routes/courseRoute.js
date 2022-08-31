import express from 'express';
const router = express.Router();

import {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
  showStats,
  getCoursesTot,
} from '../controllers/courseController.js';

router.route('/').post(createCourse).get(getCourses);
router.route('/stats').get(showStats);
router.route('/total').get(getCoursesTot);
router.route('/:id').delete(deleteCourse).patch(updateCourse);

export default router;
