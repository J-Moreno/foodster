$(function(){


    // beta request button
    $('#btn-beta').click(
        function(){
            console.log(!$('#btn-beta').children('span').hasClass('spinner-border'));
            if(!$('#btn-beta').children('span').hasClass('spinner-border')){
                $('#beta-spin').addClass('spinner-border', setTimeout(function() {
                    console.log('set time out has fired');
                    $('#beta-spin').removeClass('spinner-border');
                    // request received modal
                    $('#betaModal').modal('show');
                }, 2500));
            }
        }
    );

    //
    $('#chat-btn').click(function(){
        $('#chat-modal').modal('show');
    });
    
});