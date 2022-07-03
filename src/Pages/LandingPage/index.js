import React from "react";
import CardBanner from "../../component/CardBanner/index.js";
import StatistikBanner from "../../component/StatistikBanner/index";
import LangkahBanner from "../../component/LangkahBanner/index";
import KursusUnggulan from "../../component/KursusUnggulan/index";
import GridKursusUnggulan from "../../component/GridKursusUnggulan/index";
import Testimoni from "../../component/Testimoni/index";

export default function LandingPage() {
  return (
    <div>
      <div>
        <CardBanner />
        <StatistikBanner />
        <LangkahBanner />
        <KursusUnggulan />
        <div className="hidden xl:block">
          <GridKursusUnggulan />
        </div>
      </div>
    </div>
  );
}
