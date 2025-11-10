import { notFound } from 'next/navigation';
import Image from "next/image";

export default async function DestinoPage({ params }) {
    // 1. Pega o ID da URL
    const { id } = await params;

    let produto;

    try {
        // 2. Busca esse ID específico na API
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) notFound();
        produto = await res.json();
    } catch (error) {
        notFound();
    }

    // 3. Renderiza a tela de detalhes
    return (
        <main style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <div style={{ display: 'flex', gap: '40px', flexDirection: 'column' }}>
                
                {/* Imagem Grande */}
                <div style={{ position: 'relative', width: '100%', height: '400px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '20px' }}>
                    <Image
                        src={produto.image}
                        alt={produto.title || "Imagem do produto"}
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                        sizes="(max-width: 768px) 100vw, 600px"
                    />
                </div>

                {/* Textos */}
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{produto.title}</h1>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', marginBottom: '30px' }}>
                        {produto.description}
                    </p>
                    <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2a9d8f' }}>
                        R$ {produto.price.toFixed(2)}
                    </p>
                </div>
            </div>
        </main>
   );
}