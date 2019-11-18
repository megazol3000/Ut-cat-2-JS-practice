$(document).ready(function(){
	$('.cat').on('click', function(){
		$('.cat').addClass('cat--go');
		$('#left-hand').addClass('leftHand--anim');
		$('#right-hand').addClass('rightHand--anim');
		$('#left-leg').addClass('leftLeg--anim');
		$('#right-leg').addClass('rightLeg--anim');
		$('.ut').addClass('ut--anim');
	})
})