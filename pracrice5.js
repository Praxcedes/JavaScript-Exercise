function gradeStudent(score) {
  if (score >= 80) {
    return "Excellent";
  } else if (score >= 50) {
    return "Good";
  } else {
    return "Fail";
  }
}

console.log(gradeStudent(85)); // "Excellent"
console.log(gradeStudent(65)); // "Good"
console.log(gradeStudent(40)); // "Fail"
