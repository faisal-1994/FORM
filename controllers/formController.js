const FormModel = require('../models/Form');

exports.submitForm = async (req, res) => {
    try {
        const { name, address, number } = req.body;
        
        const dataForm =await FormModel.create({name, address, number})

        res.status(200).send('Data saved successfully!');
    } 
    
    catch (err) {
        console.error("Error saving data", err);
        res.status(500).send('Error saving data.');
    }
};

