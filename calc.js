//callback function
function add(a,b){
    let c=a+b
    return c
}
function sub(a,b){
    let c=a-b
    return c
}
function mul(a,b){
    let c=a*b
    return c
}
function div(a,b){
    let c=a/b
    return c
}
function call(Calculation){
    console.log(Calculation)
}
call(add(1,2))
call(sub(5,2))
call(mul(5,2))
call(div(5,2))
