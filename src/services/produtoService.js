const urlApi = import.meta.env.VITE_API_URL;

export async function listarProdutos(id) {
  const resposta = await fetch(`${urlApi}/lojas/${id}/produtos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resultado = await resposta.json();

  if (!resposta.ok) {
    throw new Error(resultado.error);
  }

  return resultado.data.map(
    produto => ({
      id: produto.id_produto,
      nome: produto.produto_nome,
      preco: produto.produto_valor,
      imagem: '/images.jpg',
    })
  );
}
