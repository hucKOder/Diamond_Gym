function isString(input) {
    return /^[a-zA-Z]*$/.test(input);
}
function iscity(input) {
    return /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/.test(input);
}
function ispsc(input)
{   
    return /^([0-9]{5})$/.test(input);
}
function isadresa(input)
{
    return /^[a-zA-Z0-9\s,'-]*$/.test(input);
}
function phonenumber(inputtxt) {
   var phoneno = /^\+?([0-9]{10,12})$/;
  return phoneno.test(inputtxt);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
var click = false;

function novy()
{

        $("#tos, #tos1, #tos2 ,#tos3, #tos4").click(function()
    {
    if (click == true)
    {
        click = false;
    }
    if (click == false)
    {
        click = true;
        $(".error6").text("");
    }
}   )
}
$(document).ready(function()
{  
    $(".error1").css("color","red");
    $(".error2").css("color","red");
    $(".error3").css("color","red");
    $(".error4").css("color","red");
    $(".error5").css("color","red");
    $(".error6").css("color","red");
    /*$(".dropdown-item").click(function()
    {
        $(".errorTxt4").text("");
        var meno = $(this).text();
        $("#tema").text(meno);
        click = true;
    });*/
$("#tos, #tos1, #tos2 ,#tos3, #tos4").click(function()
{
    if (click == true)
    {
        click = false;
    }
    if (click == false)
    {
        click = true;
        $(".error6").text("");
    }
    novy();
})
    $("#psc,#mesto,#adresa").click(function()
    {
        $(".error5").text("");
    });
    $("#meno").click(function()
    {
        $(".error2").text("");
    });
    $("#priezvisko").click(function()
    {
        $(".error2").text("");
    });
    $("#cislo").click(function()
    {
        $(".error4").text("");
    });
    $("#aemail").click(function()
    {
        var email = $("#email").val();
        var priezvisko = $("#priezvisko").val();
        var meno = $("#meno").val();
        var cislo = $("#cislo").val();
        var psc = $("#psc").val();
        var mesto = $("#mesto").val();
        var adresa = $("#adresa").val();

        if (!isString(meno) || !isString(priezvisko) || !meno || !priezvisko )
            $(".error2").text("Nesprávne zadané meno alebo priezvisko!");

        if (!validateEmail(email))
            $(".error3").text("Nesprávne zadaná emailová adresa!");   
        
        if (!phonenumber(cislo))
            $(".error4").text("Neplatné telefónne číslo!");

        if (!ispsc(psc) || !iscity(mesto) || !isadresa(adresa))
             $(".error5").text("Nesprávne vyplnené dodacie údaje!");
        var click = $("#tos").is(":checked");
        if (click == false)
            $(".error6").text("Nepotvrdené podmienky!");


        if (isString(meno) && meno && priezvisko && isString(priezvisko) && validateEmail(email) &&  phonenumber(cislo) && ispsc(psc) && iscity(mesto) && isadresa(adresa) && click == true)
            window.location.href = './completed_order.html';
    });

    $("#psc").blur(function()
    {
        var psc = $("#psc").val();
        if( !ispsc(psc))
             $(".error5").text("Nesprávne vyplnené dodacie údaje!");
    });
    $("#mesto").blur(function()
    {
        var mesto = $("#mesto").val();
        if (!iscity(mesto))
            $(".error5").text("Nesprávne vyplnené dodacie údaje!");
    });
    $("#adresa").blur(function()
    {
        var adresa = $("#adresa").val();
        if( !isadresa(adresa))
             $(".error5").text("Nesprávne vyplnené dodacie údaje!");
    });


    $("#email").blur(function()
     {
     var email = $("#email").val();

     if (!validateEmail(email))
        $(".error3").text("Nesprávne zadaná emailová adresa!");
            
     });

    $("#cislo").blur(function()
     {
     var cislo = $("#cislo").val();

     if (!phonenumber(cislo))
        $(".error4").text("Neplatné telefónne číslo!");
            
     });
      $("#meno").blur(function()
     {
     var meno = $("#meno").val();

     if (!meno || !isString(meno))
            $(".error2").text("Nesprávne zadané meno alebo priezvisko!");
            
     });

      $("#priezvisko").blur(function()
     {
     var priezvisko = $("#priezvisko").val();

     if (!priezvisko || !iSstring(priezvisko))
            $(".error2").text("Nesprávne zadané meno alebo priezvisko!");
            
     });
     $("#email").click(function(){
        $(".error3").text("");
     });


});
