const Employee = require("../team/employee");

test("can create a name string using the contructor", () => {
    const name = "phalen";
    const testName = new Manager(name, 10, "email@email.com", 1);
    expect(testName.name).toBe(name);
  });
  
  test("can create a id number using the contructor", () => {
    const id = 10;
    const testId = new Manager("phalen", id, "email@email.com", 1);
    expect(testId.id).toBe(id);
  });
  
  test("can create a email string using the contructor", () => {
    const email = 'email@email.com';
    const testEmail = new Manager("phalen", 10, email, 1);
    expect(testEmail.email).toBe(email);
  });