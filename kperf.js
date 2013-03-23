/**
 * Created with JetBrains PhpStorm.
 * User: voice
 * Date: 17.03.13
 * Time: 22:47
 * To change this template use File | Settings | File Templates.
 */

var walk =  function () {
    a = 2;
    b = 3;
    return a + b;
}

var run = function (){
    return 2 + 3;
}

var kperf = function () {

    if((typeof walk) != 'function' || (typeof run) != 'function' ){
        throw "Ошибка один из аргументов не является функцией";
    }

    return function tron(walk, run){
    };
}

