// подключаем библиотеки из bower
//=../bower_components/jquery/dist/jquery.js
//=../bower_components/slick-carousel/slick/slick.js

//= scripts.js
$(document).ready(function(){
	var mainSubnavHover = function() {
		$('.main-subnav__item').hover(
			function() {
				var parentList = $(this).closest('.main-subnav__list');
				if ($(this).children('.main-subnav__list').length) {
					var catNavHeight = $(this).children('.main-subnav__list').outerHeight();
					if (parentList.outerHeight() < catNavHeight) {
						parentList.css('height', catNavHeight);
					}
					parentList.css('width', '720');
				}
			}, 
			function() {
				var parentList = $(this).closest('.main-subnav__list');
				parentList.css({
					'width': 'auto',
					'height': 'auto'
				});
			}
		)
	}
	var openSearchForm = function() {
		$(document).on('click', '.search__icon', function() {
			$(this).parent().addClass('search__icon--open')
		});
	}
	var clearSearchForm = function() {
		$(document).on('click', '.search__close', function() {
			$('.search__input').val('');
		});
	}
	var tabs = function() {
		$('.tabs-nav__item').click(function() {
			var tabName = $(this).attr('show-tab');
			$(this).addClass('tabs-nav__item--active').siblings().removeClass('tabs-nav__item--active');
			$('.tabs__body .' + tabName).addClass('tab--active').siblings().removeClass('tab--active');
		});
	}
	var bannerSlider = function(){
		$('.banner-js').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '.banner__nav--prev',
			nextArrow: '.banner__nav--next',
			dots: true,
			customPaging : function(slider, i) {
        return '<a class="banner__dot"></a>';
			},
			appendDots: '.banner__dots'
		});
	}
	var productPrevSlider = function () {
		$('.product-prev-js__slider').each(function(ind) {
			var carouselId = "carousel" + ind;
			this.closest('.product-prev').id = carouselId;
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				appendDots: '#' + carouselId + ' .product-prev__colors',
				customPaging: function(slider, i) {
					var color = $('.product-prev__img').eq(i).data('color');

					return '<a class="product-prev__color" style="background-color:'+ color +'"></a>'
				}
			});	
		});
	}
	var productLineSlider = function() {
		$('.product-line-slider-js').slick({
			slidesToShow: 4,
			slidesToScroll: 1
		})
	}

	mainSubnavHover();
	openSearchForm();
	clearSearchForm();
	tabs();
	bannerSlider();
	productPrevSlider();
	productLineSlider();
});