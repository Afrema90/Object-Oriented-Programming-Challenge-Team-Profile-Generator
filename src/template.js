const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
//let employees = [{name:"genarateManager",id:1, ... other properties}];

function generateHtml(employees){
    let html = ''
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        let special
        if(employee.getRole()==='Manager'){
            special = employee.getOfficeNumber()
        }else if(employee.getRole()==='Engineer'){
            special = employee.getGitHub()
        }else{special = employee.getSchool()

        }
        html+=`
        <div>
        <h1>${employee.name}</h1>
        <h2>${employee.id}</h2>
        <h2>${employee.email}</h2>
        <h2>${special}</h2>
        </div>
        `
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    < link rel="src," href="/style.css">
    </head>
    <body>
       ${html} 
    </body>
    </html>`
}
module.exports = generateHtml
