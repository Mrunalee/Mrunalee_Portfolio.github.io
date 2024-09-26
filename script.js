$(document).ready(function() {
    // Toggle menu icon and header class on click
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    // Remove toggle class when scrolling or loading
    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    // Smooth scrolling for all anchor links with #
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Smooth scroll to the targeted section
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

