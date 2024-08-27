function clearResult() {
    document.getElementById('result').innerText = '';
    document.getElementById('feedback').innerText = '';
}

function addSubjectsInputFields() {
    const totalSubjects = document.getElementById('totalSubjects').value;
    const subjectsTable = document.getElementById('subjectsContainer');
    subjectsTable.innerHTML = ''; 

    for (let i = 1; i <= totalSubjects; i++) {
        const newRow = subjectsTable.insertRow();
        newRow.innerHTML = `
            <table>
                <tr>
                    <th>Subject ${i}</th>
                    <td>
                        <label><b>Grade Points</b></label><br><br>
                        <input type="number" id="subject${i}Grade" min="0" max="10" step="1">
                    </td>
                    <td>
                        <label><b>Credits</b></label><br><br>
                        <input type="number" id="subject${i}Credits" min="1">
                    </td>
                </tr>
            </table>
        `;
    }
}

function calculateSGPA() {
    const totalSubjects = document.getElementById('totalSubjects').value;
    const resultElement = document.getElementById('result');
    const feedbackElement = document.getElementById('feedback');
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 1; i <= totalSubjects; i++) {
        const gradePointsInput = document.getElementById(`subject${i}Grade`);
        const creditsInput = document.getElementById(`subject${i}Credits`);

        if (gradePointsInput.value === '' || creditsInput.value === '') {
            feedbackElement.innerText = 'Please fill in all fields.';
            feedbackElement.classList.add('error');
            return;
        }

        const gradePoints = parseFloat(gradePointsInput.value);
        const credits = parseInt(creditsInput.value);

        if (isNaN(gradePoints) || isNaN(credits) || gradePoints < 0 || gradePoints > 10 || credits < 1) {
            feedbackElement.innerText = 'Please enter valid grade points and credits.';
            feedbackElement.classList.add('error');
            return;
        }

        totalCredits += credits;
        totalGradePoints += gradePoints * credits;
    }

    const sgpa = totalGradePoints / totalCredits;
    resultElement.innerText = `Your SGPA is: ${sgpa.toFixed(2)}`;
    resultElement.classList.remove('error');
    feedbackElement.innerText = 'Calculation successful!';
    feedbackElement.classList.remove('error');
}
