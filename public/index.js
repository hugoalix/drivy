'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];
 

//Exercice 1
function Price()
{
  rentals.forEach(function(entreR)
  {
    const rentTime = (new Date(entreR.returnDate.replace(/-/g,'/'))-new Date(entreR.pickupDate.replace(/-/g,'/')))/(1000*60*60*24)+1;
    cars.forEach(function(entreC)
    {
      if (entreC.id==entreR.carId) 
      {
        if (rentTime>1 && rentTime<4) 
        {
          entreR.price=(0.90*entreC.pricePerDay)*rentTime+entreC.pricePerKm*entreR.distance;
        }
        else if (rentTime>4 && rentTime<10) 
        {
          entreR.price=(0.70*entreC.pricePerDay)*rentTime+entreC.pricePerKm*entreR.distance;
        }
        else if (rentTime>10)
         {
          entreR.price=(0.50*entreC.pricePerDay)*rentTime+entreC.pricePerKm*entreR.distance;
         }
         else
          { entreR.price=entreC.pricePerDay*rentTime+entreC.pricePerKm*entreR.distance;}
      }
    });
  });
}

function Commission()
{
 rentals.forEach(function(entreRentals)
 {
  const rentTime = (new Date(entreRentals.returnDate.replace(/-/g,'/'))-new Date(entreRentals.pickupDate.replace(/-/g,'/')))/(1000*60*60*24)+1;
  const commission=0.30*entreRentals.price;
  entreRentals.insurance=0.5*commission;
  entreRentals.assistance=1*rentTime;
  entreRentals.drivy=commission-entreRentals.insurance-entreRentals.assistance;
 });
}

function Deductible()
{
  rentals.forEach(function(entreR)
  {
    const rentTime = (new Date(entreR.returnDate.replace(/-/g,'/'))-new Date(entreR.pickupDate.replace(/-/g,'/')))/(1000*60*60*24)+1;
    if (entreR.deductibleReduction)
     {
      entreR.price=entreR.price+(rentTime*4);
     }
  });
}


Price();
Commission();
Deductible();
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

