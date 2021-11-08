const Employee = require("../team/employee");

  // gets name from getName();
test("can create a name string using the contructor", () => {
    const name = "phalen";
    const testName = new Employee(name, 10, "email@email.com", 1);
    expect(testName.name).toBe(name);
  });

  // gets id from getID();
  test("can create a id number using the contructor", () => {
    const id = 10;
    const testId = new Employee("phalen", id, "email@email.com", 1);
    expect(testId.id).toBe(id);
  });
  
  // gets email from getEmail();
  test("can create a email string using the contructor", () => {
    const email = 'email@email.com';
    const testEmail = new Employee("phalen", 10, email, 1);
    expect(testEmail.email).toBe(email);
  });

  // gets role from getRole();
  test("get role method should return the word Employee", () => {
    const title = "Employee";
    const testTitle = new Employee("Phalen", 10, "email@email.com", 1);
    expect(testTitle.getRole()).toBe(title);
  });