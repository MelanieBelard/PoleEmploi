// $("body").click(function(){
    // alert("ouaaais");
// });

if (window.location.hash != '') {
    $("#register-form "+window.location.hash).show();
} else {
    $("#register-form #step-1").show();
} // À EFFACER

$("#register-form .step-button").click(function(){
    var currentStep = $(this).data("content");
    var nextStep    = $(this).attr('href');
    $("#"+currentStep).hide();
    $(nextStep).show();
    console.log(nextStep);
});
