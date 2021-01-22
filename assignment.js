


// kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}


var result = kilometerToMeter(-1);
console.log(result);



// budgetCalculator

function budgetCalculator (watch, phone, laptop){
    var buyWatch = watch * 50;
    var buyPhone = phone * 100;
    var buyLaptop = laptop * 500;
    var result = buyWatch + buyPhone + buyLaptop;
    return result;
}

var sum = budgetCalculator(-1, 2, 3);
console.log(sum);




// hotelCost

function hotelCost(stayingOnHotel){
var payment = 0;

if(stayingOnHotel <= 10){
    payment = stayingOnHotel * 100;
}
else if(stayingOnHotel <= 20 ){
    var firstPart = 10 * 100;
    var remainingDays = stayingOnHotel - 10;
    var secondPart = remainingDays * 80;
    Payment = firstPart + secondPart;
}
else{
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remainingDays = stayingOnHotel - 20;
    var thirdPart = remainingDays * 50;
    payment = firstPart + secondPart + thirdPart;
}
    return payment;
}
var cost = hotelCost(13);
console.log(cost);



// megaFriend

 


function megaFriend(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = megaFriend( [ 'kamal', 'kaalimuddin', 'ayub','jmalVuia', 'lulluMia', 'kutubUddinKhan']);
  console.log(word);


