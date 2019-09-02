jQuery( document ).ready(function() {
// TESTAR ESSA FUNçãO COM UM TABLET
//	jQuery('html, body').on('touchmove', function(e){ 
//		if(jQuery('body').scrollTop() > 0){
//		     //prevent native touch activity like scrolling
//		     e.preventDefault(); 
//		}
//	});

	jQuery(window).on('click',function(){
		if(jQuery('#botoes_controle').is(':visible')){
			jQuery('#botoes_controle').hide();
		}
	});
	

    jQuery(window).scroll(function () {
    	if(jQuery('#cabTitulos').length ){
	    	var posicaoInicial = jQuery('#cabTitulos').position().top;
	    	var posicaoScroll = jQuery(document).scrollTop();
	    	jQuery('tr.header.c-cons').remove();
	    	var pos = posicaoInicial - posicaoScroll;
	        if (pos < 0) {
	        	var posCab = jQuery('#cabTitulos').offset().top;
	        	var posExp = jQuery("#nav").position().top;
	        	var top = posExp + jQuery('#nav').outerHeight();
	        	var cabecCons = jQuery('#cabTitulos');
	        	var altura = cabecCons.height();
	        	var largura = cabecCons.width();
	        	cabefixo = cabecCons.clone().appendTo('.resultado');
	        	cabefixo.attr("id", "cabFixo");
	        	cabefixo.addClass("c-cons");
	        	cabefixo.css('top',top+'px');
	        	cabefixo.css('height',altura+'px');
	        	cabefixo.css('width',largura+'px');
	        } else {
	        	jQuery('tr.header.c-cons').remove();
	        }
    	}
    });

	if(jQuery(".sidebar").css('left') != '0px'){
  		jQuery("#nav").css("left",0);
  		jQuery("#footer").css("left",0);
  	} else {
  		jQuery("#nav").css("left",176);
  		jQuery("#footer").css("left",176);
  	}
  	
  	jQuery('.composicoes').on("contextmenu",function(e){
  		jQuery('.divMenuContexto').css('left',(e.pageX));
  		jQuery('.divMenuContexto').css('top',(e.pageY));
  		jQuery('.divMenuContexto').show();
		return false;
	});
  	
  	jQuery("form").attr('autocomplete','off');

	// BLOQUEIA GRAVAÇÃO DUPLA DO FORMULÁRIO
	jQuery.fn.preventDoubleSubmit = function() {
	  jQuery(this).submit(function() {
	    if (this.beenSubmitted)
	      return false;
	    else
	      this.beenSubmitted = true;
	  });
	};

	jQuery('form').preventDoubleSubmit();

	// DESABILITA O BACKSPACE PARA NÃO VOLTAR A PÁGINA
	jQuery(document).keydown( function(e){
		var element = e.target.nodeName.toLowerCase();
		if(element !=  'input' && element != 'textarea'){
		    if(e.keyCode ===  8){
		        return  false ;
		    }
		}
		// F2 Abre Pesquisa de Agenda
		if (e.keyCode === 113) {
			// ABRE A TELA DE PESQUISA DE HOSPITAIS OU PESSOAS
			raiz = location;
			url = "../ajax/pesquisa_rapida.php";
            ajaxDialog(url,'','','','Agenda Rápida');
        }
		// F3 Abre Pesquisa de lOTE
		if (e.keyCode === 114) {
			// ABRE A TELA DE PESQUISA DE HOSPITAIS OU PESSOAS
			raiz = location;
			url = "../ajax/pesquisa_lote.php";
            ajaxDialog(url,'','','','Pesquisar Lote de Produto');
        }
		// F4 Mensagem para a Produção
		if (e.keyCode === 115) {
			// ABRE A TELA para digitar a mensagem para a Produção
			raiz = location;
			url = "../ajax/msg_producao.php";
            ajaxDialog(url,'','','','Mensagem para a Produção');
        }
		// F5 Atualizar o conteúdo e não sair do sistema
		if (e.keyCode === 116) {
			dest = jQuery('#frm_ceqweb').context.URL;
			jQuery('#frm_ceqweb').attr('src',dest);
			event.preventDefault();
        }
		// F10 Tela de Configuração da Produção
		if (e.keyCode === 121) {
			// ABRE A TELA DE PESQUISA DE HOSPITAIS OU PESSOAS
			raiz = location;
			url = "../ajax/config_producao.php";
            ajaxDialog(url,'','','','Configuração da Produção');
        }
	});
	
	jQuery( ".datepicker" ).datepicker({
		showOn: "button",
	    buttonImage: "../i/calendar.gif",
	    buttonImageOnly: false,
	    buttonText: "Escolha a Data",
	    changeMonth: true,
	    changeYear: true
	});	

	jQuery(".buscador").on("keypress", function(e){
		if(e.keyCode !=  9){
			if(jQuery(".buscador").prop('buscado') != false){
				jQuery(".buscador").prop('buscado',false);
			}
		}
	});
	
	jQuery(".buscador").on("keypress", function(e){
		if(e.keyCode !=  9){
			if(jQuery(".buscador").prop('buscado') != false){
				jQuery(".buscador").prop('buscado',false);
			}
		}
	});	
	jQuery("html").on("focus",".requerimento", function() {
		if(jQuery(this).is("input[type='number']")){
			jQuery(this).prop('limpar',true);
		}
	});

	jQuery("html").on("keypress",".requerimento", function (e) {
		if(jQuery(this).prop('limpar') == true){
			if(e.which > 47 && e.which < 58 ){
				jQuery(this).val('');
				jQuery(this).prop('limpar',false);
			}
		}
	});

	
	jQuery(document).on("keypress", function (e) {
        var OffSet = 0;
        if (e.keyCode == 13) {
            //alert('teclou Enter');/* ENTER PRESSED*/
            /* FOCUS ELEMENT */
            e.stopPropagation();
            e.preventDefault();

//            if (jQuery(this.activeElement).is("input")) {
            	var tabindex = jQuery(this.activeElement).attr('tabindex');
                tabindex++; //increment tabindex
                //after increment of tabindex ,make the next element focus
                jQuery('[tabindex=' + tabindex + ']').focus();
//            }
            return false;
        }
    });

	jQuery("#btexpand").on('click', function(){
		jQuery('input').unbind();
		cb = jQuery("#toggle-sidebar-left");
	  	if(jQuery(".logo").height() == 0){
			jQuery('.logo').animate({"height": 114}, {duration: 500, queue:false});
			jQuery('#logo').animate({"top": 25}, {duration: 500, queue:false});
			jQuery('body').animate({"padding-top": 130}, {duration: 500, queue:false});
	  		jQuery("#upbar").show();
	  		jQuery("#showhidebar").show();
	  		jQuery("#label_menu").show();
	  		//jQuery(".logo").show();
			//jQuery('#page').animate({"margin-top": 40}, {duration: 500, queue:false});
			jQuery('#nav').animate({"top": 130}, {duration: 500, queue:false});
	  		jQuery("#nav").animate({"left":176}, {duration: 500, queue:false});
	  		jQuery(".footer").animate({"left":176}, {duration: 500, queue:false});
			jQuery('#logo').attr('src','../images/logo.png');
			jQuery('#btexpand').css('background-image', "url(../i/expand.png)");
	  		jQuery("#toggle-sidebar-left").prop('checked', true);
	  	} else {
			jQuery('.logo').animate({"height": 0}, {duration: 500, queue:false});
			jQuery('body').animate({"padding-top": 0}, {duration: 500, queue:false});
	  		//jQuery(".logo").hide();
	  		jQuery("#upbar").hide();
	  		jQuery("#showhidebar").hide();
	  		jQuery("#label_menu").hide();
			jQuery('#page').animate({"top": 40}, {duration: 500, queue:false});
	  		jQuery("#nav").animate({"left":0}, {duration: 500, queue:false});
			jQuery('#nav').animate({"top": 0}, {duration: 500, queue:false});
	  		jQuery(".footer").animate({"left":0}, {duration: 500, queue:false});
			jQuery('#logo').animate({"top": 7}, {duration: 500, queue:false});
			jQuery('#logo').attr('src','../images/logo_header.png');
			jQuery('#btexpand').css('background-image', "url(../i/contrai.png)");
	  		jQuery("#toggle-sidebar-left").prop("checked",false);
	  	}
		jQuery('input').bind();
	});

	jQuery("#toggle-sidebar-left").on('change', function(){
/*
		var http = false;
  	    if(navigator.appName == "Microsoft Internet Explorer") {
  	   		http = new ActiveXObject("Microsoft.XMLHTTP");
	    } else {
	   		http = new XMLHttpRequest();
	    }
*/	    
	    var isChecked = jQuery(this).prop('checked')?true:false;
	  	var url    = "../ajax/updateSidebar.php?toggle-sidebar-left=" + isChecked;
	  	if(isChecked){
	  		jQuery("#nav").animate({"left":176}, {duration: 500, queue:false});
	  		jQuery(".footer").animate({"left":176}, {duration: 500, queue:false});
	  	} else {
	  		jQuery("#nav").animate({"left":0}, {duration: 500, queue:false});
	  		jQuery(".footer").animate({"left":0}, {duration: 500, queue:false});
	  	}

	  	jQuery.getJSON(url, function(resposta){
	  	});
/*
	  	http.open("GET", url, false);
	  	http.onreadystatechange=function() {
		    if(http.readyState == 4) {
		    	var resposta = http.responseText;
		    }
		}
	  	http.send();
*/
	});

	jQuery('input.numeros').on('keypress', function (e) {
			if(e.which == 44){
				e.which = 46;
			}

        return !(e.which != 8 && e.which != 0 &&
                (e.which < 42 || e.which > 57) && e.which != 46 && e.which != 44);
    });

	jQuery('input.numeros').on('keyup', function (e) {
			subVirgPonto(this);
	});

	jQuery("div[id^='dv_balao']").on('click', function (e) {
		mostraBalao(this.id);
	});

	
});

jQuery(function() {        
    jQuery('.vlrmedicoDestaque').mouseenter(function(){ //Open on hover 
		if( (jQuery(this).hasClass("vlrmedicoDestaque")) && (jQuery(this).prop('readonly')!="readonly") && (jQuery(this).prop('disabled')!="disabled" )){
			jQuery(this).focus();
		}
		return true;
    });    
});

jQuery.fn.preventDoubleSubmit = function() {
	jQuery(this).submit(function() {
   	if (this.beenSubmitted)
      	return false;
      else
      	this.beenSubmitted = true;
      });
};


function subVirgPonto(valor){
	var value = valor.value; // value = 9.61 use $("#text").text() if you are not on select box...
	value = value.replace(",", "."); // value = 9:61
// can then use it as
	jQuery(valor).val(value);
}

function mostraBalao(obj){
	if(!jQuery("#"+obj).is(':visible')){
		jQuery("#"+obj).show(1000);
	}
	else{
		jQuery("#"+obj).hide(1400);
	}
}

function max_alertas(){
	var msg = jQuery("#msg_alertas").html();
	jAlert(msg,'Alertas e/ou Bloqueios');
}

function mostraComp(tipo){
	if(tipo == 1){
		jQuery('.comp-itens').show();
	} else {
		jQuery('.comp-itens').hide();
	}
	jQuery('.divMenuContexto').toggle();
}	

function dataAtual(){
	currentDayServer();
	var data = new Date(jQuery('#dataServer').val());
	var dia = data.getDate();
	if (dia.toString().length == 1)
		dia = "0"+dia;
	var mes = data.getMonth()+1;
	if (mes.toString().length == 1)
		mes = "0"+mes;
	var ano = data.getFullYear();  
	var hoje = dia+"/"+mes+"/"+ano;	
	var primeiro = '01/'+mes+"/"+ano;
	if(jQuery("#dehoje").is(":checked")){
		jQuery("#pesq_dtini").val(hoje);
		jQuery("#pesq_dtfim").val(hoje);
	} else {
		jQuery("#pesq_dtini").val(primeiro);
		jQuery("#pesq_dtfim").val(hoje);
	}
}

// DATA E HORA ATUAL DO SERVIDOR
function currentDayServer(){
	var currentDayServer = '';
	return jQuery.ajax({
		type: 'post',
		async: false,
		dataType: 'html',
		url:'../currentDayServer.php',
		success: function(retorno){
			currentDayServer = retorno;
			var dayRetorno = currentDayServer;
			jQuery("#dataServer").val(dayRetorno);
//			jQuery("<input type='text' id='dataServer' value='"+dayRetorno+"' />").appendTo("html");
		}
	});
}


jQuery(window).load(function() {
	jQuery('body,html').animate({scrollTop:0},200);
	
	jQuery('input:text:first:visible').each(function(){
		jQuery(this).focus();
	});
	
/*
	tinymce.init({
		  selector: 'textarea#hint0',
		  menubar: false,
		  language: 'pt_BR',
		  fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
		  plugins: [
			    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
			    'searchreplace wordcount visualblocks visualchars code fullscreen',
			    'insertdatetime nonbreaking table contextmenu directionality',
			    'emoticons paste textcolor colorpicker textpattern imagetools'
		  ],
		  toolbar1: 'undo redo | copy paste searchreplace | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | table | bullist numlist outdent indent | link image | print preview fullscreen | styleselect | hr emoticons charmap | code'
	});
*/
	// INPUT COM TEXTO SELECIONADO
	jQuery("input[type=text]").on('focus', function(){
		jQuery(this).select();
		return true;
	});
	jQuery( "#tabs" ).tabs({
		cache:true,
    	beforeLoad: function( event, ui ) {
        	ui.jqXHR.error(function() {
          		ui.panel.html("Não foi possível Carregar essa guia" );
        	});
		  	jQuery("#div_resumo").show();
		  	jQuery("#div_carregando").show("fast");
		},
		load: function(){
		  	jQuery("#div_resumo").hide();
		    jQuery("#div_carregando").hide("slow");
		}
    });
});

jQuery(window).unload(function(){
	document.cookie = "urlatual=;expires=;domain=ceqnep.com.br;path=/";
});

