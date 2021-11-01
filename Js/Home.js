function limpaDados(){
var cep = document.getElementById('cep').value = "";
var rua = document.getElementById('rua').value = "";
var cidade = document.getElementById('cidade').value = "";
var uf = document.getElementById('uf').value = "";

}

function buscaButton(conteudo) {
if (!("erro" in conteudo)) {
  //Atualiza os campos com os valores.
  document.getElementById('rua').value = (conteudo.logradouro);
  document.getElementById('bairro').value = (conteudo.bairro);
  document.getElementById('cidade').value = (conteudo.localidade);
  document.getElementById('uf').value = (conteudo.uf);
} 
else {
  //CEP não Encontrado.
  limpaDados();
  alert("CEP não encontrado!");
}
}

function pesquisaCep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

  //Expressão regular para validar o CEP.
  var validacep = /^[0-9]{8}$/;

  //Valida o formato do CEP.
  if(validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta na web.
      document.getElementById('rua').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('uf').value="...";

      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/01001000/'+ cep + '/json/?callback=buscaButton';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

  } 
  else {
      //cep é inválido.
      limpaDados();
      alert("Formato de CEP inválido.");
  }
} 
else {
  //cep sem valor, limpa formulário.
  limpaDados();
}
};
