import express from 'express';
import { Router } from 'express';

import Medication from '../models/Medication.js';
import { createMedication, getMedications, getMedication } from '../controllers/medication.controller.js';

const router = Router();

router.post('/', createMedication);
router.get('/', getMedications);
router.get('/:id', getMedication);

export default router;
