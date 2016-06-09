$(document)
  .ready(function() {

    var
      changeSides = function() {
        $('.ui.shape')
          .eq(0)
            .shape('flip over')
            .end()
          .eq(1)
            .shape('flip over')
            .end()
          .eq(2)
            .shape('flip back')
            .end()
          .eq(3)
            .shape('flip back')
            .end()
        ;
      },
      validationRules = {
        firstName: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        }
      }
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    $('.ui.form')
      .form(validationRules, {
        on: 'blur'
      })
    ;

    $('.masthead .information')
      .transition('scale in')
    ;

    setInterval(changeSides, 3000);



    var $paneTarget = $('body');

    $paneTarget.scrollTo(1);
                        
    $('.about-button').click(function(){
      $paneTarget.stop().scrollTo( '#about', 400 );
    });
	$('.skills-button').click(function(){
      $paneTarget.stop().scrollTo( '#skills', 400 );
    });
    $('.experience-button').click(function(){
      $paneTarget.stop().scrollTo( '#experience', 400 );
    });
	$('.projects-button').click(function(){
      $paneTarget.stop().scrollTo( '#projects', 400 );
    });
    $('.contact-button').click(function(){
      $paneTarget.stop().scrollTo( '#contact', 400 );
    });

    $('#mail').click(function() { window.location = "mailto:wesoohoo@gmail.com"; })
    $('#email').click(function() { window.location = "mailto:wesoohoo@gmail.com"; })
    $('#github').click(function() { window.location = "https://github.com/wsh32"; })

        var $window = $(window);

        // Function to handle changes to style classes based on window width
        function checkWidth() {
        if ($window.width() < 770) {
            $('.ui.dimmer').dimmer('show');

        }
        if ($window.width() >= 770) {
            $('.ui.dimmer').dimmer('hide');
        }
    }

    // Execute on load
    checkWidth();

  })
;
