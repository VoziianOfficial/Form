function checkForm(el) {
    let name = el.name.value;
    // let email = el.email.value;
    // let phone = el.phone.value;
    let state = el.state.value;
    let text = el.text.value;
    let pass = el.pass.value;
    let repass = el.repass.value;

    let error = '';

    if (name == "" || pass == "" || state == "")
        error = "Fill in the blanks";
    else if (name.length <= 1 || name.length > 10)
        error = " write the correct";
    else if (pass != repass)
        error = "passwords must be coincide";
    else if (pass.split("&").length > 1)
        error = "incorrect password";

    //error message
    if (error != '') {
        document.getElementById('error').innerHTML = error;
        return false;
    } else {
        alert('all complete')
        return true;
    }

}