console.log("test");

function gerar() {
  var nome = document.querySelector("#nome").value;
  var sobrenome = document.querySelector("#sobrenome").value;
  var cargo = document.querySelector("#cargo").value;
  var empresa = document.querySelector("#empresa").value;
  var img = document.querySelector("#img").value;

  if (img && nome && sobrenome && cargo && empresa) {
    document.querySelector("#circle").src = img;
    document.querySelector("#localnome").textContent = `${nome} ${sobrenome}`;
    document.querySelector("#localcargo").textContent = cargo;
    document.querySelector("#localempresa").textContent = empresa;
    mostra();
    ocultar();
  } else {
    alert("Todos os campos devem ser preenchidos");
  }
}

function ocultar() {
  document.querySelector(".test").style.display = "none";
}

function mostra() {
  document.querySelector("#informacoes").style.display = "block";
}
