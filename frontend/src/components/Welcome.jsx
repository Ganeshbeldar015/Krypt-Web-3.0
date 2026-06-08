import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border border-white/10 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 transition-all duration-300";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-xl p-3 outline-none bg-black/30 text-white border border-gray-800 focus:border-[#37c7da] text-sm transition-all placeholder:text-gray-500 hover:border-gray-700"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 w-full max-w-[1200px]">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-gray-400 font-light md:w-9/12 w-11/12 text-base leading-relaxed">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-6 bg-gradient-to-r from-[#2952e3] to-[#37c7da] py-3 px-8 rounded-full cursor-pointer hover:shadow-2xl transition duration-300 transform hover:-translate-y-[1px]"
            >
              <AiFillPlayCircle className="text-white mr-2" fontSize={18} />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 shadow-xl rounded-2xl overflow-hidden border border-white/5 backdrop-blur-md">
            <div className={companyCommonStyles}>Reliability</div>
            <div className={companyCommonStyles}>Security</div>
            <div className={companyCommonStyles}>Ethereum</div>
            <div className={companyCommonStyles}>Web 3.0</div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={companyCommonStyles}>Blockchain</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-4 flex justify-end items-start flex-col rounded-2xl h-40 sm:w-72 w-full my-5 eth-card shadow-2xl hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-mono text-sm tracking-wider">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism border border-white/5">
            <input
              placeholder="Address From"
              type="text"
              value={currentAccount ? `From: ${currentAccount}` : "No wallet connected"}
              disabled
              className="my-2 w-full rounded-xl p-3 outline-none bg-black/50 text-gray-500 border border-transparent text-sm cursor-not-allowed opacity-80"
            />
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-white/10 my-4" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 bg-gradient-to-r from-[#2952e3] to-[#37c7da] hover:from-[#2546bd] hover:to-[#2cb0c2] py-3 px-4 rounded-full cursor-pointer font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-[1px]"
                >
                  Send Now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;