/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-expect-error - image asset (Imagen de inicio)
import heroBg from './assets/images/horizontal 20jun.jpeg';
// @ts-expect-error - image asset (Imagen de inicio VERSION CELULAR)
import heroBgMobile from './assets/images/vertical_sin_data_B_sin_logo.jpeg';
// @ts-expect-error - image asset (Imagen de quienes somos)
import quienessomosBg from './assets/images/quienes_somos_version_mejorada.jpg';
// @ts-expect-error - image asset (Imagen de menu productos)
import inicioproductosBg from './assets/images/our_juices_1600x700.jpeg';
// @ts-expect-error - image asset (Imagen de menu productos VERSION CELULAR)
import bannerproductosMBg from './assets/images/800x600 A.jpg.jpeg'
// @ts-expect-error - image asset (Imagen producto mango)
import mangoproductoBg from './assets/images/modelo mango.jpg.jpeg';
// @ts-expect-error - image asset (Imagen producto mora)
import moraproductoBg from './assets/images/modelo mora.jpg.jpeg';
// @ts-expect-error - image asset (Imagen producto cas)
import casproductoBg from './assets/images/modelo cas.jpg.jpeg';
// @ts-expect-error - image asset (Imagen producto maracuya)
import maracuyaproductoBg from './assets/images/modelo maracuya.jpg.jpeg';
// @ts-expect-error - image asset (Imagen de mango expandida)
import mangoexpandedBg from './assets/images/botella mango 800x600 D.jpg.jpeg';
// @ts-expect-error - image asset (Imagen de mora expandida)
import moraexpandedBg from './assets/images/botella mora 800x600 B.jpg.jpeg';
// @ts-expect-error - image asset (Imagen de cas expandida)
import casexpandedBg from './assets/images/botella cas 800x600 B.jpg.jpeg';
// @ts-expect-error - image asset (Imagen de maracuya expandida)
import maracuyaexpandedBg from './assets/images/botella maracuya 800x600 B.jpg.jpeg';
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
  AlertCircle,
  Ban,
  Recycle,
  Atom,
  Thermometer
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
    name: 'Mango Juice',
    tagline: 'Promotes Heart Health',
    description: 'Sweet, smooth,and naturally energizing. Mango provides carotenoids, Vitamin C, and antioxidants',
    longDescription: 'Mango transforms tropical sweetness into a functional experience rich in nutrition and natural energy. Made with fresh mango and fortified with Vitamin C, this juice stands out for its content of antioxidant compounds such as mangiferin, carotenoids, and polyphenols, which have been associated with anti-inflammatory effects and cellular protection. Multiple studies suggest that mango contains bioactive compounds capable of supporting digestive wellness, immune health, and oxidative stress regulation.',
    ingredients: ['Fresh Mango', 'Water', 'Citric Acid', 'Vitamin C'],
    benefits: ['Antioxidant support', 'Immune wellness', 'Digestive health'],
    nutritionalFacts: {
      calories: 42,
      sugar: '9.2g',
      protein: '0.3g',
      vitamins: ['Vitamin K', 'Vitamin C', 'Iron', 'Folic Acid']
    },
    colorClass: 'border-emerald-500/20 hover:border-emerald-500/70',
    accentColor: 'text-emerald-600 bg-emerald-50',
    image: mangoproductoBg, 
    expandedImage: mangoexpandedBg // imagen de la ampliación
  },
  {
    id: 'gold-glow',
    name: 'Blackberry Juice',
    tagline: 'Boosts Immunity & Skin Health',
    description: 'A burst of natural antioxidants and bold berry flavor. Rich in anthocyanins and polyphenols, blackberry supports cellular wellness, immune health, and protection against oxidative stress. A vibrant, refreshing, and naturally functional juice.',
    longDescription: 'Blackberry is a bold and deeply antioxidant-rich beverage crafted from fresh blackberries packed with anthocyanins and phenolic compounds. Blackberries are scientifically recognized for their high antioxidant capacity and potential to reduce inflammation and oxidative stress associated with metabolic and cardiovascular conditions.',
    ingredients: ['Fresh blackberries', 'Water', 'Citric Acid', 'Vitamin C',],
    benefits: ['High antioxidant capacity', 'Natural immune support', 'Potential anti-inflammatory', 'Metabolic wellness',],
    nutritionalFacts: {
      calories: 39,
      sugar: '8.5g',
      protein: '0.4g',
      vitamins: ['Vitamin C', 'Vitamin K', 'Vitamin E']
    },
    colorClass: 'border-amber-500/20 hover:border-amber-500/70',
    accentColor: 'text-amber-600 bg-amber-50',
    image: moraproductoBg,
    expandedImage: moraexpandedBg // imagen de la ampliación
  },
  {
    id: 'ruby-reset',
    name: 'Cas Juice',
    tagline: 'natural hydration, and digestive benefits',
    description: 'A Costa Rican tropical treasure known for its exceptional Vitamin C content and antioxidant potential. Refreshing, tart, and naturally revitalizing, it supports hydration and everyday wellness.',
    longDescription: 'Cas transforms one of Costa Rica’s most iconic tropical fruits into a uniquely refreshing functional beverage. This tropical fruit stands out for its exceptionally high Vitamin C content, phenolic compounds, and antioxidant capacity, making it one of the region’s most promising functional fruits.',
    ingredients: ['Fresh cas fruit', 'Water', 'Citric Acid', 'Vitamin C',],
    benefits: ['Naturally high in Vitamin C', 'Strong antioxidant potential', 'Supports hydration and digestive wellness', 'Tropical Functional nutrition'],
    nutritionalFacts: {
      calories: 38,
      sugar: '8g',
      protein: '0.4g',
      vitamins: ['Vitamin C', 'Vitamin A', 'Vitamin B']
    },
    colorClass: 'border-rose-500/20 hover:border-rose-500/70',
    accentColor: 'text-rose-600 bg-rose-50',
    image: casproductoBg,
    expandedImage: casexpandedBg
  },
  {
    id: 'pure-ginger-shot',
    name: 'Passion Fruit Juice',
    tagline: 'Stress Reduction & Sleep',
    description: 'Bold, tropical, and full of vitality. Rich in Vitamin C, polyphenols, and natural antioxidants, passion fruit supports digestive wellness, immune function, and cellular protection. A vibrant tropical experience in every bottle.',
    longDescription: 'Maracuyá combines tropical intensity and functional nutrition in a vibrant beverage rich in Vitamin C, carotenoids, and antioxidant compounds. Passion fruit has been extensively studied for its bioactive properties associated with digestive wellness, oxidative stress reduction, and potential anti-inflammatory benefits.',
    ingredients: ['Fresh passion fruit', 'Water', 'Citric Acid', 'Vitamin C'],
    benefits: ['Rich in vitamin C and antioxidants', 'Supports digestive wellness', 'Potential anti-inflammatory effects', 'Tropical hydration and wellness'],
    nutritionalFacts: {
      calories: 45,
      sugar: '9.5g',
      protein: '0.5g',
      vitamins: ['Vitamin B2', 'Vitamin C', 'Vitamin A', 'Vitamin B3']
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
              Gréén <span className="text-forest-600">Vibes</span>
            </span>
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button 
              onClick={() => scrollToSection('quienes-somos')}
              className="hover:text-forest-700 transition-colors cursor-pointer"
              id="nav-about-us"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="hover:text-forest-700 transition-colors cursor-pointer"
              id="nav-products"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('valores')}
              className="hover:text-forest-700 transition-colors cursor-pointer"
              id="nav-highlights"
            >
              Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="hover:text-forest-700 transition-colors cursor-pointer"
              id="nav-contact"
            >
              Contact
            </button>
          </nav>

          {/* CTA Header Button */}
          <div>
            <button
              onClick={() => scrollToSection('productos')}
              className="bg-forest-900 hover:bg-forest-800 text-stone-50 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              id="header-cta"
            >
              Explore Menu
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

          {/*Imagen de hero version celular*/}
          <img 
            src={heroBgMobile} 
            alt="Ingredientes naturales y jugos Green Vibes - Versión Móvil" 
            className="block md:hidden w-full h-full object-cover scale-100 object-center"
            referrerPolicy="no-referrer"
          />

          {/*Imagen de hero VERSION COMPUTADOR*/}
          <img 
            src={heroBg} 
            alt="Ingredientes naturales y jugos Green Vibes preparados artesanalmente en frío - Versión Escritorio" 
            className="hidden md:block w-full h-full object-cover scale-100 object-center"
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
              Explore Menu
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
            <span className="text-xs uppercase font-bold tracking-widest text-forest-600 border-l-4 border-lime-accent pl-3.5 block">Our Philosophy</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LADO IZQUIERDO: TEXT CONTENT */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 mb-6 leading-tight">
                Drink Better. <br /> 
                Live Vibrantly
              </h2>
              
              <div className="space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed font-light">
                <p>
                   <strong className="text-forest-900 font-semibold">Green Vibes</strong> transforms real tropical fruits into functional beverages crafted for people seeking a healthier, more natural, and mindful way to nourish themselves every day. Made with natural ingredients, fortified with Vitamin C, and packaged in recyclable glass, our juices combine authentic flavor, science-backed nutrition, and sustainability in every bottle. 
Each formulation harnesses the natural bioactive compounds found in fruit to support hydration, digestive wellness, immune health, and antioxidant protection—without artificial preservatives or flavors.
 More than just a juice, Green Vibes is a modern alternative to ultra-processed beverages: a refreshing, tropical, and naturally functional experience that promotes personal well-being while caring for the planet.

                </p>
                <p>
                  Bright, tropical, refreshing, and naturally vibrant flavors inspired by Costa Rica's biodiversity.
                </p>
                <p className="text-forest-700 font-semibold">
                  No artificial flavors · No artificial preservatives · Glass bottled · Microplastic-free experience · Locally sourced fruit · Natural ingredients
                </p>
              </div>

              {/* Mini Highlights Points */}
              <div className="mt-8 grid grid-cols-2 gap-4 pt-8 border-t border-stone-200">
                <div className="flex items-start gap-2.5">
                  <div className="text-forest-900 bg-forest-100 p-1.5 rounded-full mt-0.5 shadow-sm">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-forest-900 tracking-wide">100% Intact</h4>
                    <p className="text-xs text-stone-500">Real tropical fruits · Natural Vitamin C</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="text-forest-900 bg-forest-100 p-1.5 rounded-full mt-0.5 shadow-sm">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-forest-900 tracking-wide">Local artisans</h4>
                    <p className="text-xs text-stone-500">Ethical and local production</p>
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
                  
                  {/* Decorative badge with company core metric - Matching uploaded design card */}
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 bg-forest-950/95 backdrop-blur-md rounded-2xl p-3 md:p-4 text-stone-50 shadow-2xl border border-white/10" id="brand-commitment-badge">
                    {/* Slogan Header Block */}
                    <div className="mb-2.5">
                      <h3 className="text-base sm:text-lg md:text-xl font-black text-white tracking-tight leading-tight">
                        Real fruit. Real benefits. 
                        <span className="text-lime-400"> Real vibes.</span>
                      </h3>
                    </div>

                    {/* Bullet Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 border-t border-white/10 pt-2.5 pb-1">
                      {/* item 1: 100% Natural */}
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-lime-400 bg-white/5">
                          <Leaf className="h-3 w-3" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] md:text-xs font-bold text-stone-100 leading-tight">
                          100% Natural
                        </span>
                      </div>

                      {/* item 2: Immune Support */}
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-lime-400 bg-white/5">
                          <ShieldCheck className="h-3 w-3" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] md:text-xs font-bold text-stone-100 leading-tight">
                          Immune Support
                        </span>
                      </div>

                      {/* item 3: Hydrating & Refreshing */}
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-lime-400 bg-white/5">
                          <Droplet className="h-3 w-3" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] md:text-xs font-bold text-stone-100 leading-tight">
                          Hydrating &<br className="hidden md:block" /> Refreshing
                        </span>
                      </div>

                      {/* item 4: No Preservatives / No Artificial Anything */}
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-lime-400 bg-white/5">
                          <Ban className="h-3 w-3" />
                        </div>
                        <div className="flex flex-col text-[10px] sm:text-[11px] md:text-xs font-bold text-stone-100 leading-tight">
                          <span>No Preservatives</span>
                          <span className="text-[8px] sm:text-[9px] opacity-75 font-semibold">No Artificial Anything</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom centered text */}
                    <div className="text-center pt-2 border-t border-white/10 mt-1.5">
                      <span className="text-[8px] sm:text-[9px] font-extrabold text-lime-400 uppercase tracking-widest block">
                        Tropical nutrition for your everyday.
                      </span>
                    </div>
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
            <span className="text-xs uppercase font-bold tracking-widest text-forest-600 mb-3.5 block border-l-4 border-lime-accent pl-3.5 w-fit mx-auto">Premium Juice</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 mb-6">
              Inspired by Tradition, Designed for the Future
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
              Before refrigeration existed, food preservation relied on knowledge, craftsmanship, and natural processes.
               Green vibes embraces this philosophy by creating shelf-stable functional beverages that do not require refrigeration, reducing dependence on cold-chain 
               logistics while maintaining quality and nutritional value. By combining traditional preservation principles with modern food science, we offer a more sustainable way to enjoy tropical wellness.
            </p>
          </div>

          {/* BANNER DESTACADO (INTRODUCCIÓN VISUAL DE GAMA) */}
          <div className="mb-16 relative rounded-3xl overflow-hidden shadow-xl border border-forest-100 h-72 md:h-112.5 bg-stone-100 group">
            {/* Visual background image of product line - clean and fully bright */}
            <div className="absolute inset-0">
              {/*Imagen banner productos version MOBILE*/}
              <img
                src= {bannerproductosMBg}
                alt="Botella green vibes banner mobile"
                className="block md:hidden w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-101"
                referrerPolicy="no-referrer"
              />
              {/*Vista de imagen banner productos VERSION PC*/}
              <img 
                src={inicioproductosBg} 
                alt="Botella green vibes banner desktop" 
                className="hidden md:block w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-101"
                referrerPolicy="no-referrer"
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
                      View ingredients
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
                    <span className="text-stone-400 font-mono text-[9px] uppercase font-medium">Drink available</span>
                    <span className="flex items-center gap-1 text-forest-700 hover:text-forest-900">
                      Details <ChevronRight className="h-3 w-3" />
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
          <div className="absolute inset-0 bg-linear-to-b from-forest-950/95 via-forest-950/70 to-forest-950/95" />
        </div>

        {/* Subtle geometric circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-lime-500 block mb-3 w-fit mx-auto">OUR COMMITMENT</span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Why choose Green Vibes?
            </h3>
            <p className="text-stone-300 text-sm sm:text-base font-medium mt-3 leading-relaxed max-w-3xl mx-auto">
              Every step of our process is optimized to ensure botanical purity, responsible nutrition, and zero harmful environmental waste.
            </p>
          </div>

          {/* FILA HORIZONTAL DE 6 RECUADROS CONSECUTIVOS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
            
            {/* Pilar 1: Botanical Purity */}
            <div className="bg-gradient-to-b from-forest-800/40 to-forest-900/40 border border-forest-700/50 rounded-2xl p-4 sm:p-5 hover:bg-forest-800/60 transition-all duration-300 flex flex-col align-start group">
              <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-xl flex items-center justify-center text-lime-400 mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Leaf className="h-5 w-5" />
              </div>
              <h4 className="font-display text-sm sm:text-base font-bold text-stone-50 mb-2 leading-tight">
                Botanical<br />Purity
              </h4>
              <p className="text-stone-300 text-[11px] sm:text-xs font-medium leading-relaxed">
                All our ingredients come from Central American farms that respect biodiversity. We also support local farms' production and distribution. We believe that each bottle will sustain a social network with a socioeconomic approach.
              </p>
            </div>

            {/* Pilar 2: Rich in Natural Antioxidants & Fiber */}
            <div className="bg-gradient-to-b from-forest-800/40 to-forest-900/40 border border-forest-700/50 rounded-2xl p-4 sm:p-5 hover:bg-forest-800/60 transition-all duration-300 flex flex-col align-start group">
              <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-xl flex items-center justify-center text-lime-400 mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Atom className="h-5 w-5" />
              </div>
              <h4 className="font-display text-sm sm:text-base font-bold text-stone-50 mb-2 leading-tight">
                Rich in Natural<br />Antioxidants<br />& Fiber
              </h4>
              <p className="text-stone-300 text-[11px] sm:text-xs font-medium leading-relaxed">
                Our fruits are naturally rich in antioxidants, especially the Costa Rican guava Cas (Psidium friedrichsthalianum). Also, all our juices are rich in polyphenols, and vitamin C, and dietary fiber. These bioactive compounds are associated with cellular protection, gut health, immune support, and metabolic well-being. 
              </p>
            </div>

            {/* Pilar 3: Glass That Makes a Difference */}
            <div className="bg-gradient-to-b from-forest-800/40 to-forest-900/40 border border-forest-700/50 rounded-2xl p-4 sm:p-5 hover:bg-forest-800/60 transition-all duration-300 flex flex-col align-start group">
              <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-xl flex items-center justify-center text-lime-400 mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Recycle className="h-5 w-5" />
              </div>
              <h4 className="font-display text-sm sm:text-base font-bold text-stone-50 mb-2 leading-tight">
                Glass That<br />Makes a<br />Difference
              </h4>
              <p className="text-stone-300 text-[11px] sm:text-xs font-medium leading-relaxed">
                Our glass bottles are 100% recyclable and reusable. They are free from microplastics and help reduce the impact of single-use plastic on our planet.
              </p>
            </div>

            {/* Pilar 4: Real Nutrition, Real Benefits */}
            <div className="bg-gradient-to-b from-forest-800/40 to-forest-900/40 border border-forest-700/50 rounded-2xl p-4 sm:p-5 hover:bg-forest-800/60 transition-all duration-300 flex flex-col align-start group">
              <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-xl flex items-center justify-center text-lime-400 mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Droplet className="h-5 w-5" />
              </div>
              <h4 className="font-display text-sm sm:text-base font-bold text-stone-50 mb-2 leading-tight">
                Real Nutrition,<br />Real Benefits
              </h4>
              <p className="text-stone-300 text-[11px] sm:text-xs font-medium leading-relaxed">
                Each bottle is crafted to support hydration, digestive health, and natural vitality—bringing you functional nutrition you can feel and trust.
              </p>
            </div>

            {/* Pilar 5: Made for You, Made Responsibly */}
            <div className="bg-gradient-to-b from-forest-800/40 to-forest-900/40 border border-forest-700/50 rounded-2xl p-4 sm:p-5 hover:bg-forest-800/60 transition-all duration-300 flex flex-col align-start group">
              <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-xl flex items-center justify-center text-lime-400 mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Heart className="h-5 w-5" />
              </div>
              <h4 className="font-display text-sm sm:text-base font-bold text-stone-50 mb-2 leading-tight">
                Made for You,<br />Made<br />Responsibly
              </h4>
              <p className="text-stone-300 text-[11px] sm:text-xs font-medium leading-relaxed">
                We craft clean, honest beverages with transparency and care, so you can enjoy what's good for you while we take care of what's good for the planet.
              </p>
            </div>

            {/* Pilar 6: No Cold Chain Required */}
            <div className="bg-linear-to-b from-forest-800/40 to-forest-900/40 border border-forest-700/50 rounded-2xl p-4 sm:p-5 hover:bg-forest-800/60 transition-all duration-300 flex flex-col align-start group relative overflow-hidden">
              <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-xl flex items-center justify-center text-lime-400 mb-4 shadow-sm group-hover:scale-105 transition-transform relative">
                <Thermometer className="h-5 w-5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-lime-400 rotate-45 rounded-full" />
                </div>
              </div>
              <h4 className="font-display text-sm sm:text-base font-bold text-stone-50 mb-2 leading-tight">
                No Cold Chain<br />Required
              </h4>
              <p className="text-stone-300 text-[11px] sm:text-xs font-medium leading-relaxed z-10">
                Our shelf-stable formulation eliminates the need for refrigeration during storage and transportation. By reducing reliance on cold-chain logistics, Green Vibes lowers energy consumption while making functional nutrition more accessible, sustainable, and convenient.
              </p>
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
            <span className="text-sm uppercase font-extrabold tracking-widest text-forest-700 block mb-4 border-l-4 border-lime-accent pl-3.5 w-fit mx-auto">Open contact</span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-forest-900">
              Connect with flavor
            </h2>
            <p className="text-stone-800 text-base sm:text-lg font-medium mt-4 leading-relaxed">
              If you want to get in touch or follow our social media
            </p>
          </div>

          {/* DISEÑO DE DOS COLUMNAS PERFECTAMENTE ALINEADAS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* COLUMNA IZQUIERDA: IMAGEN ESTÉTICA COMPLETA */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full bg-white rounded-3xl p-6 sm:p-8 border border-forest-100 shadow-sm" id="workshop-image-column">
              
              <div className="relative rounded-2xl overflow-hidden grow min-h-95 md:min-h-115 shadow-sm border border-forest-100 group">
                <img 
                  src={contactBg}
                  alt="Aesthetic organic store counter representing Green Vibes central workshop location" 
                  className="w-full h-full object-cover filter brightness-90 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Upper Overlay Badges */}
                

                {/* Bottom elegant overlay containing the address and coordinates */}
                
              </div>

              {/* Hours section */}
              <div className="mt-6 pt-5 border-t border-forest-150 flex items-center gap-4 text-sm text-stone-800">
                <Clock className="h-6 w-6 text-forest-700 shrink-0" />
                <div>
                  <span className="font-extrabold block text-forest-950 text-xl">Schedules</span>
                  <p className="font-semibold text-stone-700 mt-0.5">Monday to Friday, from 10:00 AM to 04:00 PM.</p>
                </div>
              </div>

            </div>

            {/* COLUMNA DERECHA: BLOQUE DE INFORMACIÓN DE CONTACTO AMPLIADO */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-10 border border-forest-100 shadow-sm" id="large-contact-info-block">
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-3xl font-extrabold text-forest-950 mb-3">
                    Our Social Media!
                  </h3>
                  <p className="text-stone-800 text-base font-medium leading-relaxed">
                    We're delighted to take on a new order. Here are the ways to contact us. Don't forget to follow us on social media.
                  </p>
                </div>

                {/* Grand scale Contact Cards */}
                <div className="space-y-4">
                  
                  {/* PHONE CARD */}
                  <a 
                    href="tel:+50683132961"
                    className="group flex items-center gap-6 p-6 bg-stone-50 hover:bg-forest-50 border border-stone-300 hover:border-forest-300 rounded-2xl transition-all duration-300 shadow-sm"
                    id="large-contact-phone-card"
                  >
                    <div className="p-4 rounded-xl bg-forest-900 text-lime-accent group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-widest text-forest-700 block mb-1">
                        PHONE LINE & WHATSAPP
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-black text-stone-950 group-hover:text-forest-950 transition-colors">
                        +506 8313-2961
                      </span>
                      <span className="text-sm text-stone-800 font-semibold block mt-1">
                        ASK QUESTIONS OR PLACE ORDERS
                      </span>
                    </div>
                  </a>

                  {/* EMAIL CARD */}
                  <a 
                    href="mailto:info@greenvibescr.com"
                    className="group flex items-center gap-6 p-6 bg-stone-50 hover:bg-forest-50 border border-stone-300 hover:border-forest-300 rounded-2xl transition-all duration-300 shadow-sm"
                    id="large-contact-email-card"
                  >
                    <div className="p-4 rounded-xl bg-forest-900 text-lime-accent group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-widest text-forest-700 block mb-1">
                        EMAIL
                      </span>
                      <span className="font-display text-xl sm:text-2xl font-black text-stone-950 group-hover:text-forest-950 transition-colors break-all">
                        info@greenvibescr.com
                      </span>
                      <span className="text-sm text-stone-800 font-semibold block mt-1">
                        Corporate Services, Partnerships, and Special Events.
                      </span>
                    </div>
                  </a>

                </div>

                {/* SOCIAL MEDIA SECTION */}
                <div className="pt-2">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-stone-500 mb-4">
                    Community and Social Media
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* INSTAGRAM BUTTON */}
                    <a 
                      href="https://www.instagram.com/greenvibes_cr" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3.5 p-5 bg-stone-50 hover:bg-lime-accent/15 border border-stone-150 hover:border-lime-accent/50 rounded-xl transition-all duration-300 group"
                      id="large-contact-instagram"
                    >
                      <div className="p-2 sm:p-2.5 bg-forest-900 text-lime-accent rounded-xl group-hover:scale-105 transition-transform">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-sm font-extrabold text-stone-950 block group-hover:text-forest-950 transition-colors">
                          @greenvibes.cr
                        </span>
                        <span className="text-xs text-stone-700 font-semibold">
                          Official Instagram
                        </span>
                      </div>
                    </a>

                    {/* FACEBOOK BUTTON */}
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3.5 p-5 bg-stone-50 hover:bg-lime-accent/15 border border-stone-150 hover:border-lime-accent/50 rounded-xl transition-all duration-300 group"
                      id="large-contact-facebook"
                    >
                      <div className="p-2.5 sm:p-2.5 bg-forest-900 text-lime-accent rounded-xl group-hover:scale-105 transition-transform">
                        <Facebook className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-sm font-extrabold text-stone-950 block group-hover:text-forest-950 transition-colors">
                          Green Vibes Costa Rica
                        </span>
                        <span className="text-xs text-stone-700 font-semibold">
                          Facebook Community
                        </span>
                      </div>
                    </a>

                  </div>
                </div>

              </div>

              {/* Footnote assurance */}
              <div className="mt-8 pt-5 border-t border-stone-200 flex items-center gap-3 text-xs text-stone-700 font-semibold">
                <Check className="h-5 w-5 text-forest-700 shrink-0 stroke-3" />
                <span>Remember to follow us on social media to stay up to date on our progress!</span>
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
              &copy; {new Date().getFullYear()} Green Vibes S.A. of C.V. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 font-light">
            <span className="hover:text-stone-200 transition-colors cursor-pointer">Privacy Notice</span>
            <span className="hover:text-stone-200 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-200 transition-colors cursor-pointer">Copyright</span>
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
              className="bg-stone-50 rounded-3xl overflow-y-auto max-w-3xl w-full max-h-[90vh] shadow-2xl border border-stone-200 flex flex-col md:flex-row md:items-stretch"
              onClick={(e) => e.stopPropagation()} // stop auto close
            >
              {/* Product graphic side */}
              <div className="relative md:w-5/12 bg-[#eeb805] min-h-75 md:min-h-full md:h-auto shrink-0 overflow-hidden">
                <img 
                  src={selectedProduct.expandedImage} // <-- Carga la imagen dedicada detallada
                  alt={selectedProduct.name} 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              
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
              <div className="p-6 sm:p-8 md:w-7/12 flex flex-col justify-between relative bg-white md:max-h-[90vh] md:overflow-y-auto">
                
                {/* Desktop Close Button inside layout */}
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 hover:bg-stone-100 hover:scale-105 p-2 rounded-full text-stone-500 hover:text-stone-850 cursor-pointer hidden md:block transition-all"
                  aria-label="Cerrar modal"
                >
                  <X className="h-4.5 w-4.5" />
                </button>

                <div>
                  <span className="text-xs font-extrabold text-forest-700 tracking-widest uppercase block mb-1.5">
                    Technical Details
                  </span>
                  
                  <h3 className="font-display text-3xl md:text-4xl font-black text-forest-950 mb-2">
                    {selectedProduct.name}
                  </h3>
                  
                  <p className="text-stone-850 text-sm sm:text-base font-bold italic mb-4">
                    "{selectedProduct.tagline}"
                  </p>

                  <div className="h-0.5 bg-stone-200 my-4" />

                  {/* Long description text */}
                  <p className="text-stone-800 text-sm sm:text-base font-semibold leading-relaxed mb-6">
                    {selectedProduct.longDescription}
                  </p>

                  {/* Active Ingredients list */}
                  <div className="mb-6">
                    <span className="block text-sm font-extrabold text-stone-900 uppercase tracking-wider mb-2.5">
                      Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.ingredients.map((ingredient, idx) => (
                        <span 
                          key={idx} 
                          className="bg-stone-100 text-stone-900 text-xs px-3.5 py-1.5 rounded-full font-extrabold border border-stone-200"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Active Benefits list */}
                  <div className="mb-6 bg-stone-50/80 p-5 rounded-2xl border-2 border-stone-200">
                    <span className="block text-sm font-extrabold text-stone-900 uppercase tracking-wider mb-2.5">
                      Key Benefits:
                    </span>
                    <ul className="space-y-2 text-sm text-stone-850 font-semibold">
                      {selectedProduct.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <Check className="h-4.5 w-4.5 text-forest-700 fill-white stroke-[3.5]" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nutritional Facts card */}
                  <div>
                    <span className="block text-sm font-extrabold text-stone-900 uppercase tracking-wider mb-2.5">
                      Nutritional Information (100ml):
                    </span>
                    <div className="grid grid-cols-2 gap-3.5 text-xs sm:text-sm">
                      <div className="p-3 border-2 border-stone-200 rounded-xl bg-stone-50/30">
                        <span className="text-stone-500 text-xs uppercase font-extrabold">Energy content</span>
                        <p className="font-black text-forest-950 text-base sm:text-lg mt-0.5">{selectedProduct.nutritionalFacts.calories} kcal</p>
                      </div>
                      <div className="p-3 border-2 border-stone-200 rounded-xl bg-stone-50/30">
                        <span className="text-stone-500 text-xs uppercase font-extrabold">Fruit Sugars</span>
                        <p className="font-black text-forest-950 text-base sm:text-lg mt-0.5">{selectedProduct.nutritionalFacts.sugar}</p>
                      </div>
                      <div className="p-3 border-2 border-stone-200 rounded-xl bg-stone-50/30">
                        <span className="text-stone-500 text-xs uppercase font-extrabold">Protein</span>
                        <p className="font-black text-forest-950 text-base sm:text-lg mt-0.5">{selectedProduct.nutritionalFacts.protein}</p>
                      </div>
                      <div className="p-3 border-2 border-stone-200 rounded-xl bg-stone-50/30">
                        <span className="text-stone-500 text-xs uppercase font-extrabold">Vitamins</span>
                        <p className="font-black text-forest-950 text-xs sm:text-sm mt-0.5 line-clamp-1">
                          {selectedProduct.nutritionalFacts.vitamins.slice(0, 2).join(', ')}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer warning standard for safety */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="cursor-pointer bg-forest-900 hover:bg-forest-800 text-stone-50 text-xs font-semibold py-2 px-4 rounded-xl shadow-md transition-colors"
                  >
                    Close Details
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
