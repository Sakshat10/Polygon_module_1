const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS; // Replace with your contract address
  const contract = await ethers.getContractAt("Sakshat", contractAddress);
  const accountAddress = process.env.PUBLIC_KEY; // Replace with the recipient account address
  const metadataURIs = [
    "https://gateway.pinata.cloud/ipfs/QmRi1bXkgHmpEA8vGF1mvdC24BzFnASV82y8VPGJTy2y5Z/nft1.json",
    "https://gateway.pinata.cloud/ipfs/QmRi1bXkgHmpEA8vGF1mvdC24BzFnASV82y8VPGJTy2y5Z/nft2.json",
    "https://gateway.pinata.cloud/ipfs/QmRi1bXkgHmpEA8vGF1mvdC24BzFnASV82y8VPGJTy2y5Z/nft3.json",
    "https://gateway.pinata.cloud/ipfs/QmRi1bXkgHmpEA8vGF1mvdC24BzFnASV82y8VPGJTy2y5Z/nft4.json",
    "https://gateway.pinata.cloud/ipfs/QmRi1bXkgHmpEA8vGF1mvdC24BzFnASV82y8VPGJTy2y5Z/nft5.json",
  ];
  const numNFTs = 5; // Number of NFTs to mint

  for (let i = 0; i < numNFTs; i++) {
    const metadataURI = metadataURIs[i];
    console.log(`Minting NFT #${i + 1} with metadataURI: ${metadataURI}`);

    // Call the contract's mintNFT function
    const transaction = await contract.mintNFT(accountAddress, metadataURI);
    await transaction.wait();

    console.log(`NFT #${i + 1} minted successfully`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
