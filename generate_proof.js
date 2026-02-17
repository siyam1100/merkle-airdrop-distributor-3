const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const elements = [
  { index: 0, address: '0x123...', amount: '1000' },
  { index: 1, address: '0x456...', amount: '2000' }
];

const leaves = elements.map(x => 
  keccak256(Buffer.concat([
    Buffer.from(x.index.toString()),
    Buffer.from(x.address),
    Buffer.from(x.amount)
  ]))
);

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log('Merkle Root:', root);
// Example proof for the first element
const proof = tree.getHexProof(leaves[0]);
console.log('Proof for index 0:', proof);
