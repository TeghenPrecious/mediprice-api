import Service from '../models/Service.js';
import Price from '../models/Price.js';

export async function createService(req, res, next) {
  try {
    const { name, type, category, description } = req.body;

    // Validate required fields
    if (!name || !type || !category || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newService = await Service.create({
      name,
      type,
      category,
      description
    });

    res.status(201).json({
      message: 'Service created successfully',
      service: newService
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function getServices(req, res, next) {
  try {
    const { q, type, category, page=1, limit=10, description } = req.query;

    const filters = {};

    if (q) filters.name = { $regex: q, $options: "i" };
    if (type) filters.type = { $regex: type, $options: "i" };
    if (category) filters.category = { $regex: category, $options: "i" };
    if (description) filters.description = { $regex: description, $options: "i" };

    const service = await Service.find(filters);
    if (!service) {
      return res.status(404).json({ message: 'No service found' });
    }

    res.status(200).json({
      success: true,
      data: service,
      message: "Services retrieved successfully"
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
  
}

export async function getService(req, res, next) {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    const prices = await Price.find({
            itemType: "service",
            itemId: req.params.id
          })
          .populate("providerId", "name type");
    if(!prices) {
      return res.status(404).json({ message: 'No prices found for this service' });
    }

    res.status(200).json({
      success: true,
      data: { ...service._doc, prices },
      message: "Services retrieved successfully"
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
  
}




