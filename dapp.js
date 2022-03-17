
App = {
    web3Provider: null,
    contracts: {
      PotatoMarket: null
    },
    currentAddress: '',
    contractAddress: '0x162c701429C8ba9354550081ffa73b9Bc657E2D0',
    contractAbi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BuyOrderLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"CancelOrderLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"address","name":"payToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"CreateOrderLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"_minPrice","type":"uint256"}],"name":"addSupportTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"buyOrder","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"cancelOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"payToken","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"delSupportTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getMinPriceByTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"getOrderInfo","outputs":[{"components":[{"internalType":"uint256","name":"orderId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"payToken","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"createTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"enum PotatoMarket.State","name":"state","type":"uint8"},{"internalType":"bool","name":"isExist","type":"bool"}],"internalType":"struct PotatoMarket.Order","name":"order","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"getRateAmount","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getSupportTokens","outputs":[{"components":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"minPrice","type":"uint256"}],"internalType":"struct PotatoMarket.Token[]","name":"tokenArr","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSupportTokensLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTokenInfo","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct FarmType","name":"farmType","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"isSupportTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"onERC1155BatchReceivedinput0","type":"address"},{"internalType":"address","name":"onERC1155BatchReceivedinput1","type":"address"},{"internalType":"uint256[]","name":"onERC1155BatchReceivedinput2","type":"uint256[]"},{"internalType":"uint256[]","name":"onERC1155BatchReceivedinput3","type":"uint256[]"},{"internalType":"bytes","name":"onERC1155BatchReceivedinput4","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"onERC1155Receivedinput0","type":"address"},{"internalType":"address","name":"onERC1155Receivedinput1","type":"address"},{"internalType":"uint256","name":"onERC1155Receivedinput2","type":"uint256"},{"internalType":"uint256","name":"onERC1155Receivedinput3","type":"uint256"},{"internalType":"bytes","name":"onERC1155Receivedinput4","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"orderIdNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platformFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_canSell","type":"bool"}],"name":"setCanSell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_minPrice","type":"uint256"}],"name":"setMinPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"}],"name":"setNftAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_platformFee","type":"uint256"}],"name":"setPlatformFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiveAddress","type":"address"}],"name":"setReceiveAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    initWeb3: async function () {
      if (window.ethereum) {
        App.web3Provider = window.ethereum
        web3 = new Web3(App.web3Provider);
        try {
          // await App.changeNetwork()
          await ethereum.enable()
        } catch (error) {
        }
      } else {
        if (window.web3) {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(App.web3Provider);
        } else {
          App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
          web3 = new Web3(App.web3Provider);
        }
      }
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          return
        }
        App.currentAddress = accounts[0]
        return App.initContract();
      });
    },
    initContract: function () {
      App.contracts.PotatoMarket = new web3.eth.Contract(App.contractAbi, App.contractAddress);
      return App.bindEvents();
    },
    bindEvents: function () {
      $(document).on('change', '#select', App.selectFunction);
    },
    selectFunction: function () {
      let index = $('#select').val()
      let functionAbi = App.contractAbi[index]
      $('#' +functionAbi.name + 'Box').show().siblings().hide()

    },
    addSupportTokens:async function (){
            let addSupportTokens_token = $('#addSupportTokens_token').val()
      let addSupportTokens__minPrice = $('#addSupportTokens__minPrice').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.addSupportTokens(addSupportTokens_token,addSupportTokens__minPrice).send({from:App.currentAddress})
          },
          buyOrder:async function (){
            let buyOrder_orderId = $('#buyOrder_orderId').val()
      
            let ethValue = $('#ethValue').val()
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.buyOrder(buyOrder_orderId).send({from:App.currentAddress,value: ethValue})
          },
          cancelOrder:async function (){
            let cancelOrder_orderId = $('#cancelOrder_orderId').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.cancelOrder(cancelOrder_orderId).send({from:App.currentAddress})
          },
          createOrder:async function (){
            let createOrder_payToken = $('#createOrder_payToken').val()
      let createOrder_tokenId = $('#createOrder_tokenId').val()
      let createOrder_amount = $('#createOrder_amount').val()
      let createOrder_price = $('#createOrder_price').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.createOrder(createOrder_payToken,createOrder_tokenId,createOrder_amount,createOrder_price).send({from:App.currentAddress})
          },
          delSupportTokens:async function (){
            let delSupportTokens_token = $('#delSupportTokens_token').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.delSupportTokens(delSupportTokens_token).send({from:App.currentAddress})
          },
          getRateAmount:async function (){
            let getRateAmount__amount = $('#getRateAmount__amount').val()
      let getRateAmount__rate = $('#getRateAmount__rate').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.getRateAmount(getRateAmount__amount,getRateAmount__rate).send({from:App.currentAddress})
          },
          initialize:async function (){
            
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.initialize().send({from:App.currentAddress})
          },
          onERC1155BatchReceived:async function (){
            let onERC1155BatchReceived_onERC1155BatchReceivedinput0 = $('#onERC1155BatchReceived_onERC1155BatchReceivedinput0').val()
      let onERC1155BatchReceived_onERC1155BatchReceivedinput1 = $('#onERC1155BatchReceived_onERC1155BatchReceivedinput1').val()
      let onERC1155BatchReceived_onERC1155BatchReceivedinput2 = $('#onERC1155BatchReceived_onERC1155BatchReceivedinput2').val()
      let onERC1155BatchReceived_onERC1155BatchReceivedinput3 = $('#onERC1155BatchReceived_onERC1155BatchReceivedinput3').val()
      let onERC1155BatchReceived_onERC1155BatchReceivedinput4 = $('#onERC1155BatchReceived_onERC1155BatchReceivedinput4').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.onERC1155BatchReceived(onERC1155BatchReceived_onERC1155BatchReceivedinput0,onERC1155BatchReceived_onERC1155BatchReceivedinput1,onERC1155BatchReceived_onERC1155BatchReceivedinput2,onERC1155BatchReceived_onERC1155BatchReceivedinput3,onERC1155BatchReceived_onERC1155BatchReceivedinput4).send({from:App.currentAddress})
          },
          onERC1155Received:async function (){
            let onERC1155Received_onERC1155Receivedinput0 = $('#onERC1155Received_onERC1155Receivedinput0').val()
      let onERC1155Received_onERC1155Receivedinput1 = $('#onERC1155Received_onERC1155Receivedinput1').val()
      let onERC1155Received_onERC1155Receivedinput2 = $('#onERC1155Received_onERC1155Receivedinput2').val()
      let onERC1155Received_onERC1155Receivedinput3 = $('#onERC1155Received_onERC1155Receivedinput3').val()
      let onERC1155Received_onERC1155Receivedinput4 = $('#onERC1155Received_onERC1155Receivedinput4').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.onERC1155Received(onERC1155Received_onERC1155Receivedinput0,onERC1155Received_onERC1155Receivedinput1,onERC1155Received_onERC1155Receivedinput2,onERC1155Received_onERC1155Receivedinput3,onERC1155Received_onERC1155Receivedinput4).send({from:App.currentAddress})
          },
          renounceOwnership:async function (){
            
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.renounceOwnership().send({from:App.currentAddress})
          },
          setCanSell:async function (){
            let setCanSell__canSell = $('#setCanSell__canSell').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.setCanSell(setCanSell__canSell).send({from:App.currentAddress})
          },
          setMinPrice:async function (){
            let setMinPrice__tokenId = $('#setMinPrice__tokenId').val()
      let setMinPrice__minPrice = $('#setMinPrice__minPrice').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.setMinPrice(setMinPrice__tokenId,setMinPrice__minPrice).send({from:App.currentAddress})
          },
          setNftAddress:async function (){
            let setNftAddress__nftAddress = $('#setNftAddress__nftAddress').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.setNftAddress(setNftAddress__nftAddress).send({from:App.currentAddress})
          },
          setPlatformFee:async function (){
            let setPlatformFee__platformFee = $('#setPlatformFee__platformFee').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.setPlatformFee(setPlatformFee__platformFee).send({from:App.currentAddress})
          },
          setReceiveAddress:async function (){
            let setReceiveAddress__receiveAddress = $('#setReceiveAddress__receiveAddress').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.setReceiveAddress(setReceiveAddress__receiveAddress).send({from:App.currentAddress})
          },
          transferOwnership:async function (){
            let transferOwnership_newOwner = $('#transferOwnership_newOwner').val()
      
            let dataPotatoMarket = await App.contracts.PotatoMarket.methods.transferOwnership(transferOwnership_newOwner).send({from:App.currentAddress})
          },
          
  };
  
  (function () {
     App.initWeb3();
  })();
  
  
