import bike from "../../assets/micromobility.png";
import vendor from "../../assets/bolt-food-app-a5cfc44ac3e2354096df31b33e93fe28.webp";

const Service = () => {
  return (
    <div className="mt-[120px] flex flex-col items-center">
      <div className="text-[36px] font-bold">Our Service</div>
      <div className="flex gap-[30px]">
        <div className="rounded-2xl w-[400px] mt-[40px] bg-[#39A88E] flex items-center justify-start h-[200px]">
          <div className="mx-[30px] my-6 h-[30vh] ">
            <div className="text-[rgb(47,49,63)] text-[27px]">Delivery</div>
            <div className="w-[140px]">
              Your favourite food, delivered fast.
            </div>
            <div
              className="h-[100px] w-[150px] ml-[250px] bg-contain "
              style={{
                backgroundImage: `url(${bike})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "centre",
              }}
            ></div>
          </div>
        </div>
        <div className="rounded-2xl w-[400px] mt-[40px] bg-[#39A88E] flex items-center justify-start  h-[200px]">
          <div className="mx-[30px] my-6 ">
            <div className="text-[rgb(47,49,63)] text-[27px]">Delivery</div>
            <div className="w-[140px]">
              Your favourite food, delivered fast.
            </div>
            <div
              className="h-[110px] w-[150px] ml-[250px] bg-contain "
              style={{
                backgroundImage: `url(${vendor})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "centre",
              }}
            ></div>
          </div>
        </div>
        <div className="rounded-2xl w-[400px] mt-[40px] bg-[#39A88E] flex items-center justify-start  h-[200px]">
          <div className="mx-[30px] my-6 ">
            <div className="text-[rgb(47,49,63)] text-[27px]">Delivery</div>
            <div className="w-[140px]">
              Your favourite food, delivered fast.
            </div>
            <div
              className="h-[100px] w-[150px] ml-[250px] bg-contain "
              style={{
                backgroundImage: `url(${bike})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "centre",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
