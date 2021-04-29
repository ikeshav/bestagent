
// Title

window.onload= function(){
  $(".btnanimate").animate({
    opacity: 1
  });
};

$(".navbar-toggler").on({
  click: function(){
    $(".active").removeClass("specialbtn");
  }
});

function openNav() {
$("#mySidenav").addClass("openNavclass");
$("#mySidenav").removeClass("closeNavclass");
  $(".sidenav").addClass("sidenavTransition");
  $(".sidenavChangesbtns").after("<hr>");
  $(".mediabtn").addClass("mediabtnShow");

}


function closeNav() {
  $(".mediabtn").removeClass("mediabtnShow");
  $("body").removeClass("bodyAttr") ;
  $("#mySidenav").addClass("closeNavclass");
  $("#mySidenav").removeClass("openNavclass");
  $(".sidenav").addClass("sidenavTransition");
  $("hr").hide("slow");
}

// HamburgerAnimation



var x = window.matchMedia("(max-width: 1028px)")
changeNav(x) ;
x.addListener(changeNav);

function changeNav(x) {
  if (x.matches) { // If media query Matches
    $("#mySidenav").removeClass("sideNavfixer");
    $("#mySidenav").addClass("sidenav");
        $("#mySidenav").removeClass("sidenavChanges");
    $(".hirebtnChange").addClass("hirebtninham");
      $(".hirebtnChange").removeClass("hirebtn");
    $(".hambtn").css("display", "block");
    $("hr").removeClass("hrdisplay");
  } else {
    $(".mediabtn").removeClass("mediabtnShow");
      $("body").removeClass("bodyAttr") ;
    $("hr").addClass("hrdisplay");
      $(".sidenav").removeClass("sidenavTransition");
      $("#mySidenav").addClass("sideNavfixer");
     $(".hirebtnChange").removeClass("hirebtninham");
     $(".hirebtnChange").addClass("hirebtn");
     $("#mySidenav").addClass("sidenavChanges");
    $("#mySidenav").removeClass("sidenav");
    $(".hambtn").css("display", "none");

  }
}

// Services

  $(".secbtn").on({
    mouseenter: function(){
        $(".arrw").css("margin-left", "5px")
    },
    mouseleave: function(){
      $(".arrw").css("margin-left", "-2px")
    },
    click: function(){
      location.href= "design.html";
    }
  });

  $(".prevchange").on({
    mouseenter: function(){
        $(".prevchange").animate({
          left: '-1rem'
        });
    },
    mouseleave: function(){
      $(".prevchange").animate({
        left: '0.2rem'
      });
    }
  });

  $(".nxtchange").on({
    mouseenter: function(){
        $(".nxtchange").animate({
          right: '-1rem'
        });
    },
    mouseleave: function(){
      $(".nxtchange").animate({
        right: '0.2rem'
      });
    }
  });


  // AGENT

  $(".btnAgent").on({
mouseenter: function(){
  $(".envelopeClose").addClass("envelopeCloseclass");
    $(".envelopeOpen").addClass("envelopeOpenclass");
},
mouseleave: function(){
  $(".envelopeClose").removeClass("envelopeCloseclass");
    $(".envelopeOpen").removeClass("envelopeOpenclass");
},
click: function(){
  location.href= "mailto:ikumar.contact@gmail.com";
}
  });


// LetsGO

$(".secbtnGo").on({
  mouseenter: function(){
      $(".arrw").css("margin-left", "5px")
  },
  mouseleave: function(){
    $(".arrw").css("margin-left", "-2px")
  },
  click: function(){
    location.href= "mailto:keshav.contact.jz@gmail.com";
  }
});

// Footer

$(".envelopeFooter").on({
click: function(){
  location.href= "mailto:ikumar.contact@gmail.com";
}
});
