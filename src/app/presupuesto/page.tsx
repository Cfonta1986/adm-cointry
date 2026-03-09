"use client";

import CointryFooter from "@/components/CointryFooter";
import { Menu, X, Building2, Upload, Calculator, CheckCircle2, ChevronRight, FileCheck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function PresupuestoPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // States for custom checkboxes
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
    const amenities = ["Cocheras", "SUM/Quincho", "Locales comerciales", "Pileta", "Caldera central", "Gimnasio", "Seguridad 24h", "Jardín"];

    const toggleAmenity = (amenity: string) => {
        if (selectedAmenities.includes(amenity)) {
            setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
        } else {
            setSelectedAmenities([...selectedAmenities, amenity]);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#1152d4]/20">
            {/* Navbar (Light version for consistency with public site) */}
            <nav className="w-full bg-white border-b border-gray-100 relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="bg-[#1152d4] p-2 rounded-lg group-hover:bg-blue-800 transition-colors shadow-sm">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-extrabold text-xl text-slate-800 tracking-tight">Administración Cointry</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Inicio</Link>
                            <Link href="/nosotros" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Nosotros</Link>
                            <Link href="/servicios" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Servicios</Link>
                            <Link href="/presupuesto" className="text-[#1152d4] font-bold transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[#1152d4] after:rounded-full">Presupuesto</Link>
                            <Link href="/#contacto" className="text-slate-600 hover:text-[#1152d4] font-medium transition-colors">Contacto</Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-[#1152d4] p-2">
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-xl">
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            <Link href="/" className="block px-3 py-3 text-slate-600 font-medium border-b border-gray-50">Inicio</Link>
                            <Link href="/nosotros" className="block px-3 py-3 text-slate-600 font-medium border-b border-gray-50">Nosotros</Link>
                            <Link href="/servicios" className="block px-3 py-3 text-slate-600 font-medium border-b border-gray-50">Servicios</Link>
                            <Link href="/presupuesto" className="block px-3 py-3 text-[#1152d4] font-bold border-b border-gray-50 bg-blue-50/50 rounded-lg">Presupuesto</Link>
                            <Link href="/#contacto" className="block px-3 py-3 text-slate-600 font-medium">Contacto</Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Form Area */}
            <main className="relative py-12 lg:py-24 overflow-hidden">
                {/* Background Details */}
                <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[#1152d4]/5 to-transparent -z-10"></div>
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] -z-10"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header Details */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6">
                            <Calculator className="w-8 h-8 text-[#1152d4]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                            Solicitud de Presupuesto
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Complete el siguiente formulario para que nuestro equipo pueda evaluar las características de su consorcio y presentarle una propuesta a medida, transparente y competitiva.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">

                        {/* Progress Bar (Visual Only) */}
                        <div className="h-1.5 w-full bg-slate-100">
                            <div className="h-full bg-gradient-to-r from-[#1152d4] to-blue-400 w-1/3 rounded-r-full"></div>
                        </div>

                        <form className="p-8 md:p-12 lg:p-14 space-y-14">

                            {/* Section 1: Datos Personales */}
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#1152d4] font-bold text-sm">1</span>
                                    <h2 className="text-xl font-bold text-slate-800">Datos de Contacto</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 relative group">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Nombre y Apellido *</label>
                                        <input type="text" placeholder="Ej. Juan Pérez" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Correo Electrónico *</label>
                                        <input type="email" placeholder="juan@ejemplo.com" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Teléfono Móvil *</label>
                                        <input type="tel" placeholder="+54 341 000 0000" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Relación con el Consorcio *</label>
                                        <div className="relative">
                                            <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all appearance-none cursor-pointer">
                                                <option value="" disabled>Seleccione un rol...</option>
                                                <option value="propietario">Propietario / Residente</option>
                                                <option value="consejo">Miembro del Consejo de Adm.</option>
                                                <option value="inquilino">Inquilino</option>
                                                <option value="desarrollador">Desarrolladora / Constructora</option>
                                            </select>
                                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none rotate-90" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 2: Datos del Edificio */}
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#1152d4] font-bold text-sm">2</span>
                                    <h2 className="text-xl font-bold text-slate-800">Características del Edificio</h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Dirección Exacta del Inmueble *</label>
                                        <input type="text" placeholder="Ej. Bv. Oroño 1234, Rosario" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all" />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Cantidad de Pisos</label>
                                            <div className="relative">
                                                <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all appearance-none cursor-pointer">
                                                    <option value="" disabled>Seleccione...</option>
                                                    <option value="1-3">1 a 3 (PB + Escaleras)</option>
                                                    <option value="4-8">4 a 8 pisos</option>
                                                    <option value="9-15">9 a 15 pisos</option>
                                                    <option value="15+">Más de 15 (Torre)</option>
                                                </select>
                                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none rotate-90" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Departamentos Totales</label>
                                            <div className="relative">
                                                <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all appearance-none cursor-pointer">
                                                    <option value="" disabled>Seleccione volumen...</option>
                                                    <option value="menos-10">Menos de 10 unidades</option>
                                                    <option value="11-30">11 a 30 unidades</option>
                                                    <option value="31-60">31 a 60 unidades</option>
                                                    <option value="mas-60">Más de 60 unidades</option>
                                                </select>
                                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none rotate-90" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Servicio de Limpieza Actual</label>
                                            <div className="relative">
                                                <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all appearance-none cursor-pointer">
                                                    <option value="" disabled>¿Quién limpia hoy?</option>
                                                    <option value="encargado-permanente">Encargado Permanente (con vivienda)</option>
                                                    <option value="encargado-jornada">Encargado (media jornada / sin vivienda)</option>
                                                    <option value="empresa">Empresa tercerizada</option>
                                                    <option value="ninguno">Ninguno oficial</option>
                                                </select>
                                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none rotate-90" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Ascensores</label>
                                            <div className="relative">
                                                <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all appearance-none cursor-pointer">
                                                    <option value="" disabled>Cantidad...</option>
                                                    <option value="0">Edificio de escaleras (0)</option>
                                                    <option value="1">1 ascensor</option>
                                                    <option value="2">2 ascensores</option>
                                                    <option value="3+">3 o más</option>
                                                </select>
                                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Custom Checkboxes for Amenities */}
                                    <div className="space-y-3 pt-4">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Amenities y Zonas Comunes (Seleccione las que apliquen)</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {amenities.map((amenity) => {
                                                const isSelected = selectedAmenities.includes(amenity);
                                                return (
                                                    <button
                                                        key={amenity}
                                                        type="button"
                                                        onClick={() => toggleAmenity(amenity)}
                                                        className={`flex items-start text-left p-3 rounded-xl border transition-all duration-200 ${isSelected
                                                            ? "bg-blue-50 border-[#1152d4] shadow-sm ring-1 ring-[#1152d4]"
                                                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600"
                                                            }`}
                                                    >
                                                        <div className={`mt-0.5 mr-3 shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${isSelected ? "bg-[#1152d4] border-[#1152d4]" : "bg-white border-slate-300"
                                                            }`}>
                                                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                                                        </div>
                                                        <span className={`text-sm font-medium ${isSelected ? "text-[#1152d4]" : "text-slate-600"}`}>
                                                            {amenity}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 3: Extra Info & Submit */}
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#1152d4] font-bold text-sm">3</span>
                                    <h2 className="text-xl font-bold text-slate-800">Detalles Finales</h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Motivo Principal de la Consulta</label>
                                        <div className="relative">
                                            <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-3.5 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all appearance-none cursor-pointer">
                                                <option value="" disabled>Indique el motivo de su requerimiento...</option>
                                                <option value="cambio">Disconformidad con administración actual (Cambio)</option>
                                                <option value="nuevo">Edificio a estrenar (Primer mandato)</option>
                                                <option value="auditoria">Necesitamos una Auditoría contable/legal</option>
                                                <option value="solo-consulta">Solo sondeando presupuestos / Consulta general</option>
                                            </select>
                                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none rotate-90" />
                                        </div>
                                    </div>

                                    {/* File Upload Zone */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Última Liquidación de Expensas (Opcional pero recomendado)</label>
                                        <div className="mt-2 flex justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 hover:bg-slate-50 hover:border-blue-400 transition-colors px-6 py-10">
                                            <div className="text-center">
                                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 mb-4">
                                                    <FileCheck className="h-6 w-6 text-[#1152d4]" aria-hidden="true" />
                                                </div>
                                                <div className="mt-4 flex text-sm leading-6 text-slate-600 justify-center">
                                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-bold text-[#1152d4] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#1152d4] focus-within:ring-offset-2 hover:text-blue-700">
                                                        <span>Subir un archivo</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">o arrastrar y soltar</p>
                                                </div>
                                                <p className="text-xs leading-5 text-slate-500 mt-2">PDF, PNG, JPG hasta 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mensaje Adicional / Observaciones</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Detalles sobre problemas actuales, juicios pendientes, o lo que considere de vital importancia..."
                                            className="w-full bg-slate-50/50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl outline-none focus:bg-white focus:ring-4 focus:ring-[#1152d4]/10 focus:border-[#1152d4] transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4 flex flex-col items-center">
                                        <button type="button" className="w-full md:w-auto min-w-[300px] bg-[#1152d4] hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-3 group">
                                            ENVIAR SOLICITUD
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-xs text-slate-400 mt-4 max-w-md text-center">
                                            Al enviar este formulario, un representante comercial se pondrá en contacto a la brevedad para coordinar una reunión.
                                        </p>
                                    </div>

                                </div>
                            </section>

                        </form>
                    </div>
                </div>
            </main>

            <CointryFooter />
        </div>
    );
}
