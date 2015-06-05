(function($) {

	$('#countdown').countdown({
		date: 'January 1 2016',
		render: function(data) {
			var day = '<span class="day">' + this.leadingZeros(data.days, 2) + ' DAYS<br /></span>';
			var hour = '<span class="hour">' + this.leadingZeros(data.hours, 2) + ' HOURS<br /></span>';
			var min = '<span class="min">' + this.leadingZeros(data.min, 2) + ' MINUTES<br /></span>';
			var sec = '<span class="sec">' + this.leadingZeros(data.sec, 2) + ' SECONDS<br /></span>';
			$(this.el).html(day + hour + min + sec);
		},
	});

})(jQuery);