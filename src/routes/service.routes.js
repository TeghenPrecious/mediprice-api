import express from 'express';
import { Router } from 'express';

import Service from '../models/Service.js';
import { createService, getServices, getService, serHistory } from '../controllers/service.controller.js';

const router = Router();

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: Create a service
 *     description: Create a service focusing on its name, type, category and description.
 *     tags:
 *       - Services
 *
 *     responses:
 *       201:
 *         description: Service created successfully.
 *
 *       400:
 *         description: Bad request.
 */
router.post('/', createService);

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get all services
 *     description: Search, filter, sort and paginate all services.
 *     tags:
 *       - Services
 *
 *     responses:
 *       200    :
 *         description: Services retrieved successfully.
 *
 *       500:
 *         description: Internal server error.
 */
router.get('/', getServices);

/**
 * @swagger
 * /api/services/id:
 *   get:
 *     summary: List a given service
 *     description: Shows the different prices of a given service across a different providers.
 *     tags:
 *       - Services
 *
 *     responses:
 *       200:
 *         description: Service and its prices retrieved successfully.
 *
 *       404:
 *         description: This service does not exist.
 */
router.get('/:id', getService);

/**
 * @swagger
 * /api/services/id/history:
 *   get:
 *     summary: List a service
 *     description: Price trend of a given service over time.
 *     tags:
 *       - Services
 *
 *     responses:
 *       200:
 *         description: History retrieved successfully.
 *
 *       500:
 *         description: Internal server error.
 */
router.get('/:id/history', serHistory);

export default router;
