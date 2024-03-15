const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;

const storageFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    email: "",
    message: "",
};

email.value = storageFormData.email;
message.value = storageFormData.message;

form.addEventListener("input", event => {
    const formData = {
        email: email.value.trim(),
        message: message.value.trim(),
    };
    saveFormData(formData);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (email.value == "" || message.value == "") {
        return alert("Please enter the data");
    }
    const formData = {
        email: email.value.trim(),
        message: message.value.trim(),
    };

    saveFormData(formData);
    console.log(formData);
    
    localStorage.removeItem(STORAGE_KEY);
});

function saveFormData(formData) {
    localStorage.setItem("STORAGE_KEY", JSON.stringify(formData));
}
