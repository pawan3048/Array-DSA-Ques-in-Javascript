// problem 1 and 2:
var vegitables = ["Potato", "Carrots", "Tomato"];
var vegitablePrices = ["120", "150", "100"];

for (let i = 0; i < vegitables.length; i++) {
  console.log(vegitables[i] + " $ " + vegitablePrices[i]);
}

// Problem 3:
var superHeros = [];

superHeros.push("Spiderman", "Batman", "CaptainAmerica", "IronMan");

for (let j = 0; j < superHeros.length; j++) {
  console.log(superHeros[j]);
}

//Problem 4:
var movies = ["Dangal", "Pushpa", "KGF", "BhagamBhag"];
var actors = ["AmirKhan", "alluArjun", "Yash", "AkshayKumar"];

for (let k = 0; k < movies.length; k++) {
  console.log("Movie name " + movies[k] + " -> Movie hero " + actors[k]);
}
