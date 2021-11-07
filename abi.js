const ABI = [
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "address payable",
				name: "referral",
				type: "address"
			}
			],
		name: "mint",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
			internalType: "uint256",
			name: "tokenId",
			type: "uint256"
			}
		],
		name: "tokenURI",
		outputs: [
			{
			internalType: "string",
			name: "",
			type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "userTotalMints",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},		
    {
		inputs: [],
		name: "TOKEN_PRICE",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		  {
			internalType: "address",
			name: "",
			type: "address"
		  }
		],
		name: "userTotalReferrals",
		outputs: [
		  {
			internalType: "uint256",
			name: "",
			type: "uint256"
		  }
		],
		stateMutability: "view",
		type: "function"
	  },
	  {
		inputs: [
		  {
			internalType: "address",
			name: "owner",
			type: "address"
		  }
		],
		name: "userTotalMints",
		outputs: [
		  {
			internalType: "uint256",
			name: "",
			type: "uint256"
		  }
		],
		stateMutability: "view",
		type: "function"
	  },
	  {
		inputs: [
		  {
			internalType: "address",
			name: "owner",
			type: "address"
		  }
		],
		name: "balanceOf",
		outputs: [
		  {
			internalType: "uint256",
			name: "",
			type: "uint256"
		  }
		],
		stateMutability: "view",
		type: "function"
	  },
	  {
		inputs: [
		  {
			internalType: "address",
			name: "owner",
			type: "address"
		  },
		  {
			internalType: "uint256",
			name: "index",
			type: "uint256"
		  }
		],
		name: "tokenOfOwnerByIndex",
		outputs: [
		  {
			internalType: "uint256",
			name: "",
			type: "uint256"
		  }
		],
		stateMutability: "view",
		type: "function"
	  }
];