function gradingStudents(grades) {
    return grades.map((grade) => {
        let multiple = Math.ceil(grade / 5) * 5
        let diff = multiple - grade;
        
        if (diff >= 0 && diff < 3 && multiple >= 40) return multiple;
        else return grade;
    })
}

const grades = [
  73,
  67,
  38,
  33
];

console.log(gradingStudents(grades));