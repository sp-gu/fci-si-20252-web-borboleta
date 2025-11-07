import { notFound } from 'next/navigation';
import Image from "next/image";

export default function DestinoPage({ params }) {
    const dadosDestino = {
        calca: {
            nome: 'Calça Jeans',
            caminhoImg: '/imagens/calca.jpg'
        },
        saia: {
            nome: 'Saia',
            caminhoImg: '/imagens/saia.jpg'
        },
        blusa: {
            nome: 'Blusa',
            caminhoImg: '/imagens/blusa.jpg'
        },
        salto: {
            nome: 'Salto Alto',
            caminhoImg: '/imagens/salto.jpg'
        },
        colar: {
            nome: 'Colar',
            caminhoImg: '/imagens/colar.jpg'
        },
        brinco: {
            nome: 'Brinco',
            caminhoImg: '/imagens/brinco.jpg'
        }
    }

    const destino = dadosDestino[params.id];

    if (!destino) {
        notFound(); 
    }

   return (

    /* <section className={styles.sectionMain}>
            <h2> {destino.nome} </h2>

            <Image className={styles.imagem} src={destino.caminhoImg} alt={destino.descricao} width={500} height={350}/>

            <p className={styles.descricao}> {destino.descricao} </p>
        
    </section>  */

    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f6; color: #333; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 20px; box-sizing: border-box;">

    <main style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07); padding: 2rem 2.5rem; max-width: 550px; width: 100%; text-align: center; border: 1px solid #e0e0e0;">
        
        <div style="font-size: 3.5rem; line-height: 1; margin-bottom: 1rem; color: #ffc107;">
            ⚠️
        </div> 
        
        <h1 style="color: #d9534f; font-size: 1.75rem; margin-top: 0; margin-bottom: 0.5rem;">
            Produto Não Encontrado
        </h1>
        
        <p style="font-size: 1.1rem; color: #666; margin-bottom: 2rem;">
            O item que você selecionou não está mais disponível ou não pôde ser encontrado no nosso sistema.
        </p>

        <div style="text-align: left; border-top: 1px dashed #ccc; padding-top: 1.5rem;">
            
            <div style="margin-bottom: 1.5rem;">
                <label for="product-name" style="display: block; font-weight: 600; color: #555; margin-bottom: 8px;">
                    Nome do Produto:
                </label>
                <div id="product-name" class="placeholder-box" style="background-color: #f0f0f0; border-radius: 6px; border: 1px solid #e0e0e0; width: 100%; height: 38px;"></div>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label for="product-description" style="display: block; font-weight: 600; color: #555; margin-bottom: 8px;">
                    Descrição:
                </label>
                <div class="placeholder-box description" style="background-color: #f0f0f0; border-radius: 6px; border: 1px solid #e0e0e0; width: 100%; height: 100px;"></div>
            </div>

        </div>
    </main>

    </body>
   )
}