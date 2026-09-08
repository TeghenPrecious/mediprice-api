import express from 'express';
import { Router } from 'express';

import Medication from '../models/Medication.js';
import { createMedication, getMedications, getMedication, medHistory } from '../controllers/medication.controller.js';

const router = Router();

/**
 * @swagger
 * /api/medications:
 *   post:
 *     summary: Create medication
 *     description: Create a medication focusing on its name, category and description.
 *     tags:
 *       - Medications
 *
 *     responses:
 *       201:
 *         description: Medication created successfully.
 *
 *       400:
 *         description: .
 */
router.post('/', createMedication);

/**
 * @swagger
 * /api/medications:
 *   get:
 *     summary: List medications
 *     description: Search, filter, sort and paginate medications.
 *     tags:
 *       - Medications
 *
 *     responses:
 *       200:
 *         description: Medications retrieved successfully.
 *
 *       500:
 *         description: Internal server error.
 */
router.get('/', getMedications);

/**
 * @swagger
 * /api/medications/id:
 *   get:
 *     summary: List a given medication
 *     description: Shows the different prices of a given medication across different providers.
 *     tags:
 *       - Medications
 *
 *     responses:
 *       200:
 *         description: Medication and its prices retrieved successfully.
 *
 *       404:
 *         description: This medication does not exist.
 */
router.get('/:id', getMedication);

/**
 * @swagger
 * /api/medications/id/history:
 *   get:
 *     summary: List a medication
 *     description: Price trend of a given medication over time.
 *     tags:
 *       - Medications
 *
 *     responses:
 *       200:
 *         description: History retrieved successfully.
 *
 *       500:
 *         description: Internal server error.
 */
router.get('/:id/history', medHistory);

export default router;
