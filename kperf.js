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

        //super function
     return  function ()  {


        walk.apply(null, arguments);
        run.apply(null, arguments);

         if (( walk == run)){
             return walk ;
         }
         else {
             throw "Ошибка аргументы разные";

         }

     }


}


