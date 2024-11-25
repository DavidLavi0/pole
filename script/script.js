const nabidka = ["CPU", "GPU", "RAM"];
const kosik = [];

function vypis(array, output){
    document.getElementById(output).innerHTML = "";
    for(let i =0; i<array.length; i++){
        document.getElementById(output).innerHTML += i+1 + ". " + array[i] + "<br>";
    }
}

function Add(){
    const input = document.getElementById("add-component");

    if((input.value<=nabidka.length) && (input.value> 0) && (!isNaN(input.value))){
        kosik.push(nabidka[input.value -1]);  
        nabidka.splice(input.value - 1, 1);
        //nabidka.slice(input.value); // dodelat
    }

    else{
        alert("Chyba");
    }
    vypis(kosik, "user-cart");
    vypis(nabidka, "content");
    updateKosikOptions();

}

function updateKosikOptions(){ 
    const select = document.getElementById("kosik-nabidka"); 
    select.innerHTML = ""; 
    
    for(let i = 0; i < kosik.length; i++){ 
        let option = document.createElement("option"); 
        option.value = i + 1; 
        option.text = kosik[i]; 
        select.appendChild(option);
    } 
} 

function Odeber(){ 
    const select = document.getElementById("kosik-nabidka"); 
    const index = select.selectedIndex;
    
    console.log("index = ", index)
    
    if(index >= 0){ 
        nabidka.push(kosik[index]); 
        kosik.splice(index, 1); 
        updateKosikOptions(); 
    } 
    else { 
        alert("Chyba");
    } 
    vypis(kosik, "user-cart"); 
    vypis(nabidka, "content");

    console.log(nabidka);
    console.log(kosik);
}

vypis(nabidka, "content");