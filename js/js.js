$(document).ready(function(){


var slider_images = 2;
var link = 1;

var slider = window.setInterval(function(){

	if(link==slider_images)
	{
		link=0;
	}
	link++;
	$('.slider_image > img').fadeOut(0);
	$('.slider_image > img').attr('src','img/main/slider/'+link+'.png');
	$('.slider_image > img').fadeIn(3000);

},7000)
//



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-prev').text('');
$('.owl-next').text('');

$('.partners_img_more').fadeOut(0);

var show_more = 0;

$('.show_more_partners').click(function(){

	show_more ++;

	if(show_more == 1) {
		$('.partners_img_more').fadeIn(2000);
		$('.show_more_partners > p').text('Скрити');
	}
	if(show_more == 2) {
		$('.partners_img_more').fadeOut(500);
		$('.show_more_partners > p').text('Дивитися всіх партнерів');
		show_more = 0;
	}

});


$('.bear').hover(
	function() {

	$('.bear_hand').css({

		'animation-name': 'hand_rotate',
	    'animation-duration': '1000ms',
	    'animation-iteration-count': 'infinite',
	    'animation-direction': 'alternate',
	    'position':'relative',
	    'z-index':'1'


	});

}, function() {

	$('.bear_hand').css({
		'transform':'rotate(-30deg)',
		'animation-name': 'hand_rotate',
	    'animation-duration': '999999ms',
	    'position':'relative',
	    'z-index':'1'


	});

});

var interval = 1;
/*
var wood_animate = setInterval(function() {

	var woody_link = 'url\(img/header/wood/'+interval+'.png\)';
	$('.header_second_background').css({
		'background-image': woody_link
	});

interval++;

if(interval==24)
{
	interval=1;
}

},100);
*/

/*
setInterval(function(){
   var m = new Date();
   var time = m.getMinutes();
   if (time == 14) {
      document.getElementById('header_second_background').style.backgroundImage='url(/top1.jpg)';
   } else {
      document.getElementById('header_second_background').style.backgroundImage='url(/top2.jpg)';
   }
}, 60000)
*/

//MOBILE------------------------------------------------------------------------------------
var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;

$('.button_1').click(function(){
	b1++;
	b2=0;
	$('.search').css({
			'display':'none'
		});

	if(b1==2) {
		$('.navigation-panel').css({
			'display':'none'
		});
		b1=0;
	}
	if(b1==1) {
		$('.navigation-panel').css({
		'display':'block',
		'transition':'1s'
		});
	}
});


$('.button_2').click(function(){
	b2++;
	b1=0;
	$('.navigation-panel').css({
			'display':'none'
		});

	if(b2==2) {
		$('.search').css({
			'display':'none'
		});
		b2=0;
	}
	if(b2==1) {
		$('.search').css({
		'display':'block'
		});
	}
});





})