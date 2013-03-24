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

    it("  return kperf", function() {

        expect(kperf).toEqual(jasmine.any(Function));

    });

    it("убедиться что возвращается функция ", function() {
        var b = kperf(walk, run);

        expect(b).toEqual(jasmine.any(Function));

    });
    it("Убедиться что  kperf это функция", function() {

        expect(kperf).toThrow();

    });


    it("Если запустить kperf и не передать аргументов", function() {

        expect( kperf.bind(null, "", "") ).toThrow();

    });
    it("вызывались ли аргументы", function() {
    var run  = jasmine.createSpy('run');
    var walk = jasmine.createSpy('walk');
        var b = kperf(walk, run);
         b();


    expect(run).toHaveBeenCalled();
    expect(walk).toHaveBeenCalled();

    });

    it(" не вызываeт аргументы до вызова супер-функции", function() {
        var run  = jasmine.createSpy('run');
        var walk = jasmine.createSpy('walk');

         kperf(walk, run);

        expect(run).not.toHaveBeenCalled();
        expect(walk).not.toHaveBeenCalled();

    });


    it("Передает аргументы вложенным функциям", function() {
        var run  = jasmine.createSpy('run');
        var walk = jasmine.createSpy('walk');
        var b = kperf(walk, run);

        b('hello');

        expect(run).toHaveBeenCalledWith( 'hello');
        expect(walk).toHaveBeenCalledWith( 'hello');

    });

    it("Передает несколько аргументов вложенным функциям многим", function() {
        var run  = jasmine.createSpy('run');
        var walk = jasmine.createSpy('walk');
        var b = kperf(walk, run);

        b(1,2,3,4);

        expect(run).toHaveBeenCalledWith( 1,2,3,4);
        expect(walk).toHaveBeenCalledWith( 1,2,3,4);

    });
});


