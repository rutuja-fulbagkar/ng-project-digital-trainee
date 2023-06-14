const con= require("../db");

const hirefromusModel={
    saveHirefromus:(orgname,mob,email,nameofcompanyrepresentative,natureofindustry,typeofemployees,officelocation,numberofemployeesyouwouldliketohire,resume,websiteoforganisation,stipend,jobprofileofapplicant,callback)=>{
        const sql=`INSERT INTO hire_from_us(orgname,mob,email,nameofcompanyrepresentative,natureofindustry,typeofemployees,officelocation,numberofemployeesyouwouldliketohire,resume,websiteoforganisation,stipend,jobprofileofapplicant ) VALUES("${orgname}",${mob},"${email}","${nameofcompanyrepresentative}","${natureofindustry}","${typeofemployees}","${officelocation}","${numberofemployeesyouwouldliketohire}","${resume}","${websiteoforganisation}","${stipend}","${jobprofileofapplicant}")`;
        console.log(sql);
        con.query(sql,[orgname,mob,email,nameofcompanyrepresentative,natureofindustry,typeofemployees,officelocation,numberofemployeesyouwouldliketohire,resume,websiteoforganisation,stipend,jobprofileofapplicant],callback);
    }
}
module.exports=hirefromusModel