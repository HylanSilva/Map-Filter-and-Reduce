function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item%2!==0;
}

const numb = [1,23,42,30,104,222,1000,1356];

console.log(filtraPares(numb));