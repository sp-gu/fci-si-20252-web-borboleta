import Link from "next/link";
import Image from "next/image";
import styles from "./destino.module.css"

const Destino = ({ destino }) => {
    return (
        <Link key={destino.id} href={`/destino/${destino.id}`} className={styles.link}>
            
                <h1> {destino.nome} </h1>
                
                <Image className={styles.imagem} src={destino.caminhoImagem} alt={destino.descricao} width={400} height={250} />
                
                {/* <p className={styles.descricao}> {destino.descricao}</p> */}
                
            
            
            {/* <p> {destino.nome} </p> */}
        </Link>
    )
};

export default Destino;