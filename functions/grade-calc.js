// students score, total possible score
// generate the letter grade and percentage that the student earned
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (score, totalScore) {
    const grade = (score / totalScore) * 100;
    let letterGrade = '';

    if (grade >= 90) {
        letterGrade = 'A';
    } else if (grade >= 80) {
        letterGrade = 'B';
    } else if (grade >= 70) {
        letterGrade = 'C';
    } else if (grade >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    
    return `You got an ${letterGrade} (${grade}%)!`;
}

const studentGrade = gradeCalc(90, 111);
console.log(studentGrade);