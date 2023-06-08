const con= require("../db");

const contactModel={
    saveContact:(name,mob,email,course,branch,callback)=>{
        const sql=`INSERT INTO task(name,mob,email,course,branch) VALUES("${name}",${mob},"${email}","${course}","${branch}")`;
        console.log(sql);
        con.query(sql,[name,mob,email,course,branch],callback);
    }
}
module.exports=contactModel