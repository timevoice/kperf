/**
 * Created with JetBrains PhpStorm.
 * User: voice
 * Date: 17.03.13
 * Time: 22:47
 * To change this template use File | Settings | File Templates.
 */
function returnOne() {
    return 1;

}

function walk() {
    a = 2;
    b = 3;
    return a + b;
}

function run(){
    return 2 +3;
}

var move = kperf( walk, run);
move();