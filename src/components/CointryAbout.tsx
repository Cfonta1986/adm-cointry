import { CheckCircle2, Users, ShieldCheck, Scale } from "lucide-react";

export default function CointryAbout() {
    const values = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-[#1152d4]" />,
            title: "Transparencia Absoluta",
            description: "Rendición de cuentas clara y accesible 24/7 a través de nuestra plataforma online."
        },
        {
            icon: <Users className="w-8 h-8 text-[#1152d4]" />,
            title: "Equipo Profesional",
            description: "Personal capacitado en gestión edilicia, contable y resolución de conflictos."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-[#1152d4]" />,
            title: "Mantenimiento Preventivo",
            description: "Planificación estratégica para evitar gastos imprevistos y revalorizar su propiedad."
        },
        {
            icon: <Scale className="w-8 h-8 text-[#1152d4]" />,
            title: "Asesoramiento Legal",
            description: "Respaldo jurídico constante para el cumplimiento de normativas vigentes."
        }
    ];

    return (
        <section className="py-24 bg-white" id="nosotros">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-[#1152d4] font-semibold tracking-wide uppercase text-sm mb-3">Quiénes Somos</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Una trayectoria construida sobre la confianza y el orden
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                En Administración Cointry, entendemos que su consorcio no es solo un edificio, es su patrimonio y su hogar. Nuestra firma nace con la vocación de profesionalizar la gestión administrativa inmobiliaria.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Nos enfocamos en el mantenimiento preventivo, la reducción inteligente de costos y la atención ágil de reclamos, garantizando la paz mental de cada copropietario.
                            </p>
                        </div>

                        <div className="mt-10 pt-10 border-t border-slate-100 grid sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-4xl font-extrabold text-[#1152d4] mb-2">+15</h4>
                                <p className="text-slate-600 font-medium">Años de experiencia</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-extrabold text-[#1152d4] mb-2">+40</h4>
                                <p className="text-slate-600 font-medium">Consorcios administrados</p>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {values.map((value, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-5">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                                <p className="text-slate-600">{value.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
