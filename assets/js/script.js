// $("body").click(function(){
    // alert("ouaaais");
// });

// if (window.location.hash != '') {
//     $("#register-form "+window.location.hash).show();
// } else {
//     $("#register-form #step-1").show();
// } // À EFFACER

$("#register-form #step-1").fadeIn();

$("#register-form .step-button").click(function(){
    var currentStep = "#"+$(this).data('content');
    var nextStep    = $(this).attr('href');
    $(currentStep).fadeOut();
    $(nextStep).delay(400).fadeIn();
});

$(".index #boutonsAccueil").fadeIn();

$(".index .step-button").click(function(){
    var currentStep = $(this).data('content');
    var nextStep    = $(this).attr('href');
    $(currentStep).fadeOut();
    $(nextStep).delay(400).fadeIn();
});