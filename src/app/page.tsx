import CointryHero from "@/components/CointryHero";
import CointryContact from "@/components/CointryContact";
import CointryFooter from "@/components/CointryFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-[#1152d4]/20 selection:text-[#1152d4]">
      <CointryHero />
      <CointryContact />
      <CointryFooter />
    </main>
  );
}
