import express from 'express';
import { Router } from 'express';

import Price from '../models/Price.js';
import { createPrice } from '../controllers/price.controller.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.post('/', auth, createPrice);

export default router;
