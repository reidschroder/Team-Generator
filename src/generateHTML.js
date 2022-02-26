const generateManager = function (manager) {
    return `
<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-info justify-content-center">
            <h3 class="d flex text-center">${manager.name}</h3>
            <h4 class="d flex text-center">Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID:  ${manager.id}</p>
            <p class="email">Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.office}</p>
        </div>
    </div>
</div>
`
};

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-info justify-content-center">
            <h3 class="d flex text-center">${engineer.name}</h3>
            <h4 class="d flex text-center">Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">ID:  ${engineer.id}</p>
            <p class="email">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: ${engineer.github}</p>
        </div>
    </div>
</div>
`
};

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-info justify-content-center">
            <h3 class="d flex text-center">${intern.name}</h3>
            <h4 class="d flex text-center">Intern</h4>
        </div>
        <div class="card-body">
            <p class="id">ID:  ${intern.id}</p>
            <p class="email">Email: <a href="mailto: ${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>
`
};




const generatePage = function (employeeCard) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <title>Your Team Profile</title>
</head>
<body>
    <header>
        <div>
            <h2 class="d-flex justify-content-center bg-secondary text-white">Your Team Profile</h2>
        </div>
    </header>

    <main class="d-flex justify-content-center">
        <div class="container justify-content-between">
            <div class="row">
                ${employeeCard}
            </div>
        </div>
    </main>
    
</body>
</html>
    `
}

generateTeam = (data) => {
    pageArray = [];

    for (let i in data) {
        const employee = data[i];
        const role = employee.role;

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }

    const employeeCard = pageArray.join('');

    const createTeam = generatePage(employeeCard);
    return createTeam;
}


module.exports = generateTeam;