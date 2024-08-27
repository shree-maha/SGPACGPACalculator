function addSemestersInputFields() {
    const totalSemesters = document.getElementById('totalSemesters').value;
    const semestersContainer = document.getElementById('semestersContainer');
    semestersContainer.innerHTML = ''; // Clear previous fields

    for (let i = 1; i <= totalSemesters; i++) {
        const semesterInput = document.createElement('div');
        semesterInput.innerHTML = `
            <table>
                <tr>
                    <th>Semester ${i}</th>
                    <td>
                        <label><b>SGPA</b></label><br><br>
                        <input type="number" id="semester${i}SGPA" min="0" max="10" step="1">
                    </td>
                </tr>
            </table>
        `;
        semestersContainer.appendChild(semesterInput);
    }
}

function calculateCGPA() {
    const totalSemesters = document.getElementById('totalSemesters').value;
    let totalSGPA = 0;

    for (let i = 1; i <= totalSemesters; i++) {
        const sgpa = parseFloat(document.getElementById(`semester${i}SGPA`).value);
        totalSGPA += sgpa;
    }

    const cgpa = totalSGPA / totalSemesters;
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
