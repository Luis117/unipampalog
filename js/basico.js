function loadCorpo(pagina_alvo){
	var id_corpo = "#corpo-central";
	$(id_corpo).attr("data", pagina_alvo+".html");
    $(id_corpo).load(pagina_alvo+".html");
}
function trocaAba(aba){
	var id_aba = "btn-barra";
	document.getElementById(id_aba+"01").setAttribute('class','');
	document.getElementById(id_aba+"02").setAttribute('class','');
	document.getElementById(id_aba+"03").setAttribute('class','');
	document.getElementById(id_aba+aba).setAttribute('class','active');
}
