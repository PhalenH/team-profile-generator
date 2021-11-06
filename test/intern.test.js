const Intern = require("../team/intern");

// test("can create a name string using the contructor", () => {
//     const name = "phalen";
//     const testName = new Intern(name, 10, "email@email.com", 1);
//     expect(testName.name).toBe(name);
//   });
  
//   test("can create a id number using the contructor", () => {
//     const id = 10;
//     const testId = new Intern("phalen", id, "email@email.com", 1);
//     expect(testId.id).toBe(id);
//   });
  
//   test("can create a email string using the contructor", () => {
//     const email = 'email@email.com';
//     const testEmail = new Intern("phalen", 10, email, 1);
//     expect(testEmail.email).toBe(email);
//   });
  
  test("can create a school username using the contructor", () => {
      const school = "UA";
      const testSchool = new Intern('phalen', 10, "email@email.com", school);
      expect(testSchool.school).toBe(school);
    });
  
  test("get role method should return the word Intern", () =>{
      const title = "Intern";
      const testTitle = new Intern('Phalen', 10, "email@email.com", 1);
      expect(testTitle.getRole()).toBe(title);
  })