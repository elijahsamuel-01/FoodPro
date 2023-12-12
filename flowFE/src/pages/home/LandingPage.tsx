import Feature1 from "./Feature1";
// import hero from "../../assets/hero.webp";
import hero from "../../assets/medium-shot-woman-using-smartphone-outdoors.jpg";
import Service from "./Service";
import Propos from "./Propos";
import Customer from "./Customer";
export const LandingPage = () => {
  return (
    <div className="relative">
      <div
        className="h-[91vh] bg-gray-700 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-[rgba(0,0,0,0.5)] h-full">
          <div className="flex   justify-center flex-col max-w-xl px-6 mx-autoflex-col items-start pt-32 text-white ">
            <h1 className="text-4xl font-bold md:text-6xl">
              Go wherever, whenever
            </h1>
            <p className="mt-5 text-xl md:text-2xl">
              Bolt is the all-in-one mobility app. Get picked up by a top-rated
              driver in minutes and enjoy a comfortable ride to wherever you’re
              going; or skip the traffic entirely on one of our industry-leading
              scooters.
            </p>
            <button className="mt-10 rounded-3xl bg-[#32BB78] px-6 py-3 text-xl font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Feature1 />
      <Service />
      <Propos />
      <Customer />
    </div>
  );
};

// const LandingPage = () => {
//   return (
//     <div className="">
//       <div
//         className="h-[91vh] bg-gray-700 bg-auto relative"
//         style={{
//           backgroundImage: `url(${hero})`,
//           backgroundRepeat: "no-repeat",
//           // objectFit: "contain",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="bg-[rgba(0,0,0,0.5)] h-[91vh]">
//           <div className="w-[55%] flex justify-center pt-32 items-start gap-8 ml-[110px] flex-col ">
//             <div className="text-[45px] text-white w-[400px] font-bold font- ">
//               Go wherever, whenever
//             </div>
//             <div className=" text-white text-[22px] w-[40vw]">
//               Bolt is the all-in-one mobility app. Get picked up by a top-rated
//               driver in minutes and enjoy a comfortable ride to wherever you’re
//               going; or skip the traffic entirely on one of our industry-leading
//               scooters.
//             </div>
//             <button className="w-[130px] h-[45px] rounded-3xl text-white font-bold flex items-center justify-center bg-[#32BB78]">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>

//       <Feature1 />
//       <Service />
//     </div>
//   );
// };

// export default LandingPage;

// <section id="hero" className="h-[90vh] bg-gray-500 py-[180px] ">
//   <div className="container h-[50vh] w-[60vw] flex flex-col-reverse md:flex-row items-center px-6 md:px-0 bg-yellow-600">
//     {/* <!-- Image --> */}
//     {/* <img src="hero.jpg" alt="" className="md:w-1/2" /> */}

//     {/* <!-- Content --> */}
//     <div className=" w-[]md:w-1/2 bg-red-600">
//       <h1 className="max-w-lg mb-2 text-4xl font-bold">
//         Go wherever, whenever
//       </h1>
//       <p className="max-w-lg mb-6 text-lg text-gray-600">
//         Bolt is the all-in-one mobility app. Get picked up by a top-rated
//         driver in minutes and enjoy a comfortable ride to wherever you’re
//         going; or skip the traffic entirely on one of our industry-leading
//         scooters.
//       </p>

//       <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
//         <button className="bg-[#32BB78] only:hover:bg-brand-600 text-white px-6 py-3 rounded-3xl font-semibold">
//           Get Started
//         </button>
//       </div>
//     </div>
//   </div>
// </section>
