---
outline: deep
---

# Developer Integration Overview

## Project Overview

Our Smart Contract Wallet is a full-featured wallet that allows users to manage their digital assets, interact with DeFi protocols, rent NFTs, and rent smart contract accounts. The project is built using the Hardhat development framework and written in Solidity.

## Technical Components

The Smart Contract Wallet consists of the following technical components:

- **Smart contracts:** The core logic of the wallet is implemented in a set of smart contracts. These contracts handle the management of user assets, the interaction with DeFi protocols, and the rental of NFTs and smart contract accounts.
- **Hardhat:** Hardhat is a development framework for Ethereum that provides a comprehensive suite of tools for compiling, testing, and deploying smart contracts.
- **Web3.js:** Web3.js is a JavaScript library that allows developers to interact with the Ethereum blockchain. It is used in the Smart Contract Wallet to connect to the blockchain and execute transactions.
- **React:** React is a JavaScript library for building user interfaces. It is used in the Smart Contract Wallet to create the user interface for the web and mobile applications.

## Usage

### Pre Requisites

First, you need to install the dependencies:

```sh
npm install
```

Then, you need to set up all the required
[Hardhat Configuration Variables](https://hardhat.org/hardhat-runner/docs/guides/configuration-variables). You might
also want to install some that are optional.

To assist with the setup process, run `bunx hardhat vars setup`. To set a particular value, such as a BIP-39 mnemonic
variable, execute this:

```sh
bunx hardhat vars set MNEMONIC
? Enter value: ‣ here is where your twelve words mnemonic should be put my friend
```

If you do not already have a mnemonic, you can generate one using this [website](https://iancoleman.io/bip39/).

### Compile

Compile the smart contracts with Hardhat:

```sh
npm run compile
```

### TypeChain

Compile the smart contracts and generate TypeChain bindings:

```sh
npm run typechain
```

### Test

Run the tests with Hardhat:

```sh
npm run test
```

### Lint Solidity

Lint the Solidity code:

```sh
npm run lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
npm run lint:ts
```

### Coverage

Generate the code coverage report:

```sh
npm run coverage
```

### Report Gas

See the gas usage per unit test and average gas per method call:

```sh
REPORT_GAS=true npm run test
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
npm run clean
```

### Deploy

Deploy the contracts to Hardhat Network:

```sh
npm run deploy:contracts
```

### Tasks

#### Deploy Lock

Deploy a new instance of the Lock contract via a task:

```sh
npm run task:deployLock --unlock 100 --value 0.1
```

### Syntax Highlighting

If you use VSCode, you can get Solidity syntax highlighting with the
[hardhat-solidity](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) extension.

## Using GitPod

[GitPod](https://www.gitpod.io/) is an open-source developer platform for remote development.

To view the coverage report generated by `npm run coverage`, just click `Go Live` from the status bar to turn the server
on/off.

## Local development with Ganache

### Install Ganache

```sh
npm i -g ganache
```

### Run a Development Blockchain

```sh
ganache -s test
```

> The `-s test` passes a seed to the local chain and makes it deterministic

Make sure to set the mnemonic in your `.env` file to that of the instance running with Ganache.