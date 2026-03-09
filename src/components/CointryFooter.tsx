import { Building2 } from "lucide-react";

export default function CointryFooter() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-[#1152d4] p-1.5 rounded-md">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">Administración Cointry</span>
                        </div>
                        <p className="text-slate-500 max-w-sm">
                            Gestión profesional, transparente y confiable para consorcios. Protegemos su inversión inmobiliaria con dedicación exclusiva.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Servicios</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#1152d4] transition-colors">Administración Integral</a></li>
                            <li><a href="#" className="hover:text-[#1152d4] transition-colors">Auditorías Contables</a></li>
                            <li><a href="#" className="hover:text-[#1152d4] transition-colors">Mantenimiento Preventivo</a></li>
                            <li><a href="#" className="hover:text-[#1152d4] transition-colors">Asesoramiento Legal</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#1152d4] transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-[#1152d4] transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-[#1152d4] transition-colors">Registro de Administradores</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Administración Cointry. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0">Diseñado para la excelencia en gestión edilicia.</p>
                </div>
            </div>
        </footer>
    );
}
