import React from "react";
import { useSelector } from "react-redux";
import Testimoni from "../../component/Testimoni";
import LogoPortalKarir from "../../component/LogoPortalKarir/index.js";

export default function FooterSection() {
  const userDataRdx = useSelector((state) => state.userDataReducer);
  return (
    <div className="border-0 border-red-200 mt-16 md:mt-32">
      {!userDataRdx.name && <Testimoni />}
      {userDataRdx.name && null}
      <div className="p-8 flex justify-between items-start bg-lime-400">
        <div className="w-40 md:w-96 border-0">
          <LogoPortalKarir />
          <div className="text-xs mt-2 text-grey-700">
            Portal Karir adalah platform digital penyedia pelatihan gratis yang
            mengacu kepada materi pelatihan yang dibutuhkan oleh industri.
            Materi pelatihan dipilih oleh para preofesional di Industri.
          </div>
        </div>
        <div className="text-right flex flex-col gap-1 md:gap-auto text-green-700">
          <div>Tentang Kami</div>
          <div>Narahubung</div>
          <div>Info lainnya</div>
        </div>
      </div>
    </div>
  );
}
