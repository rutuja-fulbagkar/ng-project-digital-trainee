const franchiseModel=require("../model/franchise");

const franchiseController = {
    saveFranchise: (req, res) => {
        const {name,mob,email,business,place,city,description} = req.body;
        console.log(req.body);
       
        franchiseModel.saveFranchise(name,mob,email,business,place,city,description, (err, result) => {
            if (err) {
                console.error('Error saving contact:', err);
                return res.status(500).json({ error: 'Error saving contact' });
            }
            console.log('Contact saved:', result);

            res.json({ message: 'Contact saved successfully' });
        });
    }
};
module.exports=franchiseController