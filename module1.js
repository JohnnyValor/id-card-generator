// retrieves values from HTML elements & stores values in variables.
function idCard() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let age = parseInt(document.getElementById('age').value);
    let phoneNumber = parseInt(document.getElementById('phoneNumber').value);

    let fullName = firstName + " " + lastName;
    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address;


// if entered number is less than 100, assume age. If greater than 100, assume phone number.
    let numberArray = [];
    numberArray.push(age, phoneNumber);

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML = "Age: " + age;
        }
        else if (numberArray[i] >= 100) {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
        }
    }
}
console.log(idCard)
console.log(numberArray)
