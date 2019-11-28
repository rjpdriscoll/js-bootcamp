// students score, total possible score
// generate the letter grade and percentage that the student earned
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (score, totalScore) {
    
    if (typeof score === 'number' && typeof totalScore === 'number') {
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

    } else {
        throw Error('Both arguments must be numbers');
    }
    
}

try {
    const studentGrade = gradeCalc(true, 100);
    console.log(studentGrade);
} catch (e) {
    console.log(e.message);
}