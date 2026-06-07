# Transactions Smart Contract Project

This project contains the Solidity smart contract and the Hardhat configuration for the Transactions Web 3.0 application.

## Project Structure

- `contracts/Transactions.sol`: The core Solidity smart contract managing the transactions.
- `scripts/deploy.js`: A script to deploy the `Transactions` contract.
- `test/sample-test.js`: Unit tests for the `Transactions` contract.
- `hardhat.config.js`: Configuration file for compilation and networks.

## Usage

### 1. Installation

Install dependencies inside this directory:

```shell
npm install
```

### 2. Compilation

Compile the Solidity contracts:

```shell
npx hardhat compile
```

This will compile the contracts and generate the compilation artifacts in `artifacts/contracts/Transactions.sol/Transactions.json`.

### 3. Running Tests

Run the unit tests to verify contract functionality:

```shell
npx hardhat test
```

### 4. Deployment

Deploy the contract to a local/test network (e.g. Sepolia):

Ensure you create a `.env` file with your environment variables (e.g., `SEPOLIA_RPC_URL` and `PRIVATE_KEY`).

```shell
npx hardhat run scripts/deploy.js --network sepolia
```
