const Manager = require("../lib/Manager.js");

test('creates manager object', () => {
    const manager = new Manager("reid", 2, "reidschroder2@gmail.com", "Manager", 101);

    expect(manager.office).toEqual(expect.any(Number));
});

