/**
 * Created with JetBrains PhpStorm.
 * User: voice
 * Date: 17.03.13
 * Time: 22:47
 * To change this template use File | Settings | File Templates.
 */


 var kperf = function  (walk, run) {
    var a1 = new Date();

     if((typeof walk) != 'function' || (typeof run) != 'function' ){
        throw "Ошибка один из аргументов не является функцией";
              }
    var args = arguments;

    //super function
     return  function ()  {

var m =[];
       var a = walk.apply(null, arguments);
       var b = run.apply(null, arguments);
         for(i=0;i<args.length;i++) {
         m[i] = args[i].apply(null, arguments);
     }
            if(( m[2]  )) {
         if ((  m[0] == m[1]  == m[2] )){
             return a ;
         }
         else {
             throw "Ошибка аргументы разные";

         }
            }
         else{
                if ((  m[0] == m[1]   )){
                    return a ;
                }
                else {
                    throw "Ошибка аргументы разные";

                }

            }
         var b1 = new Date();
         var c1 = b1.getTime() - a1.getTime();
         console.log(c1);



     }



}


