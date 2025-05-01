function checkForm() {
    const form = document.getElementById('main-form');

    const name = form.name.value.trim();
    const pass = form.pass.value;
    const repass = form.repass.value;
    const text = form.text.value;

    const stateElem = form.querySelector('input[name="state"]:checked');
    const state = stateElem ? stateElem.value : '';

    let error = '';

    if (!name || !pass || !state)
        error = "Please fill out all required fields.";
    else if (name.length < 2 || name.length > 10)
        error = "Name must be between 2 and 10 characters.";
    else if (pass !== repass)
        error = "Passwords must match.";
    else if (pass.includes("&"))
        error = "Password must not contain the '&' character.";

    if (error) {
        document.getElementById('error').innerText = error;
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
