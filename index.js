$('.sidenav').waypoint(function() {
  $(".sidenav ").addClass("animate__animated animate__fadeInLeft animate__slower");
}, {
  offset: '60%'
});
$('.aboutme').waypoint(function() {
  $(".xyz ").addClass("animate__animated animate__fadeIn animate__slower");

}, {
  offset: '90%'
});
$('.personal').waypoint(function() {
  $(".contentr ").addClass("animate__animated animate__fadeInRight animate__slower");
  $(".contentl ").addClass("animate__animated animate__fadeInLeft animate__slower");

}, {
  offset: '80%'
});
$('.education').waypoint(function() {
  $(".educationr ").addClass("animate__animated animate__fadeInRight animate__slower");
  $(".educationl ").addClass("animate__animated animate__fadeInLeft animate__slower");

}, {
  offset: '80%'
});
$('.skills').waypoint(function() {
  $(".skillsr ").addClass("animate__animated animate__fadeInRight animate__slower");
  $(".skillsl ").addClass("animate__animated animate__fadeInLeft animate__slower");

}, {
  offset: '30%'
});
  $('.works').waypoint(function() {
    $(".work").addClass("animate__animated animate__fadeInDown ");

  }, {
    offset: '70%'
  });

  $('.info').waypoint(function() {
    $(".info").addClass("animate__animated animate__fadeIn animate__slower ");

  }, {
    offset: '70%'
  });
  if ($("html").width() <500) {
      $('.mobnav').addClass('row');
  }
  var path=document.location.href.match(/[^\/]+$/)[0];
  if(path==="resume.html"  )
  {

      if($("html").width() <500)
      $("#hide").css("visibility","hidden");

  }
if(path!=="index.html"  )
  {

      if($("html").width() <500)
      $(".sidemob").remove();

  }
if(path!=="index.html"  )
  {

      if($("html").width() <500)
      {
        $(".portfoliome").css("margin-top","-270px");
         
        $(".contactme").css("margin-top","-270px");
      $(".resumeme").css("margin-top","-270px");
      }
  }
 

