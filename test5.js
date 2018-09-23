var Auction = artifacts.require("Auction");
// import 

// var Auction = artifacts.require("MetaCoin");

contract('Auction', function(accounts) {


  //test case 4 to check 
  it("getting one winner", function() {
     
      Auction.deployed().then( async function(instance){

        await instance.submitBid([17,17], [3,4], 4, 3, {from: accounts[1]});
        return instance;
      }).then(async function(instance){

        await instance.submitBid([17, 17], [3,4], 4, 4, {from: accounts[2]});
        return instance;
      }).then(async function(instance){

        await instance.sort();
         return instance;
      }).then(async function(instance){

        await instance.findWinners();
        return instance;
      }).then(async function(instance){

        result = await  instance.showWinners.call();
    
          assert.equal(result[4], accounts[2], 'Wrong winner!');

      });
  });

});

