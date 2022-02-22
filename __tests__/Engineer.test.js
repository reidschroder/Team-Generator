const Engineer = require("../lib/Engineer.js");

test('creates engineer object', () => {
    const engineer = new Engineer("reid", 3, "reidschroder2@gmail.com", "Engineer", "gihub");

    expect(engineer.github).toEqual(expect.any(String));
});