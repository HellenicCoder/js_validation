document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("mainForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        if(checkInputs()){
            showModal()
        }
    });

    name.addEventListener("input", () => {
        validateField(name , name.value.trim() !== '' , 'Name cannot be blank')
    })

    email.addEventListener("input", () => {
        validateField(email, isEmail(email.value.trim()), "Not a valid email")
    })

    phone.addEventListener("input", () => {
        validateField(phone, isPhone(phone.value.trim()), "Not a valid phone")
    })

    password.addEventListener("input", () => {
        validateField(password, password.value.trim().length >= 8, "Password must be at least 8 character")
    })

    message.addEventListener("input", () => {
        validateField(message , message.value.trim() !== '' , 'Message cannot message')
    })

    function checkInputs(){
        let isValid = true;
        validateField(name , name.value.trim() !== '' , 'Name cannot be blank')
        validateField(email, isEmail(email.value.trim()), "Not a valid email")
        validateField(phone, isPhone(phone.value.trim()), "Not a valid phone")
        validateField(password, password.value.trim().length >= 8, "Password must be at least 8 character")
        validateField(message , message.value.trim() !== '' , 'Message cannot message')


        document.querySelectorAll(".form-control").forEach((control) => {
            
        })
    }
})