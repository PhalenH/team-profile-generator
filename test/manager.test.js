const Manager = require("../team/manager");

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

test("can create a office number using the contructor", () => {
    const officeNumber = 10;
    const testOfficeNumber = new Manager('phalen', 10, "email@email.com", officeNumber);
    expect(testOfficeNumber.officeNumber).toBe(officeNumber);
  });

test("get role method should return the word Manager", () =>{
    const title = "Manager";
    const testTitle = new Manager('Phalen', 10, "email@email.com", 1);
    expect(testTitle.getRole()).toBe(title);
})

// describe("Manager", () =>{

// })
