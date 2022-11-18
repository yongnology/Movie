$(document).ready(function(){
	
	$('ul.tabs-1 li').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('ul.tabs-1 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$("#tab2").addClass('current');
		$("#"+tab_id).addClass('current');
	})
	$('ul.tabs-2 li').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('ul.tabs-2 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$("#tab3").addClass('current');
		$("#"+tab_id).addClass('current');
	})
	$('ul.tabs-3 li').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('ul.tabs-3 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$("#tab4").addClass('current');
		$("#"+tab_id).addClass('current');
	})
	$('ul.tabs-4 li').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('ul.tabs-4 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$("#tab5").addClass('current');
		$("#"+tab_id).addClass('current');
	})
	$('ul.tabs-5 li').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('ul.tabs-5 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$("#tab6").addClass('current');
		$("#"+tab_id).addClass('current');
	})
})