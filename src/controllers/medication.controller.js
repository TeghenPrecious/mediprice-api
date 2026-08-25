import Medication from "../models/Medication.js"; 
import Price from "../models/Price.js";

const LIMIT = 10;
const PAGE = 1;
const SORT = "name";

export async function createMedication(req, res, next) {
  try {
    const { name, genericName, category, description } = req.body;
    
    // Validate required fields
    if (!name || !genericName || !category || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMedication = await Medication.create({
      name,
      genericName,
      category,
      description
    });

    res.status(201).json({
      message: 'Medication created successfully',
      medication: newMedication
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function getMedications(req, res, next) {
  try {
    const { q, genericName, 
      category, page=PAGE, 
      // limit=LIMIT, sort=SORT, 
      // priceMin, priceMax, 
      description,  } = req.query;

    const filters = {};

    if (q) filters.name = { $regex: q, $options: "i" };;
    if (genericName) filters.genericName = { $regex: genericName, $options: "i" };
    if (category) filters.category = { $regex: category, $options: "i" };
    if (description) filters.description = { $regex: description, $options: "i" };

    const medication = await Medication.find(filters);
    if (!medication) {
      return res.status(404).json({ message: 'No medication found' });
    }
    

    res.status(200).json({
      success: true,
      data: medication,
      message: "Medications retrieved successfully"
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
  
}

export async function getMedication(req, res, next) {
  try {
    const medication = await Medication.findById(req.params.id);
    if (!medication) {
      return res.status(404).json({ message: 'Medication not found' });
    }

    const prices = await Price.find({
        itemType: "medication",
        itemId: req.params.id
      })
      .populate("providerId", "name type");
    if(!prices) {
      return res.status(404).json({ message: 'No prices found for this medication' });
    }
    
    res.status(200).json({
      success: true,
      data: { ...medication._doc, prices },
      message: "Medications retrieved successfully"
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
  
}
