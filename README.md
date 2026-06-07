# Krypt - Web 3.0 Blockchain Application

Krypt is a modern, decentralized application (dApp) that enables users to send Ethereum transactions across the blockchain. Users can attach custom messages and keyword-based animated GIFs to their transactions, creating a visual and interactive ledger of transfers.

---

## 🚀 Features

- **Decentralized Transactions**: Direct wallet-to-wallet Ether transfers over the Ethereum network.
- **Smart Contract Backend**: Transactions are secured and recorded immutably via a custom Solidity smart contract.
- **GIF Integration**: Dynamically fetches and attaches animated GIFs to transactions based on user-provided keywords.
- **Transaction History**: A clean, live feed showing all previous transactions with sender/receiver addresses, timestamps, and messages.
- **MetaMask Integration**: Seamless connection with MetaMask for authentication and signing transactions.
- **Premium User Interface**: Modern design with glassmorphism aesthetics, beautiful gradients, and fully responsive layouts.

---

## 🛠️ Tech Stack

### Frontend Client
- **React.js** (v19)
- **Vite** (Next-generation frontend tooling)
- **Tailwind CSS** (v4 - Utility-first styling)
- **Ethers.js** (v5 - Ethereum blockchain interactions)
- **React Icons** (Modern iconography)

### Smart Contract / Backend
- **Solidity** (v0.8.0 - Smart contract programming language)
- **Hardhat** (Ethereum development environment)
- **Chai & Mocha** (Unit testing suite)

---

## 📂 Project Structure

```text
client/
├── frontend/                 # React client application
│   ├── src/
│   │   ├── components/      # UI Components (Navbar, Loader, Welcome, Services, Transactions, Footer)
│   │   ├── context/         # TransactionContext for state management and MetaMask provider
│   │   ├── utils/           # Helper functions, dummy data, and ABI configurations
│   │   ├── App.jsx          # Main application structure
│   │   └── main.jsx         # Application entrypoint
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── smart_conrtact/           # Hardhat blockchain workspace
    ├── contracts/            # Solidity smart contracts
    │   └── Transactions.sol  # Core Transactions contract
    ├── scripts/              # Deployment scripts
    │   └── deploy.js
    ├── test/                 # Test suites
    │   └── sample-test.js
    ├── hardhat.config.js     # Hardhat configuration settings
    └── package.json
```

---

## 🏁 Getting Started

### 📋 Prerequisites

To run this project, you will need:
- **Node.js** (v16.x or later)
- **MetaMask browser extension** (configured to a local test network or Sepolia)
- **Giphy API Key** (for rendering matching GIFs in the transactions feed)

---

### 1. Smart Contract Setup & Deployment

1. Navigate to the `smart_conrtact` directory:
   ```bash
   cd smart_conrtact
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile the Solidity contract:
   ```bash
   npx hardhat compile
   ```
4. Deploy the contract to your network (e.g., Sepolia):
   Create a `.env` file in the `smart_conrtact` directory and add your keys:
   ```env
   SEPOLIA_RPC_URL="your-sepolia-rpc-url"
   PRIVATE_KEY="your-wallet-private-key"
   ```
   Deploy using Hardhat:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```
5. Copy the deployed contract address and update the `contractAddress` in `frontend/src/utils/constants.js`. The ABI `Transactions.json` will be automatically generated in the frontend if you copy it from `smart_conrtact/artifacts/contracts/Transactions.sol/Transactions.json`.

---

### 2. Frontend Client Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` directory and add your Giphy API key:
   ```env
   VITE_GIPHY_API_KEY="your-giphy-api-key"
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the local host address printed in the terminal (usually `http://localhost:5173`).

---

## 🧪 Testing

To run the unit tests for the smart contract, navigate to `smart_conrtact` and execute:

```bash
npx hardhat test
```

---

## 📄 License

This project is licensed under the MIT License.
