import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CourseSchema = new mongoose.Schema(
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
    courseLocation: {
      type: String,
      default: 'my city',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Course', CourseSchema);
