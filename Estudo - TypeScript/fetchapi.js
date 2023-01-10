"use strict";
async function fetchData() {
    await fetch(`https://api.origamid.dev/json/notebook.json`)
        .then((response) => response.json())
        .then((data) => showProducts(data));
}
fetchData();
function showProducts(json) {
    document.body.innerHTML = `
    <h1>${json.nome}</h1>
    <p>${json.preco}</p>
    `;
}
