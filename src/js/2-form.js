const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

function formSabmitHandler(event) {
    event.preventDefault();
    const email = form.elements.email.value;
    const message = textarea.value;
    const data = JSON.stringify({ email, message });
    localStorage.setItem(STORAGE_KEY, data);
}
form.addEventListener(`submit`, formSabmitHandler);
form.addEventListener(`input`, formSabmitHandler);

const jsn = localStorage.getItem(STORAGE_KEY) ?? "";
try {
    const data = JSON.parse(jsn);
    console.log(data);
    textarea.value = data.message;
    form.elements.email.value = data.email;
}
catch {
    console.log(`No saved data!`);
}