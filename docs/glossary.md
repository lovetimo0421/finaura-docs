---
outline: deep
---

# Glossary

## ERC-4337

ERC-4337 is a standard for account abstraction on the Ethereum blockchain. It defines a set of rules and interfaces that allow users to interact with smart contracts without managing their own private keys.

### Components of ERC-4337

- **User Operation:** A data structure that represents a user's request to interact with a smart contract. It includes the calldata, gas limit, and other parameters necessary to execute the transaction.
- **Entry Point:** A smart contract that receives and validates user operations. It forwards valid operations to the target smart contract for execution.
- **Paymaster:** A smart contract that pays for the gas costs of user operations. It can be used by users who do not have enough ETH to cover the gas fees.
- **Bundler:** A service that aggregates multiple user operations into a single transaction. This can reduce the gas costs for users and improve the efficiency of the network.
- **Relayer:** A service that submits bundled user operations to the blockchain. It ensures that the operations are executed in the correct order and that the paymasters are able to pay for the gas costs.

### Benefits of ERC-4337

- **Improved security:** By removing the need for users to manage their own private keys, ERC-4337 reduces the risk of theft or loss of funds.
- **Simplified user experience:** Users can interact with smart contracts without having to understand the complexities of blockchain technology.
- **Increased flexibility:** ERC-4337 allows users to delegate their authority to multiple paymasters, giving them more control over how their transactions are executed.

## EIP-712

EIP-712 is a standard for representing structured data as a JSON object and then hashing it using a cryptographic function. It is commonly used to sign data off-chain and verify the signature on-chain.

### Components of EIP-712

- **Type System:** Defines the data types that can be used in EIP-712 structured data.
- **Encoding Function:** Encodes the structured data into a binary representation.
- **Hashing Function:** Hashes the encoded data using a cryptographic function, such as SHA-256.

### Signing and Verification

To sign data using EIP-712, the following steps are performed:

1. The structured data is encoded using the EIP-712 encoding function.
2. The encoded data is hashed using the EIP-712 hashing function.
3. The hash is signed using the signer's private key.

To verify a signature using EIP-712, the following steps are performed:

1. The structured data is encoded using the EIP-712 encoding function.
2. The encoded data is hashed using the EIP-712 hashing function.
3. The signature is verified using the signer's public key and the hash of the encoded data.

### Benefits of EIP-712

- **Improved security:** By signing data off-chain and verifying the signature on-chain, EIP-712 reduces the risk of data tampering and fraud.
- **Simplified user experience:** Users can sign data without having to understand the complexities of cryptography.
- **Increased flexibility:** EIP-712 can be used to sign any type of structured data, making it a versatile tool for a variety of applications.

## ERC-4907

ERC-4907 is a standard for non-fungible tokens (NFTs) that represent real-world assets. It provides a common interface and set of metadata attributes for NFTs that represent physical items, such as artwork, collectibles, and real estate.

### Components of ERC-4907

- **Core Interface:** Defines the basic functionality of an ERC-4907 NFT, including the ability to transfer, burn, and mint NFTs.
- **Metadata Attributes:** Specifies a set of metadata attributes that can be used to describe the real-world asset represented by the NFT. These attributes include:
    1. **AssetType:** The type of real-world asset represented by the NFT.
    2. **AssetLocation:** The physical location of the real-world asset.
    3. **AssetOrigin:** The provenance and history of the real-world asset.
    4. **AssetCustodian:** The entity that is responsible for the safekeeping of the real-world asset.
- **Security:** ERC-4907 includes security features to protect the integrity of the NFT and the underlying real-world asset. These features include:
    1. **Verification:** Mechanisms for verifying the authenticity and ownership of the NFT.
    2. **Escrow:** A system for holding the NFT in escrow until the real-world asset is delivered or the transaction is complete.

### Benefits of ERC-4907

- **Improved transparency:** ERC-4907 provides a standardized way to represent and track the ownership of real-world assets on the blockchain.
- **Reduced fraud:** The security features of ERC-4907 help to prevent fraud and protect the value of the underlying real-world assets.
- **Increased liquidity:** ERC-4907 makes it easier to trade and exchange NFTs that represent real-world assets.

## Additional Resources

* [ERC-4907 Standard](https://eips.ethereum.org/EIPS/eip-4907)
* [ERC-4907 GitHub Repository](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4907.md)
* [ERC-4907 Tutorial](https://docs.openzeppelin.com/contracts/4.x/erc4907)
* [EIP-712 Standard](https://eips.ethereum.org/EIPS/eip-712)
* [EIP-712 Type System](https://docs.soliditylang.org/en/latest/abi-spec.html#types)
* [EIP-712 Encoding Function](https://docs.soliditylang.org/en/latest/abi-spec.html#encoding-of-parameters)
* [EIP-712 Hashing Function](https://docs.soliditylang.org/en/latest/abi-spec.html#encoding-of-parameters)
