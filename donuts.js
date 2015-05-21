var Store = function(n, h, d, mc, mxc, e) {
  this.name = n;
  this.hours = h;
  this.donuts = d;
  this.minCustomers = mc;
  this.maxCustomers = mxc;
  this.employees = e;

  this.donutsPerHour = function()

  this.hourReport = function() {
    return this.name + " is open " + this.hours + " hours and they need " + this.needed;
  this.donutsPerDay = function() {
    return this.donutsPerHour * 24
  }

     }
    }

  var donutMaster = function(n, tdh, tdd tc, ts, te, tr) {
  this.name = n;
  this.totalDonutsHour = tdh;
  this.totalDonutsDay = tdd;
  this.totalCustomers = tc;
  this.totalStores = ts;
  this.report = function() {
    return "Donutland's CEO is currently " + this.name + " He commands an empire of" + this.totalstores +
  }
  var stores = new Array [
  "Downtown"
  "Capitol Hill"
  "South Lake Union"
  "Wedgewood"
  "Ballard"
  ]
  this.addShop = function(Store);
  this.newList.push(Store)
}

  var CEO = new donutMaster

  console.log(CEO.report())

  alert(CEO.report)

  var downtown = new Store("Downtown", "24", 4.5, 8, 43);
  var capitolHill = new Store("Capitol Hill", "24", 2, 4, 37);
  var southLake = new Store("South Lake Union", "24", 6.33, 9, 23);
  var wedgewood = new Store("Wedgewood", "24", 1.25, 2, 28);
  var ballard = new Store("Ballard", "24", 3.75, 8, 58);

  console.log(downtown.report())
  console.log(capitolHill.report())
  console.log(southLake.report())
  console.log(wedgewood.report())
  console.log(ballard.report())

  alert(downtown.report)
  alert(capitolHill.report)
  alert(southLake.report)
  alert(wedgewood.report)
  alert(ballard.report)
