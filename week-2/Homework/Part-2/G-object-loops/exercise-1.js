// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

// Prints
// TOM - 20
// ABDUL - 19

const students = Object.keys(studentGrades);
const grades = Object.values(studentGrades);
const studentGradesList = Object.entries(studentGrades);
console.log("studentGrades", studentGrades);

function moreThan18(num) {
  return num > 18;
}
var moreThan18List = (list) => {
  return list.filter((element) => moreThan18(element[1]));
};

const result = moreThan18List(studentGradesList);

for (let i = 0; i < result.length; i++) {
  console.log(`${result[i][0]} - ${result[i][1]}`);
}
