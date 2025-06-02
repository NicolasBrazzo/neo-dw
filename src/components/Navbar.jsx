import logo from "../../public/logo-dw.png";

const styleLogo = {
  width: "150px",
};

export const Navbar = () => {
  return (
    <div className="w-screen h-[80px] flex justify-between items-center fixed p-10 mt-4">
      <div>
        <img src={logo} alt="" style={styleLogo}/>
      </div>
      <div className="text-black flex gap-10">
        <a href="">Home</a>
        <a href="">Dashboard</a>
        <a href="">Chi Siamo</a>
      </div>
      <a href="" className="border m-10">
        <button>Registrati</button>
      </a>
    </div>
  );
};
