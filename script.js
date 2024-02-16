const generateBtn = document.getElementById('generateBtn');
const responseElement = document.getElementById('response');

generateBtn.addEventListener('click', () => {
    const questionInput = document.getElementById('question').value.trim();
    if (questionInput === '') {
        alert('Please enter a question.');
        return;
    }

    const randomNumber = Math.random(); // Generates a random number between 0 and 1

    let response;
    if (randomNumber < 0.5) {
        response = 'Lakukan saja';
    } else {
        response = 'Gausah';
    }

    responseElement.textContent = ` ${response}.`;
});
