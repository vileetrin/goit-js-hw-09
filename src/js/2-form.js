const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);
form.addEventListener('submit', handleSubmit);

function checkFormFields() {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const formData = JSON.parse(storedData);
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
}

checkFormFields();


function handleInput(event) {
    const { name, value } = event.target;
    const formData = {
        [name]: value.trim()
    };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
    

function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };
    
    if (formData.email === '' || formData.message === '') {
        alert('Будь ласка, заповніть обидва поля форми.');
        return; 
    }

    console.log('Submitted Form Data:', formData);

    localStorage.removeItem('feedback-form-state');

    form.reset();
}