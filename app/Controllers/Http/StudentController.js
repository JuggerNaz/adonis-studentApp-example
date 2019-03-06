'use strict'

const Got = use('got')

class StudentController {

    async update({request, params}){
        const{ name, content, description, students } = request.all()

        const studentArr = JSON.parse(students);
        studentArr.forEach(element => {
            if(element.id == params.studentId)
                element.status = 'submit'
        });
        
        try {
            const response = await Got.put('http://localhost:3334/api/v1/teacher/homeworks/'+params.id,{
                headers: { 
                    'Content-Type': 'application/json' },
                body:{
                    name: name,
                    content: content,
                    description: description,
                    students: JSON.stringify(studentArr)
                },
                json: true
            });
            return response.body;
        } catch (error) {
            console.log(error.response.body);
        }
    }

    async list ({params}){
        try {
            const response = await Got('http://localhost:3334/api/v1/teacher/homeworks/list/'+params.id);
            return response.body;
        } catch (error) {
            console.log(error.response.body);
        }
    }
}

module.exports = StudentController
