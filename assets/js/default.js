
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
	/*$('#button-area-aluno').click(function() {
		$(this).next('#form-aluno').slideToggle();
		$(this).toggleClass('active');
	}) */

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


	$(".login-button").on('click', function(){
        $.Dialog({
            overlay: true,
            shadow: true,
            flat: true,
            draggable: true,
            title: 'Área do Aluno',
            content: '',
            padding: 10,
            onShow: function(_dialog){
                var content = '<div class="panel"  style="width: 550px;">' +
						'<div class="panel-header bg-lightBlue fg-white">' +	
    						'Login' +
						'</div>' + 
						'<div class="panel-content">' + 
							'<form a+ction="" method="get" accept-charset="utf-8">' +
					            '<div class="panel-content">' + 
					            '<label>E-mail</label>' +
					    		'<div class="input-control text">' +
								    '<input type="text" value="" placeholder=""/>' +
								    '<button class="btn-clear"></button>' +
								'</div>' +
								'<label>Senha</label>' +
								'<div class="input-control password">' +
								    '<input type="password" value="" placeholder=""/>' +
								    '<button class="btn-reveal"></button>' +
								'</div>' +
								'<div class="links-login">' + 
									'<a href="#" title="Crie uma conta" class="crie-conta left">Crie uma conta</a>' +
									'<a href="#" title="Esqueceu senha?" class="esqueceu-senha">Esqueceu sua senha?</a>' +
								'</div>' +
								'<div class="floatright">' +
									'<input type="submit" value="Entrar">' +
								'</div>' +
							'</form>' +
						'</div>' +
					'</div>';

                $.Dialog.title("Área do Aluno");
                $.Dialog.content(content);
            }
        });
    });



});

