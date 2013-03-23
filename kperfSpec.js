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






/*
var supers = function kperf( walk, run){

};
*/


describe("supers", function() {

    it("  function kperf", function() {

        expect(kperf).toEqual(jasmine.any(Function));

    });

    it("function return kperf", function() {
        var b = kperf();

        expect(b).toEqual(jasmine.any(Function));

    });
    it("function return kperf2", function() {

        expect(kperf).toThrow();

    });


    it("function return kperf3", function() {

        expect( kperf.bind(null, "", "") ).toThrow();

    });

});


