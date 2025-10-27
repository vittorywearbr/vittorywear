import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, ShoppingBag, Phone, Store } from 'lucide-react';

export default function VittoryWear() {
  const produtos = [
    { nome: 'Camiseta Premium', preco: 'R$ 199,90', imagem: '/camiseta.jpg' },
    { nome: 'Perfume Exclusivo', preco: 'R$ 349,90', imagem: '/perfume.jpg' },
    { nome: 'Calça Elegance', preco: 'R$ 299,90', imagem: '/calca.jpg' },
    { nome: 'Tênis Vittory Classic', preco: 'R$ 499,90', imagem: '/tenis.jpg' },
    { nome: 'Boné Signature', preco: 'R$ 149,90', imagem: '/bone.jpg' },
    { nome: 'Relógio Lux', preco: 'R$ 899,90', imagem: '/relogio.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900">
      <header className="flex flex-col items-center justify-center py-12 bg-white shadow-md">
        <motion.img
          src="/mnt/data/c78572cd-4467-4c7e-baac-03d2eb508eb7.png"
          alt="Vittory Wear Logo"
          className="w-64 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <h1 className="text-3xl font-serif tracking-wide">VITTORY WEAR</h1>
        <p className="text-gray-500 italic mt-2">Luxury. Identity. Style.</p>
        <div className="flex gap-4 mt-4">
          <Button onClick={() => window.open('https://shopee.com', '_blank')}><ShoppingBag className="mr-2"/>Shoppe</Button>
          <Button onClick={() => window.open('https://instagram.com', '_blank')}><Instagram className="mr-2"/>Instagram</Button>
          <Button onClick={() => window.open('https://shein.com', '_blank')}><Store className="mr-2"/>Shein</Button>
          <Button onClick={() => window.open('https://wa.me/5511965386867', '_blank')}><Phone className="mr-2"/>WhatsApp</Button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Destaques da Coleção</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produtos.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Card className="overflow-hidden shadow-lg bg-white">
                <img src={p.imagem} alt={p.nome} className="w-full h-64 object-cover" />
                <CardContent className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{p.nome}</h3>
                  <p className="text-gray-500">{p.preco}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-white py-6 text-center text-gray-500 border-t mt-12">
        <p>© 2025 Vittory Wear. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
