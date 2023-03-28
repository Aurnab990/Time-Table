function total() {
    let num1 = document.getElementById("hour").value;
    let num2 = document.getElementById("hour1").value;
    let num3 = document.getElementById("hour2").value;
    

    // Calculate the sum
    let result = (12 - Number(num1)) + Number(num2) - Number(num3);
    console.log(result);
    document.getElementById("result").innerHTML = result+".00";
}

//Clear ALl
function clearAll() {
    document.getElementById("hour").value = "";
    document.getElementById("hour1").value = "";
    document.getElementById("hour2").value = "";

    
}