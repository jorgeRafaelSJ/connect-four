angular.module('cuatro').service('colHover', function () {
	return {

		hovering : function(col) {

			$(".col" + col).on('mouseenter', function () {
				$(".col" + col).addClass('hovering');
			}).on('mouseleave', function () {
				$(".col" + col).removeClass('hovering');
			});
		}
	};
});