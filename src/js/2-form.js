const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea")

function checkFormFields() {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const formData = JSON.parse(storedData);
        input.value = formData.email;
        textarea.value = formData.message;
    }
}

checkFormFields();


form.addEventListener("input", handleInput);

function handleInput(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            const formData = {
                email: input.value,
                message: textarea.value
            };
            localStorage.setItem('feedback-form-state', JSON.stringify(formData));
        }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    if (input.value.trim() === '' || textarea.value.trim() === '') {
        alert('Будь ласка, заповніть обидва поля форми.');
        return; 
    }
    
        const formData = {
            email: input.value,
            message: textarea.value
        };

        console.log('Submitted Form Data:', formData);

    localStorage.removeItem('feedback-form-state');

        input.value = '';
        textarea.value = '';
};

       


        