import StudentModel from "../models/student.js";

class StudentController{
    static getALlDoc=async(req,res)=>{
        try{
            const result=await StudentModel.find()
            res.send(result)
        } catch(error){
            console.log(error)
        }
    }
}

export default StudentController