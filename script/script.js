var soort = "soort";
var aantal = "aantal";
var totaal = [];

var products = [
    "fris",
    "bier",
    "wijn",
    "bitterballen 8 stk",
    "bitterballen 16 stk"
]

var productsPrijs = [
    1.82,
    2.00,
    2.25,
    5.00,
    8.50
]
var productsTotaal = [
    0,
    0,
    0,
    0,
    0
]
function showaddMenu(soort){
    if(soort == "drank"){
        document.getElementById("addMenu2").style.display = "none";
        document.getElementById("addMenu").style.display = "block";
    }else if(soort == "snack"){
        document.getElementById("addMenu").style.display = "none";
        document.getElementById("addMenu2").style.display = "block";
    }
}
function addOrder(soort, aantal){
    if(soort == 'fris' && Number.isInteger(parseInt(aantal))){
        soort = 0;
        productsTotaal[soort] = parseInt(aantal) + productsTotaal[soort];
        console.log("fris" + productsTotaal[soort]);
    }else if(soort == 'bier' && Number.isInteger(parseInt(aantal))){
        soort = 1;
        productsTotaal[soort] = parseInt(aantal) + productsTotaal[soort];
        console.log("bier" + productsTotaal[soort]);
    }else if(soort == 'wijn' && Number.isInteger(parseInt(aantal))){
        soort = 2;
        productsTotaal[soort] = parseInt(aantal) + productsTotaal[soort];
        console.log("wijn" + productsTotaal[soort]);
    }else if(soort == "bitterballen" && Number.isInteger(parseInt(aantal))){
        if(aantal == '8'){
            productsTotaal[3]++;
        }else{
            productsTotaal[4]++;
        }
    }else{
        alert("Dit is een ongeldige invoer!");
    }
    document.getElementById("addMenu").style.display = "none";
    document.getElementById("addMenu2").style.display = "none";
}
function showBill(){
    document.getElementById("addMenu").style.display = "none";
    document.getElementById("bill").style.display = "block";
    for(var i = 0; i < productsTotaal.length; i++){
        document.getElementById("bill_text").innerHTML += products[i] + "&nbsp;&nbsp;&nbsp;&nbsp;&euro;" +  (productsPrijs[i] * productsTotaal[i]) + "<br>";
    }
    // for(var i = 0; i < products.length; i++){

    //         totaal = totaal + (productsTotaal[i] * productsPrijs[i])
    //         console.log(productsTotaal[i] * productsPrijs[i]);
    // }
    totaal = (productsTotaal[0] * productsPrijs[0]) + (productsTotaal[1] * productsPrijs[1]) + (productsTotaal[2] * productsPrijs[2]) + (productsTotaal[3] * productsPrijs[3]) + (productsTotaal[4] * productsPrijs[4]);
    document.getElementById("totaal").innerHTML = "&euro;" + parseFloat(totaal).toFixed(2);
}
function reset(){
    location.reload();
}