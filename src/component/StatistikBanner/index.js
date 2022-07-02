import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function StatistikBanner() {
  return (
    <div className="border-2 mt-4 flex justify-center items-center">
      <Card>
        <CardBody>
          <div>
            <h1 className="font-bold">32k</h1>
            <h5>Pengguna aktif</h5>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
