$(document).ready(() => {

    $("#show-speakers").click(function(){
        $("#speakers-container").toggle();
    });

    speakers-container

    document.addEventListener('mousemove', function(e) {
        var cursor = document.querySelector('.custom-cursor');
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

});



//    $("#anther_kiley_dot").click(function(){
//         $("#anther_kiley h3").hide();
//         $("#anther_kiley .event_details").show();
//     });

//     $("#takahashi_kuan_dot").click(function(){
//         $("#takahashi_kuan h3").show();
//         $("#takahashi_kuan .event_details").show();
//     });

//     $("#e_roon_kang_dot").click(function(){
//         $("#e_roon_kang h3").show();
//         $("#e_roon_kang .event_details").show();
//     });

//       $("#sebastian_aubin").click(function(){
//         $("#sebastian_aubin h3").show();
//         $("#sebastian_aubin .event_details").show();
//     });


