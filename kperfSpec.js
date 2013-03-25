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


describe("kperf", function() {

    it("  должна быть функцией  ", function() {

        expect(kperf).toEqual(jasmine.any(Function));

    });

    it("  возвращает функцию  ", function() {
        var b = kperf(function(){}, function(){});

        expect(b).toEqual(jasmine.any(Function));

    });
    it("кидает исключение если один из аргументов не является функцией", function() {

        expect(kperf).toThrow();

    });


    it(" кидает исключение если запустить функцию kperf и не передать в нее аргументов", function() {

        expect( kperf.bind(null, "", "") ).toThrow();

    });
    it(" кидает исключение если не вызывались  ее аргументы ", function() {
    var run  = jasmine.createSpy('run');
    var walk = jasmine.createSpy('walk');
        var b = kperf(walk, run);
         b();


    expect(run).toHaveBeenCalled();
    expect(walk).toHaveBeenCalled();

    });

    it("  не вызываeт свои аргументы  до вызова супер-функции", function() {
        var run  = jasmine.createSpy('run');
        var walk = jasmine.createSpy('walk');

         kperf(walk, run);

        expect(run).not.toHaveBeenCalled();
        expect(walk).not.toHaveBeenCalled();

    });


    it("передает аргументы  вложенным функциям", function() {
        var run  = jasmine.createSpy('run');
        var walk = jasmine.createSpy('walk');
        var b = kperf(walk, run);

        b('hello');

        expect(run).toHaveBeenCalledWith( 'hello');
        expect(walk).toHaveBeenCalledWith( 'hello');

    });

    it("Передает несколько аргументов   вложенным функциям  в kperf ", function() {
        var run  = jasmine.createSpy('run');
        var walk = jasmine.createSpy('walk');
        var b = kperf(walk, run);

        b(1,2,3,4);

        expect(run).toHaveBeenCalledWith( 1,2,3,4);
        expect(walk).toHaveBeenCalledWith( 1,2,3,4);

    });

    it("Передает несколько аргументов вложенным функциям kperf", function() {
        var run  = jasmine.createSpy('run');
        var walk = jasmine.createSpy('walk');
        var b = kperf(walk, run);

        b(1,2,3,4,5);

        expect(run).toHaveBeenCalledWith( 1,2,3,4,5);
        expect(walk).toHaveBeenCalledWith( 1,2,3,4,5);

    });
    /*
    it("если результат возвращаемой функциями будет разный то будет исключение", function() {
        var walk =  function () {
            a = 2;
            b = 3;
            return 2 + 1;
        }

        var run = function (){
            return  3;
        }



        expect(walk()).toEqual(run());



    }); */

    it("возвращает результат,  если возвращаемые результаты  2 вложенных функции будут равны  ", function() {
        var a = function (){return 1};

        var c = kperf(a, a);


        expect(a()).toEqual(c());



    });


});


