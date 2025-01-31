import React from "react";
import Image from "next/image";
import Payrol from "../images/payroll.png";
import sf from "../icons/sf.svg";
import arrow from "../icons/arrow.svg";

const PayrollDashboard = () => {
  return (
    <div className="bg-white py-16">
      <div className="mx-36 bg-[#F1F1F1] rounded-xl flex items-center justify-between p-16">
        <div className="flex flex-col items-start gap-[63px] w-1/2 mr-24">
          <div className="w-20 h-20">
            <Image src={sf} alt="Dashboard Image" priority={true} />
          </div>
          <h2 className="text-lg font-light text-gray-800 mr-12">
            The Embedded Finance Platform and Payroll Management Software
            Solutions for your organization and Workforce.
          </h2>
          <p className="flex items-center font-semibold gap-4 text-[#2B71F0] rounded-md">
            <span>Learn More</span>
            <Image
              src={arrow}
              alt="Dashboard Image"
              priority={true}
              className="bg-blue"
            />
          </p>
        </div>

        <div className="relative w-1/2">
          <Image src={Payrol} alt="Dashboard Image" priority={true} />
        </div>
      </div>
    </div>
  );
};

export default PayrollDashboard;
