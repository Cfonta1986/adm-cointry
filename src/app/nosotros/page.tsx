"use client";

import CointryFooter from "@/components/CointryFooter";
import { Menu, X, Building2, Target, Award, Users2, Building } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function NosotrosPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar Simple */}
            <nav className="w-full bg-white border-b border-slate-200 relative z-50">
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
                            <Link href="/nosotros" className="text-[#1152d4] font-medium transition-colors">Nosotros</Link>
                            <Link href="/servicios" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Servicios</Link>
                            <Link href="/#contacto" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Contacto</Link>
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
                            <Link href="/nosotros" className="block px-3 py-3 text-[#1152d4] font-medium border-b border-gray-50">Nosotros</Link>
                            <Link href="/servicios" className="block px-3 py-3 text-slate-600 font-medium border-b border-gray-50">Servicios</Link>
                            <Link href="/#contacto" className="block px-3 py-3 text-slate-600 font-medium">Contacto</Link>
                        </div>
                    </div>
                )}
            </nav>

            <main>
                {/* Header Section */}
                <section className="bg-slate-50 py-20 lg:py-32 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                            Nos apasiona el orden y la <span className="text-[#1152d4]">excelencia operativa</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Administración Cointry nació en Rosario con un propósito claro: redefinir el estándar de confianza en el manejo de consorcios y propiedades.
                        </p>
                    </div>
                </section>

                {/* Historia y Visión */}
                <section className="py-20 lg:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestra Historia</h2>
                                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                    <p>
                                        Fundada hace más de 15 años en la ciudad de Rosario, comenzamos administrando pequeños edificios céntricos. Rápidamente nuestro enfoque orientado a resultados, transparencia absoluta en los números y mantenimiento preventivo nos posicionó como líderes en el sector.
                                    </p>
                                    <p>
                                        Hoy, administramos más de 40 consorcios en la región, siempre bajo la misma premisa: el patrimonio de nuestros clientes requiere una gestión profesional, libre de conflictos y financieramente sólida.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1000&auto=format&fit=crop" alt="Equipo de trabajo" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1152d4]/40 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Valores */}
                <section className="bg-slate-900 py-24 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nuestros Pilares</h2>
                            <p className="text-slate-400 text-lg">No somos solo administradores, somos guardianes de su inversión.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                                <Target className="w-12 h-12 text-[#1152d4] mb-6" />
                                <h3 className="text-xl font-bold mb-4">Transparencia Radical</h3>
                                <p className="text-slate-400">Acceso 24/7 a liquidaciones, recibos y comprobantes. Cuentas claras para relaciones largas.</p>
                            </div>
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                                <Building className="w-12 h-12 text-[#1152d4] mb-6" />
                                <h3 className="text-xl font-bold mb-4">Mantenimiento Preventivo</h3>
                                <p className="text-slate-400">Actuamos antes de que los problemas aparezcan. Cronogramas estrictos de revisión edilicia.</p>
                            </div>
                            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                                <Award className="w-12 h-12 text-[#1152d4] mb-6" />
                                <h3 className="text-xl font-bold mb-4">Excelencia Legal</h3>
                                <p className="text-slate-400">Cumplimiento riguroso de normativas municipales, provinciales, laborales y de AFIP.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CEO / Equipo */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 lg:p-16 flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-[#1152d4]/10 rounded-full flex items-center justify-center border-4 border-[#1152d4]/20">
                                <Users2 className="w-16 h-16 md:w-24 md:h-24 text-[#1152d4] opacity-50" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Un equipo de profesionales a su servicio</h2>
                                <p className="text-lg text-slate-600 mb-6 italic">
                                    "Nuestra misión es simple: que los copropietarios vivan tranquilos. Nosotros nos ocupamos de los problemas, las cuentas y el mantenimiento. Su tiempo es valioso."
                                </p>
                                <div>
                                    <p className="font-bold text-slate-900">La Dirección</p>
                                    <p className="text-slate-500">Administración Cointry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <CointryFooter />
        </div>
    );
}
