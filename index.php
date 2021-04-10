<!DOCTYPE html>
<html language="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/506750d88a.js" crossorigin="anonymous"></script>
        <title>Kent's Test Site</title>
    </head>
    <body id="homepage" class="mainbody">
        <?php include "header.html"; ?>

        <i class="fas fa-user-astronaut"></i>

        <h1>Hello World</h1>
        <h2>What is your name?</h2>
        <p>
            <input type="text" name="name" id="name" class="name" placeholder="Enter your name" />
        </p>
        <p>
            <input type="text" name="age" id="age" class="age" placeholder="Enter your age" />
            <input type="submit" name="submit" id="submit" class="btnName" placeholder="Click to submit" onClick="alertDetails()" />
        </p>

        <?php include "footer.html"; ?>

    </body>

    <script type="text/javascript">
        const nameInput = document.querySelector('#name')
        const ageInput = document.querySelector('#age')

        const alertDetails = () => {
            alert(`
                Hello ${nameInput.value}! You are ${ageInput.value} years old!
            `)
        }
    </script>

</html>