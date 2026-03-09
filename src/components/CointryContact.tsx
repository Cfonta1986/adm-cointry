import { MapPin, Phone, Mail, AlertTriangle } from "lucide-react";

export default function CointryContact() {
    return (
        <section className="py-24 bg-slate-50 relative" id="contacto">
            {/* Background shape */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#1152d4]/5 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[#1152d4] font-semibold tracking-wide uppercase text-sm mb-3">Contacto</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Póngase en contacto con nosotros
                    </h3>
                    <p className="text-slate-600 text-lg">
                        Estamos disponibles para responder sus consultas y ofrecerle una propuesta a medida para su edificio.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">

                    {/* Contact Information */}
                    <div className="lg:col-span-2 bg-[#1152d4] lg:rounded-l-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-900/50 blur-3xl"></div>

                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold mb-8">Información de Contacto</h4>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-blue-100" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white mb-1">Nuestra Oficina</p>
                                        <p className="text-blue-100">Bv. Oroño 1234, 4to Piso<br />Rosario, Santa Fe</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-blue-100" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white mb-1">Email</p>
                                        <a href="mailto:info@cointry.com" className="text-blue-100 hover:text-white transition-colors">info@cointry.com.ar</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-blue-100" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white mb-1">Teléfono Administración</p>
                                        <a href="tel:03414568900" className="text-blue-100 hover:text-white transition-colors">(341) 456-8900</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Important Block */}
                        <div className="mt-12 bg-red-600/20 border border-red-500/30 rounded-2xl p-6 relative z-10 backdrop-blur-md">
                            <div className="flex items-center gap-3 mb-2">
                                <AlertTriangle className="w-6 h-6 text-red-200" />
                                <p className="font-bold text-white">Urgencias 24hs</p>
                            </div>
                            <p className="text-red-100 text-sm mb-3">Solo para consorcios administrados (Fugas, cortes graves, emergencias operativas).</p>
                            <a href="tel:08001235555" className="inline-block text-2xl font-black text-white hover:text-red-100 transition-colors">0800-123-5555</a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 p-10 lg:p-14">
                        <h4 className="text-2xl font-bold text-slate-900 mb-8">Envíenos un mensaje</h4>
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre completo</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1152d4] focus:ring-2 focus:ring-[#1152d4]/20 outline-none transition-all text-slate-800" placeholder="Ej. Juan Pérez" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="consorcio" className="text-sm font-medium text-slate-700">Nombre/Dirección del Consorcio</label>
                                    <input type="text" id="consorcio" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1152d4] focus:ring-2 focus:ring-[#1152d4]/20 outline-none transition-all text-slate-800" placeholder="Ej. Edificio Las Palmas" />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1152d4] focus:ring-2 focus:ring-[#1152d4]/20 outline-none transition-all text-slate-800" placeholder="juan@ejemplo.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Teléfono</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1152d4] focus:ring-2 focus:ring-[#1152d4]/20 outline-none transition-all text-slate-800" placeholder="(341) 1234-5678" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensaje o consulta</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#1152d4] focus:ring-2 focus:ring-[#1152d4]/20 outline-none transition-all text-slate-800 resize-none" placeholder="¿En qué podemos ayudarle?"></textarea>
                            </div>

                            <button type="button" className="w-full bg-[#1152d4] text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
