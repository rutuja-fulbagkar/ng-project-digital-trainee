const careerapplicationsModel=require("../model/careerapplications");

const careerapplicationsController = {
    saveCareerapplications: (req, res) => {
        const {name,mob,email,location,relocate,ctc,notcieperiod,currentlyemployeed,applyingfor,expectedctc,resume } = req.body;
        console.log(req.body);
       
        careerapplicationsModel.saveCareerapplications(name,mob,email,location,relocate,ctc,notcieperiod,currentlyemployeed,applyingfor,expectedctc,resume, (err, result) => {
            if (err) {
                console.error('Error saving contact:', err);
                return res.status(500).json({ error: 'Error saving contact' });
            }
            console.log('Contact saved:', result);

            res.json({ message: 'Contact saved successfully' });
        });
    }
};
module.exports=careerapplicationsController