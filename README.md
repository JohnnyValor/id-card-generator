<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
            <title></title>
                <link rel="stylesheet" href="module1.css">
                <style>body {background-color: rgba(22, 116, 160, 0.719);}</style>
    </head>

    <body>
        <h1>Let's Create an ID card!</h1>
                <label for="firstName">First Name</label><br>
                <input type="text" id="firstName" name="firstName" placeholder="First Name"><br>
                <label for="lastName">Last Name</label><br>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name"><br>
                <label for="age">Age</label><br>
                <input type="number" id="age" name="age" placeholder="Age"><br>
                <label for="phoneNumber">Phone Number</label><br>
                <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"><br>
                <label for="address">Address</label><br>
                <input type="text/number" id="address" name="address" placeholder="Address"><br><br>
                <button onclick="idCard()">Get ID card!</button>

            <div id="idCard">
                <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png">
                <form>
                    <p id="postFullName"></p>
                    <p id="postAge"></p>
                    <p id="postPhoneNumber"></p>
                    <p id="postAddress"></p>
                </form>
            </div>
        <script src="module1.js"></script>
    </body>
</html>
