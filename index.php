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
    <!-- WHAT IS YOUR NAME??
        <h2>What is your name?</h2>
    
        <p>
            <input type="text" name="name" id="name" class="name" placeholder="Enter your name" />
        </p>
        <p>
            <input type="text" name="age" id="age" class="age" placeholder="Enter your age" />
            <input type="submit" name="submit" id="submit" class="btnName" placeholder="Click to submit" onClick="alertDetails()" />
        </p>
    -->
        <h2>Enter Amount</h2>
        <p>
            <input type="text" name="price1" id="price1" class="price" placeholder="Enter amount" />
        </p>
        <p>
            <input type="text" name="price2" id="price2" class="price" placeholder="Enter amount" />
        </p>
        <p>
            <input type="text" name="price3" id="price3" class="price" placeholder="Enter amount" />
        </p>
        <p>
            <input type="text" name="price4" id="price4" class="price" placeholder="Enter amount" />
        </p>
        <p>
            <input type="submit" name="submit" id="submit" class="btnName" value="Click Me!"/>
        </p>
        
        <p>
            <input type="text" name="total" id="total" class="total" placeholder="Total amount will be displayed here" />
        </p>
        
        <?php include "footer.html"; ?>

    </body>

    <script src="./main.js"></script>

</html>