// I will be creatin ana array of student object
const students = [
    { name: "Pauline", 
      grades: [20, 85, 30],
      avg:0
    
    },

    { name: "Ishimwe",
     grades: [7, 20, 40,20,40],
    avg:0
    },
    { name: "Marie", 
    grades: [50, 80],
    avg:0
}
];




function calculateAverageGrade(students) {
    //calculating average fo each student
    const averages = {};
    // students.forEach
    students.forEach(student => {
        const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
        let avg=0
        if (student.grades.length){
             avg= sum / student.grades.length
        }else{
            avg=0
        }
        student.avg=avg;
        averages[student.name] = avg;
    });
    return averages;
}

function findTopStudents(students, thresholdpass) {
    return students.filter(student => {
        const avg = student.grades.reduce((std, grade) => std + grade, 0) / student.grades.length;
        return avg > thresholdpass;
    });
}



// to sort these student according to their grades  I will  do bubble sort



console.log(calculateAverageGrade(students));
console.log(findTopStudents(students, 50));


