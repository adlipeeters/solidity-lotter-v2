const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
    const servicePercent = 7;
    const Contract = await ethers.getContractFactory('DappLottery')
    const contract = await Contract.deploy(servicePercent)
    await contract.deployed()

    const address = JSON.stringify({ address: contract.address }, null, 4)

    fs.writeFile('./artifacts/contractAddress.json', address, 'utf8', (error) => {
        if (error) {
            console.log(error)
            return
        }
        console.log('Deployed contract address: ', contract.address)
    })
}

main().catch((error) => {
    console.log(error)
    process.exitCode = 1
})