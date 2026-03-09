"use client";

import { Menu, X, Building2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function CointryHero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative bg-slate-50 min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="absolute top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="bg-[#1152d4] p-2 rounded-lg">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-xl text-slate-800 tracking-tight">Administración Cointry</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Inicio</Link>
                            <Link href="/nosotros" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Nosotros</Link>
                            <Link href="/servicios" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Servicios</Link>
                            <Link href="/#contacto" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Contacto</Link>
                            <Link
                                href="/presupuesto"
                                className="bg-[#1152d4] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors shadow-md shadow-blue-500/20"
                            >
                                Presupuesto
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-600 hover:text-[#1152d4]"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full">
                        <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
                            <Link href="/" className="block px-3 py-3 text-slate-600 font-medium border-b border-gray-50">Inicio</Link>
                            <Link href="/nosotros" className="block px-3 py-3 text-slate-600 font-medium border-b border-gray-50">Nosotros</Link>
                            <Link href="/servicios" className="block px-3 py-3 text-slate-600 font-medium border-b border-gray-50">Servicios</Link>
                            <Link href="/#contacto" className="block px-3 py-3 text-slate-600 font-medium">Contacto</Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Content */}
            <div className="flex-grow flex items-center pt-20 relative overflow-hidden" id="inicio">
                {/* Background Decorative Pattern */}
                <div className="absolute inset-0 z-0 bg-[url('/imagen/monumento.jpg')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-slate-900/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1152d4]/30 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            <span className="text-blue-100 text-sm font-medium tracking-wide">Excelencia en Administración de Consorcios</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                            Gestión Profesional y Transparente para su Consorcio
                        </h1>
                        <p className="text-lg md:text-xl text-blue-50/80 mb-10 max-w-2xl leading-relaxed">
                            Optimizamos recursos, garantizamos el mantenimiento preventivo y brindamos atención personalizada 24/7 para la tranquilidad de su comunidad.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/presupuesto"
                                className="bg-[#1152d4] text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                            >
                                Solicitar Presupuesto
                            </Link>
                            <Link href="/nosotros" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                                Conocer Más
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
