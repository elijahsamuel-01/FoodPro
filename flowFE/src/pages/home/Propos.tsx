import React from "react";
import map from "../../assets/world-map-optimized-6338bdae39fa9d215fb417b5845792a7.svg";

const Propos = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center mt-[120px]">
      <div className="text-[#2F313F] text-[38px]">À propos</div>
      <div className="text-[#2F313F] text-[20px] w-[70%] text-center">
        Bolt is the first European mobility super-app. We’re making cities for
        people, offering better alternatives for every purpose a private car
        serves — including ride-hailing, shared cars, scooters, and food and
        grocery delivery.
      </div>
      <div
        className="h-[90vh] w-[90vw]  bg-contain "
        style={{
          backgroundImage: `url(${map})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "centre",
        }}
      ></div>
    </div>
  );
};

export default Propos;
