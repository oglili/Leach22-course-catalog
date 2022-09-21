import Registration from '../models/Registration.js';
import Course from '../models/Course.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';
import mongoose from 'mongoose';

const createRegistration = async (req, res) => {
  const { name, type, university, address, birthdate, phoneNr } = req.body;
  if (!name || !address || !birthdate || !phoneNr) {
    throw new BadRequestError('Please Provide All Values');
  }
  req.body.createdBy = req.user.userId;
  const findCourse = await Course.findOne({ name, type, university });
  if (findCourse) {
    const reg = await Registration.create(req.body);
    res.status(StatusCodes.CREATED).json({ reg });
  } else {
    throw new NotFoundError(`No course`);
  }
};

const getRegistrations = async (req, res) => {
  const { search, type, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };
  // NO AWAIT
  let result = Registration.find(queryObject);

  const reg = await result;

  res.status(StatusCodes.OK).json({ reg, totalReg: reg.length, numOfPages: 1 });
};

const updateRegistration = async (req, res) => {
  const { id: regId } = req.params;
  const { name, type, university } = req.body;

  if (!name) {
    throw new BadRequestError('Please Provide All Values');
  }

  const course = Course.findOne({ name, type, university });
  const findCourse = await course;
  if (findCourse) {
    const reg = await Registration.findOne({ _id: regId });
    if (!reg) {
      throw new NotFoundError(`No reg with id ${regId}`);
    }

    checkPermissions(req.user, reg.createdBy);

    const updateReg = await Registration.findOneAndUpdate(
      { _id: regId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(StatusCodes.OK).json({ updateReg });
  } else {
    throw new NotFoundError(`No course`);
  }
};

const deleteRegistration = async (req, res) => {
  const { id: regId } = req.params;
  const reg = await Registration.findOne({ _id: regId });
  if (!reg) {
    throw new CustomError.NotFoundError(`No reg with id : ${regId}`);
  }
  checkPermissions(req.user, reg.createdBy);
  await reg.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success! A Registration removed' });
};

const getRegistrationTot = async (req, res) => {
  const { search, type, sort } = req.query;

  //const queryObject = {};
  let result = Registration.find();

  const reg = await result;

  res.status(StatusCodes.OK).json({ reg, totalReg: reg.length, numOfPages: 1 });
};

export {
  createRegistration,
  getRegistrations,
  updateRegistration,
  deleteRegistration,
  getRegistrationTot,
};
