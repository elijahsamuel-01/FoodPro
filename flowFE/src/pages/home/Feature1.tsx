import man1 from "../../assets/driver.webp";

const Feature1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="text-center">
        <h2 className="text-4xl font-medium text-[#2f313f] sm:text-5xl">
          Earn money with <span className="text-orange-500">FoodFlex</span>
        </h2>

        <div className="mt-5 flex justify-center flex-wrap gap-3">
          <button className="h-[35px] w-[80px] rounded-3xl text-[black] bg-[#39A88E] items-center justify-center ">
            Driver
          </button>
          <button className="h-[35px] w-[83px] text-[#2f313f] items-center justify-center border-solid border-2 border-[#39A88E] rounded-3xl">
            Courier
          </button>
          <button className="h-[35px] w-auto text-[#2f313f] items-center justify-center border-solid border-2 border-[#39A88E] rounded-3xl px-3">
            Restaurant or store owner
          </button>
          <button className="h-[35px] w-auto text-[#2f313f] items-center justify-center border-solid border-2 border-[#39A88E] rounded-3xl  px-3">
            Fleet owner
          </button>
        </div>
      </div>

      <div className="mt-10 md:flex md:items-center md:gap-10">
        <img src={man1} className="rounded-2xl md:w-1/2" />

        <div>
          <h3 className="text-2xl font-bold sm:text-3xl">
            Drive and earn money
          </h3>

          <div className="mt-5 space-y-5">
            <div className="mt-[30px] flex flex-row gap-[8px]">
              <div className="h-[25px] w-[25px] rounded-3xl bg-[#FF4500] items-center justify-center align-middle text-white font-semibold pl-2 mt-[2px]">
                1
              </div>
              <div className="flex flex-col w-[420px]">
                <div className="text-[#2f313f] font-semibold text-[20px] mb-3">
                  Drive more, earn more
                </div>
                <div className="text-[#AAAEB3]">
                  Our 150+ million riders will send you plenty of ride requests.
                  When demand is high, you can earn even more.
                </div>
              </div>
            </div>
            <div className="mt-[10px] flex flex-row gap-[8px]">
              <div className="h-[25px] w-[25px] rounded-3xl bg-[#FF4500] items-center justify-center align-middle text-white font-semibold pl-2 mt-[2px]">
                2
              </div>
              <div className="flex flex-col w-[420px]">
                <div className="text-[#2f313f] font-semibold text-[20px] mb-3">
                  Set your schedule
                </div>
                <div className="text-[#AAAEB3]">
                  Drive for as long and as often as you like. Weekdays;
                  weekends; evenings — fit driving around your lifestyle.
                </div>
              </div>
            </div>
            <div className="mt-[10px] flex flex-row gap-[8px]">
              <div className="h-[25px] w-[25px] rounded-3xl bg-[#FF4500] items-center justify-center align-middle text-white font-semibold pl-2 mt-[2px]">
                3
              </div>
              <div className="flex flex-col w-[420px]">
                <div className="text-[#2f313f] font-semibold text-[20px] mb-3">
                  Get paid each week
                </div>
                <div className="text-[#AAAEB3]">
                  You’ll receive your earnings at the end of each week — no need
                  to wait around for payday.
                </div>
              </div>
            </div>

            <button className="mt-5 rounded-xl bg-green-500 px-5 py-3 text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;

{
  /* const Feature1 = () => {
  return (
    <div>
      <div className="flex items-center flex-col">
        <div className="flex flex-col items-center mt-[120px] gap-4 lg:flex lg:flex-col lg:items-center lg:mt-[120px] lg:gap-4 sm:flex sm:flex-col sm:items-center sm:mt-[80px] sm:gap-2">
          <div
            className="text-[
  #2f313f] text-[48px] font-medium"
          >
            Earn money with{" "}
            <span className="text-[#FF4500] font-bold text-[50px]">
              FoodFlex
            </span>
          </div>
          <div className="flex gap-7">
            <button className="h-[35px] w-[80px] rounded-3xl text-[black] bg-[#39A88E] items-center justify-center ">
              Driver
            </button>
            <button className="h-[35px] w-[83px] text-[#2f313f] items-center justify-center border-solid border-2 border-[#39A88E] rounded-3xl">
              Courier
            </button>
            <button className="h-[35px] w-auto text-[#2f313f] items-center justify-center border-solid border-2 border-[#39A88E] rounded-3xl px-3">
              Restaurant or store owner
            </button>
            <button className="h-[35px] w-auto text-[#2f313f] items-center justify-center border-solid border-2 border-[#39A88E] rounded-3xl  px-3">
              Fleet owner
            </button>
          </div>
        </div>

        <div className="mt-8 gap-[90px] flex items-center">
          <div className=" rounded-2xl h-[83vh] w-[40vw]">
            <img src={man1} className="rounded-2xl" />
          </div>
          <div className="h-[400px] w-[490px]">
            <div className="text-[#2f313f] text-[40px] font-bold">
              Drive and earn money
            </div>

            <div className="mt-[30px] flex flex-row gap-[8px]">
              <div className="h-[25px] w-[25px] rounded-3xl bg-[#FF4500] items-center justify-center align-middle text-white font-semibold pl-2 mt-[2px]">
                1
              </div>
              <div className="flex flex-col w-[420px]">
                <div className="text-[#2f313f] font-semibold text-[20px] mb-3">
                  Drive more, earn more
                </div>
                <div className="text-[#AAAEB3]">
                  Our 150+ million riders will send you plenty of ride requests.
                  When demand is high, you can earn even more.
                </div>
              </div>
            </div>
            <div className="mt-[10px] flex flex-row gap-[8px]">
              <div className="h-[25px] w-[25px] rounded-3xl bg-[#FF4500] items-center justify-center align-middle text-white font-semibold pl-2 mt-[2px]">
                2
              </div>
              <div className="flex flex-col w-[420px]">
                <div className="text-[#2f313f] font-semibold text-[20px] mb-3">
                  Set your schedule
                </div>
                <div className="text-[#AAAEB3]">
                  Drive for as long and as often as you like. Weekdays;
                  weekends; evenings — fit driving around your lifestyle.
                </div>
              </div>
            </div>
            <div className="mt-[10px] flex flex-row gap-[8px]">
              <div className="h-[25px] w-[25px] rounded-3xl bg-[#FF4500] items-center justify-center align-middle text-white font-semibold pl-2 mt-[2px]">
                3
              </div>
              <div className="flex flex-col w-[420px]">
                <div className="text-[#2f313f] font-semibold text-[20px] mb-3">
                  Get paid each week
                </div>
                <div className="text-[#AAAEB3]">
                  You’ll receive your earnings at the end of each week — no need
                  to wait around for payday.
                </div>
              </div>
            </div>
            <button className="text-black font-semibold items-center justify-center px-8 py-3 rounded-3xl bg-[#39A88E] mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1; */
}
