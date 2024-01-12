# DappLottery Smart Contract

## Website Access
To view the live version of the lottery smart contract application, visit [Lottery Smart Contract Website](https://lottery2.andreidev.site/). 

**Login Credentials**:
- Username: `andrei`
- Password: `andrei`

## Overview
The **DappLottery smart contract**, developed in **Solidity**, introduces an innovative and decentralized lottery system on the Ethereum blockchain. This repository contains the code and documentation for setting up and interacting with a blockchain-based lottery system.

## Key Features
- **Decentralized Lottery System**: Built on Ethereum, offering a transparent and fair lottery experience.
- **Automated Prize Distribution**: Winners are selected and paid automatically, ensuring timely and accurate prize distribution.
- **Multiple Lotteries Support**: The contract can manage multiple lottery instances, each with unique characteristics.
- **Ownership Control**: Contract ensures that only the owner can perform critical administrative actions.

## Contract Structure
- **Lottery Creation**: Admins can create lotteries with customizable parameters (title, description, prize, ticket price, etc.).
- **Participation**: Users can buy tickets for active lotteries using ether.
- **Winner Selection**: A random selection process is employed to choose lottery winners.
- **Prize Distribution**: Winnings are automatically distributed to the winners' accounts.

## Getting Started
### Prerequisites
- An Ethereum wallet (e.g., MetaMask) for interactions.
- Solidity for smart contract development.
- Truffle or Hardhat for deployment.

### Installation and Deployment
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Deploy the contract to an Ethereum testnet (e.g., Rinkeby or Goerli) using Truffle or Hardhat.

## Interacting with the Contract
- **Participants**: Can enter a lottery by sending ether to the contract's address.
- **Admins**: Can create new lotteries and initiate the winner selection process.

## Built With
- **Solidity**: For writing the smart contract.
- **OpenZeppelin**: For secure contract development.
- **Ethereum Blockchain**: For decentralized contract deployment.

## Security Features
- **Ownable Contract**: Ensures only the owner can manage lotteries.
- **Validations**: Checks for correct ether values and lottery timings.

## Contributing
Contributions are welcome. Please open an issue first to discuss what you would like to change or add.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments
- Ethereum community for support and guidance.
- OpenZeppelin for secure contract libraries.

---

This project is a demonstration of blockchain application development, focusing on smart contract design and security in a decentralized environment.
