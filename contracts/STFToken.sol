// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract STFToken is ERC20 {
    constructor() ERC20("STFToken", "STF") {
        _mint(0x6B2031cB5a2ab57770f9Bab2554cb4b3EF127016, 1e27);
    }
}