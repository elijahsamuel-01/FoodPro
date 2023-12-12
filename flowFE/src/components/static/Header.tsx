import ng from "../../assets/ng.svg";
import { IoIosMenu } from "react-icons/io";

// const Header = () => {
//   return (
//     <div className="flex justify-center bg-slate-600 h-[62px]">
//       <div className="flex justify-between w-[84%] items-center">
//         <div className=" font-bold text-[20px]">Bolt</div>
//         <div className="flex gap-[27px] justify-center items-center mr-3">
//           <div
//             className=""
//             style={{
//               backgroundImage: `url(${ng})`,
//               width: "35px",
//               height: "35px",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           ></div>
//           <div className="">Nigeria (EN)</div>
//           <div className="">Support</div>
//           <button className="h-[40px] w-[100px] rounded-3xl bg-white text-gray-800">
//             Sign up
//           </button>
//           <div className="text-white text-[23px]">
//             <IoIosMenu />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Header = () => {
  return (
    <header className="bg-slate-600">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-white font-bold text-2xl">Bolt</div>

        <div className="hidden md:flex items-center gap-6">
          <div
            className="w-10 h-10 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${ng})` }}
          ></div>
          <div className="text-white">Nigeria (EN)</div>
          <div className="text-white">Support</div>
          <button className="rounded-3xl bg-white px-6 py-2 text-gray-800">
            Sign up
          </button>
        </div>

        <div className="text-white text-3xl md:hidden">
          <IoIosMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
