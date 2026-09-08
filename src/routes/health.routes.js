import { Router } from 'express';
import { getHealth } from '../controllers/health.controller.js';

const router = Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Liveness check
 *     description: Simple liveness check — does not depend on MongoDB being reachable.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Service is healthy.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean, example: true }
 *                 data:
 *                   type: object
 *                   properties:
 *                     status: { type: string, example: ok }
 *                 message: { type: string }
 */
router.get('/', getHealth);

export default router;
