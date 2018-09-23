var Auction = artifacts.require("Auction");

contract('Auction', function(accounts) {


  // test case 1 to check checkWeight modifier
  it("correct value of weight go on !", async function() {
    let Error;
    await Auction.deployed().then(function(instance){
        try{
           instance.submitBid([17, 17], [3,4], 4, 1, {from: accounts[0]});
      }
    catch (e) 
    {
      Error = e
      console.log(e);
    }
    assert.equal(Error, undefined, 'Exception Thrown');
   // assert.isAbove(Error.message.search('VM Exception while processing transaert'), -1, 'Error: VM Exception revert');
  });
  });

});


