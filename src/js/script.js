$(document).ready(function(){
	$('.carousel__inner').slick({
		peed: 1200,
		adaptiveHeight: true,
/*		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>' Данный путь будет работать только на сервере, на html файле так работать не будет, так как JS работает напрямую на сайте*/
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
		{
			breakpoint: 768,/*работает, как медиа, то есть в низ, все правила будут работать до данной ширины*/
			settings: {/*Данная ширина - это переход от пк к планшетным и телефонным версиям, как раз на такой ширине не удобно уже пользоваться кнопками*/
				dots: true,
				arrows: false
				}
		}
		]
	});
});
