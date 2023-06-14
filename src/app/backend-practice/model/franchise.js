const con= require("../db");

const franchiseModel={
    saveFranchise:(name,mob,email,business,place,city,description,callback)=>{
        const sql=`INSERT INTO franchise(name,mob,email,business,place,city,description) VALUES
        ("${name}",${mob},"${email}","${business}","${place}","${city}","${description}")`;
        console.log(sql);
        con.query(sql,[name,mob,email,business,place,city,description],callback);
    }
}
module.exports=franchiseModel