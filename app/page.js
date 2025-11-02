import Image from "next/image";
import Header from "./components/Header";
import Destino from "./components/destino/destino";

export default function Home() {

    const destinos = [
        {id: 'calca', nome: 'Calça', caminhoImagem: '/imagens/calca.jpg'},
        {id: 'saia', nome: 'Saia', caminhoImagem: '/imagens/saia.jpg'},
        {id: 'blusa', nome: 'Blusa', caminhoImagem: '/imagens/blusa.jpg'},
        {id: 'salto', nome: 'Salto', caminhoImagem: '/imagens/salto.jpg'},
        {id: 'colar', nome: 'Colar', caminhoImagem: '/imagens/colar.jpg'},
        {id: 'brinco', nome: 'Brinco', caminhoImagem: '/imagens/brinco.jpg'}
    ];

  return (
    <body>
        <Header />

        <section className="topo-site"> 
            <h1>Conheça o bazar Heleninha</h1>
            <h2>Bazar beneficente</h2>
            
            <button id="saiba-mais">
                <a href="#">Saiba mais!</a>
            </button>
        </section>

        <section className="produtos-destaque">
            <h1>Produtos em Destaque</h1>
            <Destino key={destino.id}  destino={destino}/>
        </section>

    <section className="parallax"> </section>

    <section className="mvv">
        <article className="missao">
            <h2>Missão</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod  .</p>
        </article>
        <article className="visao">
            <h2>Visão</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </article>
        <article className="valores">
            <h2>Valores</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </article>
    </section>

    <footer>
        <section className="rodape">
            <article className="left-side">
                <h4>Redes sociais:</h4>
                <a href="https://www.instagram.com/bazar.heleninha?igsh=MTRmM3lyMXVzdnQ0ag=="></a>
            </article>
            <article className="right-side">
                <h4>Horários: </h4>
                <p>Seg. a Sex. das 10h às 16h</p>
            </article>
        </section>
    </footer>
    </body>
  );
}
