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

var m =[];
         var a1 = new Date();

       //  var a = walk.apply(null, arguments);
    //   var b = run.apply(null, arguments);
         // заносит в массив возвращенное значение из функции а
         for(i=0;i<args.length;i++) {
         m[i] = args[i].apply(null, arguments);

     }




             var arg = [] ;

                for(i=0;i<args.length;i++) {
                   if(m[0] == m[i]){
                        arg = arg + 1 ;
                     }
                   }
         var b1 = new Date();
         var  c1 = b1.getTime() - a1.getTime();
         console.log(с1);

           if(m.length  == arg.length){
               return m[0] ;
           }
                else{
               throw "Ошибка аргументы разные";

           }




     }



}

