import { Router } from 'express';
import { comparePrices } from '../controllers/compare.controller.js';

const router = Router();

/**
 * @swagger
 * /api/compare:
 *   get:
 *     summary: Compare prices across items
 *     description: Accepts multiple item ids of the same itemType and returns each item's full price-comparison rows in one response, so the frontend can render a side-by-side table without N separate detail calls.
 *     tags:
 *       - Compare
 *     parameters:
 *       - in: query
 *         name: itemType
 *         required: true
 *         schema:
 *           type: string
 *           enum: [medication, service]
 *       - in: query
 *         name: ids
 *         required: true
 *         schema:
 *           type: string
 *         description: Comma-separated list of item ids.
 *     responses:
 *       200:
 *         description: Comparison rows retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean, example: true }
 *                 data:
 *                   type: array
 *                   items:
 *                     allOf:
 *                       - oneOf:
 *                           - $ref: '#/components/schemas/Medication'
 *                           - $ref: '#/components/schemas/Service'
 *                       - type: object
 *                         properties:
 *                           prices:
 *                             type: array
 *                             items: { $ref: '#/components/schemas/Price' }
 *                 message: { type: string }
 *       400:
 *         description: Missing or invalid itemType/ids.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/', comparePrices);

export default router;
