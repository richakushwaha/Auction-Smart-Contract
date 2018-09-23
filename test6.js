var Auction = artifacts.require("Auction");
// import 

// var Auction = artifacts.require("MetaCoin");

contract('Auction', function(accounts) {


  //test case 5 to check [TO BE DONE]
  it("checking payment of onw winner", function() {
     
      Auction.deployed().then( async function(instance){

        await instance.submitBid([17], [2], 4, 3, {from: accounts[1]});
        return instance;
      }).then(async function(instance){

        await instance.submitBid([17], [3], 4, 4, {from: accounts[2]});
        return instance;
      }).then(async function(instance){

        await instance.sort();
         return instance;
      }).then(async function(instance){

        await instance.findWinners();
        return instance;
      }).then(async function(instance){

        result = await instance.showWinners.call();
        assert.equal(result[4], accounts[2], 'Wrong first winner!');
        assert.equal(result[5], accounts[1], 'Wrong second winner!');
      });
  });

});

