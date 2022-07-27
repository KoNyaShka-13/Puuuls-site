$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: true,
		center: true,
//		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>' Данный путь будет работать только на сервере, на html файле так работать не будет, так как JS работает напрямую на сайте*/
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
			breakpoint: 991,//работает, как медиа, то есть в низ, все правила будут работать до данной ширины
			settings: {// 768 - Данная ширина - это переход от пк к планшетным и телефонным версиям, как раз на такой ширине не удобно уже пользоваться кнопками
				dots: true,
				arrows: false,
				}
			}
		]
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//Modal

	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});

	$('.button-mini').each(function(i){
		$(this).on('click', function(){
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});


	function validateForms(form){
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символов")
				},
				phone: "Введите свой номер телефона",
				email: {
				required: "Введите свою почту",
				email: "Неправильно введен адрес почты"
				}
			}
		});
	}
	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	$('input[name=phone]').mask("+7 (999) 999-99-99");//маски работают, если в форме не указан type

	$('form').submit(function(e) {
		e.preventDefault();
		//Отменить стандартное поведение браузера
		if (!$(this).valid()) {
		//Нужен для того, чтобы при валидации нельзя было отправлять пустые запросы
			return;
		}
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
		//После того, как условие выше будет выполнено, выполняется условие ниже
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});
});



