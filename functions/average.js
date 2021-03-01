

function average() {  
    let sum = 0;
    for(let num of arguments) {
        sum = sum + num;
    }
    console.log('average' ,sum);
}

average(1,2,3,4);

