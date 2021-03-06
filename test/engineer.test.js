const Engineer = require("../team/engineer");

// gets gitHub from getGitHub();
test("can create a gitHub username using the contructor", () => {
  const gitHub = "phalenh";
  const testGitHub = new Engineer("phalen", 10, "email@email.com", gitHub);
  expect(testGitHub.gitHub).toBe(gitHub);
});

// gets role from getRole();
test("get role method should return the word Engineer", () => {
  const title = "Engineer";
  const testTitle = new Engineer("Phalen", 10, "email@email.com", 1);
  expect(testTitle.getRole()).toBe(title);
});
