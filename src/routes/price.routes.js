import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { submitPrice } from '../controllers/price.controller.js';

const router = Router();

/**
 * @swagger
 * /api/prices:
 *   post:
 *     summary: Submit a community-reported price
 *     description: Phase 2 — submit a new Price row for an existing item/provider pair. Not implemented yet.
 *     tags:
 *       - Price
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       401:
 *         description: Missing or invalid bearer token.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       501:
 *         description: Not implemented yet.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/', auth, submitPrice);

export default router;
