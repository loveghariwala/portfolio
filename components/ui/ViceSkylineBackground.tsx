"use client";

export const ViceSkylineBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* SYNTHWAVE RETRO SUN */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[380px] sm:w-[550px] h-[380px] sm:h-[550px] rounded-full bg-gradient-to-b from-[#ffcc00] via-[#ff6b00] to-[#ff007f] opacity-20 blur-[90px]" />

      {/* PALM TREE SILHOUETTES HORIZON */}
      <div className="absolute bottom-0 inset-x-0 h-48 opacity-15 flex items-end justify-between px-10">
        <div className="w-24 h-44 bg-gradient-to-t from-[#ff007f] via-[#ff6b00] to-transparent clip-path-palm" />
        <div className="w-32 h-56 bg-gradient-to-t from-[#00f0ff] via-[#ff007f] to-transparent clip-path-palm" />
        <div className="w-28 h-48 bg-gradient-to-t from-[#ff007f] via-[#ff6b00] to-transparent clip-path-palm" />
        <div className="w-36 h-60 bg-gradient-to-t from-[#00f0ff] via-[#ff007f] to-transparent clip-path-palm hidden lg:block" />
      </div>

      {/* MOVING HORIZON GRID */}
      <div className="absolute bottom-0 inset-x-0 h-64 vice-grid opacity-25" />
    </div>
  );
};
