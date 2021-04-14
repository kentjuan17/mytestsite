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

        <main>
            <section class="banner">    
                <h1 class="h1-sticky">Welcome</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident id praesentium magni consectetur facilis quos fugit impedit suscipit non exercitationem, aliquam voluptatum ab eos ipsum odit, voluptas vero labore?</p>
            </section>
                
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
            <section class="display-sum-section">
                <div class="calculate-sum">
                        <h2>Please enter the amount in each box to get the sum</h2> </div>
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
                </div>
                <div class="sum">
                            <p>
                                <input type="submit" name="submit" id="submit" class="btnName" value="Click Me!"/>
                            </p>
                            <p>
                                <input type="text" name="total" id="total" class="total" placeholder="Total amount will be displayed here" />
                            </p>
                </div>
                <div>
                    <h3>Sticky Navigation Bar Example</h3>
                    <p>The navbar will <strong>stick</strong> to the top when you reach its scroll position.</p>
                    <p><strong>Note:</strong> Internet Explorer do not support sticky positioning and Safari requires a -webkit- prefix.</p>
                    <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                </div>
            </section>
        </main>
        <?php include "footer.html"; ?>

    </body>

    <script src="./main.js"></script>

</html>