 function validateForm() {
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var dob = document.getElementById("dob").value;
            var gender = document.querySelector('input[name="gender"]:checked');
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;
            var errorMessage = document.getElementById("error-message");
            var successMessage = document.getElementById("success-message");

            // Check if any input fields are empty
            if (firstName === "" || lastName === "" || dob === "" || !gender || password === "" || confirmPassword === "") {
                errorMessage.innerHTML = "All fields are required.";
                errorMessage.style.display = "block";
                successMessage.style.display = "none";
                return false;
            }

            // Check if passwords match
            if (password !== confirmPassword) {
                errorMessage.innerHTML = "Passwords do not match.";
                errorMessage.style.display = "block";
                successMessage.style.display = "none";
                return false;
            }

            // display success message
            errorMessage.style.display = "none";
            successMessage.innerHTML = "Registration successful!";
            successMessage.style.display = "block";
            return false;
        }