var NFTs=[];

//there can be more arguments for more metadata 
// Assuming a single metadata(name)
function mintNFT (name) {
    var NFT={};
    NFT.name=name;
    NFTs.push(NFT);
}

function listNFTs (NFTs) {
    for(var i=0;i<NFTs.length;i++){
        console.log("NFT name is "+ NFTs[i].name);
    }
}

function getTotalSupply(NFTs) {
    console.log("total number of NFTs  minted : " + NFTs.length);
}

mintNFT("David");
mintNFT("Sam");
mintNFT("Rohan");
listNFTs(NFTs);
getTotalSupply(NFTs);
