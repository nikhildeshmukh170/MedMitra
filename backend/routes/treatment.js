const express = require('express');
const router = express.Router();
const Treatment = require('../models/Treatment');

// POST request to save treatment data
router.post('/', async (req, res) => {
  const { patientId, diseaseName, medicine, precaution } = req.body;

  console.log('Received data:', req.body); // Log incoming data

  try {
    const newTreatment = new Treatment({
      patientId,
      diseaseName,
      medicine,
      precaution,
    });
    await newTreatment.save();
    res.status(201).json({ message: 'Treatment saved successfully' });
  } catch (err) {
    console.error('Error saving treatment:', err.message); // Log error
    res.status(500).json({ error: 'Failed to save treatment' });
  }
});

module.exports = router;
