const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
    const submitButton = form.querySelector(".formButton");

    submitButton.addEventListener("click", function(e){
        e.preventDefault();
        console.log(e);

        validateForm(form);
    });

     // Inputlar için anlık kontrol
    form.querySelectorAll("input").forEach((input) => {
        // Checkbox değişiminde veya yazarken kontrol
        if(input.type === "checkbox"){
            input.addEventListener("change", () => validateInput(input));
        } else {
            input.addEventListener("input", () => validateInput(input));
        }
    });
});


function validateInput(input){
    const value = input.value.trim();
    // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co)$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(input.type === "checkbox" && input.required){
        if(!input.checked){
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            isValid = false;
        }
        else{
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
        return;
    }
    if(input.type === "email"){
        if(!value || !emailPattern.test(value)){
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            isValid = false;
        }
        else{
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
        return; 
    }
    if(input.required){
        if(!value){
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            isValid = false;
        }
        else{
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
    }
}

function validateForm(form){
    let isValid = true;


    form.querySelectorAll("input").forEach((input) => {
        validateInput(input);
        if(input.classList.contains("is-invalid")) isValid = false;
    });
    if(isValid){
        console.log("form dogrulandı", form);
    }
}
