import Medication from "../models/Medication.js"; 

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

    // const newMedication = new Medication({
    //   name,
    //   genericName,
    //   category,
    //   description
    // });
    // const savedMedication = await newMedication.save();
    // res.status(201).json({
    //   medication: savedMedication
    // });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function getMedications(req, res, next) {
  try {
    const { name, genericName, category, description,  } = req.query;

    const filters = {};

    if (name) filters.name = { $regex: name, $options: "i" };;
    if (genericName) filters.genericName = { $regex: genericName, $options: "i" };
    if (category) filters.category = { $regex: category, $options: "i" };
    if (description) filters.description = { $regex: description, $options: "i" };

    const medication = await Medication.find(filters);
    if (!medication) {
      return res.status(404).json({ message: 'No medication found' });
    }

    res.status(200).json({
      medication
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
    res.status(200).json({
      medication
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
  
}
