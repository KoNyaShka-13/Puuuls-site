const slider = tns({/*Минус данного слайдера состоит в том, что кнопки находятся в контейнере и при адаптации будут возникать проблеы с ними, по этому, данный слайдер (tiny slider) используется только тогда, когда кнопки находятся снизу или сверху слайдера, то есть в простых местах, где проблем с ними не будет*/
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});/*Делаем так, чтобы картинка кнопки работала, как кнопка, за место тех, что создались при помощи tiny-slider*/
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});