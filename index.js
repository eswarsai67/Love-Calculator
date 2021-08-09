var random = Math.floor((Math.random() * 100) + 1);
 $(".res").click(function(){
   if(random<=10)
   {
   $("h1").text("your love percentage is : " + random + "%");
   $("h3").text("Better Break Up");
 }
 else if(random<=20)
 {
    $("h1").text("your love percentage is : " + random + "%");
    $("h3").text("LOL!!");
 }
 else if(random<=30)
 {
    $("h1").text("your love percentage is : " + random + "%");
    $("h3").text("They Are Cheating On You");
 }
 else if(random<=40) {
    $("h1").text("your love percentage is : " + random + "%");
    $("h3").text("Dont Worry God Will Show You a Path");
 }
 else if(random<=50) {
   $("h1").text("your love percentage is : " + random + "%");
   $("h3").text("Not Bad !!");
 }
 else if(random<=60) {
    $("h1").text("your love percentage is : " + random + "%");
    $("h3").text("Good Love");
 }
 else if(random<=70)
 {
    $("h1").text("your love percentage is : " + random + "%");
    $("h3").text("you have a cute relationship make sure to show much love");
 }
 else if(random<=89)
 {
    $("h1").text("your love percentage is : " + random + "%");
    $("h3").text("Your love is as strong as that between an owner and their pet! Unyielding in its loyalty and comfort, albeit with less than optimal odors.");

 }
 else if(random<=99)
 {
     $("h1").text("your love percentage is : " + random + "%");
     $("h3").text("you are heavenly made couple may god give you so much wealth and health");

 }
 else
 {
     $("h1").text("your love percentage is : " + random + "%");
     $("h3").text("the words luck and love in the world means you both your realtion ship is very special");
 }
});
