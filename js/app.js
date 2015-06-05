(function($, moment) {

	var countdown;

	var date = new Date();

	$('#date').datetimepicker();

	$('#date').change(function() {

		date = $(this).val();

		countdown.update(date);
		countdown.start();

	});

	$('#countdown').countdown({
		'date': date,
		'render': function(data) {

			countdown = this;

			var day = '<span class="day">' + this.leadingZeros(data.days, 2) + ' DAYS<br /></span>';
			var hour = '<span class="hour">' + this.leadingZeros(data.hours, 2) + ' HOURS<br /></span>';
			var min = '<span class="min">' + this.leadingZeros(data.min, 2) + ' MINUTES<br /></span>';
			var sec = '<span class="sec">' + this.leadingZeros(data.sec, 2) + ' SECONDS<br /></span>';

			var displayDate = moment(date).format('MMMM Do YYYY, h:mm:ss A');

			var until = '<span> Until ' + displayDate + '<br /></span>';

			$(this.el).html(day + hour + min + sec + until);

		},
	});

})(jQuery, moment);