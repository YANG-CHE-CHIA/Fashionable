$(function(){
    $('.fas.fa-bars').click(function(){
        $('.fas.fa-bars').hide();
        $('.fas.fa-times').show();
        $('.item').slideDown(800);
    });
    $('.fas.fa-times').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.item').slideUp(800);
    });
    $('#gotop').click(function(){
        $('html,body').animate({
            scrollTop:0
    })
    return false;
    });
    $(window).scroll(function(){
        let h = $(window).scrollTop();
        $('#gotop').addClass('animated');
        let _in = 'rollIn';
        let _out = 'rollOut';
        if(h > 300){
            $('#gotop').show().removeClass(_out).addClass(_in);
        }else{
            $('#gotop').removeClass(_in).addClass(_out);
        }
    });
    $(function(){
        $('.btn1').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                let index = $(this).index();
                console.log(index);
                $('.menu').fadeOut(500).eq(index).fadeIn(500);
            })
      })
});
function search(){
    let input = document.getElementById('input').value.toUpperCase();
    let sale = document.querySelectorAll('.sale');
    sale.forEach(function(data){
        if(data.textContent.toUpperCase().indexOf(input) > -1){
            data.style.display= '';
        }else{
            data.style.display = 'none';
        }
    })
}   