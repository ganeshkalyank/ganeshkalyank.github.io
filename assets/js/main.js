$(document).ready(function(){
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height>100) {
            $("#navBar").addClass("shadow navbar-blur");
        } else {
            $("#navBar").removeClass("shadow navbar-blur");
        }
    });
    $("#navBar").on("show.bs.collapse",function(){
        $(this).addClass("shadow navbar-blur");
        $("#navIcon").html('<i class="fa-solid fa-xmark"></i>');
    });
    
    $("#navBar").on("hide.bs.collapse",function(){
        var height = $(window).scrollTop();
        if(height<250) $(this).removeClass("shadow navbar-blur")
        $("#navIcon").html('<i class="fa-solid fa-bars-staggered"></i>');
    });
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
});