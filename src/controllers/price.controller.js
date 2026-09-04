import Price from '../models/Price.js';
import PriceHistory from '../models/PriceHistory.js';
import Service from '../models/Service.js';
import Medication from '../models/Medication.js';

export async function createPrice(req, res, next) {
  try {
    const { itemType, itemId, providerId, amount, } = req.body;

    // Validate required fields
    if (!itemType || !itemId || !providerId || !amount ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newPrice = await Price.create({
      itemType,
      itemId,
      providerId,
      amount,
    });

    const newHistory = await PriceHistory.create({
      priceId: newPrice._id,
      itemId: newPrice.itemId,
      amount: newPrice.amount,
    })

    res.status(201).json({
      message: 'Price created successfully',
      price: newPrice
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
