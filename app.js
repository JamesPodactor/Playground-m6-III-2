var getPrice = () => parseInt(document.getElementById("price").value);
var getCash = () => parseInt(document.getElementById("cash").value);
var isError = () => (isNaN(getPrice()) || isNaN(getCash()));
var cashType = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

var getDifference = () => {
    if (isError() == true) {
        console.log("Ha habido un error");
    } else if (getPrice() < 0 || getCash() < 0) {
        console.log("No se admiten números negativos");
    }
    return (getCash() - getPrice());
    
}

var getAmount = (change) => {
    let result = '';
    while (change !== 0) {
      for (coin of cashType) {
        if (coin <= change) {
          change = Number((change - coin).toFixed(2));
          result = result + (coin < 5 ? " Moneda: " : " Billetes: ") + coin + " €"  + " " + '\n';
        }
      };
    };
    return result;
};

var showTotal = () => {
  var difference = getDifference();
  document.getElementById("change").innerText = getAmount(difference);
}

document.getElementById("calculate").addEventListener('click', showTotal);