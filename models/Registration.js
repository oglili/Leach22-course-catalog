import mongoose from 'mongoose';
import validator from 'validator';

const RegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'must provide a name'],
      trim: true,
      maxLength: [30, 'name cannot be more than 30 characters'],
    },
    type: {
      type: String,
      enum: ['bachelor', 'masters', 'postgraduate'],
      default: 'bachelor',
    },

    university: {
      type: String,
      enum: [
        'University of Verona',
        'University of Rome',
        'University of Brescia',
        'University of Torino',
        'University of Milan',
        'University of Sicilia',
      ],
      default: 'University of Verona',
    },
    birthdate: {
      type: Date,
      default: '2000-01-01',
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      default: 'Male',
    },
    address: {
      type: String,
      required: [true, 'Please provide address'],
    },
    phoneNr: {
      type: String,
      trim: true,
      validate: {
        validator: validator.isMobilePhone,
        message: 'is not a valid digit number!',
      },
      default: '+393890966530',
      unique: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Registration', RegistrationSchema);
