import { FaCircleCheck } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Customer = () => {
  return (
    <div className="mt-[200px] flex flex-row justify-center gap-[120px]">
      <div className="flex flex-col justify-center items-center  ">
        <div className="text-[25px] mb-4 text-[green]">
          <FaCircleCheck />
        </div>
        <div className="text-[#2F313F] text-[25px] font-medium">
          150+ million
        </div>
        <div className="text-[#2F313F] ">customers around the world.</div>
      </div>

      <div className="flex flex-col justify-center items-center  ">
        <div className="text-[25px] mb-4 text-[green]">
          <TbWorld />
        </div>
        <div className="text-[#2F313F] text-[25px] font-medium">
          5 Regions in Nigeria
        </div>
        <div className="text-[#2F313F] ">customers around the world.</div>
      </div>

      <div className="flex flex-col justify-center items-center  ">
        <div className="text-[25px] mb-4 text-[green]">
          <FaCircleCheck />
        </div>
        <div className="text-[#2F313F] text-[25px] font-medium">
          3.1+ million
        </div>
        <div className="text-[#2F313F] ">drivers and couriers.</div>
      </div>
    </div>
  );
};

export default Customer;
