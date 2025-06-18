function gradeStudent(score) {
  if (score >= 80) {
    return "Excellent";
  } else if (score >= 50) {
    return "Good";
  } else {
    return "Fail";
  }
}

console.log(gradeStudent(85)); 
console.log(gradeStudent(65)); 
console.log(gradeStudent(40)); 
