import { useEffect, useState } from 'react';
import { listarProdutos } from '../services/produtoService';

export function useProdutos(idLoja) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  useEffect(() => {
    async function buscarProdutos() {
      try {
        const products = await listarProdutos(idLoja);
        setProdutos(products);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    buscarProdutos();
  }, [idLoja]);

  return { produtos, carregando, erro };
}
