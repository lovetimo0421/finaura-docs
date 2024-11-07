---
outline: deep
---

## NFT Contract Integration

To integrate your NFT contract with our Smart Contract Wallet, you will need to inherit your contract from the ERC-4907 standard. This will give your NFT contract the ability to be rented through our wallet.

**Example:**

```solidity
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC4907.sol";

contract MyNFT is ERC721, ERC4907 {

    constructor() ERC721("MyNFT", "MNFT") ERC4907("MyNFT Rental") {}

    // ... Your custom NFT contract logic ...
}
```

## Marketplace Contract Integration

Our Smart Contract Wallet provides a Marketplace contract that allows users to list, unlist, rent, and buy NFTs. To integrate your marketplace contract with our wallet, you will need to implement the following methods:

- `listNFT`
- `unlistNFT`
- `rentNFT`
- `buyNFT`

**Example:**

```solidity
// SPDX-License-Identifier: MIT

contract Marketplace {

    function listNFT(address nftContract, uint256 tokenId, uint256 price) external;
    function unlistNFT(address nftContract, uint256 tokenId) external;
    function rentNFT(address nftContract, uint256 tokenId, uint256 period) external;
    function buyNFT(address nftContract, uint256 tokenId) external payable;

    // ... Your custom marketplace contract logic ...
}
```

## Deplpyed Contract

| Chain   | Marketplace Contract Address               | RentableNft Contract Address               |
| ------- | ------------------------------------------ | ------------------------------------------ |
| sepolia | 0x3692c52705eB96259f3E5f22Eb1c25446A909d77 | 0xC5B779c9529FB30Fe5Dc9B1B4BEED4ea3C2Cc731 |

## Additional Resources

- [ERC-4907 Standard](https://eips.ethereum.org/EIPS/eip-4907)
- [Marketplace Contract](https://github.com/project-name/smart-contract-wallet/blob/main/contracts/Marketplace.sol)
