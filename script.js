document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.querySelector("form[action='login.php']");
    const registerForm = document.querySelector("form[action='register.php']");
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e){
            const password = document.querySelector("input[type='password']").value;
            const username = document.querySelector("input[type='text']").value;

            if(!username || !password){
                alert("Please fill in these fields.");
                e.preventDefault();
            }

        });
        }

    });