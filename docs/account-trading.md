---
outline: deep
---

# Technical Details of ERC-4337 and ERC-4907: Account-Bound Tokens and NFT Rental

## ERC-4337: Account-Bound Tokens and the Technicalities of Transferring Ownership

ERC-4337 introduces the concept of "account-bound tokens," which are non-transferable tokens that are inextricably linked to the Ethereum address that owns them. This design paradigm offers unique advantages for use cases where token ownership signifies a specific identity or entitlement, such as membership in a decentralized autonomous organization (DAO) or access to exclusive services.

At the core of ERC-4337 is the AccountBound contract, which manages the issuance, ownership, and potential revocation of account-bound tokens. The contract maintains a mapping between Ethereum addresses and arrays of token IDs, allowing for efficient lookup of token ownership and the implementation of access control mechanisms.

Ownership transfer is a core aspect of ERC-4337 and is handled through a dedicated transferOwnership function. This function enables the current owner of an account-bound token to transfer ownership to a specified Ethereum address. However, unlike traditional ERC-20 transfers, the transferOwnership function does not involve the movement of tokens between accounts. Instead, it updates the ownership mapping within the AccountBound contract, effectively reassigning the token to the new owner.

To illustrate the technical details, consider the following simplified example:

```solidity
contract AccountBound is ERC4337 {
    mapping(address => uint256[]) private _tokens;

    function transferOwnership(address _to, uint256 _tokenId) public onlyOwner(_tokenId) {
        _tokens[_to].push(_tokenId);
        _tokens[msg.sender].remove(_tokenId);
        emit TransferOwnership(msg.sender, _to, _tokenId);
    }
}
```

In this example, the transferOwnership function first verifies that the sender is the current owner of the specified token by checking the _tokens mapping. If ownership is confirmed, the function adds the token ID to the _tokens array for the new owner (_to) and removes it from the array for the current owner (msg.sender). Finally, a TransferOwnership event is emitted, signaling the change in ownership to interested parties.

## ERC-4907: Non-Fungible Token Rental and the Technicalities of Leasing

ERC-4907 provides a standardized framework for the rental of non-fungible tokens (NFTs) within the Ethereum ecosystem. It defines a set of core interfaces and functions that enable the creation, management, and execution of rental agreements between token owners and renters.

At the core of ERC-4907 is the Rental contract, which serves as a central registry for rental agreements. The contract maintains a mapping between NFTs and their corresponding rental agreements, allowing for efficient tracking of the rental status and terms.

Lease creation is a fundamental aspect of ERC-4907 and is initiated through a dedicated createLease function. This function enables the NFT owner to define the rental terms, including the rental period, rental fee, and any additional conditions. Once a lease is created, it is associated with the specified NFT and becomes available for renters to accept.

Renters can initiate the rental process by calling the acceptLease function, which transfers the NFT from the owner's account to a designated escrow account managed by the Rental contract. The renter is then obligated to pay the rental fee according to the terms of the lease.

To illustrate the technical details, consider the following simplified example:

```solidity
contract Rental is ERC4907 {
    mapping(uint256 => Lease) private _leases;

    function createLease(
        uint256 _tokenId,
        uint256 _rentalPeriod,
        uint256 _rentalFee,
        address _renter
    ) public onlyOwner(_tokenId) {
        Lease lease = new Lease(
            _tokenId,
            _rentalPeriod,
            _rentalFee,
            _renter
        );
        _leases[_tokenId] = lease;
        emit LeaseCreated(_tokenId, lease);
    }

    function acceptLease(uint256 _tokenId) public payable {
        Lease lease = _leases[_tokenId];
        require(msg.value == lease.rentalFee, "Insufficient rental fee");

        IERC721(lease.nftAddress).transferFrom(
            msg.sender,
            address(this),
            lease.tokenId
        );
        emit LeaseAccepted(_tokenId, msg.sender);
    }
}
```

In this example, the createLease function enables the NFT owner to specify the rental terms and associate them with the specified NFT. The acceptLease function verifies that the renter has paid the required rental fee and transfers the NFT from the owner's account to the escrow account managed by the Rental contract, effectively initiating the rental period.
