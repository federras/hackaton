const abi = [ 
    { 
     "inputs": [ 
      { 
       "internalType": "address", 
       "name": "_employeeAddress", 
       "type": "address" 
      }, 
      { 
       "internalType": "uint256", 
       "name": "_weiAmount", 
       "type": "uint256" 
      } 
     ], 
     "name": "addEmployees", 
     "outputs": [], 
     "stateMutability": "nonpayable", 
     "type": "function" 
    }, 
    { 
     "inputs": [ 
      { 
       "internalType": "address", 
       "name": "_tenantAddress", 
       "type": "address" 
      }, 
      { 
       "internalType": "uint256", 
       "name": "_weiAmount", 
       "type": "uint256" 
      } 
     ], 
     "name": "addTenants", 
     "outputs": [], 
     "stateMutability": "nonpayable", 
     "type": "function" 
    }, 
    { 
     "inputs": [], 
     "name": "deposit", 
     "outputs": [], 
     "stateMutability": "payable", 
     "type": "function" 
    }, 
    { 
     "anonymous": false, 
     "inputs": [ 
      { 
       "indexed": false, 
       "internalType": "uint256", 
       "name": "weiAmount", 
       "type": "uint256" 
      } 
     ], 
     "name": "Deposited", 
     "type": "event" 
    }, 
    { 
     "anonymous": false, 
     "inputs": [ 
      { 
       "indexed": true, 
       "internalType": "address", 
       "name": "previousOwner", 
       "type": "address" 
      }, 
      { 
       "indexed": true, 
       "internalType": "address", 
       "name": "newOwner", 
       "type": "address" 
      } 
     ], 
     "name": "OwnershipTransferred", 
     "type": "event" 
    }, 
    { 
     "anonymous": false, 
     "inputs": [ 
      { 
       "indexed": true, 
       "internalType": "address", 
       "name": "payee", 
       "type": "address" 
      }, 
      { 
       "indexed": false, 
       "internalType": "uint256", 
       "name": "weiAmount", 
       "type": "uint256" 
      } 
     ], 
     "name": "Withdrawn", 
     "type": "event" 
    }, 
    { 
     "anonymous": false, 
     "inputs": [ 
      { 
       "indexed": false, 
       "internalType": "address", 
       "name": "employee", 
       "type": "address" 
      }, 
      { 
       "indexed": false, 
       "internalType": "uint256", 
       "name": "weiAmount", 
       "type": "uint256" 
      } 
     ], 
     "name": "employeeAdded", 
     "type": "event" 
    }, 
    { 
     "inputs": [], 
     "name": "renounceOwnership", 
     "outputs": [], 
     "stateMutability": "nonpayable", 
     "type": "function" 
    }, 
    { 
     "inputs": [ 
      { 
       "internalType": "address", 
       "name": "to", 
       "type": "address" 
      }, 
      { 
       "internalType": "uint256", 
       "name": "value", 
       "type": "uint256" 
      } 
     ], 
     "name": "sendMoney", 
     "outputs": [], 
     "stateMutability": "nonpayable", 
     "type": "function" 
    }, 
    { 
     "anonymous": false, 
     "inputs": [ 
      { 
       "indexed": false, 
       "internalType": "address", 
       "name": "tenant", 
       "type": "address" 
      }, 
      { 
       "indexed": false, 
       "internalType": "uint256", 
       "name": "weiAmount", 
       "type": "uint256" 
      } 
     ], 
     "name": "tenantAdded", 
     "type": "event" 
    }, 
    { 
     "inputs": [ 
      { 
       "internalType": "address", 
       "name": "newOwner", 
       "type": "address" 
      } 
     ], 
     "name": "transferOwnership", 
     "outputs": [], 
     "stateMutability": "nonpayable", 
     "type": "function" 
    }, 
    { 
     "inputs": [], 
     "name": "withdraw", 
     "outputs": [], 
     "stateMutability": "nonpayable", 
     "type": "function" 
    }, 
    { 
     "inputs": [ 
      { 
       "internalType": "address", 
       "name": "payee", 
       "type": "address" 
      } 
     ], 
     "name": "depositsOf", 
     "outputs": [ 
      { 
       "internalType": "uint256", 
       "name": "", 
       "type": "uint256" 
      } 
     ], 
     "stateMutability": "view", 
     "type": "function" 
    }, 
    { 
     "inputs": [], 
     "name": "getAddress", 
     "outputs": [ 
      { 
       "internalType": "address", 
       "name": "", 
       "type": "address" 
      } 
     ], 
     "stateMutability": "view", 
     "type": "function" 
    }, 
    { 
     "inputs": [], 
     "name": "getBalance", 
     "outputs": [ 
      { 
       "internalType": "uint256", 
       "name": "", 
       "type": "uint256" 
      } 
     ], 
     "stateMutability": "view", 
     "type": "function" 
    }, 
    { 
     "inputs": [], 
     "name": "owner", 
     "outputs": [ 
      { 
       "internalType": "address", 
       "name": "", 
       "type": "address" 
      } 
     ], 
     "stateMutability": "view", 
     "type": "function" 
    } 
   ];

const addressContract = "0x74e60034FE7d5618997b21E21288dAeA3600a467"

export const settings = {abi, addressContract};

