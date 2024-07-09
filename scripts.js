function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    document.getElementById('years').innerText = ageYears;
    document.getElementById('months').innerText = ageMonths;
    document.getElementById('days').innerText = ageDays;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
