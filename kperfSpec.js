/**
 * Created with JetBrains PhpStorm.
 * User: voice
 * Date: 17.03.13
 * Time: 22:49
 * To change this template use File | Settings |  File Templates.
 */



//describe("returnOne", function() {
 //   it("WoW", function() {
//        expect(returnOne(0)).toBe(1);
 //   });


//});



function returnOne() {
    return 1;

}


var walk =  function () {
    a = 2;
    b = 3;
    return a + b;
}

var run = function (){
    return 2 + 3;
}


var supers = function kperf( walk, run){

};


describe("supers", function() {
    it( function() {
        expect(supers()).toBe(5);
    });

    it("walk", function() {
        expect(walk(window.document)).toBeDefined();
    });

    it("run", function() {
        expect(run(window.document)).toBeDefined();
    });

    it("returnOne",  function() {
        expect(returnOne(0)).toBe(1);
    });


});


