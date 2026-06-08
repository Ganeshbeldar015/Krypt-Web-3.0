import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        {currentAccount ? (
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-default font-mono text-sm font-semibold border border-[#3d4f7c] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {shortenAddress(currentAccount)}
          </li>
        ) : (
          <li 
            onClick={connectWallet}
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] transition duration-200 text-sm font-semibold"
          >
            Connect Wallet
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
            {currentAccount ? (
              <li className="bg-[#2952e3] py-2 px-6 my-2 rounded-full font-mono text-sm font-semibold border border-[#3d4f7c] flex items-center gap-2 self-start ml-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {shortenAddress(currentAccount)}
              </li>
            ) : (
              <li 
                onClick={connectWallet}
                className="bg-[#2952e3] py-2 px-6 my-2 rounded-full cursor-pointer hover:bg-[#2546bd] transition duration-200 text-sm font-semibold self-start ml-4"
              >
                Connect Wallet
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;