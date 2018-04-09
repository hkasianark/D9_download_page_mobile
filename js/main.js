$(document).ready(function($) {
	


	$(function(){
		$(".dwl_btn_block").click(function(event) {
			console.log("點擊觸發")
			$(".black_bg").css('opacity', '1');
			$(".pop_white").css('bottom', '0px');
		});
	})


});