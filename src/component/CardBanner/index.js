import React from "react";
import banner from "../../assets/img/banner-landing-page.jpg";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function CardBanner() {
  return (
    <div className="border-2 flex flex-col xl:flex-row-reverse items-center justify-between xl:h-96">
      <div
        style={{ maxWidth: 808 }}
        className="w-full h-full border-2 border-red-200"
      >
        <Card className="border-2 w-full h-60 xl:h-full">
          <CardBody className="h-full">
            <img
              src={banner}
              alt="banner"
              className="object-cover h-full w-full rounded-xl"
            ></img>
          </CardBody>
        </Card>
      </div>
      <div
        style={{ minWidth: 574, maxWidth: 574 }}
        className="w-full px-4 py-6 flex flex-col justify-between gap-3 "
      >
        <Typography
          variant="h1"
          className="text-right font-mono text-green-700"
        >
          Temukan dan kembagnkan potensi dirimu dan raih masa depan cemerlang
        </Typography>
        <Typography
          variant="h5"
          className="text-right font-thin font-mono text-grey-600"
        >
          Galau cari kerja? Mau mengembangkan diri tanpa pusing memikirkan
          biaya? Bekali dirimu dengan{" "}
          <span className="font-bold">Portal Karir</span> dan #RaihKarirSekarang
        </Typography>
      </div>
    </div>
  );
}
