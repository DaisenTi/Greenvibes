/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-expect-error - image asset (Imagen de inicio)
import heroBg from './assets/images/inicio sin boton verde op3.jpg.jpeg';
// @ts-expect-error - image asset (Imagen de quienes somos)
import quienessomosBg from './assets/images/quienes_somos_version_mejorada.jpg';
// @ts-expect-error - image asset (Imagen de menu productos)
import inicioproductosBg from './assets/images/1600x700_B.jpeg';
// @ts-expect-error - image asset (Imagen producto mango)
import mangoproductoBg from './assets/images/modelo mango.jpg.jpeg';
// @ts-expect-error - image asset (Imagen producto mora)
import moraproductoBg from './assets/images/modelo mora.jpg.jpeg';
// @ts-expect-error - image asset (Imagen producto cas)
import casproductoBg from './assets/images/modelo cas.jpg.jpeg';
// @ts-expect-error - image asset (Imagen producto maracuya)
import maracuyaproductoBg from './assets/images/modelo maracuya.jpg.jpeg';

// @ts-expect-error - image asset (Imagen de mango expandida)
import mangoexpandedBg from './assets/images/botella mango 800x600.jpg.jpeg';
// @ts-expect-error - image asset (Imagen de mora expandida)
import moraexpandedBg from './assets/images/botella mora 800x600.jpg.jpeg';
// @ts-expect-error - image asset (Imagen de cas expandida)
import casexpandedBg from './assets/images/botella cas 800x600.jpg.jpeg';
// @ts-expect-error - image asset (Imagen de maracuya expandida)
import maracuyaexpandedBg from './assets/images/botella maracuya 800x600.jpg.jpeg';

// @ts-expect-error - image asset (Imagen Contactanos)
import contactBg from './assets/images/contactanos 1000x1200.jpg.jpeg';
import { 
  Leaf, 
  Sparkles, 
  Droplet, 
  GlassWater, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  X, 
  Check, 
  Clock,
  Heart,
  ShieldCheck,
  ChevronRight,
  Send,
  AlertCircle
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  benefits: string[];
  nutritionalFacts: {
    calories: number;
    sugar: string;
    protein: string;
    vitamins: string[];
  };
  colorClass: string;
  accentColor: string;
  image: string;
  expandedImage: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'vitality-green',
    name: 'Jugo de mango',
    tagline: 'Desintoxica y energiza tu cuerpo',
    description: 'Nuestra firma verde por excelencia. Una combinación vibrante y refrescante de kale, manzana verde, pepino crispado y jengibre.',
    longDescription: 'Vitality Green es el pilar de nuestra filosofía de bienestar. Formulado meticulosamente para oxigenar tus células, limpiar el sistema digestivo y aportar una dosis intensa de clorofila viva. Cada botella contiene el equivalente a 1.2 kg de hojas verdes cultivadas localmente.',
    ingredients: ['Kale Orgánico', 'Manzana Verde Granny Smith', 'Pepino de Granja', 'Limón Myers', 'Jengibre Azul Prensado'],
    benefits: ['Altamente Alcalinizante', 'Apoya la digestión saludable', 'Energía natural sostenida sin bajones'],
    nutritionalFacts: {
      calories: 95,
      sugar: '12g (natural de frutas)',
      protein: '3g',
      vitamins: ['Vitamina K (320% IDR)', 'Vitamina C (110% IDR)', 'Hierro', 'Ácido Fólico']
    },
    colorClass: 'border-emerald-500/20 hover:border-emerald-500/70',
    accentColor: 'text-emerald-600 bg-emerald-50',
    image: mangoproductoBg, 
    expandedImage: mangoexpandedBg // imagen de la ampliación
  },
  {
    id: 'gold-glow',
    name: 'Jugo de mora',
    tagline: 'Brillo solar e inmunidad reforzada',
    description: 'Sabor tropicalizado y restaurador con cúrcuma fresca de raíz, naranja dulce pura, piña de temporada y un toque estimulante de pimienta.',
    longDescription: 'Gold Glow está diseñado para combatir la inflamación sistémica y despertar tu sistema inmunitario. La piña orgánica y el jengibre aportan notas ácidas y picantes exquisitas, mientras que un toque milimétrico de pimienta negra multiplica por 2000% la absorción de la curcumina.',
    ingredients: ['Piña de Monte Lindo', 'Zanahoria dulce', 'Cúrcuma Orgánica en Raíz', 'Naranja Valencia', 'Pimienta Negra de la Selva'],
    benefits: ['Potente antiinflamatorio natural', 'Estimula el sistema inmunitario', 'Aporta luminosidad radiante y vitamina A a la piel'],
    nutritionalFacts: {
      calories: 110,
      sugar: '16g (natural de frutas)',
      protein: '1.5g',
      vitamins: ['Betacaroteno (Vitamina A)', 'Vitamina C (240% IDR)', 'Manganeso']
    },
    colorClass: 'border-amber-500/20 hover:border-amber-500/70',
    accentColor: 'text-amber-600 bg-amber-50',
    image: moraproductoBg,
    expandedImage: moraexpandedBg // imagen de la ampliación
  },
  {
    id: 'ruby-reset',
    name: 'Jugo de cas',
    tagline: 'Recuperación muscular celular activa',
    description: 'La fusión terrosa y dulce de remolacha dorada, arándanos silvestres antioxidantes, manzanas rojas de huerto y menta.',
    longDescription: 'El elixir de la resistencia. Ruby Reset aprovecha los nitratos naturales de la remolacha seleccionada para dilatar los vasos sanguíneos y mejorar la oxigenación celular, haciéndolo ideal para entusiastas del deporte o periodos de agotamiento mental extremo. Su sabor es refrescantemente herbario gracias a la menta fresca.',
    ingredients: ['Remolacha de Cosecha Propia', 'Arándanos Silvestres', 'Manzana Royal Gala', 'Limón Persa', 'Hojas de Menta Fresca'],
    benefits: ['Mejora el rendimiento deportivo', 'Fomenta la salud cardiovascular', 'Cargado de antioxidantes protectores de radicales libres'],
    nutritionalFacts: {
      calories: 120,
      sugar: '18g (natural de frutas)',
      protein: '2g',
      vitamins: ['Niacina (B3)', 'Antocianinas', 'Potasio (24% IDR)', 'Fósforo']
    },
    colorClass: 'border-rose-500/20 hover:border-rose-500/70',
    accentColor: 'text-rose-600 bg-rose-50',
    image: casproductoBg,
    expandedImage: casexpandedBg
  },
  {
    id: 'pure-ginger-shot',
    name: 'Jugo de maracuya',
    tagline: 'Máxima vitalidad concentrada',
    description: 'Una inyección intensa e inmediata para tu salud con jengibre puro prensado en frío, limón de granja y un elixir de miel de agave.',
    longDescription: 'Un concentrado diseñado para cuando necesitas un impulso de rendimiento y resistencia inmediata. El shot purifica las vías respiratorias superiores, acelera la tasa metabólica basal y equilibra el ph del tracto gastrointestinal gracias a su concentración superlativa de jingerol activo.',
    ingredients: ['Jengibre de Altura Prensado', 'Limón Real exprimido', 'Infusión de Miel de Agave Azul', 'Pizca de Cayena Orgánica'],
    benefits: ['Estimulante digestivo de acción rápida', 'Combate el cansancio y la somnolencia', 'Alivio natural de vías respiratorias'],
    nutritionalFacts: {
      calories: 45,
      sugar: '6g',
      protein: '1g',
      vitamins: ['Vitamina C', 'Zinc', 'Gingelol', 'Magnesio']
    },
    colorClass: 'border-yellow-500/20 hover:border-yellow-500/70',
    accentColor: 'text-yellow-700 bg-yellow-50',
    image: maracuyaproductoBg,
    expandedImage: maracuyaexpandedBg
  }
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-forest-950 antialiased selection:bg-lime-accent selection:text-forest-950">
      
      {/* 1. HEADER / NAVIGATION BAR */}
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-forest-100/50 py-4 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group text-left cursor-pointer"
            id="brand-logo"
          >
            <div className="bg-forest-900 text-lime-accent p-2 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-inner">
              <Leaf className="h-5 w-5 fill-current" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-forest-900 group-hover:text-forest-700 transition-colors">
              Green <span className="text-forest-600">Vibes</span>
            </span>
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button 
              onClick={() => scrollToSection('quienes-somos')}
              className="hover:text-forest-700 transition-colors cursor-pointer"
              id="nav-about-us"
            >
              Quiénes Somos
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="hover:text-forest-700 transition-colors cursor-pointer"
              id="nav-products"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('valores')}
              className="hover:text-forest-700 transition-colors cursor-pointer"
              id="nav-highlights"
            >
              Elegirnos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="hover:text-forest-700 transition-colors cursor-pointer"
              id="nav-contact"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Header Button */}
          <div>
            <button
              onClick={() => scrollToSection('productos')}
              className="bg-forest-900 hover:bg-forest-800 text-stone-50 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              id="header-cta"
            >
              Explorar Menú
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section 
        id="hero-section" 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-50"
      >
        {/* Background Image - Bright, clean and natural with no dark filter overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Ingredientes naturales y jugos Green Vibes preparados artesanalmente en frío" 
            className="w-full h-full object-cover scale-100"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Minimalist Button container - positioned lower (un poco más abajo) */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 right-0 z-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('productos')}
              className="group flex items-center gap-2 bg-white/90 hover:bg-white text-forest-900 border border-stone-200 hover:border-forest-300 font-bold tracking-widest uppercase px-6 py-3.5 rounded-full text-xs transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer backdrop-blur-xs"
              id="hero-cta-btn"
            >
              Explorar Menú
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-300 text-forest-700" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Ambient Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-stone-50 to-transparent z-10 pointer-events-none" />
      </section>

      {/* 3. SECCIÓN QUIÉNES SOMOS */}
      <section 
        id="quienes-somos" 
        className="relative py-24 md:py-32 overflow-hidden bg-stone-50"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          
          {/* Subtle accent text with professional polish custom left border indicator */}
          <div className="flex flex-col items-center md:items-start mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-forest-600 border-l-4 border-lime-accent pl-3.5 block">Nuestra Filosofía</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LADO IZQUIERDO: TEXT CONTENT */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 mb-6 leading-tight">
                Honramos a la tierra para nutrir tu esencia vibrante
              </h2>
              
              <div className="space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  En <strong className="text-forest-900 font-semibold">Green Vibes</strong> creemos que el bienestar no es un destino de paso, sino un estilo de vida activo y consciente. Nacimos con el propósito de conectar de manera genuina las maravillosas bondades de la tierra con tu ajetreado día a día.
                </p>
                <p>
                  Cada una de nuestras bebidas es elaborada con hortalizas, tubérculos y frutas cultivados respetuosamente por agricultores de proximidad bajo principios de sustentabilidad. El método artesanal de prensado en frío nos permite conservar intactos el 100% de las enzimas, minerales y nutrientes, para que experimentes la naturaleza en su estado más potente, transparente y limpio.
                </p>
                <p className="text-forest-700 font-semibold">
                  Sin conservadores, sin azúcares engañosas, sin pasteurización térmica. Solo ingredientes puros que tu cuerpo reconoce y agradece al instante.
                </p>
              </div>

              {/* Mini Highlights Points */}
              <div className="mt-8 grid grid-cols-2 gap-4 pt-8 border-t border-stone-200">
                <div className="flex items-start gap-2.5">
                  <div className="text-forest-900 bg-forest-100 p-1.5 rounded-full mt-0.5 shadow-sm">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-forest-900">100% Íntegro</h4>
                    <p className="text-xs text-stone-500">Sin aditivos ni colorantes</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="text-forest-900 bg-forest-100 p-1.5 rounded-full mt-0.5 shadow-sm">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-forest-900">Artesanos Green</h4>
                    <p className="text-xs text-stone-500">Elaboración ética y local</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LADO DERECHO: PHOTO */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative group">
                {/* Decorative background cards */}
                <div className="absolute -inset-2 bg-linear-to-tr from-forest-200 via-forest-100 to-lime-accent rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Main Image Frame - Premium polish matching style */}
                <div className="relative bg-white p-3 rounded-2xl border border-forest-100 shadow-md overflow-hidden">
                  <img 
                    src={quienessomosBg} 
                    alt="Hierbas frescas y frutas seleccionadas que forman la base orgánica de nuestros jugos naturales" 
                    className="w-full h-100 sm:h-120 object-cover rounded-xl transition-all duration-700 group-hover:scale-102"
                  />
                  
                  {/* Decorative badge with company core metric */}
                  <div className="absolute bottom-8 left-8 right-8 bg-forest-950/95 backdrop-blur-md rounded-2xl p-6 text-stone-50 shadow-xl border border-forest-800/80">
                    <span className="font-display block text-3xl font-extrabold text-lime-accent">100% Cero</span>
                    <span className="text-xs uppercase tracking-widest text-stone-300 block font-bold mt-1">Químicos sintéticos</span>
                    <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                      Llegamos directo del extractor higiénico frío a tu envase de vidrio con la mayor rapidez garantizada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE PRODUCTOS (INTRODUCCIÓN Y CATÁLOGO) */}
      <section 
        id="productos" 
        className="py-24 md:py-32 bg-stone-50 border-y border-forest-100/30"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          
          {/* Header Introduction Block */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-forest-600 mb-3.5 block border-l-4 border-lime-accent pl-3.5 w-fit mx-auto">Premium Cold Press</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 mb-6">
              Elixir natural embotellado en vidrio artesanal
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
              Nuestra selecta gama de bebidas prensadas está balanceada bajo minuciosos análisis nutricionales. Haz clic sobre cualquiera para descubrir sus secretos.
            </p>
          </div>

          {/* BANNER DESTACADO (INTRODUCCIÓN VISUAL DE GAMA) */}
          <div className="mb-16 relative rounded-3xl overflow-hidden shadow-xl border border-forest-100 h-64 sm:h-87.5 md:h-112.5 bg-stone-100 group">
            {/* Visual background image of product line - clean and fully bright */}
            <div className="absolute inset-0">
              <img 
                src={inicioproductosBg} 
                alt="Retrato artístico de la gama botánica Green Vibes sobre base neutra y elegante" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-101"
              />
            </div>
          </div>

          {/* CUADRÍCULA (GRID) DE 4 RECUADROS LIMPIOS (CATÁLOGO DE 4 BEBIDAS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((prod) => (
              <motion.div
                key={prod.id}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProduct(prod)}
                className={`bg-white rounded-3xl border border-forest-100 hover:border-forest-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden`}
                id={`product-card-${prod.id}`}
              >
                {/* Product Image Frame */}
                <div className="relative overflow-hidden h-64 bg-stone-150 group-hover:brightness-105 transition-all">
                  <img 
                    src={prod.image} 
                    alt={`Bebida premium ${prod.name}, jugo de ${prod.ingredients.slice(0, 3).join(', ')}`} 
                    className="w-full h-full object-cover transition-all duration-500 scale-100 hover:scale-105"
                  />
                  {/* Hover visual highlight cue */}
                  <div className="absolute inset-0 bg-forest-950/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-forest-950 text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-full shadow-md">
                      Ver Ingredientes
                    </span>
                  </div>
                </div>

                {/* Product Text details */}
                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-forest-600 uppercase tracking-widest block mb-1">
                      {prod.tagline}
                    </span>
                    <h4 className="font-display text-xl font-bold text-forest-950 mb-2 hover:text-forest-750 transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-stone-600 text-xs font-light leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>
                  </div>
                  
                  {/* Card Actions Footer */}
                  <div className="mt-5 pt-4 border-t border-forest-100 flex items-center justify-between text-xs font-bold text-forest-800">
                    <span className="text-stone-400 font-mono text-[9px] uppercase font-medium">Bebida Activa</span>
                    <span className="flex items-center gap-1 text-forest-700 hover:text-forest-900">
                      Detalle <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECCIÓN HIGHLIGHTS (¿POR QUÉ ELEGIRNOS?) */}
      <section 
        id="valores" 
        className="py-24 bg-forest-900 text-stone-50 relative overflow-hidden border-b border-forest-950/30"
      >
        {/* Background Image with Dark Overlays for high-contrast text readability */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1920"
            alt="Fondo de hojas botánicas frescas Green Vibes" 
            className="w-full h-full object-cover opacity-25 filter brightness-45 contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/95 via-forest-950/70 to-forest-950/95" />
        </div>

        {/* Subtle geometric circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-2xl uppercase font-extrabold tracking-widest text-lime-accent block mb-3 border-b border-white/10 pb-2 w-fit mx-auto">Nuestro Compromiso</span>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-wide">
              ¿Por qué elegir Green Vibes?
            </h3>
            <p className="text-stone-200 text-3xl sm:text-xl font-normal tracking-widest mt-4 leading-relaxed">
              Cada paso de nuestro proceso está optimizado para garantizar pureza botánica, nutrición responsable y cero desperdicios ambientales perjudiciales.
            </p>
          </div>

          {/* FILA HORIZONTAL DE 4 RECUADROS CONSECUTIVOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pilar 1: 100% Orgánico */}
            <div className="bg-forest-950/40 border border-forest-800/60 rounded-3xl p-8 hover:bg-forest-950/60 transition-all duration-300 flex flex-col justify-between align-start group">
              <div>
                <div className="w-14 h-14 bg-lime-accent/10 border border-lime-accent/20 rounded-2xl flex items-center justify-center text-lime-accent mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Leaf className="h-6 w-6" />
                </div>
                <h4 className="font-display text-xl font-extrabold tracking-widest text-stone-50 mb-3">
                  100% Orgánico
                </h4>
                <p className="text-stone-200 text-xl sm:text-base font-normal tracking-widest leading-relaxed">
                  Todos nuestros ingredientes provienen de huertos con certificación orgánica que respean la biodiversidad y evitan el uso de pesticidas artificiales nocivos.
                </p>
              </div>
            </div>

            {/* Pilar 2: Sin Azúcar Añadida */}
            <div className="bg-forest-950/40 border border-forest-800/60 rounded-3xl p-8 hover:bg-forest-950/60 transition-all duration-300 flex flex-col justify-between align-start group">
              <div>
                <div className="w-14 h-14 bg-lime-accent/10 border border-lime-accent/20 rounded-2xl flex items-center justify-center text-lime-accent mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-extrabold tracking-wide text-stone-50 mb-3">
                  Sin Azúcar Añadida
                </h4>
                <p className="text-stone-200 text-xs sm:text-sm font-normal tracking-wide leading-relaxed">
                  No añadimos endulzantes artificiales ni jarabes de maíz de alta fructosa. El perfil dulce es sutil y proviene 100% de la fruta fresca madura natural.
                </p>
              </div>
            </div>

            {/* Pilar 3: Envases Sustentables */}
            <div className="bg-forest-950/40 border border-forest-800/60 rounded-3xl p-8 hover:bg-forest-950/60 transition-all duration-300 flex flex-col justify-between align-start group">
              <div>
                <div className="w-14 h-14 bg-lime-accent/10 border border-lime-accent/20 rounded-xl flex items-center justify-center text-lime-accent mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Droplet className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-extrabold tracking-wide text-stone-50 mb-3">
                  Envases Sustentables
                </h4>
                <p className="text-stone-200 text-xs sm:text-sm font-normal tracking-wide leading-relaxed">
                  Botellas de vidrio premium que aíslan la luz UV directa y tapas ecológicas biodegradables. Promovemos el retorno y reutilización de envases.
                </p>
              </div>
            </div>

            {/* Pilar 4: Prensado en Frío */}
            <div className="bg-forest-950/40 border border-forest-800/60 rounded-3xl p-8 hover:bg-forest-950/60 transition-all duration-300 flex flex-col justify-between align-start group">
              <div>
                <div className="w-14 h-14 bg-lime-accent/10 border border-lime-accent/20 rounded-xl flex items-center justify-center text-lime-accent mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <GlassWater className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-extrabold tracking-wide text-stone-50 mb-3">
                  Prensado en Frío
                </h4>
                <p className="text-stone-200 text-xs sm:text-sm font-normal tracking-wide leading-relaxed">
                  Tecnología de prensa hidráulica lenta sin generación de calor por fricción eléctrica. Mantiene vitaminas, minerales y enzimas vivas hasta por 5 días.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 6. SECCIÓN DE CONTACTO */}
      <section 
        id="contacto" 
        className="py-24 md:py-32 bg-stone-50/50 border-t border-forest-100/30"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          
          {/* Header Contact Block */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-forest-600 block mb-3.5 border-l-4 border-lime-accent pl-3.5 w-fit mx-auto">Canal Abierto</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-forest-900">
              Conectemos de forma natural
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light mt-4">
              Si deseas contactarte o seguirnos en nuestras redes sociales, aqui te dejamos toda la información disponible!!
            </p>
          </div>

          {/* DISEÑO DE DOS COLUMNAS PERFECTAMENTE ALINEADAS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* COLUMNA IZQUIERDA: IMAGEN ESTÉTICA COMPLETA */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-sm" id="workshop-image-column">
              
              <div className="relative rounded-2xl overflow-hidden flex-grow min-h-[380px] md:min-h-[460px] shadow-sm border border-forest-100 group">
                <img 
                  src={contactBg}
                  alt="Aesthetic organic store counter representing Green Vibes central workshop location" 
                  className="w-full h-full object-cover filter brightness-90 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Upper Overlay Badges */}
                

                {/* Bottom elegant overlay containing the address and coordinates */}
                
              </div>

              {/* Hours section */}
              <div className="mt-6 pt-5 border-t border-forest-100 flex items-center gap-4 text-xs text-stone-600">
                <Clock className="h-5 w-5 text-forest-600 flex-shrink-0" />
                <div>
                  <span className="font-bold block text-forest-900">Horarios de Entrega Directa</span>
                  <p className="font-light text-stone-700">Lunes a Sábado de 07:00 AM a 04:00 PM (Lote fresco exprimido diario).</p>
                </div>
              </div>

            </div>

            {/* COLUMNA DERECHA: BLOQUE DE INFORMACIÓN DE CONTACTO AMPLIADO */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-10 border border-forest-100 shadow-sm" id="large-contact-info-block">
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-forest-900 mb-2">
                    Canales de Atención Directa
                  </h3>
                  <p className="text-stone-600 text-sm font-light leading-relaxed">
                    Estamos encantados de atenderte de forma personalizada. Conéctate directamente con nuestros asesores de bienestar para pedidos, cotizaciones especiales o soporte.
                  </p>
                </div>

                {/* Grand scale Contact Cards */}
                <div className="space-y-4">
                  
                  {/* PHONE CARD */}
                  <a 
                    href="tel:+525584219900"
                    className="group flex items-center gap-5 p-5 bg-stone-50 hover:bg-forest-50 border border-stone-200/60 hover:border-forest-200 rounded-2xl transition-all duration-300 shadow-xs"
                    id="large-contact-phone-card"
                  >
                    <div className="p-4 rounded-xl bg-forest-900 text-lime-accent group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-forest-600 block mb-0.5">
                        Línea Telefónica y WhatsApp
                      </span>
                      <span className="font-display text-lg sm:text-xl font-bold text-stone-900 group-hover:text-forest-900 transition-colors">
                        +52 55 8421 9900
                      </span>
                      <span className="text-xs text-stone-500 font-light block mt-0.5">
                        Resolución de dudas y asesoría de jugoterapia exprés.
                      </span>
                    </div>
                  </a>

                  {/* EMAIL CARD */}
                  <a 
                    href="mailto:hola@greenvibesjugos.com"
                    className="group flex items-center gap-5 p-5 bg-stone-50 hover:bg-forest-50 border border-stone-200/60 hover:border-forest-200 rounded-2xl transition-all duration-300 shadow-xs"
                    id="large-contact-email-card"
                  >
                    <div className="p-4 rounded-xl bg-forest-900 text-lime-accent group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-forest-600 block mb-0.5">
                        Correo de Bienestar
                      </span>
                      <span className="font-display text-lg sm:text-xl font-bold text-stone-900 group-hover:text-forest-900 transition-colors break-all">
                        hola@greenvibesjugos.com
                      </span>
                      <span className="text-xs text-stone-500 font-light block mt-0.5">
                        Atención corporativa, colaboraciones y eventos especiales.
                      </span>
                    </div>
                  </a>

                </div>

                {/* SOCIAL MEDIA SECTION */}
                <div className="pt-2">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-4">
                    Comunidad y Redes Sociales
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* INSTAGRAM BUTTON */}
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3.5 p-4 bg-stone-50 hover:bg-lime-accent/15 border border-stone-150 hover:border-lime-accent/50 rounded-xl transition-all duration-300 group"
                      id="large-contact-instagram"
                    >
                      <div className="p-2 sm:p-2.5 bg-forest-900 text-lime-accent rounded-xl group-hover:scale-105 transition-transform">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-stone-900 block group-hover:text-forest-900 transition-colors">
                          @greenvibes.cr
                        </span>
                        <span className="text-[10px] text-stone-500 font-light">
                          Instagram oficial
                        </span>
                      </div>
                    </a>

                    {/* FACEBOOK BUTTON */}
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3.5 p-4 bg-stone-50 hover:bg-lime-accent/15 border border-stone-150 hover:border-lime-accent/50 rounded-xl transition-all duration-300 group"
                      id="large-contact-facebook"
                    >
                      <div className="p-2 sm:p-2.5 bg-forest-900 text-lime-accent rounded-xl group-hover:scale-105 transition-transform">
                        <Facebook className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-stone-900 block group-hover:text-forest-900 transition-colors">
                          Green Vibes Costa Rica
                        </span>
                        <span className="text-[10px] text-stone-500 font-light">
                          Comunidad en Facebook
                        </span>
                      </div>
                    </a>

                  </div>
                </div>

              </div>

              {/* Footnote assurance */}
              <div className="mt-8 pt-5 border-t border-stone-100 flex items-center gap-3 text-[11px] text-stone-500 font-light">
                <Check className="h-4 w-4 text-forest-600 shrink-0" />
                <span>Atención humana al instante. Sin bots, resolvemos tus dudas directo desde nuestro taller.</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. INSTITUTIONAL MAPLE NEWSLETTER & FOOTER */}
      <footer className="bg-forest-950 text-stone-200 border-t border-stone-900">

        {/* Real simple copyright footer */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <div className="bg-forest-900/80 p-2 rounded-lg text-lime-accent">
              <Leaf className="h-4 w-4 fill-current" />
            </div>
            <span>
              &copy; {new Date().getFullYear()} Green Vibes S.A. de C.V. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex items-center gap-6 font-light">
            <span className="hover:text-stone-200 transition-colors cursor-pointer">Aviso de Privacidad</span>
            <span className="hover:text-stone-200 transition-colors cursor-pointer">Términos de Servicio</span>
            <span className="hover:text-stone-200 transition-colors cursor-pointer">Jugoterapia Segura</span>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE MODAL COMPONENT (CATÁLOGO DETALLADO) */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-stone-50 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()} // stop auto close
            >
              {/* Product graphic side */}
              <div className="relative md:w-5/12 bg-stone-200 min-h-62.5 md:min-h-auto shrink-0">
                <img 
                  src={selectedProduct.expandedImage} // <-- Carga la imagen dedicada detallada
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Absolute tag */}
                <div className="absolute top-4 left-4 bg-forest-950/80 text-stone-50 font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                  100% Crudo y Vivo
                </div>

                {/* Close Button top-right absolute inside photo on mobile, inside header on desktop */}
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-stone-50 hover:bg-stone-100 hover:scale-105 p-2 rounded-full shadow-md text-stone-800 md:hidden cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Product detail content side */}
              <div className="p-6 sm:p-8 md:w-7/12 flex flex-col justify-between relative bg-white">
                
                {/* Desktop Close Button inside layout */}
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 hover:bg-stone-100 hover:scale-105 p-2 rounded-full text-stone-500 hover:text-stone-850 cursor-pointer hidden md:block transition-all"
                  aria-label="Cerrar modal"
                >
                  <X className="h-4.5 w-4.5" />
                </button>

                <div>
                  <span className="text-[10px] font-bold text-forest-600 tracking-widest uppercase block mb-1">
                    Ficha Técnica Botánica
                  </span>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-forest-900 mb-2">
                    {selectedProduct.name}
                  </h3>
                  
                  <p className="text-stone-500 text-xs italic mb-4">
                    "{selectedProduct.tagline}"
                  </p>

                  <div className="h-px bg-stone-150 my-4" />

                  {/* Long description text */}
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-5">
                    {selectedProduct.longDescription}
                  </p>

                  {/* Active Ingredients list */}
                  <div className="mb-5">
                    <span className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Ingredientes Activos:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProduct.ingredients.map((ingredient, idx) => (
                        <span 
                          key={idx} 
                          className="bg-stone-100 text-stone-700 text-[11px] px-2.5 py-1 rounded-full font-medium"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Active Benefits list */}
                  <div className="mb-5 bg-stone-50/50 p-4 rounded-xl border border-stone-200/50">
                    <span className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Beneficios Clave:
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-600 font-light">
                      {selectedProduct.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-forest-500 fill-white" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nutritional Facts card */}
                  <div>
                    <span className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                      Información Nutricional (350ml):
                    </span>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2 border border-stone-100 rounded-lg bg-stone-50/20">
                        <span className="text-stone-400 text-[10px] uppercase font-medium">Contenido Energético</span>
                        <p className="font-bold text-forest-900 mt-0.5">{selectedProduct.nutritionalFacts.calories} kcal</p>
                      </div>
                      <div className="p-2 border border-stone-100 rounded-lg bg-stone-50/20">
                        <span className="text-stone-400 text-[10px] uppercase font-medium">Azúcares de Fruta</span>
                        <p className="font-bold text-forest-900 mt-0.5">{selectedProduct.nutritionalFacts.sugar}</p>
                      </div>
                      <div className="p-2 border border-stone-100 rounded-lg bg-stone-50/20">
                        <span className="text-stone-400 text-[10px] uppercase font-medium">Proteína Vegetal</span>
                        <p className="font-bold text-forest-900 mt-0.5">{selectedProduct.nutritionalFacts.protein}</p>
                      </div>
                      <div className="p-2 border border-stone-100 rounded-lg bg-stone-50/20">
                        <span className="text-stone-400 text-[10px] uppercase font-medium">Altas Concentraciones</span>
                        <p className="font-bold text-forest-950 mt-0.5 text-[10px] line-clamp-1">
                          {selectedProduct.nutritionalFacts.vitamins.slice(0, 2).join(', ')}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer warning standard for safety */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[10px] text-stone-400 leading-tight">
                    <AlertCircle className="h-3.5 w-3.5 text-stone-300" /> Consultar antes con especialista si padece diabetes severa.
                  </span>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="cursor-pointer bg-forest-900 hover:bg-forest-800 text-stone-50 text-xs font-semibold py-2 px-4 rounded-xl shadow-md transition-colors"
                  >
                    Cerrar Detalle
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
