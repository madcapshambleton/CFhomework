var donutShop = function(shopName, minCustomers, maxCustomers, averageDonuts) {
 this.name = shopName;
 this.min = minCustomers;
 this.max = maxCustomers;
 this.average = averageDonuts;
 this.getRandomArbitrary = function () {
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;
 };
 this.donutsHour = function() {
  return this.getRandomArbitrary() * this.average;
 }
 this.donutsDay = function() {
  return this.donutsHour() * 10;
 }
}

var downTown = new donutShop("Downtown", 8, 43, 4.5);
var capitolHill = new donutShop("Capitol Hill", 4, 37, 2);
var southLakeUnion = new donutShop("SouthLake Union", 9, 23, 6.33);
var wedgewood = new donutShop("Wedgewood", 2, 28, 1.25);
var ballard = new donutShop("Ballard", 8, 58, 3.75);

function DonutMaster() {

  this.newList = [];

  this.addShop = function(donutShop) {
    this.newList.push(donutShop);
  };

  this.addTableRows = function() {
    for (var i = 0; i < this.newList.length; i++) {
    $("tbody").append("<tr id='row" + i + "'></tr>");
    $("#row" + i).append("<td>" + this.newList[i].name + "</td>");
    $("#row" + i).append("<td id='day" + i + "'></td>");
    $("#row" + i).append("<td id='hour" + i + "'></td>");
    }
  }

this.updateReport = function() {
  for (var i = 0; i < this.newList.length; i++) {
    $("#day" + i).text(this.newList[i].donutsDay());
    $("#hour" + i).text(this.newList[i].donutsHour);
    console.log("The " + this.newList[i].name + " shop needs to bake " +
                this.newList[i].donutsDay() + " donuts per day." +
              this.newList[i].donutsHour + " donuts per hour.");
  }
};

this.generateForm = function() {
    for (var i = 0; i < this.newList.length; i++) {
      var formText = "<td><form>" +
        "<input type='text' id='minCustomers" + i + "' " +
        "placeholder='minCust' name='minCustomers'>" +
        "</input>" +
        "<input type='text' id='maxCustomers" + i + "' " +
        "placeholder='maxCustomers' name='maxCustomers'>" +
        "</input>" +
        "<button id='btn"+i+"'></button></form></td>";
      $("#row" + i).append(formText);
      $("#btn"+i).on("click", function(e) {
        e.preventDefault();
        var id = $(this).attr("id");
        var i = id.substr(3);
        var minCustomers = $("#minCustomers" + i).val()
        var maxCustomers = $("#maxCustomers" + i).val()
        console.log("Min Customers" + minCustomers);
        console.log("Max Customers" + maxCustomers);
      });
      this.newList[i].minCustomers = minCustomers;
      this.newList[i].maxCustomers = maxCustomers;
      this.updateReport();
    }
  }
}

var donutMaster = new DonutMaster();
donutMaster.addShop(downTown);
donutMaster.addShop(capitolHill);
donutMaster.addShop(southLakeUnion);
donutMaster.addShop(wedgewood);
donutMaster.addShop(ballard);

donutMaster.addTableRows();
donutMaster.updateReport();
donutMaster.generateForm();

