$('.links').on('click','li',function(){
    $('.links li.active').removeClass('active');
    $(this).addClass('active');
})
