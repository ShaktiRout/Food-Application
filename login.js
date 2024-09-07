
/*---------submit form-------------*/ 

const form = document.getElementById('loginform');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
/*------------set error set success-------------------*/ 
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

/*---------validate input-------------*/ 
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    var user = localStorage.getItem("username",usernameValue);
    var pass = localStorage.getItem("password",passwordValue);

    if(usernameValue === '') {
        setError(username, 'Enter Username');
    } else if(usernameValue !== user) {
        setError(username, 'Incorrect username');
    } else {
        setSuccess(username);
    }

    
    if(passwordValue === '') {
        setError(password, 'Enter Password');
    } else if (passwordValue !== pass) {
        setError(password, 'Incorrect Password');
    } else {
        setSuccess(password);
    }  
    
    if(usernameValue === user && passwordValue === pass){
        const message = document.getElementById('message');
        localStorage.setItem("login", "true");
        // const loginEl = document.getElementById("login");
        // alert(loginEl);
        // loginEl.innerHTML="logout";
        message.classList.remove('hiden');
        message.classList.add('show');
    }

};

