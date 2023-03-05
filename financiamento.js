// Capturando valores inseridos.

botao.addEventListener("click", function () {
  var valor = document.querySelector("td #Valor");
  var anos = document.querySelector("td #prazoAnos");
  var jurosAno = document.querySelector("td #jurosAnos");

  //Saídas.

  var meses = document.querySelector("tr #prazoMeses");
  var jurosMes = document.querySelector("#jurosMes");
  var jurosAcum = document.querySelector("#jurosAcum");

  var botao = document.querySelector("#botao");
  var j = (1 + jurosAno.valueAsNumber) ** (1 / 12) - 1;

  jurosMes.textContent = j.toFixed(5);
  mesesNum = anos.valueAsNumber * 12;
  meses.textContent = anos.valueAsNumber * 12;

  var amortizacao = valor.valueAsNumber / parseInt(meses.textContent);

  var juros = [];

  var contador = 0;

  for (var i = 0; mesesNum >= i; i++) {
    var arrayJuros = juros.push(
      (valor.valueAsNumber - i * amortizacao) * parseFloat(jurosMes.textContent)
    );
  }
  var soma = 0;

  juros.forEach((element) => {
    soma = soma + element;
  });

  jurosAcum.textContent = soma.toFixed(2);

  var numeroDePrestacoes = [];

  var qdadeTotal = juros.map((juros) => juros + amortizacao);

  var linhas = renderTable(numeroDePrestacoes, amortizacao, juros, qdadeTotal);

  document.getElementById("tabela2").innerHTML = linhas;

  function renderTable(numeroDePrestacoes, amortizacao, juros, qdadeTotal) {
    let rows = [];
    for (i = 0; i < 5; i++) {
      rows.push(`<tr> <td id="prestacaoDin" class = "resultadoTabDinamica">${numeroDePrestacoes.push(
        i
      )}</td>
    <td id="amortizacaoDin" class = "resultadoTabDinamica">${amortizacao.toFixed(
      2
    )}</td>
     <td id="jurosDin" class = "resultadoTabDinamica">${juros[i].toFixed(
       2
     )}</td>
     <td id="totalDin" class = "resultadoTabDinamica">${qdadeTotal[i].toFixed(
       2
     )}</td>
      </tr>`);
    }

    return `<table id="tabelaCria1">
    <thead id="cabecalho">
      <tr>
        <th id="prestacao">Prestação</th>
        <th id="amortizacao">Amortização</th>
        <th id="valorJurosMes">Juros</th>
        <th id="valorTotalMes">Total</th>
      </tr>
          </thead>
    <tbody>${rows.join("")}</tbody>
    </table>`;
  }
});

/* <table id="tabelaCria1">
    <thead id="cabecalho">
      <tr>
        <th id="prestacao">Prestação</th>
        <th id="amortizacao">Amortização</th>
        <th id="valorJurosMes">Juros</th>
        <th id="valorTotalMes">Total</th>
      </tr>
          </thead>
     </table> */
