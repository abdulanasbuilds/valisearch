import { useNavigate } from "react-router-dom";

export function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-32 md:py-48 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(108, 71, 255, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Ready to build with <br /> <span className="text-primary">intelligence?</span>
        </h2>
        <p className="text-[17px] text-white/30 mb-12 max-w-[500px] mx-auto leading-relaxed font-medium">
          Join founders who skip the guesswork and start with data. 
          Your first 15 validations are on us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => navigate("/register")}
            className="w-full sm:w-auto bg-white text-black font-bold px-10 py-4 rounded-xl text-[16px] hover:bg-white/90 transition-all active:scale-[0.98]"
          >
            Create Free Account
          </button>
          <button 
            onClick={() => {
               const el = document.getElementById("idea-input");
               if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="w-full sm:w-auto bg-white/[0.03] border border-white/10 text-white font-bold px-10 py-4 rounded-xl text-[16px] hover:bg-white/[0.06] transition-all"
          >
            Try Analysis
          </button>
        </div>
      </div>
    </section>
  );
}
