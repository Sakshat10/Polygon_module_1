const fs = require("fs");
const path = require("path");

// Image URLs for the 5 NFTs
const imageUrls = [
  "https://gateway.pinata.cloud/ipfs/QmZzAL8NteJL5Qxx2Xm7Ff9vaQefwADuaADnzeL4ok6KtH/nft1.jpeg",
  "https://gateway.pinata.cloud/ipfs/QmZzAL8NteJL5Qxx2Xm7Ff9vaQefwADuaADnzeL4ok6KtH/nft2.jpeg",
  "https://gateway.pinata.cloud/ipfs/QmZzAL8NteJL5Qxx2Xm7Ff9vaQefwADuaADnzeL4ok6KtH/nft3.jpeg",
  "https://gateway.pinata.cloud/ipfs/QmZzAL8NteJL5Qxx2Xm7Ff9vaQefwADuaADnzeL4ok6KtH/nft4.jpeg",
  "https://gateway.pinata.cloud/ipfs/QmZzAL8NteJL5Qxx2Xm7Ff9vaQefwADuaADnzeL4ok6KtH/nft5.jpeg",
];

// NFT information
const name = "monument";
const description = "monument";

// Create NFThub directory if it doesn't exist
const dir = "./NFThub";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Generate metadata for each NFT
for (let i = 0; i < imageUrls.length; i++) {
  const nftData = {
    name: `${name} #${i + 1}`,
    description: description,
    image: imageUrls[i],
  };

  const nftJson = JSON.stringify(nftData, null, 2);
  const fileName = `nft${i + 1}.json`;
  const filePath = path.join(dir, fileName);

  fs.writeFileSync(filePath, nftJson);
}

console.log("Metadata files generated successfully!");
