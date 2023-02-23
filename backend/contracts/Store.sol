// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Store {
    event Sale(address indexed buyer, uint256 timestamp, string name);

    struct Details {
        address from;
        uint256 timestamp;
        string name;
    }

    address payable owner;
    Details[] details;

    constructor() {
        owner = payable(msg.sender);
    }

    // To Buys the Coffee
    // Parameter Price and name
    function buysProduct(string memory _name) public payable {
        require(msg.value > 0, "Balance Zero");

        details.push(Details(msg.sender, block.timestamp, _name));

        emit Sale(msg.sender, block.timestamp, _name);
    }

    function withdrawTips() public {
        require(owner.send(address(this).balance));
    }
}
