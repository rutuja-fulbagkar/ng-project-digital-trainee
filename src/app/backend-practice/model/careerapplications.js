const con= require("../db");

const careerapplicationsModel={
    saveCareerapplications:(name,mob,email,location,relocate,ctc,notcieperiod,currentlyemployeed,applyingfor,expectedctc,resume,callback)=>{
        const sql=`INSERT INTO career_application_form(name,mob,email,location,relocate,ctc,notcieperiod,currentlyemployeed,applyingfor,expectedctc,resume) VALUES
        ("${name}",${mob},"${email}","${location}","${relocate}","${ctc}","${notcieperiod}","${currentlyemployeed}","${applyingfor}","${expectedctc}","${resume}")`;
        console.log(sql);
        con.query(sql,[name,mob,email,location,relocate,ctc,notcieperiod,currentlyemployeed,applyingfor,expectedctc,resume],callback);
    }
}
module.exports=careerapplicationsModel