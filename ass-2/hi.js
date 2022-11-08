var p = 50;
var q = 100;
var r = function(p,q,r){
    console.log('a=${a}');
    console.log("q= " + q);
    var s =  function(p,q,r){
        p=r;
        console.log('p=${p}');
        p=q;
        r=r*2;
        var a = 75;
        return r;
    }
    return s(p,q,r);
}
a=17;
q=r(18,19,100);
console.log("p="+p);
console.log('q=${q}');

    