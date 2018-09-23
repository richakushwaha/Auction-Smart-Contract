var Auction = artifacts.require("Auction");
// import 

// var Auction = artifacts.require("MetaCoin");

contract('Auction', function(accounts) {

  // test case 2 to check checkValidValues modifier
  it("values for U and V not valid OR length of U and V not same!", () => {
     
      Auction.deployed().then(function(instance){
        try{
        instance.submitBid([17,17], [3,4], 4, 1, {from: accounts[0]});
      }
    catch (e) 
    {
      console.log(e);
    }
  });
  });



});

