import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-center p-4 m-3 rounded-2xl cursor-pointer bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
    <div className={`w-12 h-12 rounded-full flex justify-center items-center ${color} shadow-lg shadow-black/20 shrink-0`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-gray-400 text-sm leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 w-full max-w-[1200px]">
      <div className="flex-1 flex flex-col justify-start items-start mf:mr-10">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-5 text-gray-400 font-light md:w-9/12 w-11/12 text-base leading-relaxed">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center w-full">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security guarantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and ensure the highest security standards."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Get the most optimized and competitive gas rates and exchange prices on every swap."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Fast transactions and instant updates on the status of your blockchain records."
        />
      </div>
    </div>
  </div>
);

export default Services;