const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function generateHtml(employees){
    let html
    for (let i = 0; i < array.length; i++) {
        const employee = array[i];
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
        h2>${employee.id}</h2>
        <h2>${employee.email}</h2>
        <h2>${employee.officeNumber}</h2>
        <h2>${employee.team}</h2>
        </div>
        <div>
        <h1>${Engineer.engineerName}</h1>
        <h2>${Engineer.engineerId}</h2>
        <h2>${Engineer.engineerEmil}</h2>
        <h2>${Engineer.engineerGithub}</h2>
        <h2>${Engineer.engineerTeam}</h2>
        </div>
        <div>
        <h1>${Intern.internName}</h1>
        <h2>${Intern.internId}</h2>
        <h2>${Intern.internEmail}</h2>
        <h2>${Intern.internSchool}</h2>
        <h2>${Intern.team}</h2>
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
    </head>
    <body>
       ${html} 
    </body>
    </html>`
}
module.exports = generateHtml
