import Link from "next/link";
import Image from "next/imagens";
import styles from "./destino.module.css"

const Destino = ({ destino }) => {
    return (
        <Link key={destino.id} href={`/roteamento/${destino.id}`} className={styles.link}>
            {<>
                <h2> {roteamento.nome} </h2>
                
                <Image className={styles.imagem} src={roteamento.caminhoImg} alt={roteamento.descricao} width={500} height={350} />
                
                <p className={styles.descricao}> {destino.descricao}</p>
                
            </>}
            
            <p> {destino.nome} </p>
        </Link>
    )
};

export default Destino;