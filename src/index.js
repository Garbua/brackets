module.exports = function check(str, bracketsConfig) {
    if(str.length <= 1) {
        return false;
    }

    let arr = [...str];
    let config = bracketsConfig.flat();
    let openBracket;
    let arrBrackets = [];

    for(let i = 0; i < arr.length; i++){
        let bracket = arr[i];
        if(bracket === '|' || bracket === '7' || bracket === '8'){
            if(bracket === arrBrackets[arrBrackets.length - 1]) {
                arrBrackets.splice(arrBrackets.length - 1, 1);
                continue;
            }
        }
        if(config.indexOf(bracket) % 2 !== 0){                                   // находим первый закрывающийся bracket
            openBracket = config[config.indexOf(bracket) - 1];                   
            if(arrBrackets.length < 1 || (arrBrackets.pop() !== openBracket)) {  // проверяем открывающийся ли bracket находится перед закр., если нет - false
                return false;
            }
        }else{
            arrBrackets.push(bracket); // записываем в массив открывающийся bracket
        }
    }

    if(arrBrackets.length === 0) {
        return true;
    }

    if(arrBrackets.length >= 1) {
        return false;
    }
    arrBrackets.length === 0;  // обнуляем массив 
    
  return true;
}
