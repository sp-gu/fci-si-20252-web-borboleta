'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Destino({ destino }) {
  return (
    <div className="produto-card" style={{ 
        border: '1px solid #eee', 
        borderRadius: '8px', 
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%',      
        justifyContent: 'space-between' 
    }}>
       
       <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '15px' }}>
             <Image 
                src={destino.caminhoImagem} 
                alt={destino.nome || "Produto"} 
                fill
                sizes="(max-width: 768px) 100vw, 250px"
                style={{ objectFit: 'contain' }} 
             />
           </div>

           <h3 style={{ 
               fontSize: '1rem', 
               textAlign: 'center', 
               marginBottom: '10px',
               minHeight: '40px', 
               display: '-webkit-box',
               WebkitLineClamp: 2, 
               WebkitBoxOrient: 'vertical',
               overflow: 'hidden'
            }}>
                {destino.nome}
           </h3>

           <p style={{ fontWeight: 'bold', color: '#2a9d8f', marginBottom: '15px' }}>
              R$ {destino.preco?.toFixed(2)}
           </p>
       </div>

       <Link 
            href={`/produto/${destino.id}`}
            style={{
                backgroundColor: '#333',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                textDecoration: 'none',
                width: '100%',
                textAlign: 'center',
                marginTop: 'auto' 
            }}
        >
            Ver Detalhes
       </Link>
    </div>
  );
}