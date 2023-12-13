import React from "react";
import map from "../../assets/world-map-optimized-6338bdae39fa9d215fb417b5845792a7.svg";

// const Propos = () => {
//   return (
//     <div className="flex flex-col gap-6 justify-center items-center mt-[120px]">
//       <div className="text-[#2F313F] text-[38px]">À propos</div>
//       <div className="text-[#2F313F] text-[20px] w-[70%] text-center">
//         FoodFlex is the first Nigerian Food Lending Platform. We’re making
//         cities for people, offering better alternatives for every purpose, and
//         food and grocery delivery.
//       </div>
//       <div
//         className="h-[90vh] w-[90vw]  bg-contain "
//         style={{
//           backgroundImage: `url(${map})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "centre",
//         }}
//       ></div>
//     </div>
//   );
// };
const Propos = () => {
  return (
    <div className="grid gap-6 mt-20">
      <div>
        <h2 className="text-center text-4xl font-bold">À propos</h2>
      </div>

      <div>
        <p className="text-lg text-center mx-auto max-w-3xl">
          FoodFlex is the first Nigerian Food Lending Platform. We’re making
          cities for people, offering better alternatives for every purpose, and
          food and grocery delivery.
        </p>
      </div>

      <div className="grid justify-items-center">
        <div className="relative w-full h-[500px] max-w-4xl">
          <img src={map} className="px-3 w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Propos;
