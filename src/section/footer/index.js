import React from "react";
import Testimoni from "../../component/Testimoni";
import LogoPortalKarir from "../../component/LogoPortalKarir/index.js";

export default function FooterSection() {
  return (
    <div>
      <Testimoni />
      <div className="h-32 p-8 flex justify-between items-center">
        <div className="w-96">
          <LogoPortalKarir />
          <div className="text-xs mt-2">
            Portal Karir adalah platform digital penyedia pelatihan gratis yang
            mengacu kepada materi pelatihan yang dibutuhkan oleh industri
          </div>
        </div>
        <div>Kanan</div>
      </div>
    </div>
  );
}
