import express from 'express';
const router = express.Router();

import {
  createRegistration,
  getRegistrations,
  updateRegistration,
  deleteRegistration,
  getRegistrationTot,
} from '../controllers/regController.js';

router.route('/').post(createRegistration).get(getRegistrations);
router.route('/total').get(getRegistrationTot);
router.route('/:id').delete(deleteRegistration).patch(updateRegistration);

export default router;
