$(document).ready(function(){
    $('#contact_form').on('submit',function(e){
        e.preventDefault();
        $("#contact_form_submit").addClass("disabled");
        $("#contact_form_submit").html("Sending...");
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            method: 'post',
            url: url,
            data: form.serialize(),
            success: function(data) {
                $("#contact_form_status").html("<p class='alert alert-success'>Message sent successfully.</p>");
                $("#contact_form_submit").removeClass("disabled");
                $("#contact_form_submit").html("Send");
            },
            error: function(data) {
                $("#contact_form_status").html("<p class='alert alert-success'>Message sent successfully.</p>");        
                $("#contact_form_submit").removeClass("disabled");
                $("#contact_form_submit").html("Send");
            }
        });
    });

    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height>250) {
            $("#navBar").addClass("shadow navblur");
        } else {
            $("#navBar").removeClass("shadow navblur");
        }
    });

    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        margin:10,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                rewind:true
            },
            600:{
                items:1,
                rewind:true
            },
            1000:{
                items:2,
                rewind:true
            }
        }
    })

    $("#portfolio img").hover(function(){
        $(this).addClass("shadow");
    }, function(){
        $(this).removeClass("shadow");
    });

    $("#skills #skill-card").hover(function(){
        $(this).addClass("bg-primary text-white");
    }, function(){
        $(this).removeClass("bg-primary text-white");
    });

    $("#navBar").on("show.bs.collapse",function(){
        $(this).addClass("shadow navblur")
    });
    
    $("#navBar").on("hide.bs.collapse",function(){
        var height = $(window).scrollTop();
        if(height<250) $(this).removeClass("shadow navblur")
    });
});