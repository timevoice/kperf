/**
 * Created with JetBrains PhpStorm.
 * User: voice
 * Date: 17.03.13
 * Time: 22:49
 * To change this template use File | Settings |  File Templates.
 */


function returnOne() {
    return 1;

}


describe("returnOne", function() {
    it("WoW", function() {
        expect(returnOne(0)).toBe(1);
    });

});




walk =  function () {
    a = 2;
    b = 3;
    return a + b;
}

run = function (){
    return 2 + 3;
}

var supers = kperf( walk, run);

expect( supers() ).toBe(5)  