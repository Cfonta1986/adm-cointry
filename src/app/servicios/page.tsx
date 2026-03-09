"use client";

import CointryFooter from "@/components/CointryFooter";
import { Menu, X, Building2, Wrench, FileSearch, ShieldCheck, Scale, Calculator, PhoneCall } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ServiciosPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const services = [
        {
            icon: <Calculator className="w-10 h-10 text-[#1152d4]" />,
            title: "Administración Contable y Financiera",
            description: "Liquidación de expensas claras, pago a proveedores en término, cobro de morosos y balances anuales detallados. Manejo transparente de los fondos del consorcio.",
        },
        {
            icon: <Wrench className="w-10 h-10 text-[#1152d4]" />,
            title: "Mantenimiento Preventivo y Correctivo",
            description: "Planificación de inspecciones regulares, mantenimiento de ascensores, bombas de agua, calderas y resolución rápida de urgencias edilicias con proveedores de confianza.",
        },
        {
            icon: <Scale className="w-10 h-10 text-[#1152d4]" />,
            title: "Asesoramiento Legal y Técnico",
            description: "Representación legal del consorcio, cumplimiento de normativas municipales y provinciales, y asesoramiento en asambleas de copropietarios.",
        },
        {
            icon: <FileSearch className="w-10 h-10 text-[#1152d4]" />,
            title: "Auditorías de Consorcios",
            description: "Revisión exhaustiva de gestiones anteriores, control de deudas, estado de las instalaciones y elaboración de informes de situación para el nuevo consejo de administración.",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-[#1152d4]" />,
            title: "Seguros y Siniestros",
            description: "Contratación y actualización de pólizas de seguro integral de consorcio, gestión integral de siniestros, reclamos y seguimiento de reparaciones.",
        },
        {
            icon: <PhoneCall className="w-10 h-10 text-[#1152d4]" />,
            title: "Atención al Propietario 24/7",
            description: "Canales de comunicación directos para reclamos y sugerencias. Teléfono de guardia permanente para resolución de emergencias reales fuera del horario comercial.",
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 selection:bg-[#1152d4]/20 selection:text-[#1152d4]">
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
                            <Link href="/nosotros" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Nosotros</Link>
                            <Link href="/servicios" className="text-[#1152d4] font-medium transition-colors">Servicios</Link>
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
                            <Link href="/nosotros" className="block px-3 py-3 text-slate-600 font-medium border-b border-gray-50">Nosotros</Link>
                            <Link href="/servicios" className="block px-3 py-3 text-[#1152d4] font-medium border-b border-gray-50">Servicios</Link>
                            <Link href="/#contacto" className="block px-3 py-3 text-slate-600 font-medium">Contacto</Link>
                        </div>
                    </div>
                )}
            </nav>

            <main>
                {/* Header Section */}
                <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1541888081622-4a713cbdfce0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-0"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                            Nuestros <span className="text-[#1152d4]">Servicios</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Soluciones integrales diseñadas para proteger su inversión, optimizar recursos y garantizar la tranquilidad de todos los copropietarios.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-[#1152d4] font-semibold tracking-wide uppercase text-sm mb-3">Soluciones Profesionales</h2>
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Tranquilidad en cada aspecto de su edificio</h3>
                            <p className="text-slate-600 text-lg">Un edificio bien administrado no solo evita problemas, sino que revaloriza el patrimonio de todos. Conozca cómo podemos ayudarle.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 hover:border-[#1152d4]/30 hover:shadow-xl hover:shadow-[#1152d4]/5 transition-all duration-300 group">
                                    <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#1152d4]/5 transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                                    <p className="text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-[#1152d4] relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-900/50 blur-3xl"></div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para mejorar la gestión de su consorcio?</h2>
                        <p className="text-blue-100 text-xl mb-10">Solicite un presupuesto sin cargo y descubra la diferencia de contar con una administración verdaderamente profesional.</p>
                        <Link href="/#contacto" className="inline-flex items-center justify-center bg-white text-[#1152d4] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
                            Solicitar Presupuesto Especializado
                        </Link>
                    </div>
                </section>

            </main>

            <CointryFooter />
        </div>
    );
}
