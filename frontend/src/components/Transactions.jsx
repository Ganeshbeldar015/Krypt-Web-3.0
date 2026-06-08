import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { FiArrowUpRight, FiMessageSquare } from "react-icons/fi";
import { SiEthereum } from "react-icons/si";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, amount }) => {
  return (
    <div className="bg-[#181918] w-full max-w-[350px] flex flex-col p-5 rounded-2xl hover:shadow-2xl border border-gray-800 transition-all duration-300 hover:border-gray-700"
    >
      <div className="flex flex-col w-full h-full justify-between">
        {/* Card Header with Icon and Amount */}
        <div className="flex justify-between items-center w-full mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-900/40 border border-blue-500/30 flex justify-center items-center">
            <SiEthereum className="text-[#37c7da]" fontSize={18} />
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-xs font-light">Amount</p>
            <p className="text-[#37c7da] text-xl font-semibold">{amount} ETH</p>
          </div>
        </div>

        {/* Addresses Info */}
        <div className="flex flex-col gap-2 bg-black/30 p-3 rounded-xl mb-4 border border-white/5">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">From:</span>
            <a 
              href={`https://sepolia.etherscan.io/address/${addressFrom}`} 
              target="_blank" 
              rel="noreferrer"
              className="text-[#5b9eff] hover:text-[#7fb3ff] text-sm flex items-center gap-1 transition-colors"
            >
              {shortenAddress(addressFrom)}
              <FiArrowUpRight size={14} />
            </a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">To:</span>
            <a 
              href={`https://sepolia.etherscan.io/address/${addressTo}`} 
              target="_blank" 
              rel="noreferrer"
              className="text-[#5b9eff] hover:text-[#7fb3ff] text-sm flex items-center gap-1 transition-colors"
            >
              {shortenAddress(addressTo)}
              <FiArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Message (if exists) */}
        {message ? (
          <div className="flex flex-col gap-1 bg-white/5 p-3 rounded-xl mb-4 border border-white/5">
            <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-1">
              <FiMessageSquare size={12} />
              <span>Message:</span>
            </div>
            <p className="text-gray-200 text-sm italic break-words">"{message}"</p>
          </div>
        ) : (
          <div className="mb-4 text-transparent select-none text-xs">-</div>
        )}

        {/* Card Footer with Timestamp */}
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-white/5">
          <span className="text-gray-500 text-xs font-semibold">TIMESTAMP</span>
          <span className="text-gray-400 text-xs font-semibold">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4 w-full items-center">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center justify-items-center mt-10 w-full max-w-[1200px]">
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;