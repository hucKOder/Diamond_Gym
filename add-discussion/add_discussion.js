function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
var click = false;
$(document).ready(function()
{  
    $(".errorTxt1").css("color","red");
    $(".errorTxt2").css("color","red");
    $(".errorTxt3").css("color","red");
    $(".errorTxt4").css("color","red");

    $(".dropdown-item").click(function()
    {
        $(".errorTxt4").text("");
        var meno = $(this).text();
        $("#tema").text(meno);
        click = true;
    });
    $("#nazov").click(function()
    {
        $(".errorTxt1").text("");
    });
    $("#prispevok").click(function()
    {
        $(".errorTxt3").text("");
    });
    $("#aemail").click(function()
    {
        var email = $("#email").val();
        var prispevok = $("#prispevok").val();
        var nazov = $("#nazov").val();

        if (!nazov)
            $(".errorTxt1").text("Názov príspevku nemôže byť prázdny!");

        if (!validateEmail(email))
            $(".errorTxt2").text("Nesprávne zadaná emailová adresa!");

        if (!prispevok)
            $(".errorTxt3").text("Text príspevku nemôže byť prázdny!");
        if (click == false)
            $(".errorTxt4").text("Nevybraná téma!");
        if (nazov && prispevok && validateEmail(email) && click)
            $("#myModal" ).modal();
    });

    $("#email").blur(function()
     {
     var email = $("#email").val();

     if (!validateEmail(email))
        $(".errorTxt2").text("Nesprávne zadaná emailová adresa!");
            
     });
      $("#nazov").blur(function()
     {
     var nazov = $("#nazov").val();

     if (!nazov)
        $(".errorTxt1").text("Názov príspevku nemôže byť prázdny!");
            
     });

      $("#prispevok").blur(function()
     {
     var prispevok = $("#prispevok").val();

     if (!prispevok)
        $(".errorTxt3").text("Text príspevku nemôže byť prázdny!");
            
     });
     $("#email").click(function(){
        $(".errorTxt2").text("");
     });
    /*$("#formValidate").validate({
        rules: {
            email: {
                required: true,
                email:true
            }
        },
        //For custom messages
        messages: {
            uname:{
                required: "Enter a username",
                minlength: "Enter at least 5 characters"
            },
            curl: "Enter your website",
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });*/


});

