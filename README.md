# Merkle Airdrop Distributor

This repository provides a professional solution for distributing ERC-20 tokens to a large number of recipients. Instead of storing every address on-chain, it uses a Merkle Root to verify eligibility.

## How it Works
1. **Off-chain:** Generate a Merkle Tree from a list of addresses and amounts.
2. **On-chain:** Deploy this contract with the Merkle Root.
3. **Claim:** Users provide a Merkle Proof to claim their specific allocation.

## Benefits
* **Gas Efficiency:** The cost to deploy is constant regardless of the number of recipients.
* **Security:** Cryptographic proof ensures only authorized addresses can claim the correct amount.

## Math
The verification follows the standard Merkle proof logic:
$$root = H(H(leaf, proof\_1), proof\_2, ...)$$

## License
MIT
