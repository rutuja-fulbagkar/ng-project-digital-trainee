const contactModel=require("../model/contact");

const contactController = {
    saveContact: (req, res) => {
        const {name,mob,email,course,branch } = req.body;
        console.log(req.body);
       
        contactModel.saveContact(name,mob,email,course,branch, (err, result) => {
            if (err) {
                console.error('Error saving contact:', err);
                return res.status(500).json({ error: 'Error saving contact' });
            }
            console.log('Contact saved:', result);

            res.json({ message: 'Contact saved successfully' });
        });
    }
};
module.exports=contactController