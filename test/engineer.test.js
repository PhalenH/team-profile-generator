const Engineer = require("../team/engineer");

test("can create a name string using the contructor", () => {
    const name = "phalen";
    const testName = new Engineer(name, 10, "email@email.com", 1);
    expect(testName.name).toBe(name);
  });
  
  test("can create a id number using the contructor", () => {
    const id = 10;
    const testId = new Engineer("phalen", id, "email@email.com", 1);
    expect(testId.id).toBe(id);
  });
  
  test("can create a email string using the contructor", () => {
    const email = 'email@email.com';
    const testEmail = new Engineer("phalen", 10, email, 1);
    expect(testEmail.email).toBe(email);
  });
  
  test("can create a gitHub username using the contructor", () => {
      const gitHub = "phalenh";
      const testGitHub = new Engineer('phalen', 10, "email@email.com", gitHub);
      expect(testGitHub.gitHub).toBe(gitHub);
    });
  
  test("get role method should return the word Engineer", () =>{
      const title = "Engineer";
      const testTitle = new Engineer('Phalen', 10, "email@email.com", 1);
      expect(testTitle.getRole()).toBe(title);
  })