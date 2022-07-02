import React from "react";
import banner from "../../assets/img/banner-landing-page.jpg";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function CardBanner() {
  return (
    <div className="border-0 flex flex-col xl:flex-row-reverse items-center justify-between xl:h-96">
      <div
        style={{ maxWidth: 808 }}
        className="w-full h-full border-0 border-red-200"
      >
        <Card className="border-0 w-full h-60 xl:h-full shadow-none">
          <CardBody className="h-full bg-blue-200">
            {/* <img
              src={banner}
              alt="banner"
              className="object-cover h-full w-full rounded-xl"
            ></img> */}
          </CardBody>
        </Card>
      </div>
      <div
        style={{ maxWidth: 574 }}
        className="w-full px-4 py-6 flex flex-col justify-between gap-3 "
      >
        <h1 className="text-right font-mono font-bold text-green-700 text-3xl md:text-5xl">
          Temukan dan kembagnkan potensi dirimu dan raih masa depan cemerlang
        </h1>
        <h5 className="text-right font-normal font-mono text-grey-600 text-sm md:text-xl">
          Galau cari kerja? Mau mengembangkan diri tanpa pusing memikirkan
          biaya? Bekali dirimu dengan{" "}
          <span className="font-bold">Portal Karir</span> dan #RaihKarirSekarang
        </h5>
      </div>
    </div>
  );
}
