const Employee = require("../lib/Employee.js");

//================Test Employee====================
test("creates an employee object", () => {
    const employee = new Employee("Reid", 1, "reidschroder2@gmail.com", "Employee")
    
    expect(employee.name).toEqual(expect.any(String));

    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.email).toEqual(expect.any(String));

    expect(employee.role).toBe("Employee");
})