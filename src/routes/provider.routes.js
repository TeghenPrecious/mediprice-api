import express from 'express';
import { Router } from 'express';

import Provider from '../models/Provider.js';
import { createProvider, getProviders, getProvider } from '../controllers/provider.controller.js';

const router = Router();

/**
 * @swagger
 * /api/providers:
 *   post:
 *     summary: Creates provider
 *     description: Creates a new provider.
 *     tags:
 *       - Providers
 *
 *     responses:
 *       201:
 *         description: Provider created successfully.
 *
 *       400:
 *         description: This medication does not exist.
 */
router.post('/', createProvider);

/**
 * @swagger
 * /api/providers:
 *   get:
 *     summary: Get all Providers
 *     description: Shows the different prices of a given medication across different providers.
 *     tags:
 *       - Providers
 *
 *     responses:
 *       200:
 *         description: Providers retrieved successfully.
 *
 *       404:
 *         description: This medication does not exist.
 */
router.get('/', getProviders);

/**
 * @swagger
 * /api/providers/id:
 *   get:
 *     summary: List a given provider
 *     description: Shows the prices of different medications and services of a given Provider.
 *     tags:
 *       - Providers
 *
 *     responses:
 *       200:
 *         description: Provider and its prices retrieved successfully.
 *
 *       404:
 *         description: This prrovider does not exist.
 */
router.get('/:id', getProvider);

export default router;
