import Course from '../models/Course.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';
import mongoose from 'mongoose';

const createCourse = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new BadRequestError('Please Provide All Values');
  }
  req.body.createdBy = req.user.userId;

  const course = await Course.create(req.body);
  res.status(StatusCodes.CREATED).json({ course });
};

const getCourses = async (req, res) => {
  const { search, type, university, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };
  if (type !== 'all') {
    queryObject.type = type;
  }
  if (university !== 'all') {
    queryObject.university = university;
  }
  if (search) {
    queryObject.name = { $regex: search, $options: 'i' };
  }

  // NO AWAIT
  let result = Course.find(queryObject);

  // chain sort conditions
  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }
  if (sort === 'a-z') {
    result = result.sort('name');
  }
  if (sort === 'z-a') {
    result = result.sort('-name');
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const [courses, totalCourses] = await Promise.all([
    result,
    Course.countDocuments(queryObject),
  ]);
  const numOfPages = Math.ceil(totalCourses / limit);
  res.status(StatusCodes.OK).json({ courses, totalCourses, numOfPages });
};

const getCoursesTot = async (req, res) => {
  const { search, type, university, sort } = req.query;

  const queryObject = {};
  if (type !== 'all') {
    queryObject.type = type;
  }
  if (university !== 'all') {
    queryObject.university = university;
  }
  if (search) {
    queryObject.name = { $regex: search, $options: 'i' };
  }

  // NO AWAIT
  let result = Course.find(queryObject);

  // chain sort conditions
  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }
  if (sort === 'a-z') {
    result = result.sort('name');
  }
  if (sort === 'z-a') {
    result = result.sort('-name');
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const [courses, totalCourses] = await Promise.all([
    result,
    Course.countDocuments(queryObject),
  ]);
  const numOfPages = Math.ceil(totalCourses / limit);
  res.status(StatusCodes.OK).json({ courses, totalCourses, numOfPages });
};

const updateCourse = async (req, res) => {
  const { id: courseId } = req.params;

  const { name } = req.body;

  if (!name) {
    throw new BadRequestError('Please Provide All Values');
  }

  const course = await Course.findOne({ _id: courseId });
  if (!course) {
    throw new NotFoundError(`No course with id ${courseId}`);
  }

  checkPermissions(req.user, course.createdBy);

  const updateCourse = await Course.findOneAndUpdate(
    { _id: courseId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updateCourse });
};

const deleteCourse = async (req, res) => {
  const { id: courseId } = req.params;
  const course = await Course.findOne({ _id: courseId });
  if (!course) {
    throw new CustomError.NotFoundError(`No course with id : ${courseId}`);
  }
  checkPermissions(req.user, course.createdBy);
  await course.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success! Course removed' });
};

const showStats = async (req, res) => {
  let stats = await Course.aggregate([
    { $group: { _id: '$type', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    bachelor: stats.bachelor || 0,
    masters: stats.masters || 0,
    postgraduate: stats.postgraduate || 0,
  };

  let statsUniv = await Course.aggregate([
    { $group: { _id: '$university', count: { $sum: 1 } } },
  ]);

  statsUniv = statsUniv.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStatsUniv = {
    'University of Sicilia': statsUniv['University of Sicilia'] || 0,
    'University of Rome': statsUniv['University of Rome'] || 0,
    'University of Torino': statsUniv['University of Torino'] || 0,
    'University of Verona': statsUniv['University of Verona'] || 0,
    'University of Brescia': statsUniv['University of Brescia'] || 0,
    'University of Milan': statsUniv['University of Milan'] || 0,
  };

  res.status(StatusCodes.OK).json({ defaultStats, defaultStatsUniv });
};

export {
  createCourse,
  deleteCourse,
  getCourses,
  getCoursesTot,
  updateCourse,
  showStats,
};
