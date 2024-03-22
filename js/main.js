$(document).ready(() => {

    $("#show-speakers").click(function(){
    $("#introduction").hide();
    $("#speakers").show(); 
    });

   $("#anther_kiley_dot").click(function(){
        $("#anther_kiley h3").toggle();
        $("#anther_kiley .event_details").toggle();
    });

    $("#takahashi_kuan_dot").click(function(){
        $("#takahashi_kuan h3").toggle();
        $("#takahashi_kuan .event_details").toggle();
    });

    $("#e_roon_kang_dot").click(function(){
        $("#e_roon_kang h3").toggle();
        $("#e_roon_kang .event_details").toggle();
    });

      $("#sebastian_aubin").click(function(){
        $("#sebastian_aubin h3").toggle();
        $("#sebastian_aubin .event_details").toggle();
    });


});


