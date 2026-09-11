export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center animate-float">
      {/* Glow */}
      <div className="absolute inset-8 -z-10 blur-3xl opacity-25 bg-eco rounded-full" />

      {/* Phone frame */}
      <div className="relative w-64 h-[520px] rounded-[3rem] bg-deep-700/60 backdrop-blur-sm border border-white/20 shadow-lifted overflow-hidden">
        {/* Notch */}
        <div className="flex justify-between items-center px-6 pt-4 pb-1">
          <span className="text-white/80 text-xs font-medium">9:41</span>
          <div className="w-24 h-5 bg-black rounded-full mx-auto" />
          <div className="flex items-center gap-1">
            <div className="w-4 h-2.5 border border-white/50 rounded-sm p-px">
              <div className="w-3/4 h-full bg-eco rounded-sm" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="px-4 pt-2 flex flex-col gap-3">
          {/* Greeting */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/50 text-xs">Good morning</p>
              <p className="text-white font-display font-semibold text-sm">Thabo 👋</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-eco-400 flex items-center justify-center text-white text-xs font-bold">T</div>
          </div>

          {/* Stamp card */}
          <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
            <p className="text-white/60 text-xs mb-2">Loyalty stamps</p>
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                    i < 3 ? 'bg-eco text-white' : 'bg-white/10 text-white/30'
                  }`}
                >
                  {i < 3 ? '✓' : '·'}
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-2">2 stamps to a free wash</p>
          </div>

          {/* Live wash */}
          <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white text-xs font-semibold">Sandton City</p>
              <span className="text-xs bg-eco/20 text-eco-300 px-2 py-0.5 rounded-full font-medium">Washing</span>
            </div>
            <div className="flex gap-1 mb-2">
              {['Received', 'Wash', 'Dry', 'Done'].map((s, i) => (
                <div key={s} className={`flex-1 h-1 rounded-full ${i < 2 ? 'bg-eco' : 'bg-white/20'}`} />
              ))}
            </div>
            <p className="text-white/40 text-xs">Est. 8 min remaining</p>
          </div>

          {/* Book button */}
          <div className="bg-brand rounded-2xl py-3 text-white font-semibold text-sm text-center">
            + Book a wash
          </div>

          {/* Nearby */}
          {['Rosebank Bay Wash · R150', 'Hyde Park Motors · R180'].map(s => (
            <div key={s} className="bg-white/10 rounded-xl px-3 py-2 flex items-center justify-between border border-white/10">
              <div>
                <p className="text-white text-xs font-medium">{s.split('·')[0].trim()}</p>
                <p className="text-white/40 text-xs">Open · 3 slots left</p>
              </div>
              <span className="text-eco text-xs font-bold">{s.split('·')[1].trim()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
