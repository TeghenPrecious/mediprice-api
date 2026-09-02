import express from 'express';
import { Router } from 'express';

import Provider from '../models/Provider.js';
import { createProvider, getProviders, getProvider } from '../controllers/provider.controller.js';

const router = Router();

router.post('/', createProvider);
router.get('/', getProviders);
router.get('/:id', getProvider);

export default router;
