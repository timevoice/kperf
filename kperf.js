/**
 * Created with JetBrains PhpStorm.
 * User: voice
 * Date: 17.03.13
 * Time: 22:47
 * To change this template use File | Settings | File Templates.
 */


 var kperf = function  (walk, run) {

     if((typeof walk) != 'function' || (typeof run) != 'function' ){
        throw "Ошибка один из аргументов не является функцией";
              }
    var args = arguments;

    //super function
     return  function ()  {


       var a = walk.apply(null, arguments);
       var b = run.apply(null, arguments);
         for(i=2;i<args.length;i++) {
             args[i].apply(null, arguments);

     }


         if (( a == b )){
             return a ;
         }
         else {
             throw "Ошибка аргументы разные";

         }

     }


}


