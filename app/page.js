'use client'; // Necessário para usar useEffect

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Destino from "./components/destino/destino";

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                const produtosFormatados = data.map(item => ({
                    id: item.id,
                    nome: item.title,
                    caminhoImagem: item.image,
                    preco: item.price 
                }));

                setProdutos(produtosFormatados.slice(0, 6));
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar produtos:", error);
                setLoading(false);
            });
    }, []);

    return (
        <main>
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
                
                {loading ? (
                    <p style={{textAlign: 'center'}}>Carregando destaques...</p>
                ) : (
                    <article id="map" style ={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '20px',
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1200px', 
                        margin: '0 auto'
                    }}> 
                        {produtos.map(produto => (
                            <Destino key={produto.id} destino={produto} />
                        ))}
                    </article>
                )}
            </section>

            <section className="parallax"> </section>

            <section className="mvv">
                <article className="missao">
                    <h2>Missão</h2>
                    <p>Texto demonstrativo. </p>
                </article>
                <article className="visao">
                    <h2>Visão</h2>
                    <p>Texto demonstrativo.</p>
                </article>
                <article className="valores">
                    <h2>Valores</h2>
                    <p>Texto demonstrativo.</p>
                </article>
            </section>

            <footer>
                <section className="rodape">
                    <article className="left-side">
                        <h4>Redes sociais:</h4>
                        <a href="https://www.instagram.com/bazar.heleninha?igsh=MTRmM3lyMXVzdnQ0ag==">Instagram</a>
                    </article>
                    <article className="right-side">
                        <h4>Horários: </h4>
                        <p>Seg. a Sex. das 10h às 16h</p>
                    </article>
                </section>
            </footer>
        </main>
    );
}