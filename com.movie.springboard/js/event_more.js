$(document).ready(function(){
	
	$('.tab_move').click(function (){
		let tab_id = $(this).attr('data-tab');

		$('tab_move').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
	
});
