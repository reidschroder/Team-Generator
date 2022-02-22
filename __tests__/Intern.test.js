const Intern = require("../lib/Intern.js");

test('creates intern object', () => {
    const intern = new Intern("reid", 3, "reidschroder2@gmail.com", "Intern", "school");

    expect(intern.school).toEqual(expect.any(String));
});