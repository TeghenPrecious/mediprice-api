import mongoose from 'mongoose';

import Provider from '../models/Provider.js';
import Price from '../models/Price.js';

export async function createProvider(req, res, next) {
  try {
    const { name, type, phone } = req.body;

    // Validate required fields
    if (!name || !type || !phone) {
      return res.status(400).json({ success: false, data: null, message: 'All fields are required' });
    }

    const newProvider = await Provider.create({
      name,
      type,
      phone,
    });

    res.status(201).json({
      success: true,
      data: newProvider,
      message: 'Provider created successfully',
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function getProviders(req, res, next) {
  try {
    const { q, type, city } = req.query;

    const filters = {};

    if (q) filters.name = { $regex: q, $options: "i" };
    if (type) filters.type = { $regex: type, $options: "i" };
    if (city) filters.city = { $regex: city, $options: "i" };

    const provider = await Provider.find(filters);

    res.status(200).json({
      success: true,
      data: provider,
      message: "Providers retrieved successfully"
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
  
}

export async function getProvider(req, res, next) {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) {
      return res.status(404).json({ success: false, data: null, message: 'Provider not found' });
    }
    const price = await Price.find({ providerId: req.params.id });
    res.status(200).json({
      success: true,
      data: {provider, price},
      message: "Provider and prices retrieved successfully"
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
  
}