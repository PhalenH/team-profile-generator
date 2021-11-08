const Intern = require("../team/intern");

// gets school from getSchool();
test("can create a school username using the contructor", () => {
  const school = "UA";
  const testSchool = new Intern("phalen", 10, "email@email.com", school);
  expect(testSchool.school).toBe(school);
});

// gets role from getRole();
test("get role method should return the word Intern", () => {
  const title = "Intern";
  const testTitle = new Intern("Phalen", 10, "email@email.com", 1);
  expect(testTitle.getRole()).toBe(title);
});
