/**  Carousel written by Assaf Gelber http://agelber.com/blog/looping-carosel*

 */

 $(document).ready(function () 
{	
	$(function() {
		var currentIndex = 0,
				itemCount    = $('.carousel > article').length;

		/* add the active class to the first item to hide all the others */
		$('.carousel > article:eq(' + currentIndex + ')').addClass('active');

		$('.carousel-nav').on('click', function() {
			var $active  = $('.carousel > article.active'),
					isNext   = $(this).hasClass('next');
			currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

			/* go back to the last item if we hit -1 */
			if (currentIndex === -1) {
				currentIndex = itemCount - 1;
			}

			var $next = $('.carousel > article:eq(' + currentIndex + ')');
			$active.addClass(isNext ? 'next-out' : 'prev-out');
			$next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');
			setTimeout(function() { 
				$active.removeClass('active next-out prev-out');
				$next.removeClass('next-in prev-in')
			}, 500);
			return false;
		});
	});	
});