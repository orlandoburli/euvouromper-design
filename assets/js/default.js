
$(function() {


	if ($('.sliders')[0]) {
		$('#slider').show().revolution({
			delay:9000,
			startheight:350,
			startwidth:$('.span12').width(),
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,
			navigationType:"none",
			navigationArrows:"nextto",
			navigationStyle:"round",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			touchenabled:"off",
			onHoverStop:"on",
			stopAtSlide:-1,
			stopAfterLoops:-1,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			hideSliderAtLimit:0,
			shadow:0,
			fullWidth:"on"
		});
	}

});

	$(document).ready(function(){
	$('#button-area-aluno').click(function() {
		$(this).next('#form-aluno').slideToggle();
		$(this).toggleClass('active');
	})

	$('#carrinho-label').click(function() {
		$(this).next('#itens-do-carrinho').slideToggle();
		$(this).toggleClass('active');
	})



});

	jQuery(function($) {
	$('ul#items').easyPaginate({
		step : 3,
		auto : false,
		loop : false,
		clickstop : false,
		pause : 8000
	});

$("#createWindowDraggable").on('click', function(){
                            $.Dialog({
                                shadow: true,
                                overlay: false,
                                draggable: true,
                                icon: '<span class="icon-bus"></span>',
                                title: 'Draggable window',
                                width: 500,
                                padding: 10,
                                content: 'This Window is draggable by caption.',
                                onShow: function(){
                                    var content = '<form id="login-form-1">' +
                                            '<label>Login</label>' +
                                            '<div class="input-control text"><input type="text" name="login"><button class="btn-clear"></button></div>' +
                                            '<label>Password</label>'+
                                            '<div class="input-control password"><input type="password" name="password"><button class="btn-reveal"></button></div>' +
                                            '<div class="input-control checkbox"><label><input type="checkbox" name="c1" checked/><span class="check"></span>Check me out</label></div>'+
                                            '<div class="form-actions">' +
                                            '<button class="button primary">Login to...</button>&nbsp;'+
                                            '<button class="button" type="button" onclick="$.Dialog.close()">Cancel</button> '+
                                            '</div>'+
                                            '</form>';

                                    $.Dialog.title("User login");
                                    $.Dialog.content(content);
                                }

                            });
                        });
});

