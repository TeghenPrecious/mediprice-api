import express from 'express';
import { Router } from 'express';

import Service from '../models/Service.js';
import { createService, getServices, getService } from '../controllers/service.controller.js';

const router = Router();

router.post('/', createService);
router.get('/', getServices);
router.get('/:id', getService);

export default router;
