$("#show-sidebarbtn").click(function () {
    $('.sidebar').animate({marginLeft: 0})
});
$("#hide-sidebarbtn").click(function () {
    $('.sidebar').animate({marginLeft: "-100%"})
});


function go(url){
   setTimeout(function(){
    location.href=`${url}`;

   },500);   
}

$(function () {
    $('[data-toggle="popover"]').popover()
  });

  $(document).ready(function() {
    $('#itemlist').DataTable();
} );


$("#fullscreenbtn").click(function(){
    console.log("card is running");
    $(this).closest(".card").addClass("full-screen-card");
});

