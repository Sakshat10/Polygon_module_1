const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Define the contract name, symbol, and description
  const name = "Sakshat NFT Collection";
  const symbol = "SAKNFT";
  const promptDesc =
    "ancient monuments";

  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log(`Contract Deployer's address: ${deployerAddress}`);

  // Deploy the UNFTC contract
  const Sakshat = await ethers.getContractFactory("Sakshat");
  const sakshat = await Sakshat.deploy(promptDesc, name, symbol);

  // Wait for the contract to be mined
  await sakshat.deployed();

  // Print the contract address and transaction hash
  console.log("SAKNFT deployed to:", sakshat.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
