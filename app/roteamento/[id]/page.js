import Image from "next/image";
import styles from "./destino.module.css";

export default function DestinoPage({ params }) {
    const dadosDestino = {
        calca: {
            nome: 'Calça Jeans',
            descricao: 'X.',
            caminhoImg: '/imagens/X.jpg'
        },
        saia: {
            nome: 'Saia Zara',
            descricao: 'X.',
            caminhoImg: '/imagens/X.jpg'
        },
        camiseta: {
            nome: 'Camiseta Hering',
            descricao: 'X.',
            caminhoImg: '/imagens/X.jpg'
        },
        sapato: {
            nome: 'Salto Alto',
            descricao: 'X.',
            caminhoImg: '/imagens/X.jpg'
        }
    }

    const destino = dadosDestino[params.id];

    return (
        <section className={styles.sectionMain}>
            <h2> {destino.nome} </h2>

            <Image className={styles.imagem} src={destino.caminhoImg} alt={destino.descricao} width={500} height={350}/>

            <p className={styles.descricao}> {destino.descricao} </p>
        </section>
    )
}