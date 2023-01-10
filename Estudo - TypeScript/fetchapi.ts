interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: number;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

async function fetchData() {
  await fetch(`https://api.origamid.dev/json/notebook.json`)
  .then((response) => response.json())
  .then((data) => showProducts(data));
}

fetchData();

function showProducts(json: Product) {
  document.body.innerHTML = `
    <h1>${json.nome}</h1>
    <p>${json.preco}</p>
    `;
}
