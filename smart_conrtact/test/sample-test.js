const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  let transactionsContract;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const Transactions = await ethers.getContractFactory("Transactions");
    transactionsContract = await Transactions.deploy();
    await transactionsContract.deployed();
  });

  it("Should start with 0 transactions", async function () {
    expect(await transactionsContract.getTransactionCount()).to.equal(0);
  });

  it("Should allow adding a transaction and retrieving it", async function () {
    const receiver = addr1.address;
    const amount = ethers.utils.parseEther("0.1");
    const message = "Hello Blockchain!";
    const keyword = "gif";

    const addTx = await transactionsContract.addToBlockchain(receiver, amount, message, keyword);
    await addTx.wait();

    // Check count increased to 1
    expect(await transactionsContract.getTransactionCount()).to.equal(1);

    // Retrieve all transactions
    const allTx = await transactionsContract.getAllTransactions();
    expect(allTx.length).to.equal(1);
    
    // Verify stored values
    expect(allTx[0].sender).to.equal(owner.address);
    expect(allTx[0].receiver).to.equal(receiver);
    expect(allTx[0].amount).to.equal(amount);
    expect(allTx[0].message).to.equal(message);
    expect(allTx[0].keyword).to.equal(keyword);
  });
});