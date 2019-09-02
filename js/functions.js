/**************************************************************************
Função para simular um Tab quando for pressionado a tecla Enter
Funciona em TEXT BOX,RADIO BUTTON, CHECK BOX e menu DROP-DOWN
**************************************************************************/

var mouseXorig, mouseYorig, objeto, posXorig, posYorig, objFoco;

function retira_acentos(palavra) {
    com_acento = 'çãçãçãçãçãçãçãçãçãçãçãçãçãçãçãçãçãçãçãçãçãçãçã';
    sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
    nova='';
    for(i=0;i<palavra.length;i++) {
      if (com_acento.search(palavra.substr(i,1))>=0) {
      nova+=sem_acento.substr(com_acento.search(palavra.substr(i,1)),1);
      }
      else {
       nova+=palavra.substr(i,1);
      }
    }
    return nova;
}
//Todas funcoes devem iniciar com "fu_xxxxx"
function valida_pesquisa_nome()
{
    if (document.f1.search.value=="") {
        alert('Preencha o campo para a consulta');
        return false;
    }
    return true;
}


function cliquemenu(nomeaba, aba_atual, qtde_abas) {
	var aba 	=	document.getElementById(nomeaba+''+aba_atual);
	for(i=0;i<qtde_abas;i++)
	{
		if(i!=aba_atual){
			document.getElementById(nomeaba+''+i).style.display='none';
		}
		else{
			aba.style.display='block';
		}
	}
}



function valida_pesquisa_agencia() {

	return true;
}


function valida_pesquisa_conta() {

	return true;
}

function valida_pesquisa_subcategoria() {

	return true;
}

function valida_pesquisa_cidade() {


    if (document.f1.search.value=="" && document.f1.esta_cod.value=="") {
        alert('Preencha algum campo para a consulta');
        return false;
    }
    return true;
}


function fu_valida_modelo(tela) {

        var f = tela;

        if (!fu_valida(f.model_nome.value, 'char', true)) {
          alert('Por favor, preencha o MODELO corretamente.');
      f.model_nome.focus();
      return false;
    }

        f.model_nome.value = fu_retira_apostrofe(f.model_nome.value);
        f.model_nome.value = fu_retira_asterisco(f.model_nome.value);

        return true;

}


function fu_habilita_revenda(valor) {

         if (valor==true) {
                document.form1.marca.disabled = false;
                document.form1.modelo.disabled = false;
                document.form1.ano_veic.disabled = false;
                document.form1.km.disabled = false;
         } else {
                document.form1.marca.disabled = true;
                document.form1.modelo.disabled = true;
                document.form1.ano_veic.disabled = true;
                document.form1.km.disabled = true;
                document.form1.ano_veic.value = "";
                document.form1.km.value = "";
         }

}

function fu_verifica_navegador() {
        var bname;
        var bversion;
        var url;
        var janela = null;

        bname=navigator.appName;
        bversion=navigator.appVersion;
        bversion=parseFloat(navigator.appVersion);

        if ((bname=="Netscape" && bversion < 4.75) || (bname=="Microsoft Internet Explorer" && bversion < 4)){
                if(confirm('A versão de seu ' + bname + ' não é compativel com o nosso sistema (' + bversion +  '). Deseja baixar uma versão mais nova?')){
                        if(bname=="Netscape") {
                                url = "http://ftp.spnet.net/mozilla/firefox/releases/1.0/win32/pt-BR/";
                        }
                        else {
                                url = "http://download.microsoft.com/download/ie6sp1/finrel/6_sp1/W98NT42KMeXP/PT-BR/ie6setup.exe";
                        }
                        if(janela) janela.moveTo(0, 0);
                        janela = window.open(url, "win", "height=300,width=300");
                }
        }
}


function fu_valida_caracteres(field) {
        var valid = "ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvwxyz0123456789?!., . , "
        var ok = "yes";
        var temp;
        for (var i=0; i<field.value.length; i++) {
                temp = "" + field.value.substring(i, i+1);
        if (valid.indexOf(temp) == "-1") ok = "no";
        }
                if (ok == "no") {
                alert("Por favor, preencha o campo sem acentuação e pontuação. \n Alguns caracteres especiais também não são permitidos.");
                field.value="";
                field.focus();
                field.select();
   }
}
//  End -->

function fu_valida_caracteres_consulta(field) {
        var valid = "ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvwxyz0123456789., "
        var ok = "yes";
        var temp;
        for (var i=0; i<field.value.length; i++) {
                temp = "" + field.value.substring(i, i+1);
        if (valid.indexOf(temp) == "-1") ok = "no";
        }
                if (ok == "no") {
                alert("Por favor, preencha o campo corretamente.");
                field.value="";
                field.focus();
                field.select();
   }
}


function fu_valida_fale_conosco(tela) {

          var f = tela;

          if (!fu_valida(f.nome.value, 'char', true)) {
                 alert('Por favor, preencha o NOME corretamente.');
                 f.nome.focus();
                 return false;
          }


                if (!fu_valida(f.ddd.value, 'num', true)) {
                        alert('Por favor, preencha o DDD corretamente.\nApenas números');
                        f.ddd.focus();
                        return false;
                }

                        if (!fu_valida(f.fone.value, 'fone', true)) {
                                alert('Por favor, preencha o TELEFONE corretamente.\nApenas números');
                                f.fone.focus();
                                return false;
                        }

                                if (!fu_valida(f.email.value, 'mail', true)) {
                                  alert('Por favor, preencha o SEU EMAIL corretamente.');
                                  f.email.focus();
                                  return false;
                                }

        return true;

}

function fu_formatar(src, mask)
{
        var i = src.value.length;
        var saida = mask.substring(0,1);
        var texto = mask.substring(i);

        if (texto.substring(0,1) != saida)
        {
                src.value += texto.substring(0,1);
        }
}


function fu_valida_veic_extranet(tela) {

          var f = tela;

          if (!fu_valida(f.tipoveic.value, 'char', true)) {
                 alert('Por favor, preencha o TIPO DE VEICULO corretamente.');
                 f.tipoveic.focus();
                 return false;
          }

          if (!fu_valida(f.modelo.value, 'char', true)) {
                 alert('Por favor, preencha o MODELO corretamente.');
                 f.modelo.focus();
                 return false;
          }

          if (!fu_valida(f.cor.value, 'char', true)) {
                 alert('Por favor, preencha a COR corretamente.');
                 f.cor.focus();
                 return false;
          }


                if (!fu_valida(f.ano.value, 'num', true)) {
                        alert('Por favor, preencha o ANO corretamente.\nApenas números');
                        f.ano.value="";
                        f.ano.focus();
                        return false;
                }

                if (f.ano.value<1850) {
                  alert('O ANO não pode ser menor que 1850');
                  f.ano.value="";
                  f.ano.focus();
                  return false;
                }

                if (f.ano.value>2050) {
                  alert('O ANO não pode ser maior que 2050');
                  f.ano.value="";
                  f.ano.focus();
                  return false;
                }


           if (f.km.value!="") {
                        if (!fu_valida(f.km.value, 'num', true)) {
                                alert('Por favor, preencha o KM corretamente.\nApenas números');
                                f.km.value="";
                                f.km.focus();
                                return false;
                        }
           }

                        if (!fu_valida(f.preco_revenda.value, 'char', true)) {
                                alert('Por favor, preencha o PREÇO INTERNO corretamente.\nApenas números');
                                f.preco_revenda.focus();
                                return false;
                        }


                return true;

}

function fu_mascara_valor(campooriginal,decimais)
{
  var posicaoPontoDecimal;
  var campo = '';
  var resultado = '';
  var pos,sep,dec;

        if(isNaN(campooriginal.value)) {
                campooriginal.value = '';
        }

//Retira possiveis separadores de milhar
  for (pos=0; pos < campooriginal.value.length; pos ++)
  {
    if (campooriginal.value.charAt(pos)!='.')
        campo = campo + campooriginal.value.charAt(pos);
  }

//Formata valor monetário com decimais
  posicaoPontoDecimal = campo.indexOf(',');
  if (posicaoPontoDecimal != -1)
   {
      sep = 0;
      for (pos=posicaoPontoDecimal-1;pos >= 0;pos--)
      {
        sep ++;
        if (sep > 3)
        {
           resultado = '.' + resultado;
           sep = 1;
        }

        resultado = campo.charAt(pos) + resultado;
      }

      // Trata parte decimal
      if (parseInt(decimais) > 0 )
      {
         resultado = resultado + ',';

         pos=posicaoPontoDecimal+1;
         for (dec = 1;dec <= parseInt(decimais); dec++)
         {
           if (pos < campo.length)
           {
              resultado = resultado + campo.charAt(pos);
              pos++;
           }
           else
              resultado = resultado + '0';
         }

      } // trata decimais
   }
   // Trata valor monetário sem decimais
   else
   {
      sep = 0;
      for (pos=campo.length-1;pos >= 0;pos--)
      {
        sep ++;
        if (sep > 3)
        {
           resultado = '.' + resultado;
           sep = 1;
        }
        resultado = campo.charAt(pos) + resultado;
      }
      // Trata parte decimal
      if (parseInt(decimais) > 0 )
      {
         resultado = resultado + ',';
         for (dec = 1;dec <= parseInt(decimais); dec++)
         {
              resultado = resultado + '0';
         }
      } // trata decimais
   }
   campooriginal.value = resultado;
}


function fu_recarrega_combo_revenda() {
   var cidade = document.form1.id_cidade.value;
   if (cidade != 0) {
                   var q = document.getElementById('queryDB');
                   q.src = 'carregacomborevenda.php?cidade='+cidade;
   }
}


var arrPadroes = '';

function retiraItem(origem, destino, complemento) {
        var texto;
        if (origem.value != 0) {
                if (destino.options[destino.length-1].value == 0) {
                        destino.remove(0);
                }

                //if (complemento != "") {
                //        texto = origem.options[origem.selectedIndex].text + complemento;
                //}
                //else {
                        //texto = origem.options[origem.selectedIndex].text.substr(0, origem.options[origem.selectedIndex].text.length-9);
                        texto = origem.options[origem.selectedIndex].text;
                //}

                destino.options[destino.length] = new Option(texto, origem.options[origem.selectedIndex].value);

                if (complemento != "") {
                        document.all.tb_array.value = document.all.tb_array.value + ',' + origem.options[origem.selectedIndex].value;
                }

                origem.remove(origem.selectedIndex);

                if (origem.length == 0) {
                        origem.options[0] = new Option('< Nenhum item disponível >', 0);
                }
        }
        else
                alert('Item não disponível ou não selecionado!');
}

function FU_Adicionar() {
        if (document.all.cb_enviar.disabled || document.all.cb_enviar.value == "")
                alert("Item não disponível ou não selecionado!");
        else
                retiraItem(document.all.cb_enviar, document.all.cb_revenda, "sim")
}

function FU_Remover() {
        if (document.all.cb_revenda.disabled || document.all.cb_revenda.value == "") {
                alert("Item não disponível ou não selecionado!");
        } else {
                document.all.tb_array_del.value = document.all.tb_array_del.value + ',' + document.all.cb_revenda.value;
                retiraItem(document.all.cb_revenda, document.all.cb_enviar, "");
        }

}

function FU_GeraArrayPadroes() {
        var aux = "";
        for (var i=0; i<document.all.cb_revenda.length; i++) {
                if (document.all.cb_revenda.options[i].value != "0")
                        aux += document.all.cb_revenda.options[i].value + "._." + document.all.cb_revenda.options[i].value + ".|.";
        }
        return aux;
}



function mostralink(msgStr) { //v1.0
  status=msgStr;
  document.MM_returnValue = true;
}


function fu_retira_apostrofe(string) {
        var temp = "";
        string = '' + string;
        splitstring = string.split("'");
        for(i = 0; i < splitstring.length; i++)
        temp += splitstring[i];
        return temp;
}

function fu_retira_asterisco(string) {
        var temp = "";
        string = '' + string;
        splitstring = string.split("*");
        for(i = 0; i < splitstring.length; i++)
                temp += splitstring[i];

        return temp;
}

function fu_retira_barra1(string) {
        var temp = "";
        string = '' + string;
        splitstring = string.split("[");
        for(i = 0; i < splitstring.length; i++)
                temp += splitstring[i];

        return temp;
}

function fu_retira_barra2(string) {
        var temp = "";
        string = '' + string;
        splitstring = string.split("]");
        for(i = 0; i < splitstring.length; i++)
                temp += splitstring[i];

        return temp;
}

function fu_retira_barra3(string) {
        var temp = "";
        string = '' + string;
        splitstring = string.split("~");
        for(i = 0; i < splitstring.length; i++)
                temp += splitstring[i];

        return temp;
}

function fu_trata_caracteres(campo) {

        var alphaCheck = " '!@#$%&*()_+=-[]~/;.\|<>:?}^`{/-+";

        if (alphaCheck.indexOf(campo) >= 1) {
                return true;
        }

        return false;

}

function fu_valida_amigo(tela) {

             var f = tela;

          if (!fu_valida(f.nomeindique.value, 'char', true)) {
                 alert('Por favor, preencha o NOME corretamente.');
                 f.nomeindique.focus();
                 return false;
          }

                if (!fu_valida(f.seuemail.value, 'mail', true)) {
                  alert('Por favor, preencha o SEU EMAIL corretamente.');
                  f.seuemail.focus();
                  return false;
                }

                if (!fu_valida(f.emailamigo.value, 'mail', true)) {
                  alert('Por favor, preencha o EMAIL DO SEU AMIGO corretamente.');
                  f.emailamigo.focus();
                  return false;
                }


        return true;

}

function fu_valida_listagem(tela) {

          var f = tela;

          if (!fu_valida(f.nome.value, 'char', true)) {
                 alert('Por favor, preencha o NOME corretamente.');
                 f.nome.focus();
                 return false;
          }

                return true;

}

function fu_valida_alt_veic(tela){

            var f = tela;

          if (!fu_valida(f.tipoveic.value, 'char', true)) {
                 alert('Por favor, preencha o TIPO DE VEICULO corretamente.');
                 f.tipoveic.focus();
                 return false;
          }

          if (!fu_valida(f.modelo.value, 'char', true)) {
                 alert('Por favor, preencha o MODELO corretamente.');
                 f.modelo.focus();
                 return false;
          }

          if (!fu_valida(f.cor.value, 'char', true)) {
                 alert('Por favor, preencha a COR corretamente.');
                 f.cor.focus();
                 return false;
          }


                        if (!fu_valida(f.ano.value, 'num', true)) {
                                alert('Por favor, preencha o ANO corretamente.\nApenas números');
                                f.ano.value="";
                                f.ano.focus();
                                return false;
                        }

                        if (f.ano.value<1850) {
                          alert('O ANO não pode ser menor que 1850');
                          f.ano.value="";
                          f.ano.focus();
                          return false;
                        }

                        if (f.ano.value>2050) {
                          alert('O ANO não pode ser maior que 2050');
                          f.ano.value="";
                          f.ano.focus();
                          return false;
                        }


           if (f.km.value!="") {
                        if (!fu_valida(f.km.value, 'num', true)) {
                                alert('Por favor, preencha o KM corretamente.\nApenas números');
                                f.km.value="";
                                f.km.focus();
                                return false;
                        }
           }

                        if (!fu_valida(f.preco_revenda.value, 'char', true)) {
                                alert('Por favor, preencha o PREÇO INTERNO corretamente.\nApenas números');
                                f.preco_revenda.focus();
                                return false;
                        }


                return true;

}


function fu_tira_apostrofe(caracter) {

        if (document.all) // Internet Explorer
                var tecla = event.keyCode;
        else if(document.layers) // Nestcape
                var tecla = caracter.which;

        alert("tc "+tecla);
        if (tecla == 39 || tecla == 34) // apostrofe
                return false;
        else
                return true;

}


function fu_recarrega_combo_index(valor) {

   var marca = document.forms["form1"].elements["marca["+valor+"]"].value;

   if (marca != 0) {
                   var q = document.getElementById('queryDB');
                   q.src = 'carregacomboindice.php?marca='+marca+'&combo='+valor+'';
   }

}

function fu_valida_inclusao_veic(tela, total_campos) {

        for (i=0; i<total_campos; i++){

                        if (document.forms["form1"].elements["tipoveic["+i+"]"].value!="") {


                                                if (document.forms["form1"].elements["marca["+i+"]"].value=="") {
                                                        alert("Por favor, preencha a MARCA corretamente.");
                                                        document.forms["form1"].elements["marca["+i+"]"].focus();
                                                        return false;
                                                }

                                                if (document.forms["form1"].elements["cor["+i+"]"].value=="" ){
                                                        alert("Por favor, preencha a COR corretamente.");
                                                        document.forms["form1"].elements["cor["+i+"]"].focus();
                                                        return false;
                                                }

                                                if (document.forms["form1"].elements["ano["+i+"]"].value=="") {
                                                        alert("Por favor, preencha o ANO corretamente.");
                                                        document.forms["form1"].elements["ano["+i+"]"].focus();
                                                        return false;
                                                }


                                                if (!fu_valida(document.forms["form1"].elements["ano["+i+"]"].value, 'num', true)) {
                                                        alert('Por favor, preencha o ANO corretamente.\nApenas números');
                                                        document.forms["form1"].elements["ano["+i+"]"].value.focus();
                                                        return false;
                                                }


                                                if (document.forms["form1"].elements["combustivel["+i+"]"].value=="") {
                                                        alert("Por favor, preencha o COMBUSTIVEL corretamente.");
                                                        document.forms["form1"].elements["combustivel["+i+"]"].focus();
                                                        return false;
                                                }

                                                if (document.forms["form1"].elements["preco_revenda["+i+"]"].value==""){
                                                        alert("Por favor, preencha o PRECO DE REVENDA corretamente.");
                                                        document.forms["form1"].elements["preco_revenda["+i+"]"].focus();
                                                        return false;
                                                }

                                                if (document.forms["form1"].elements["status["+i+"]"].value==""){
                                                        alert("Por favor, preencha o STATUS corretamente.");
                                                        document.forms["form1"].elements["status["+i+"]"].focus();
                                                        return false;
                                                }

                         }

    }

        return true;

}


function fu_valida_prop_ext(tela) {

          var f = tela;

          if (!fu_valida(f.titulo.value, 'char', true)) {
                 alert('Por favor, preencha o TITULO da mensagem corretamente.');
                 f.titulo.focus();
                 return false;
          }

          if (!fu_valida(f.texto.value, 'char', true)) {
                 alert('Por favor, preencha o TEXTO da mensagem corretamente.');
                 f.texto.focus();
                 return false;
          }

        return true;


}
function fu_valida_alt_dados(tela) {

          var f = tela;

          if (!fu_valida(f.nome.value, 'char', true)) {
                 alert('Por favor, preencha o NOME corretamente.');
                 f.nome.focus();
                 return false;
          }


                if (!fu_valida(f.ddd.value, 'num', true)) {
                        alert('Por favor, preencha o DDD corretamente.\nApenas números');
                        f.ddd.focus();
                        return false;
                }

                        if (!fu_valida(f.fone.value, 'fone', true)) {
                                alert('Por favor, preencha o TELEFONE corretamente.\nApenas números');
                                f.fone.focus();
                                return false;
                        }


                        if (!fu_valida(f.dddcel.value, 'num', true)) {
                                alert('Por favor, preencha o DDD do celular corretamente.\nApenas números');
                                f.dddcel.focus();
                                return false;
                        }


                        if (!fu_valida(f.celular.value, 'fone', true)) {
                                alert('Por favor, preencha o TELEFONE CELULAR corretamente.\nApenas números');
                                f.celular.focus();
                                return false;
                        }

                          if (!fu_valida(f.endereco.value, 'char', true)) {
                                alert('Por favor, preencha o ENDEREÇO corretamente.');
                                f.endereco.focus();
                                return false;
                          }

                                  if (!fu_valida(f.bairro.value, 'char', true)) {
                                        alert('Por favor, preencha o BAIRRO corretamente.');
                                        f.bairro.focus();
                                        return false;
                                  }

                                  if (!fu_valida(f.cep.value, 'num', true)) {
                                        alert('Por favor, preencha o CEP corretamente.');
                                        f.cep.focus();
                                        return false;
                                  }

                                   if (f.cep.length<8) {
                                        alert('Por favor, preencha o CEP corretamente. 8 dígitos');
                                        f.cep.focus();
                                        return false;
                                  }


                                  if (!fu_valida(f.cidade.value, 'char', true)) {
                                        alert('Por favor, preencha a CIDADE corretamente.');
                                        f.cidade.focus();
                                        return false;
                                  }

                                  if (!fu_valida(f.estado.value, 'char', true)) {
                                        alert('Por favor, preencha a ESTADO corretamente.');
                                        f.estado.focus();
                                        return false;
                                  }

                                        if (!fu_valida(f.escolaridade.value, 'char', true)) {
                                                alert('Por favor, preencha a ESCOLARIDADE corretamente.');
                                                f.escolaridade.focus();
                                                return false;
                                        }


                                        if (!fu_valida(f.acessa.value, 'char', true)) {
                                                alert('Por favor, preencha a tipo de ACESSO corretamente.');
                                                f.acessa.focus();
                                                return false;
                                        }

                                        if (!fu_valida(f.profissao.value, 'char', true)) {
                                                alert('Por favor, preencha a PROFISSÃO corretamente.');
                                                f.profissao.focus();
                                                return false;
                                        }

                                        if (!fu_valida(f.atuacao.value, 'char', true)) {
                                                alert('Por favor, preencha a AREA DE ATUAÇÃO corretamente.');
                                                f.atuacao.focus();
                                                return false;
                                        }

                        return true;

}


function fu_valida_avanc(tela) {

   var f = tela;

        if (!fu_valida(f.id_cidade.value, 'char', true)) {
          alert('Por favor, Selecione uma CIDADE para pesquisa.');
      f.id_cidade.focus();
      return false;
    }

        if (f.ano_de.value!=""){
                if (!fu_valida(f.ano_de.value, 'num', true)) {
                        alert('Por favor, preencha o ANO corretamente.\nApenas números');
                        f.ano_de.focus();
                        return false;
                }

                        if (f.ano_de.value<1850) {
                          alert('O ANO não pode ser menor que 1850');
                          f.ano_de.value="";
                          f.ano_de.focus();
                          return false;
                        }

                        if (f.ano_de.value>2050) {
                          alert('O ANO não pode ser maior que 2050');
                          f.ano_de.value="";
                          f.ano_de.focus();
                          return false;
                        }

                        if (!fu_valida(f.ano_ate.value, 'char', true)) {
                                alert('Por favor, preencha o ANO FINAL corretamente.\nApenas numeros');
                                f.ano_ate.focus();
                                return false;
                        }

                        if (!fu_valida(f.ano_ate.value, 'num', true)) {
                                alert('Por favor, preencha o ANO FINAL corretamente.\nApenas números');
                                f.ano_ate.focus();
                                return false;
                        }

                        if (f.ano_ate.value<1850) {
                          alert('O ANO FINAL não pode ser menor que 1850');
                          f.ano_ate.value="";
                          f.ano_ate.focus();
                          return false;
                        }

                        if (f.ano_ate.value>2050) {
                          alert('O ANO FINAL não pode ser maior que 2050');
                          f.ano_ate.value="";
                          f.ano_ate.focus();
                          return false;
                        }


        }




        if (f.ano_ate.value!=""){
                if (!fu_valida(f.ano_ate.value, 'num', true)) {
                        alert('Por favor, preencha o ANO corretamente.\nApenas números');
                        f.ano_ate.focus();
                        return false;
                }

                        if (f.ano_ate.value<1850) {
                          alert('O ANO não pode ser menor que 1850');
                          f.ano_ate.value="";
                          f.ano_ate.focus();
                          return false;
                        }

                        if (f.ano_ate.value>2050) {
                          alert('O ANO não pode ser maior que 2050');
                          f.ano_ate.value="";
                          f.ano_ate.focus();
                          return false;
                        }

        }

        if (f.ano_de.value!="" && f.ano_ate.value!="") {
                if (f.ano_de.value > f.ano_ate.value) {
                          alert('O ANO INICIAL não pode ser superior ao ANO FINAL');
                          f.ano_de.value="";
                          f.ano_de.focus();
                          return false;
                }

                if (f.ano_ate.value < f.ano_de.value) {
                          alert('O ANO FINAL não pode ser menor que ANO INICIAL');
                          f.ano_ate.value="";
                          f.ano_ate.focus();
                          return false;
                }

        }

        return true;

}


function fu_valida_noticia(tela){

   var f = tela;

        if (f.palavrachave.value==""){
                alert("Por favor, informe a PALAVRA CHAVE para consulta.");
                f.palavrachave.focus();
                return false;
        }

        return true;

}


function fu_valida_fotos(tela) {

   var f = tela;

        if (f.foto1.value==""){
                alert("Por favor, selecione a imagem do veículo.");
                f.foto1.focus();
                return false;
        }

        return true;
}


function fu_valida_alteracao_senha(tela) {

        var f = tela;

        if (f.senha.value=='') {
                alert("Preencha a Senha Atual.");
                f.senha.focus();
                return false;
        }

        if (f.novasenha.value=='') {
                alert("Preencha a Nova Senha");
                f.novasenha.focus();
                return false;
        }

        if (f.confsenha.value=='') {
                alert("Preencha a Senha de Confirmação");
                f.confsenha.focus();
                return false;
        }


        if (f.novasenha.value!=f.confsenha.value) {
                alert("A Senha de confirmação não confere com a Digitada.");
                f.confsenha.focus();
                return false;
        }

        return true;

}

function fu_valida_pesq2(tela) {

        var f = tela;

        if (!fu_valida(f.model_nome.value, 'char', true)) {
          alert('Por favor, preencha o MODELO corretamente.');
      f.model_nome.focus();
      return false;
    }

        f.model_nome.value = fu_retira_apostrofe(f.model_nome.value);
        f.model_nome.value = fu_retira_asterisco(f.model_nome.value);

        return true;

}

function fu_valida_pesquisa_ext(tela) {

        var f = tela;

        if (!fu_valida(f.cidade.value, 'char', true) || f.cidade.value==999) {
          alert('Por favor, preencha a CIDADE corretamente.');
      f.cidade.focus();
      return false;
    }

        return true;

}


function fu_valida_lateral(tela) {

        var f = tela;

        if (!fu_valida(f.cidade.value, 'char', true)) {
          alert('Por favor, preencha a CIDADE corretamente.');
      f.cidade.focus();
      return false;
    }

        if (!fu_valida(f.model_nome.value, 'char', true)) {
          alert('Por favor, preencha o MODELO corretamente.');
      f.model_nome.focus();
      return false;
    }

        f.model_nome.value = fu_retira_apostrofe(f.model_nome.value);
        f.model_nome.value = fu_retira_asterisco(f.model_nome.value);

        return true;

}


function fu_valida_testemunho(tela) {

        var f = tela;

        if (!fu_valida(f.nome.value, 'char', true)) {
          alert('Por favor, preencha o NOME corretamente.');
      f.nome.focus();
      return false;
    }

        if (!fu_valida(f.ddd.value, 'num', true)) {
          alert('Por favor, preencha o DDD corretamente.');
      f.ddd.focus();
      return false;
    }

        if (!fu_valida(f.fone.value, 'fone', true)) {
          alert('Por favor, preencha o TELEFONE corretamente.');
      f.fone.focus();
      return false;
    }

        if (!fu_valida(f.emailtest.value, 'mail', true)) {
          alert('Por favor, preencha o EMAIL corretamente.');
      f.emailtest.focus();
      return false;
    }

        return true;

}



function fu_valida_adesao(tela) {

        var f = tela;

        if (!fu_valida(f.nome.value, 'char', true)) {
          alert('Por favor, preencha o NOME corretamente.');
      f.nome.focus();
      return false;
    }

        if (!fu_valida(f.ddd.value, 'num', true)) {
          alert('Por favor, preencha o DDD corretamente.');
      f.ddd.focus();
      return false;
    }

        if (!fu_valida(f.fone.value, 'fone', true)) {
          alert('Por favor, preencha o TELEFONE corretamente.');
      f.fone.focus();
      return false;
    }

        if (!fu_valida(f.cidadeadesao.value, 'char', true)) {
          alert('Por favor, preencha a CIDADE corretamente.');
      f.cidadeadesao.focus();
      return false;
    }

        if (!fu_valida(f.estado.value, 'char', true)) {
          alert('Por favor, preencha o ESTADO corretamente.');
      f.estado.focus();
      return false;
    }

        if (!fu_valida(f.emailadesao.value, 'mail', true)) {
          alert('Por favor, preencha o EMAIL corretamente.');
      f.emailadesao.focus();
      return false;
    }
        alert("Sua mensagem foi enviada corretamente!");
        return true;


}


function valida_campos_impr_divulgue(tela) {

   var f = tela;
   currentDayServer();
   var datahora = new Date(jQuery('#dataServer').val());
   var_ano = datahora.getYear(); // Faz ano igual ao ano corrente
   var_ano = var_ano + 1; ///ano atual +1

        if (f.marca.value==""){
                alert("Por favor, preencha a MARCA corretamente.");
                f.marca.focus();
                return false;
        }

        if (f.modelo.value==""){
                alert("Por favor, preencha o MODELO corretamente.");
                f.modelo.focus();
                return false;
        }

        if (f.anomodelo.value==""){
                alert("Por favor, preencha o MODELO/ANO corretamente.");
                f.anomodelo.focus();
                return false;
        }

        if (f.anomodelo.value!="") {
                if (f.anomodelo.value<1850) {
              alert('O ANO não pode ser menor que 1850');
                  f.anomodelo.value="";
              f.anomodelo.focus();
              return false;
                }

                if (f.anomodelo.value>2050) {
              alert('O ANO não pode ser maior que 2050');
                  f.anomodelo.value="";
              f.anomodelo.focus();
              return false;
                }
        }


        if (f.cor.value==""){
                alert("Por favor, preencha a COR corretamente.");
                f.cor.focus();
                return false;
        }

        if (f.combustivel.value==""){
                alert("Por favor, preencha o COMBUSTIVEL corretamente.");
                f.combustivel.focus();
                return false;
        }

        if (f.nomev.value==""){
                alert("Por favor, preencha o NOME corretamente.");
                f.nomev.focus();
                return false;
        }

        if (!fu_valida(f.dddfonev.value, 'num', true)) {
          alert('Por favor, preencha o DDD corretamente.');
      f.dddfonev.focus();
      return false;
    }

        if (!fu_valida(f.fonev.value, 'fone', true)) {
          alert('Por favor, preencha o TELEFONE corretamente.');
      f.fonev.focus();
      return false;
    }

        return true;

}




function valida_campos_pesquisa () {

        if (document.form.cidade.value==999){
                alert("Selecione a Cidade que deseja consultar.");
                document.form.cidade.focus();
                return false;
        }

        if (document.form.model_nome.value==""){
                alert("Selecione o Modelo que deseja consultar.");
                document.form.model_nome.focus();
                return false;
        }

        return true;

}


function fu_refresh_tela() {
        document.location='compara.php';
}


function fu_valida_data_nasc(dt){

  if (dt!="") {
         erro=0;
         valida = dt;

  	   currentDayServer();
	   var hoje = new Date(jQuery('#dataServer').val());
         anoAtual = hoje.getFullYear();
         barras = valida.split("/");
         if (barras.length == 3){
                           dia = barras[0];
                           mes = barras[1];
                           ano = barras[2];
                           resultado = (!isNaN(dia) && (dia > 0) && (dia < 32)) && (!isNaN(mes) && (mes > 0) && (mes < 13)) && (!isNaN(ano) && (ano.length == 4) && (ano <= anoAtual && ano >= 1900));
                           if (!resultado) {
                                 return false;
                           }
         } else {
                   return false;
         }
         return true;
  }

}



function fu_valida_cpf(c) {
                cpf = c;
                erro = new String;
                if (cpf.length < 11) erro += "São necessários 11 dígitos para verificação do CPF! ";
                var nonNumbers = /\D/;
                if (nonNumbers.test(cpf)) erro += "A verificação de CPF suporta apenas números! ";
                if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){
                                erro += "Número de CPF inválido!"
           }
           var a = [];
           var b = new Number;
           var c = 11;
           for (i=0; i<11; i++){
                           a[i] = cpf.charAt(i);
                           if (i < 9) b += (a[i] * --c);
           }
           if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
           b = 0;
           c = 11;
           for (y=0; y<10; y++) b += (a[y] * c--);
           if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }
           if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])){
                           erro +="Digito verificador com problema!";
           }
           if (erro.length > 0){
                           alert(erro);
                           return false;
           }
           return true;
}

function fu_validatela() {


        if (document.login.btn_logar.value=='true') {

                if (document.login.email_login.value=='') {
                        alert("Preencha Seu Email");
                        document.login.email_login.focus();
                        return false;
                }


                        if (document.login.email_login.value!="") {
                                var validaemail = document.login.email_login;
                                if (validaemail.value.indexOf('@') == -1 || validaemail == '' || validaemail.value.indexOf('.') == -1 || validaemail.length < 7) { // Necessita de arroba e ponto e não válida em branco
                                        validaemail.value='';
                                        alert("Email Inválido");
                                        validaemail.focus();
                                        return false;
                                }
                        }

                                if (document.login.senha.value=='') {
                                        alert("Preencha a Senha");
                                        return false;
                                }

        }


                if (document.login.btn_gravar.value=='true') {

                                if (document.login.nome.value=='') {
                                        alert("Preencha Seu Nome.");
                                        document.login.nome.focus();
                                        return false;
                                }

                                        if (document.login.ddd.value=='') {
                                                alert("Preencha o DDD.");
                                                document.login.ddd.focus();
                                                return false;
                                        }

                                        if (document.login.fone.value=='') {
                                                alert("Preencha o telefone.");
                                                document.login.fone.focus();
                                                return false;
                                        }

                                        if (document.login.email.value=='') {
                                                alert("Preencha o Email.");
                                                document.login.email.focus();
                                                return false;
                                        }

                                        if (document.login.email.value!="") {
                                                var validaemail = document.login.email;
                                                if (validaemail.value.indexOf('@') == -1 || validaemail == '' || validaemail.value.indexOf('.') == -1 || validaemail.length < 7) { // Necessita de arroba e ponto e não válida em branco
                                                        validaemail.value='';
                                                        alert("Email Inválido");
                                                        validaemail.focus();
                                                        return false;
                                                }
                                        }

                                        if (document.login.senha_cad.value=='') {
                                                alert("Preencha a Senha.");
                                                document.login.senha_cad.focus();
                                                return false;
                                        }


                                        if (document.login.senha2.value=='') {
                                                alert("Preencha a Senha de Confirmação.");
                                                document.login.senha2.focus();
                                                return false;
                                        }


                                        if (document.login.senha_cad.value!=document.login.senha2.value) {
                                                alert("A Senha de confirmação não confere com a Digitada.");
                                                document.login.senha2.focus();
                                                return false;
                                        }


                                        var validaddd = document.login.ddd;
                                        var digits = validaddd.value.replace(/[^0-9]/ig, '');
                                        if (!digits) {
                                                alert("Digite somente números");
                                                validaddd.value = '';
                                                validaddd.focus();
                                                return false;
                                        }

                                        var validafone = document.login.fone;
                                        var digits = validafone.value.replace(/[^0-9]/ig, '');
                                        if (!digits) {
                                                alert("Digite somente números");
                                                validafone.value = '';
                                                validafone.focus();
                                                return false;
                                        }

                }

                return true;

}


function fu_recarrega_combo() {

 var marca = document.form1.marca.value;

   if (marca != 0) {
                   var q = document.getElementById('queryDB');
                   q.src = 'carregacombo.php?marca='+marca;
   }

}


//CONTA QTD CLIQUES QUE A REVENDA TEVE
function fu_conta_click(revenda){
        frmclick.location.href = "cont_click_rev.php?id="+revenda+"";
}


//FUNCAO UTILIZADO PARA MOVER FOTO ANTERIOR
function fu_anterior(atual) {
        var aux = atual;
        aux--;

  //nao deixa zerar
        if (aux>0) {
                document.location = eval("'modelocarro.php?pos="+aux+"'");
        } else {
                aux=1;
        }

}


//FUNCAO UTILIZADO PARA MOVER FOTO ANTERIOR
function fu_anterior_revenda(atual) {
        var aux = atual;
        aux--;

  //nao deixa zerar
        if (aux>0) {
                document.location = eval("'carro.php?pos="+aux+"'");
        } else {
                aux=1;
        }

}

//FUNCAO UTILIZADO PARA MOVER PROXIMA FOTO
function fu_proximo(atual,var_max) {

        var aux = atual;
        aux++;

    //nao deixa ultrapassar ultimo valor do vetor...
        if (aux<=var_max) {
                document.location = eval("'modelocarro.php?pos="+aux+"'");
        } else {
                aux=var_max;
        }

}


//FUNCAO UTILIZADO PARA MOVER PROXIMA FOTO
function fu_proximo_revenda(atual,var_max) {

        var aux = atual;
        aux++;

    //nao deixa ultrapassar ultimo valor do vetor...
        if (aux<=var_max) {
                document.location = eval("'carro.php?pos="+aux+"'");
        } else {
                aux=var_max;
        }

}


//FUNCAO UTILIZADO PARA MOVER FOTO ANTERIOR
function fu_anterior_cli(atual) {
        var aux = atual;
        aux--;

  //nao deixa zerar
        if (aux>0) {
                document.location = eval("'modelocliente.php?pos="+aux+"'");
        } else {
                aux=1;
        }

}

//FUNCAO UTILIZADO PARA MOVER PROXIMA FOTO
function fu_proximo_cli(atual,var_max) {

        var aux = atual;
        aux++;

    //nao deixa ultrapassar ultimo valor do vetor...
        if (aux<=var_max) {
                document.location = eval("'modelocliente.php?pos="+aux+"'");
        } else {
                aux=var_max;
        }


}


function fu_valida_campos() {

        if (document.form1.nome.value=="") {
                alert("Por favor, preencha o seu Nome.");
                document.form1.nome.focus();
                return false;
        }

        if (document.form1.ddd.value=="") {
                alert("Por favor, preencha o DDD.");
                document.form1.ddd.focus();
                return false;
        }

        if (document.form1.fone.value=="") {
                alert("Por favor, preencha o Telefone.");
                document.form1.fone.focus();
                return false;
        }

     if (!fu_valida(document.form1.msg.value, 'char', true)) {
                 alert('Por favor, preencha o texto da sua Proposta.');
                 document.form1.msg.focus();
                 return false;
         }

        var validaddd = document.form1.ddd;
    var digits = validaddd.value.replace(/[^0-9]/ig, '');
    if (!digits) {
        alert("Digite somente números");
                validaddd.value = '';
                validaddd.focus();
        return false;
    }

        var validafone = document.form1.fone;
    var digits = validafone.value.replace(/[^0-9]/ig, '');
    if (!digits) {
        alert("Digite somente números");
                validafone.value = '';
                validafone.focus();
        return false;
    }


        if (document.form1.email.value!="") {
                var validaemail = document.form1.email;
                if (validaemail.value.indexOf('@') == -1 || validaemail == '' || validaemail.value.indexOf('.') == -1 || validaemail.length < 7) { // Necessita de arroba e ponto e Não v�lida em branco
                        validaemail.value='';
                        alert("Email Inválido");
                        validaemail.focus();
                        return false;
                }
        }

        if (document.form1.ano.value!="") {
                if (!fu_valida(form1.ano.value, 'num', true)) {
                        alert('Por favor, preencha o ANO corretamente.\nApenas números');
                        document.form1.ano.focus();
                        document.form1.ano.value='';
                        return false;
                }

                            if (document.form1.ano.value<1850) {
                                  alert('O ANO não pode ser menor que 1850');
                                  document.form1.ano.value="";
                                  document.form1.ano.focus();
                                  return false;
                                }

                                if (form1.ano.value>2050) {
                                  alert('O ANO não pode ser maior que 2050');
                                  document.form1.ano.value="";
                                  document.form1.ano.focus();
                                  return false;
                                }
        }

        if (document.form1.km.value!="") {
                if (!fu_valida(document.form1.km.value, 'num', true)) {
                        alert('Por favor, preencha a KM corretamente.\nApenas números');
                        document.form1.km.focus();
                        document.form1.km.value='';
                        return false;
                }
        }

        return true;

}


function fu_toggle(o)
{
        var e = document.getElementById(o);
        e.style.display = (e.style.display == 'none') ? 'block' : 'none';
}

function fu_toggle2(o)
{
        var e = document.getElementById(o);
        e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}



function fu_rollover(name, link_imagem) {
        if (document.images) {
                document.images[name].src = link_imagem;
        }
}


function fu_habilita(valor) {

         if (valor==true) {
                document.form1.marca.disabled = false;
                document.form1.modelo.disabled = false;
                document.form1.ano.disabled = false;
                document.form1.km.disabled = false;
         } else {
                document.form1.marca.disabled = true;
                document.form1.modelo.disabled = true;
                document.form1.ano.disabled = true;
                document.form1.km.disabled = true;
                document.form1.ano.value = "";
                document.form1.km.value = "";
         }

}


function fu_apenasnumericos(caracter) {

        if(document.all) { // Internet Explorer
                var tecla = event.keyCode;
        }
        else {
        if(document.layers) { // Nestcape
                var tecla = caracter.which;
        }
        }

        if(tecla > 47 && tecla < 58 || tecla==46 || tecla==44 ) { // numeros de 0 a 9
                return true;
        }
        else {
        if (tecla != 8) { // backspace
                return false;
        }
        else {
                return true;
        }
        }

}



function fu_limpafoco(campo) {
    var formfield = document.getElementById(campo);
        formfield.value='';
}


function popup_impressos(url, name, width, height)
{
   var str = "height=" + height + ",innerHeight=" + height;
                str += ",width=" + width + ",innerWidth=" + width;
                str += ",status=yes,scrollbars=yes,resizable=yes";
                  if (window.screen)
                {
                                var ah = screen.availHeight - 30;
                                var aw = screen.availWidth - 10;
                                var xc = (aw - width) / 2;
                                var yc = (ah - height) / 2;

                                str += ",left=" + xc + ",screenX=" + xc;
                                str += ",top=" + yc + ",screenY=" + yc;
                }
                var win = window.open(url, name, str);
				win.focus();
}

function elimina_dv(valor){
	var tam = valor.length;
	var ret = valor.substring(0,tam-1);
	return ret;
}

function popup(url, name, width, height)
{
   var str = "height=" + height + ",innerHeight=" + height;
                str += ",width=" + width + ",innerWidth=" + width;
                str += ",status=yes,scrollbars=yes,resizable=no";
                  if (window.screen)
                {
                                var ah = screen.availHeight - 30;
                                var aw = screen.availWidth - 10;
                                var xc = (aw - width) / 2;
                                var yc = (ah - height) / 2;

                                str += ",left=" + xc + ",screenX=" + xc;
                                str += ",top=" + yc + ",screenY=" + yc;
                }
                var win = window.open(url, name, str);
				win.focus();
}


var isNav4 = false, isNav5 = false, isIE4 = false
var strSeperator = "/";
var vDateType = 3; // Global value for type of date format
var vYearType = 4; //Set to 2 or 4 for number of digits in the year for Netscape
var vYearLength = 2; // Set to 4 if you want to force the user to enter 4 digits for the year before validating.
var err = 0; // Set the error code to a default of zero
if(navigator.appName == "Netscape") {
if (navigator.appVersion < "5") {
isNav4 = true;
isNav5 = false;
}
else
if (navigator.appVersion > "4") {
isNav4 = false;
isNav5 = true;
   }
}
else {
isIE4 = true;
}

function dateValid(objName)
{
	var strDate;
	var strDateArray;
	var strDay;
	var strMonth;
	var strYear;
	var intday;
	var intMonth;
	var intYear;
	var booFound = false;
	var datefield = objName;
	var strSeparatorArray = new Array("-"," ","/",".");
	var intElementNr;
	// var err = 0;
	var strMonthArray = new Array(12);
	strMonthArray[0] = "Jan";
	strMonthArray[1] = "Feb";
	strMonthArray[2] = "Mar";
	strMonthArray[3] = "Apr";
	strMonthArray[4] = "May";
	strMonthArray[5] = "Jun";
	strMonthArray[6] = "Jul";
	strMonthArray[7] = "Aug";
	strMonthArray[8] = "Sep";
	strMonthArray[9] = "Oct";
	strMonthArray[10] = "Nov";
	strMonthArray[11] = "Dec";
	//strDate = datefield.value;
	strDate = objName;
	if (strDate.length < 1) {
		return true;
	}
	for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
		if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
			strDateArray = strDate.split(strSeparatorArray[intElementNr]);
			if (strDateArray.length != 3) {
				err = 1;
				return false;
			}
			else {
				strDay = strDateArray[0];
				strMonth = strDateArray[1];
				strYear = strDateArray[2];
			}
			booFound = true;
	   }
	}
	if (booFound == false) {
		if (strDate.length>5) {
			strDay = strDate.substr(0, 2);
			strMonth = strDate.substr(2, 2);
			strYear = strDate.substr(4);
	   }
	}
	//Adjustment for short years entered
	if (strYear.length == 2) {
		strYear = '20' + strYear;
	}
	strTemp = strDay;
	strDay = strMonth;
	strMonth = strTemp;
	intday = parseInt(strDay, 10);

	if (isNaN(intday)) {
		err = 2;
	return false;
	}
	intMonth = parseInt(strMonth, 10);
	if (isNaN(intMonth)) {
		for (i = 0;i<12;i++) {
			if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) {
				intMonth = i+1;
				strMonth = strMonthArray[i];
				i = 12;
		   }
		}
		if (isNaN(intMonth)) {
			err = 3;
			return false;
	   }
	}
	intYear = parseInt(strYear, 10);

	if (isNaN(intYear)) {
		err = 4;
		return false;
	}
	if (intMonth>12 || intMonth<1) {
		err = 5;
		return false;
	}
	if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
		err = 6;
		return false;
	}
	if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
		err = 7;
		return false;
	}
	if (intMonth == 2) {
		if (intday < 1) {
			err = 8;
			return false;
		}
	if (LeapYear(intYear) == true) {
		if (intday > 29) {
			err = 9;
			return false;
	   }
	}
	else {
		if (intday > 28) {
			err = 10;
			return false;
      }
   }
}
return true;
}

function LeapYear(intYear) {
if (intYear % 100 == 0) {
if (intYear % 400 == 0) { return true; }
}
else {
if ((intYear % 4) == 0) { return true; }
}
return false;
}

//*Fucao para o mouse direito*
function context(obj, visibility) {
        if(document.getElementById){
                divs = document.getElementsByTagName("div");
                    divs[obj].style.visibility = visibility;
        }
}

 //<![CDATA[

function sniffer()
{
var screen_height = screen.height;
var screen_width = screen.width;
if (screen_height >= 768)
{
screen_width = 1024;
screen_height = 768;
change('changeme', '800');
}
else
{
screen_width = 800;
screen_height = 600;
change('changeme', '1024');
}
}

function change(id, newClass)
{
identity=document.getElementById(id);
identity.className=newClass;
}


function ValidacaoData(controle){
	if (controle.value.length > 0) {
		var boo
		this.dtSrc=controle.value;
		this.dtValue='';
		boo=_Date();
		if (boo) {
			controle.value= this.dtValue;
		    var dia=this.dtValue.substring(0,2);
		    var ano=this.dtValue.substring(6,10);
		    var mes=this.dtValue.substring(3,5);
			currentDayServer();
			var today = new Date(jQuery('#dataServer').val());
			var hoje=new Date(today.getYear(), today.getMonth(), today.getDate());
		    var expire=new Date(ano,mes-1,dia);
		}else {
			alert('DATA INVÁLIDA');
			controle.focus();
		}
	}
}


function _Date(){
	var vrs=/^(0[1-9]|[1-2][0-9]|3[0-1])(0[1-9]|1[0-2])(\d{2}|19\d{2}|20\d{2})$/.exec(justNumbersStr(this.dtSrc));
	if(!vrs || vrs.length<4)return false;
	var d=parseInt(vrs[1],10),m=parseInt(vrs[2],10),a=parseInt(vrs[3],10);
	if(a<100)a+=(a<30?2000:1900);
	if(/^(4|6|9|11)$/.test(m) && d==31)return false;
	if(m==2){
		var bissexto=(((a%4==0)&&a%100!=0)||a%400==0);
		if(d>29 ||(d==29 && !bissexto))return false;
	}
	this.dtValue=repeatStr(d,"0",2)+"/"+repeatStr(m,"0",2)+"/"+a;
	return true;
}


function ehData(Data)
{
	var dma = -1;
	var data = Array(3);
	var ch = Data.charAt(0);
	for(i=0; i < Data.length && (( ch >= '0' && ch <= '9' ) || ( ch == '/' && i != 0 ) ); ){
		data[++dma] = '';
		if(ch!='/' && i != 0) return false;
		if(i != 0 ) ch = Data.charAt(++i);
		if(ch=='0') ch = Data.charAt(++i);
		while( ch >= '0' && ch <= '9' ){
			data[dma] += ch;
			ch = Data.charAt(++i);
		}
	}
	if(ch!='') return false;
	if(data[0] == '' || isNaN(data[0]) || parseInt(data[0]) < 1) return false;
	if(data[1] == '' || isNaN(data[1]) || parseInt(data[1]) < 1 || parseInt(data[1]) > 12) return false;
	if(data[2] == '' || isNaN(data[2]) || ((parseInt(data[2]) < 0 || parseInt(data[2]) > 99 ) && (parseInt(data[2]) < 1900 || parseInt(data[2]) > 9999))) return false;
	if(data[2] < 50) data[2] = parseInt(data[2]) + 2000;
	else if(data[2] < 100) data[2] = parseInt(data[2]) + 1900;
	switch(parseInt(data[1])){
		case 2: { if(((parseInt(data[2])%4!=0 || (parseInt(data[2])%100==0 && parseInt(data[2])%400!=0)) && parseInt(data[0]) > 28) || parseInt(data[0]) > 29 ) return false; break; }
		case 4: case 6: case 9: case 11: { if(parseInt(data[0]) > 30) return false; break;}
		default: { if(parseInt(data[0]) > 31) return false;}
	}
	return true;
}


function OpenCalendar(txtData,titulo)
{
	var data,dia,mes,ano
	titulo="Calendário";
	// data = window.showModalDialog("http://"+servidor+"/sav/includes/calendario/calContainer.asp?titulo="+titulo,"toolbar=no location=no directories=no status=no menubar=no scrollbars=no resizable=no width=320  height=210","dialogWidth:280px; dialogHeight:175px; dialogTop:300px; dialogLeft:300px;")
	data = window.open("../popup/calcontainer.htm?titulo="+titulo,"toolbar=no location=no directories=no status=no menubar=no scrollbars=no resizable=no width=300");
	txtData.value=data;
	var aux=txtData.value;
	if(aux.indexOf("/")==-1)
	{
		txtData.value='';
	}
	else
	{
		//validacao caso escolhe dia ou mes com tamanho 1
		//aproximadamente 2hs para fazer devido ao componente calendario
		var xp = aux.indexOf("/");
		dia = aux.substring(0,xp);
		mes = aux.substring(xp+1,aux.lastIndexOf("/"));

		if(dia.length<2)
		   dia='0'+dia;

		if(mes.length<2)
		   mes='0'+mes;

		ano= aux.substring(aux.lastIndexOf("/")+1,aux.length);
		txtData.value=dia+'/'+mes+'/'+ano;
	}
}

function fu_numbersonly(e)
{
	tecla = (e.keyCode ? e.keyCode : e.which);
	if (document.all) // Internet Explorer
		var tecla = event.keyCode;
	else if(document.layers) // Nestcape
		var tecla = (e.keyCode ? e.keyCode : e.which);

	if (tecla > 41 && tecla < 58) // numeros de 0 a 9
		return true;
	else
	{
		if (tecla != 8) // backspace
			return false
		else
			return true;
	}
}

function open_popup(pagina, largura, altura, pag_opener, frm_opener, fld_codreturn, fld_descricaoreturn)
{
	var janela;
	//alert("../"+pagina+"?pag="+pag_opener+"&frm="+frm_opener+"&fldcod="+fld_codreturn+"&flddescricao="+fld_descricaoreturn+"");

	if(pagina.indexOf('?')>0)
		janela=window.open("../"+pagina+"&pag="+pag_opener+"&frm="+frm_opener+"&fldcod="+fld_codreturn+"&flddescricao="+fld_descricaoreturn+"",null,"width="+largura+", height="+altura+", scrollbars=yes, resizable=no,  menubar=no, location=no");
	else
		janela=window.open("../"+pagina+"?pag="+pag_opener+"&frm="+frm_opener+"&fldcod="+fld_codreturn+"&flddescricao="+fld_descricaoreturn+"",null,"width="+largura+", height="+altura+", scrollbars=yes, resizable=no,  menubar=no, location=no");
}

//objeto = this.value
//aceita virgula = true
function FloatValidate(objeto, aceitaVirgula, e)
{
	var key;
	var keychar;
	var keydecimal;
	var decimal=0;

	if(!e.keyCode)
	{
		key = e.which;
	}
	else
	{
		key = e.keyCode;
	}
	//}

	//alert(key);
	keychar = String.fromCharCode(key).toLowerCase();

	if(key==8 || key==9 || key==13 || key==35 || key==36 || key==37 || key==39 || key==46 || key==116)
	{
		if(!e.keyCode && keychar==".")
		{
			return false;
		}
		else
			return true;
	}

	for(var i=0;i<objeto.length;i++)
	{
		//alert(objeto.substr(i,1));
		if(objeto.substr(i,1)==",")
		{
			decimal = i;
		}
	}
	if(("0123456789").indexOf(keychar) > -1)
	{
		if(decimal == 0)
		{
			return true;
		}
		else
		{
			if(decimal+2>=objeto.length)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}
	else if((keychar==",") && (aceitaVirgula==true))
	{
		return (decimal == 0)
	}
	else
	{
		return false;
	}
}

function pulacampo(valor, qtde_caracteres, proximocampo)
{
	if(valor.length==qtde_caracteres)
	{
		eval("document.f."+proximocampo+".focus()");
	}
}

function createXMLHTTP() {
	try {
		var arrSignatures = ["MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
		var xmlhttp = false;
		for (var i=0; i < arrSignatures.length; i++) {
			try {
				var oRequest = new ActiveXObject(arrSignatures[i]);
				xmlhttp = oRequest;
				break;
			} catch (oError) {
			}
		}
		if(!xmlhttp && typeof XMLHttpRequest != 'undefined')
		{
			//PARA O FIREFOX
			xmlhttp = new XMLHttpRequest();
		}

		return xmlhttp;
	} catch(e){ alert(e); }
}

function URLDecode(psEncodeString) {
  var lsRegExp = /\+/g;
  return unescape(String(psEncodeString).replace(lsRegExp, " "));
}

function validaEmail(email) {
	try {
		er = /^[0-9a-z][0-9a-zA-Z._-]+@[a-z][-.a-z0-9]+[.][a-z]+$/;
		if (!er.test(email)) {
			return false;
		}
		return true;
	} catch (e) {}
}


//funcao para testar se objeto é true or false
function isObject(a) {
    return (a && typeof a == 'object') || isFunction(a);
}

//funcao para testar se funcao é true or false
function isFunction(a) {
    return typeof a == 'function';
}

//-----------------------------------------------------
//Funcao: MascaraMoeda
//Sinopse: Mascara de preenchimento de moeda
//Parametro:
//   objTextBox : Objeto (TextBox)
//   SeparadorMilesimo : Caracter separador de milésimos
//   SeparadorDecimal : Caracter separador de decimais
//   e : Evento
//Retorno: Booleano
//Autor: Gabriel Fr�es - www.codigofonte.com.br
//-----------------------------------------------------
function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e){

    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;
    if (whichCode == 13) return true;
    if (e.keyCode == 9) return false;
    if (e.keyCode == 8) return false;
    key = String.fromCharCode(whichCode); // Valor para o Código da Chave
    if (strCheck.indexOf(key) == -1) return false; // Chave inv�lida
    len = objTextBox.value.length;
    for(i = 0; i < len; i++)
        if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) break;
    aux = '';
    for(; i < len; i++)
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) aux += objTextBox.value.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) objTextBox.value = '';
    if (len == 1) objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;
    if (len == 2) objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > 2) {
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) {
            if (j == 3) {
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        objTextBox.value += aux2.charAt(i);
        objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
}

function foco(campo){
	 jQuery(campo).focus();
	 return true;
}

function printDiv(id, pg) {
	var oPrint, oJan;
	var title = jQuery('#'+pg)[0].outerText;
	jQuery("tr#linBotao1").css('height','0px');
	jQuery("tr#linBotao1").hide();
	jQuery("tr#linBotao2").css('height','0px');
	jQuery("tr#linBotao2").hide();
    jQuery("#"+id).printElement({pageTitle:title});
	jQuery("tr#linBotao1").css('height','40px');
	jQuery("tr#linBotao1").show();
	jQuery("tr#linBotao2").css('height','40px');
	jQuery("tr#linBotao2").show();
    return false;
}

function fu_masc_valor_prod(campooriginal,decimais,e)
{
  var posicaoPontoDecimal;
  var campo = '';
  var resultado = '';
  var pos,sep,dec;

  campo = campooriginal.value;

  //Formata valor monet�rio com decimais
  posicaoPontoDecimal = campo.indexOf('.');
  if(posicaoPontoDecimal == -1){
	  posicaoPontoDecimal = campo.indexOf(',');
  }
  if (posicaoPontoDecimal != -1)
   {
	  //SEPARA OS INTEIROS
      sep = 0;
      for (pos=posicaoPontoDecimal-1;pos >= 0;pos--)
      {
        resultado = campo.charAt(pos) + resultado;
      }
      // Trata parte decimal
      if (parseInt(decimais) > 0 )
      {
         resultado = resultado + '.';  // COLOCA O PONTO COMO SEPARADOR DECIMAL

         pos=posicaoPontoDecimal+1;
         for (dec = 1;dec <= parseInt(decimais); dec++)
         {
           if (pos < campo.length)
           {
              resultado = resultado + campo.charAt(pos);
              pos++;
           }
           else
              resultado = resultado + '0';
         }

      } // trata decimais
   }
   // Trata valor monet�rio sem decimais
   else
   {
      // Trata parte decimal
      if (parseInt(decimais) > 0 )
      {
         resultado = campo + '.';  // COLOCA O PONTO COMO SEPARADOR DE DECIMAIS
         for (dec = 1;dec <= parseInt(decimais); dec++)
         {
              resultado = resultado + '0';
         }
      } // trata decimais
   }
   if(resultado.indexOf('.') == 0){
   	resultado = "0"+resultado;
   }
   campooriginal.value = parseFloat(resultado).toFixed(decimais);
}

function openModal(pUrl, janela, pWidth, pHeight) {
	if (window.showModalDialog) {
		return window.showModalDialog(pUrl, janela,
		  "dialogWidth:" + pWidth + "px;dialogHeight:" + pHeight + "px");
	} else {
		try {
			netscape.security.PrivilegeManager.enablePrivilege(
			  "UniversalBrowserWrite");
			window.open(pUrl, janela, "width=" + pWidth
			  + ",height=" + pHeight + ",resizable=no,modal=yes");
			return true;
		}
		catch (e) {
			alert("Script não confiável, não é possível abrir janela modal.");
			return false;
		}
	}
}

function irpara(url,ordem,tot, obj){
	if(obj){
		var pagina = jQuery(obj.previousElementSibling).val();
	} else  {
		var pagina = jQuery('#proximo').val();
	}
	
	ordem  = ordem + '';
	if(pagina < 0){
		pagina = 0;
	}
	if(pagina > tot){
		pagina = tot-1;
	}
	var urldest = url+"?pag="+pagina+"&orde="+ordem;

	location.href = urldest;
	return false;
}

function trocaLogin(){
	if(document.getElementById("div_janelaLogin").style.display == "none"){
		document.getElementById("div_janelaLogin").style.display = "block" ;
		document.body.style.overflow='scroll';
	}else{
		document.getElementById("div_janelaLogin").style.display = "none" ;
		document.body.style.overflow='hidden';
	}
}

function trocarUsuario(){
	/*login = document.getElementById("login").value ;
	senha = document.getElementById("senha").value ;
    var http = false;
  	if(navigator.appName == "Microsoft Internet Explorer") {
  		http = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		http = new XMLHttpRequest();
	}
    var url    = "ajax/logon.php?login="+login+"&senha="+senha ;
	http.open("GET", url, true);
  	http.onreadystatechange=function() {
`	    if(http.readyState == 4) {
			var resposta = http.responseText ;
			if(resposta == "1")
	    		alert("SUCESSO");
	    	else
	    		alert("ERRO");
    	}
	}
	http.send();*/

}

/**
 * @function isMobile
 * detecta se o useragent e um dispositivo mobile
 */
function isMobile()
{
	var userAgent = navigator.userAgent.toLowerCase();
	if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos|chrome|mozila)/i)!= -1 )
		return true;
	else
		return false;
}


function cliqueaba1com2(aba){
	if(aba == "1"){
		 jQuery('.subtitulo').attr('id','tab1');
	 	 document.getElementById("aba1").style.display = "block" ;
	 	 document.getElementById("aba2").style.display = "none" ;
	}else if(aba == "2"){
		 jQuery('.subtitulo').attr('id','tab2');
	 	 document.getElementById("aba1").style.display = "none" ;
	 	 document.getElementById("aba2").style.display = "block" ;
	}
}

function abaatual(aba_atual){
	document.getElementById("flag_div").value = aba_atual;
}

/**
  * Função Principal
  * @param w - O elemento que ser� aplicado (normalmente this).
  * @param e - O evento para capturar a tecla e cancelar o backspace.
  * @param m - A m�scara a ser aplicada.
  * @param r - Se a m�scara deve ser aplicada da direita para a esquerda. Veja Exemplos.
  * @param a -
  * @returns null
  */
function maskIt(w,e,m,r,a){

        // Cancela se o evento for Backspace
        if (!e) var e = window.event
        if (e.keyCode) code = e.keyCode;
        else if (e.which) code = e.which;

        if(code==188 || code==190){
        	wantes = w.value.substr(0,(w.value.length - 1));
        	if(wantes.indexOf('.')>=0){
        		w.value = w.value.substr(0,(w.value.length - 1));
        		return false;
        	}
        }
        // Vari�veis da função
        //var txt  = (!r) ? w.value.replace(/[^\d\,\.]+/gi,'') : w.value.replace(/[^\d\,\.]+/gi,'').reverse();
        var txt  = (!r) ? w.value.replace(/[^\d\,\.]+/gi,'') : w.value.replace(/[^\d\,\.]+/gi,'');
        //var mask = (!r) ? m : m.reverse();
        var mask = (!r) ? m : m;
        var pre  = (a ) ? a.pre : "";
        var pos  = (a ) ? a.pos : "";
        var ret  = "";

        //if(code == 9 || code == 8 || txt.length == mask.replace(/[^#]+/g,'').length) return false;
        if(code == 9 || code == 8) return false;

        var jatemponto = false;
        // Loop na m�scara para aplicar os caracteres
        for(var x=0,y=0, z=mask.length;x<z && y<txt.length;){
        		if(txt.charAt(y)=="," || txt.charAt(y)=="."){
        			if(jatemponto){
        				y++;
        				x++;
        			} else {
            			x = mask.indexOf(".");
                        ret += txt.charAt(y); y++; x++;
            			jatemponto = true;
        			}
        		} else {
	                if(mask.charAt(x)!='#'){
	                        ret += mask.charAt(x); x++;
	                        jatemponto = true;
	                } else{
	                    ret += txt.charAt(y); y++; x++;
	                }
        		}
        }
        // Retorno da função
        //ret = (!r) ? ret : ret.reverse()
        ret = (!r) ? ret : ret;
        w.value = pre+ret+pos;
        if(w.value==".")
        	w.value = "0.";
}

function maskX(w,m){

    var txt  = w.toString();
    var mask = m;
    var ret  = "";

    var jatemponto = false;
    // Loop na m�scara para aplicar os caracteres
    for(var x=0,y=0, z=mask.length;x<z && y<txt.length;){
    		if(txt.charAt(y)=="," || txt.charAt(y)=="."){
    			if(jatemponto){
    				y++;
    				x++;
    			} else {
        			x = mask.indexOf(".");
                    ret += txt.charAt(y); y++; x++;
        			jatemponto = true;
    			}
    		} else {
                if(mask.charAt(x)!='#'){
                    ret += mask.charAt(x); x++;
                    jatemponto = true;
                } else{
                    ret += txt.charAt(y); y++; x++;
                }
    		}
    }
    // Retorno da função
    w = ret;
    if(w ==".")
    	w = "0.";
    return w;
}




jQuery.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = jQuery.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = jQuery(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : jQuery(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
};

function scroleiaTela(obj){ // faz o scroll da tela conforme o elemento que est� com o foco;
	var nav = getPosicaoElemento(obj.id);
	var bod = jQuery("body").scroll()[0].scrollTop;
	var rolar = (nav.top + (nav.top * (20 /100)) ) - (bod);
	if(rolar > (bod - 100)){
		jQuery('html, body').animate({
			scrollTop: rolar
		}, 300);
	}
}
function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
}  	

function getPosicaoElemento(elemID){
    var offsetTrail = document.getElementById(elemID);
    var offsetLeft = 0;
    var offsetTop = 0;
    while (offsetTrail) {
        offsetLeft += offsetTrail.offsetLeft;
        offsetTop += offsetTrail.offsetTop;
        offsetTrail = offsetTrail.offsetParent;
    }
    if (navigator.userAgent.indexOf("Mac") != -1 &&
        typeof document.body.leftMargin != "undefined") {
        offsetLeft += document.body.leftMargin;
        offsetTop += document.body.topMargin;
    };
    return {left:offsetLeft, top:offsetTop};
}

function selecionaHint(formula, produto, titulo,obj){
	objeto = obj;
	//posXorig = getPosicaoElemento(objeto.id).left;
	//posYorig = getPosicaoElemento(objeto.id).top;
	var abrirurl = "ajax/selecionaHint.php?formula="+formula+"&produto="+produto;
	ajaxDialog(abrirurl, 400, 500,'', titulo);
}


function mostraHint(id_hint,nome_hint,obj){
	objeto = obj;
	//posXorig = getPosicaoElemento(objeto.id).left;
//	posYorig = getPosicaoElemento(objeto.id).top;
	var abrirurl = "../cadProdutos/ajax/mostraHint.php?id_hint="+id_hint;
	ajaxDialog(abrirurl,500,700,'', nome_hint,'myModalhint','mostraHint',obj);
}

function salvaHint(obj, formula, produto, hint){
	var abrirurl = "../cadProdutos/ajax/salvaHint.php";
	var salva = 'N';
	if(obj.checked)
		salva = 'S';
	jQuery.ajax({
		type: 'post',
		async: true,
		dataType: 'html',
		data:{'salva':salva,'formula':formula,'produto':produto,'id_hint':hint},
		url:abrirurl,
		success: function(retorno){
		}
	});
}

// Carregar arquivo via Ajax, e mostrar numa janela Dialog
// Parametros: Url, Altura e Largura, dados e titulo da janela
function ajaxDialog(url, altura, largura, dados,titulo,jan1, jan2,objeto){
	if(typeof(dados)==='undefined' || dados == '') dados = '{}';
   if(typeof(titulo)==='undefined' || titulo == '') titulo = 'Ajuda Rápida';
   if(typeof(jan1)==='undefined' || jan1 == '') jan1 = 'myModalShow';
   if(typeof(jan2)==='undefined' || jan2 == '') jan2 = 'mostraRetorno';
   if(typeof(objeto)==='undefined' || objeto == '') objeto = 'body';
   //if(typeof(altura)==='undefined' || altura == '') altura = 'Ajuda R�pida';
   
	largura = (screen.width) * 0.70;
	altura  = (screen.height) * 0.60;

	LeftPosition = (screen.width) * 0.10;
	TopPosition = (screen.height) * 0.20;

//	TopPosition -= 100;

//	jQuery("a[id^='aHint']").each(function(){
//		jQuery(this).css('background-position-x', '0px');
//			jQuery(objeto).removeClass('hover');
//	});

	posYorig = getPosicaoElemento(objeto.id).top;
	
	jQuery.ajax({
		type: 'post',
		async: true,
		dataType: 'html',
		data: dados,
		url:url,
		beforeSend: function(){
			jQuery("html").css('overflow','hidden');
		  	jQuery("#div_resumo").show("fast");
		  	jQuery("#div_carregando").show("fast");
			jQuery('body').scrollTo(objeto,{offsetTop:posYorig});
		},
		complete: function(){
		  	jQuery("#div_resumo").hide("slow");
		    jQuery("#div_carregando").hide("slow");
			//jQuery('body').scrollTo(objeto,{offsetTop:posYorig});
		},

		success: function(retorno){
			jQuery("<div id='"+jan1+"' class='divModal' title='"+titulo+"' style='width:96%'></div>").appendTo("html");
			jQuery("<div id='"+jan2+"' class='"+jan2+"'></div>").appendTo("#"+jan1);
			jQuery("#"+jan2).html(retorno);
			jQuery("#"+jan1).dialog({
				appendTo: "html",
				//position: [LeftPosition, TopPosition],
				position: 'center',
  				height: altura,
  				width: largura,
  				draggable: true,
  				modal: true,
  				close: function(){
					jQuery(this).dialog('destroy').remove();
  					if (jQuery(".divModal").length == 0){
						jQuery("html").css('overflow','auto');
					}
  				}
 			});
	    },
		error: function (xhr, ajaxOptions, thrownError) {
        	alert(xhr.status);
        	alert(thrownError);
      }
	});
}


// Carregar arquivo PDF via Ajax, e mostrar numa janela Dialog
// Parametros: Url, Altura e Largura, dados e titulo da janela
function ajaxPDF(url, altura, largura, dados,titulo,jan1, jan2,objeto){
    if(typeof(dados)==='undefined' || dados == '') dados = '{}';
    if(typeof(titulo)==='undefined' || titulo == '') titulo = 'Ajuda Rápida';
    if(typeof(jan1)==='undefined' || jan1 == '') jan1 = 'myModalShow';
    if(typeof(jan2)==='undefined' || jan2 == '') jan2 = 'mostraRetorno';
    if(typeof(objeto)==='undefined' || objeto == '') objeto = 'body';
   
    largura = (screen.width) * 0.70;
    altura  = (screen.height) * 0.60;

    LeftPosition = (screen.width) * 0.10;
    TopPosition = (screen.height) * 0.20;

    posYorig = getPosicaoElemento(objeto.id).top;
    
    var iframe = $('<iframe>');
    iframe.attr('width','100%');
    iframe.attr('height','95%');
    iframe.attr('src',url);
    
    jQuery("<div id='"+jan1+"' class='divModal' title='"+titulo+"' style='width:96%'></div>").appendTo("html");
    jQuery("<div id='"+jan2+"' class='"+jan2+"'></div>").appendTo("#"+jan1);
    jQuery("#"+jan2).html(iframe);
    jQuery("#"+jan1).dialog({
        appendTo: "html",
        position: 'center',
        height: altura,
        width: largura,
        draggable: true,
        modal: true,
        close: function(){
            jQuery(this).dialog('destroy').remove();
            if (jQuery(".divModal").length == 0){
                jQuery("html").css('overflow','auto');
            }
            return true;
        }
/*        
        ,
        
        open: function () {
            var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"500px\" height=\"300px\">";
            object += "If you are unable to view file, you can download from <a href = \"{FileName}\">here</a>";
            object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
            object += "</object>";
            object = object.replace(/{FileName}/g, "Files/" + fileName);
            jQuery("#dialog").html(object);
        }
*/        
    });
}

function selecionaDocs(formula, produto){
	var abrirurl = "ajax/selecionaDocs.php?formula="+formula+"&produto="+produto;
	ajaxDialog(abrirurl, 200, 500,'', 'Escolha o Documento');
}

function salvaDocs(obj, formula, produto, documento, versao){
	var abrirurl = "../cadProdutos/ajax/salvaDocs.php";
	var salva = 'N';
	if(obj.checked)
		salva = 'S';
	jQuery.ajax({
		type: 'post',
		async: true,
		dataType: 'html',
		data:{'salva':salva,'formula':formula,'produto':produto,'id_documento':documento, 'versao':versao},
		url:abrirurl,
		success: function(retorno){
		}
	});
}

function salvaDocsHosp(hospital, descricao, link){
	var abrirurl = "../cadProdutos/ajax/salvaDocsHosp.php";
	jQuery.ajax({
		type: 'post',
		async: true,
		dataType: 'html',
		data:{'hospital':hospital,'descricao':descricao,'link':link},
		url:abrirurl,
		success: function(retorno){
		}
	});
}

function fecharJanela(){
	   jQuery("#myModalShow" ).dialog("close");
}

function mostraDadosPac(){
	jQuery("#dadospaciente").toggle();
}

function mostraEquipoContra(){
	jQuery("#equipocontra").toggle();
}

function calculaHoliday(){
	var peso    = jQuery("#peso").val() ;
	var holiday = new Number();
	if(peso <= 10){
		holiday = Math.round(100,2)  ;
	}else if(peso > 10 && peso <= 20){
		holiday = 1000 + ((Math.round(peso)-10)*50) ;
	}else if(peso > 20){
		holiday = 1500 + ((Math.round(peso)-20)*20) ;
	}
	jQuery("#holiday").val(holiday.toFixed(Decimals(holiday,".")));
}

function Decimals(x, dec_sep)
{
	if(x.length > 0){
    	var tmp=new String();
    	tmp=x.toString();
    	var pos= new Number();
    	pos = tmp.indexOf(dec_sep);
    	if (pos > -1)
    		return tmp.length - pos -1;
    	else
    		return 0;
    } else {
    		return 0;
    }
}

function preencheListaProdutosConferencia(prescricao,tipo){
	var url = "ajax/preencheListaProdutosConferencia.php?prescricao="+prescricao;
	
	//se for prescrição adulta Padrão
	if(tipo == 'A')
		url    = "ajax/preencheListaProdutosConferenciaAdulto.php?prescricao="+prescricao;
	
	jQuery.get(url, function(resposta){
    	jQuery("#div_produtos").show();
    	jQuery("#div_produtos").html(resposta);
    	mostraAlertas();
	});
/*
	jQuery.ajax({
		type: 'post',
		async: true,
		data: {'prescricao':prescricao},
		url:url,
		success: function(retorno){
			var resposta = retorno;
	    	jQuery("#div_produtos").show();
	    	jQuery("#div_produtos").html(resposta);
	    }
	});
*/
}

function alerta_amarelo(obj,ordem){
	if(document.getElementById("aProdutos["+ordem+"][alerta_minimo]").value != '' && document.getElementById("aProdutos["+ordem+"][alerta_maximo]").value != ''){
		var valor  = parseFloat(document.getElementById("aProdutos["+ordem+"][qtde_kg]").value);
		var minimo = parseFloat(document.getElementById("aProdutos["+ordem+"][alerta_minimo]").value);
		var maximo = parseFloat(document.getElementById("aProdutos["+ordem+"][alerta_maximo]").value);
		jQuery(obj).removeClass("alerta_amarelo");
		if(valor < minimo || valor > maximo){
			jQuery(obj).addClass("alerta_amarelo");
			return true;
		} else {
			return false;
		}
	}
}

function buscaHintVolume(obj){
	var formula = obj.value;
	var abrirurl = "../presc/ajax/buscaHint.php?id=999";
	jQuery.ajax({
		type: 'post',
		async: true,
		dataType: 'html',
		data:{'formula':formula,'tipo':'V'},
		url:abrirurl,
		success: function(retorno){
			jQuery("#hint_vol").html(retorno);
		}
	});
}

function buscaHintValorCalorico(obj){
	var formula = obj.value;
	var abrirurl = "../presc/ajax/buscaHint.php?id=998";
	jQuery.ajax({
		type: 'post',
		async: true,
		dataType: 'html',
		data:{'formula':formula,'tipo':'C'},
		url:abrirurl,
		success: function(retorno){
			jQuery("#hint_valcal1").html(retorno);
		}
	});
	var abrirurl = "../presc/ajax/buscaHint.php?id=995";
	jQuery.ajax({
		type: 'post',
		async: true,
		dataType: 'html',
		data:{'formula':formula,'tipo':'C'},
		url:abrirurl,
		success: function(retorno){
			jQuery("#hint_valcal2").html(retorno);
		}
	});
}

function buscaHintFatorEstresse(obj){
	var formula = obj.value;
	var abrirurl = "../presc/ajax/buscaHint.php?id=997";
	jQuery.ajax({
		type: 'post',
		async: true,
		dataType: 'html',
		data:{'formula':formula,'tipo':'E'},
		url:abrirurl,
		success: function(retorno){
			jQuery("#hint_fat_es").html(retorno);
		}
	});
}

function buscaHintFatorAtividade(obj){
	var formula = obj.value;
	var abrirurl = "../presc/ajax/buscaHint.php?id=996";
	jQuery.ajax({
		type: 'post',
		async: true,
		dataType: 'html',
		data:{'formula':formula,'tipo':'A'},
		url:abrirurl,
		success: function(retorno){
			jQuery("#hint_fat_at").html(retorno);
		}
	});
}


// funções para seleção de ítens de um MultiSelect para Outro
// Usado no Cadastro de Médicos, Cadastro de Usuários
function adicionaItem(campoOrig,campoDest){
	x = campoOrig.value;
	if (x == ""){
		alert('Selecione pelo menos um item');
	}
	ListaDisponiveis = campoOrig;
	ListaAcordo = campoDest;
	var len = ListaAcordo.length;

	for(var i = 0; i < ListaDisponiveis.length; i++){
		if((ListaDisponiveis.options[i] != null) && (ListaDisponiveis.options[i].selected)){
			ListaAcordo.options[len] = new Option(ListaDisponiveis.options[i].text, ListaDisponiveis.options[i].value);
			ListaAcordo.options[len].selected = true ;
			len++;
			ListaDisponiveis.options[i] = null;
			i--;
		}
	}
	listaSetores(f1.hospitais,f1.setores_disponiveis);
}

function listaSetores(campoOrig, campoDest){
	listaHospitais = campoOrig;
	listaSetoresDisp = campoDest;
	listaSetoresDisp.length = 0;
	listaSetoresSele = f1.setores;
	var len = 0;
	for(var i = 0; i < listaHospitais.length; i++){
		abrirurl = '../ajax/listaSetorHospital.php';
		id_hosp = listaHospitais.options[i].value;
		jQuery.ajax({
			type: 'POST',
			async: true,
			dataType: 'json',
			data:{'id_hospital':id_hosp},
			url:abrirurl,
			success: function(retorno){
				if(retorno){
					for(x = 0; x < retorno.id_setor.length; x++){
						var nome = 'HOSP. '+retorno.apelido[x]+'=> '+retorno.nome_setor[x];
						var id = retorno.id_hospital[x]+'|'+retorno.id_setor[x];
						var tem = 0;
						for(z = 0; z < listaSetoresSele.length; z++){
							if(id == listaSetoresSele.options[z].value){
								tem++;
							}
						}
						if(tem == 0){
							listaSetoresDisp.options[len] = new Option(nome, id);
							len++;
						}
					}
				}
			}
		});
	}
	listaSetoresSelec();
}

function adicionaSetor(campoOrig,campoDest){
	x = campoOrig.value;
	if (x == ""){
		alert('Selecione pelo menos um item');
	}
	ListaDisponiveis = campoOrig;
	ListaAcordo = campoDest;
	var len = ListaAcordo.length;

	for(var i = 0; i < ListaDisponiveis.length; i++){
		if((ListaDisponiveis.options[i] != null) && (ListaDisponiveis.options[i].selected)){
			ListaAcordo.options[len] = new Option(ListaDisponiveis.options[i].text, ListaDisponiveis.options[i].value);
			ListaAcordo.options[len].selected = true ;
			len++;
			ListaDisponiveis.options[i] = null;
			i--;
		}
	}
	listaSetoresSelec();
}

function listaSetoresSelec(){
	listaHospitais = f1.hospitais;
	listaSetoresSele = f1.setores;
	for(var i = 0; i < listaSetoresSele.length; i++){
		var tem = 0;
		var hosp = listaSetoresSele.options[i].value.substring(0,2);
		for(var x = 0; x < listaHospitais.length; x++){
			if(listaHospitais.options[x].value == hosp){
				tem++;
			}
		}
		if(tem == 0){
			listaSetoresSele.options[i] = null;
		} else {
			listaSetoresSele.options[i].selected = true;
		}
	}
}

function proximo(id_prox){
	jQuery("#"+id_prox).focus();
}

function strstr (haystack, needle, bool) {
	  // http://kevin.vanzonneveld.net
	  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // +   bugfixed by: Onno Marsman
	  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // *     example 1: strstr('Kevin van Zonneveld', 'van');
	  // *     returns 1: 'van Zonneveld'
	  // *     example 2: strstr('Kevin van Zonneveld', 'van', true);
	  // *     returns 2: 'Kevin '
	  // *     example 3: strstr('name@example.com', '@');
	  // *     returns 3: '@example.com'
	  // *     example 4: strstr('name@example.com', '@', true);
	  // *     returns 4: 'name'
	  var pos = 0;

	  haystack += '';
	  pos = haystack.indexOf(needle);
	  if (pos == -1) {
	    return false;
	  } else {
	    if (bool) {
	      return haystack.substr(0, pos);
	    } else {
	      return haystack.slice(pos);
	    }
	  }
	}


function bloqueiaTela(){
	jQuery("#div_resumo").show("fast");
	jQuery("#div_carregando").show("fast");
}
function desBloqueiaTela(){
	jQuery("#div_resumo").hide("fast");
	jQuery("#div_carregando").hide("fast");
}

function selecionar_todos(valor)
{
    obj = document.form.selecao;
    for (i=0; i<obj.length; i++)
    {
        obj[i].checked=valor;
    }
}

function md5(str) {
  //  discuss at: http://phpjs.org/functions/md5/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Michael White (http://getsprink.com)
  // improved by: Jack
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  depends on: utf8_encode
  //   example 1: md5('Kevin van Zonneveld');
  //   returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'

  var xl;

  var rotateLeft = function(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  };

  var addUnsigned = function(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = (lX & 0x80000000);
    lY8 = (lY & 0x80000000);
    lX4 = (lX & 0x40000000);
    lY4 = (lY & 0x40000000);
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
      return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      } else {
        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
      }
    } else {
      return (lResult ^ lX8 ^ lY8);
    }
  };

  var _F = function(x, y, z) {
    return (x & y) | ((~x) & z);
  };
  var _G = function(x, y, z) {
    return (x & z) | (y & (~z));
  };
  var _H = function(x, y, z) {
    return (x ^ y ^ z);
  };
  var _I = function(x, y, z) {
    return (y ^ (x | (~z)));
  };

  var _FF = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var _GG = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var _HH = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var _II = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var convertToWordArray = function(str) {
    var lWordCount;
    var lMessageLength = str.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = new Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };

  var wordToHex = function(lValue) {
    var wordToHexValue = '',
      wordToHexValue_temp = '',
      lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      wordToHexValue_temp = '0' + lByte.toString(16);
      wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
    }
    return wordToHexValue;
  };

  var x = [],
    k, AA, BB, CC, DD, a, b, c, d, S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22,
    S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20,
    S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23,
    S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;

  str = this.utf8_encode(str);
  x = convertToWordArray(str);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  xl = x.length;
  for (k = 0; k < xl; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = addUnsigned(a, AA);
    b = addUnsigned(b, BB);
    c = addUnsigned(c, CC);
    d = addUnsigned(d, DD);
  }

  var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);

  return temp.toLowerCase();
}

function utf8_encode(argString) {
  //  discuss at: http://phpjs.org/functions/utf8_encode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: sowberry
  // improved by: Jack
  // improved by: Yves Sucaet
  // improved by: kirilloid
  // bugfixed by: Onno Marsman
  // bugfixed by: Onno Marsman
  // bugfixed by: Ulrich
  // bugfixed by: Rafal Kukawski
  // bugfixed by: kirilloid
  //   example 1: utf8_encode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var utftext = '',
    start, end, stringl = 0;

  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(
        (c1 >> 6) | 192, (c1 & 63) | 128
      );
    } else if ((c1 & 0xF800) != 0xD800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    } else { // surrogate pairs
      if ((c1 & 0xFC00) != 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xFC00) != 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
      enc = String.fromCharCode(
        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
}


