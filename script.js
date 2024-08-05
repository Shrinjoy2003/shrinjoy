$(document).ready(function(){
    // Reveal the surprise with smooth scrolling
    $('#surprise-button').click(function(e){
        e.preventDefault();
        $('#surprise-section').removeClass('hidden').addClass('animate__animated animate__fadeInUp');
        $('html, body').animate({
            scrollTop: $('#surprise-section').offset().top
        }, 1000);
    });

    // Initialize Materialize components
    M.AutoInit();
});
