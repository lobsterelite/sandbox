
serverUrl = "https://br0lbvqeugsv.usemoralis.com:2053/server"
appId =  "MoLmSqTcVeDcRQNv8HSBmcArZYn7JCqarp6sXX5j" 
Moralis.start({ serverUrl, appId});
  
function SetOptions(function_name, params)
{
  let options = {
      contractAddress: "0x0185029ef19565bfdba1ec9df98f681e51767f99",
      functionName: function_name,
      abi: ABI,
      params: params,
    };

    return options;
}

function initContractFucntion(custom_options)
{
  return new Promise((resolve, reject ) =>{
    init(custom_options).then(init_result => {
      resolve(init_result); 
    }).catch(e => {
      console.log(e);
      reject(e);
    })
  })
}

async function init(options) 
{
  const web3 = await Moralis.enableWeb3();
  const result = await Moralis.executeFunction(options);
  return result;
}



// let test_to = "0xE4e8B168c34973aD82b304D3E1C6A9C648c4B14E";
// let test_referral = "0xd3edeb449b2f93210d19e19a9e7f348998f437ec";
// test_options = {
//   contractAddress: "0x0185029ef19565bfdba1ec9df98f681e51767f99",
//   functionName: "balanceOf",
//   abi: ABI,
//   params: {
//     owner: test_to,
//   },
// };

// initContractFucntion(test_options);

// const UserBalance = function(user){
//   balance_opt = SetOptions('balanceOf', {owner: user});
//   return initContractFucntion(balance_opt)
// }

async function login()
{
   user_adr = document.getElementById('user_address');
   user_bal = document.getElementById('user_balance');
   user_tokenbyindex = document.getElementById('user_mints');

  console.log('login here');
  Moralis.authenticate().then(function (user) {
    const user_adress = user.get('ethAddress');
    console.log(user_adress);
    user_adr.value = user_adress;

    balance_opt = SetOptions('balanceOf', {owner: user_adress});
    tokenownerindex_opt = SetOptions('tokenOfOwnerByIndex', {owner: user_adress});
    initContractFucntion(balance_opt).then(result => user_bal.value = result);

    let div = document.getElementById('mint_button');
    div.innerHTML = '<br><button onclick="Mint()">Mint this bustard</button>';

  })
}

async function Mint()
{
  let add = document.getElementById('user_address');
  let address = add.value;
  
  mint_opt = SetOptions('mint', {to: address, referral: '0x8910B3Ea5ece2eD26c2f71661D81Ff5f152Bea8F', value: '300000000'});

  initContractFucntion(mint_opt).then(result => console.log('done'));

}
async function Mint()
{
  let add = document.getElementById('user_address');
  let address = add.value;

  
  mint_opt = SetOptions('mint', {to: address, referral: '0x8910B3Ea5ece2eD26c2f71661D81Ff5f152Bea8F'});

  initContractFucntion(mint_opt).then(result => console.log('done'));

}

