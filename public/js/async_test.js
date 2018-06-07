var myAsynchronous=function (v,callback) {
   process.nextTick(function () {
       callback(v);
   });
};

myAsynchronous('really?',function (val) {
    console.log(val);
});

console.log('test');