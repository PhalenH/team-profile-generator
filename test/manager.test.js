const Manager = require("../team/manager");

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
