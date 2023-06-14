const hirefromusModel=require("../model/hirefromus");

const hirefromusController = {
    saveHirefromus: (req, res) => {
        const {orgname,mob,email,nameofcompanyrepresentative,natureofindustry,typeofemployees,officelocation,numberofemployeesyouwouldliketohire,resume,websiteoforganisation,stipend,jobprofileofapplicant } = req.body;
        console.log(req.body);
       
        hirefromusModel.saveHirefromus(orgname,mob,email,nameofcompanyrepresentative,natureofindustry,typeofemployees,officelocation,numberofemployeesyouwouldliketohire,resume,websiteoforganisation,stipend,jobprofileofapplicant, (err, result) => {
            if (err) {
                console.error('Error saving contact:', err);
                return res.status(500).json({ error: 'Error saving contact' });
            }
            console.log('Contact saved:', result);

            res.json({ message: 'Contact saved successfully' });
        });
    }
};
module.exports=hirefromusController