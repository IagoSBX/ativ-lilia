import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header({ nomeLoja, quantidadeCarrinho, aoAbrirCarrinho }) {
  const usuarioLogado = sessionStorage.getItem('nomeUsuario');

  return (
    <header className="cabecalho">
      <div>
        <h1>{nomeLoja}</h1>
      </div>

      <nav className="cabecalho__navegacao">
        <Link to="/">Início</Link>
      </nav>

      {usuarioLogado ? (
        <div className="cabecalho__usuario">
          <span>Bem vindo, <b>{usuarioLogado}</b></span>
        </div>
      ) : null}

      <button className="cabecalho__carrinho" onClick={aoAbrirCarrinho}>
        Carrinho ({quantidadeCarrinho})
      </button>
    </header>
  );
}

export default Header;
