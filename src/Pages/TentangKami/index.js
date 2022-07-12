import React from "react";
import "./style/TentangKami.css";
import banner from "../../assets/img/TentangKami.jpg";

export default function TentangKami() {
  return (
    <div className="h-screen">
      <div className="border-0 w-full flex flex-col md:flex-row px-4">
        <div
          style={{ maxWidth: 500 }}
          className="border-0 border-red-200 w-full"
        >
          <img src={banner} alt="tentang kami" className="objec-fit w-full" />
        </div>
        <div className="border-0 h-min my-auto">
          <h5 className="text-left font-normal font-mono text-grey-600 text-sm md:text-xl">
            <span className="text-indigo-900 font-bold">Portal</span>{" "}
            <span className="text-green-600 font-bold">Karir</span> adalah
            platform digital penyedia kursus gratis yang mengacu kepada materi
            pelatihan yang dibutuhkan oleh industri.{" "}
            <span className="text-indigo-900 font-bold">Portal</span>{" "}
            <span className="text-green-600 font-bold">Karir</span> hadir dengan
            tujuan untuk memberikan ilmu pengetahuan secara gratis agar calon
            pekerja mempunyai bekal yang matang untuk bersaing di dunia kerja.
          </h5>
        </div>
      </div>
    </div>
  );
}
