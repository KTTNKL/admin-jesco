
const chartService = require("./chartService");

exports.statisticByDay = async function (req, res) {
  const order = await chartService.listOrder();
  const statisticByDay = [0, 0, 0, 0, 0, 0, 0];

  const day7 = new Date();

  const day6 = new Date(day7);
  day6.setDate(day6.getDate() - 1)

  const day5 = new Date(day6);
  day5.setDate(day5.getDate() - 1)

  const day4 = new Date(day5);
  day4.setDate(day4.getDate() - 1)

  const day3 = new Date(day4);
  day3.setDate(day3.getDate() - 1)

  const day2 = new Date(day3);
  day2.setDate(day2.getDate() - 1)

  const day1 = new Date(day2);
  day1.setDate(day1.getDate() - 1)

  for (let i = 0; i < order.length; i++) {

    let date = new Date(order[i].DateOfPurchase);
    if (date.getDate() === day7.getDate() && date.getMonth() === day7.getMonth() && date.getYear() === day7.getYear()) statisticByDay[6]++;
    else if (date.getDate() === day6.getDate() && date.getMonth() === day6.getMonth() && date.getYear() === day6.getYear()) statisticByDay[5]++;
    else if (date.getDate() === day5.getDate() && date.getMonth() === day5.getMonth() && date.getYear() === day5.getYear()) statisticByDay[4]++;
    else if (date.getDate() === day4.getDate() && date.getMonth() === day4.getMonth() && date.getYear() === day4.getYear()) statisticByDay[3]++;
    else if (date.getDate() === day4.getDate() && date.getMonth() === day3.getMonth() && date.getYear() === day3.getYear()) statisticByDay[2]++;
    else if (date.getDate() === day2.getDate() && date.getMonth() === day2.getMonth() && date.getYear() === day2.getYear()) statisticByDay[1]++;
    else if (date.getDate() === day1.getDate() && date.getMonth() === day1.getMonth() && date.getYear() === day1.getYear()) statisticByDay[0]++;
  }
  console.log(day1.getMonth)
  let Xaxist = [ { day: day1.getDate(), month: day1.getMonth() },
            { day: day2.getDate(), month: day2.getMonth() + 1 },
            { day: day3.getDate(), month: day3.getMonth() + 1 },
            { day: day4.getDate(), month: day4.getMonth() + 1 },
            { day: day5.getDate(), month: day5.getMonth() + 1 },
            { day: day6.getDate(), month: day6.getMonth() + 1 },
            { day: day7.getDate(), month: day7.getMonth() + 1 }
  ];
  res.render("chart/views/statisticByDay",{Xaxist: Xaxist, statisticByDay: statisticByDay});
};


exports.statisticByWeek = async function (req, res) {
  const order = await chartService.listOrder();
  const statisticByWeek = [0, 0, 0, 0];

  var curr = new Date;
  var firstdayWeek4 = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  var lastdayWeek4 = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));

  curr = new Date(curr);
  curr.setDate(curr.getDate() - 7)
  var firstdayWeek3 = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  var lastdayWeek3 = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));

  curr = new Date(curr);
  curr.setDate(curr.getDate() - 7)
  var firstdayWeek2 = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  var lastdayWeek2 = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));

  curr = new Date(curr);
  curr.setDate(curr.getDate() - 7)
  var firstdayWeek1 = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  var lastdayWeek1 = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));

  firstdayWeek1.setHours(7,1)
  firstdayWeek2.setHours(7,1)
  firstdayWeek3.setHours(7,1)
  firstdayWeek4.setHours(7,1)

  lastdayWeek1.setHours(30,59)
  lastdayWeek2.setHours(30,59)
  lastdayWeek3.setHours(30,59)
  lastdayWeek4.setHours(30,59)
  let week = [
    {fday: firstdayWeek1.getDate(), fmonth: firstdayWeek1.getMonth() + 1, lday: lastdayWeek1.getDate(), lmonth: lastdayWeek1.getMonth() + 1},
    {fday: firstdayWeek2.getDate(), fmonth: firstdayWeek2.getMonth() + 1, lday: lastdayWeek2.getDate(), lmonth: lastdayWeek2.getMonth() + 1},
    {fday: firstdayWeek3.getDate(), fmonth: firstdayWeek3.getMonth() + 1, lday: lastdayWeek3.getDate(), lmonth: lastdayWeek3.getMonth() + 1},
    {fday: firstdayWeek4.getDate(), fmonth: firstdayWeek4.getMonth() + 1, lday: lastdayWeek4.getDate(), lmonth: lastdayWeek4.getMonth() + 1}
  ]

  for (let i = 0; i < order.length; i++) {

    let date = new Date(order[i].DateOfPurchase);
    //date.setHours(0,1,1);
    console.log(date)
    console.log(date.getTime())
    if((date.getTime() >= firstdayWeek1.getTime() && date.getTime() <= lastdayWeek1.getTime()))
      {statisticByWeek[0]++;console.log(date)}
    else if((date.getTime() >= firstdayWeek2.getTime() && date.getTime() <= lastdayWeek2.getTime()))
      statisticByWeek[1]++;
    else if((date.getTime() >= firstdayWeek3.getTime() && date.getTime() <= lastdayWeek3.getTime()))
      statisticByWeek[2]++;
    else if((date.getTime() >= firstdayWeek4.getTime() && date.getTime() <= lastdayWeek4.getTime()))
      statisticByWeek[3]++;
  }

  res.render("chart/views/statisticByWeek", {Xaxist: week, statisticByWeek: statisticByWeek});
};


exports.statisticByMonth = async function (req, res) {
  const order = await chartService.listOrder();
  const statisticByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let curr = new Date;
  let year = curr.getYear();
  
  for (let i = 0; i < order.length; i++) {

    let date = new Date(order[i].DateOfPurchase);

   if(date.getMonth() === 0 && date.getYear() === year) statisticByMonth[0]++;
   else if(date.getMonth() === 1 && date.getYear() === year) statisticByMonth[1]++;
   else if(date.getMonth() === 2 && date.getYear() === year) statisticByMonth[2]++;
   else if(date.getMonth() === 3 && date.getYear() === year) statisticByMonth[3]++;
   else if(date.getMonth() === 4 && date.getYear() === year) statisticByMonth[4]++;
   else if(date.getMonth() === 5 && date.getYear() === year) statisticByMonth[5]++;
   else if(date.getMonth() === 6 && date.getYear() === year) statisticByMonth[6]++;
   else if(date.getMonth() === 7 && date.getYear() === year) statisticByMonth[7]++;
   else if(date.getMonth() === 8 && date.getYear() === year) statisticByMonth[8]++;
   else if(date.getMonth() === 9 && date.getYear() === year) statisticByMonth[9]++;
   else if(date.getMonth() === 10 && date.getYear() === year) statisticByMonth[10]++;
   else if(date.getMonth() === 11 && date.getYear() === year) statisticByMonth[11]++;
   
  }
  
  res.render("chart/views/statisticByMonth", {statisticByMonth: statisticByMonth});
};


exports.statisticByYear = async function (req, res) {
  const order = await chartService.listOrder();
  const statisticByYear = [0, 0, 0, 0];
  let curr = new Date;
  let year = curr.getYear();
  
  for (let i = 0; i < order.length; i++) {

    let date = new Date(order[i].DateOfPurchase);

   if(date.getYear() === year - 3) statisticByYear[0]++;
   else if(date.getYear() === year - 2) statisticByYear[1]++;
   else if(date.getYear() === year - 1) statisticByYear[2]++;
   else if(date.getYear() === year) statisticByYear[3]++;
  }
  
  res.render("chart/views/statisticByYear", {year: year, statisticByYear: statisticByYear});
};


exports.statisticByQuarter = async function (req, res) {
  const order = await chartService.listOrder();
  const statisticByQuarter = [0, 0, 0, 0];

  var curr = new Date;
  let year = curr.getYear();
  let firstQuarter1 = new Date(year - 100 + 2000, 0, 1)
  let lastQuarter1 = new Date(year - 100 + 2000, 2, 31)

  let firstQuarter2 = new Date(year - 100 + 2000, 3, 1)
  let lastQuarter2 = new Date(year - 100 + 2000, 5, 30)


  let firstQuarter3 = new Date(year - 100 + 2000, 6, 1)
  let lastQuarter3 = new Date(year - 100 + 2000, 8, 30)

  let firstQuarter4 = new Date(year - 100 + 2000, 9, 1)
  let lastQuarter4 = new Date(year - 100 + 2000, 11, 31)


  firstQuarter1.setHours(7,1)
  firstQuarter2.setHours(7,1)
  firstQuarter3.setHours(7,1)
  firstQuarter4.setHours(7,1)

  lastQuarter1.setHours(30,59)
  lastQuarter2.setHours(30,59)
  lastQuarter3.setHours(30,59)
  lastQuarter4.setHours(30,59)

  for (let i = 0; i < order.length; i++) {

    let date = new Date(order[i].DateOfPurchase);
    if((date.getTime() >= firstQuarter1.getTime() && date.getTime() <= lastQuarter1.getTime()))
      statisticByQuarter[0]++;
    else if((date.getTime() >= firstQuarter2.getTime() && date.getTime() <= lastQuarter2.getTime()))
    statisticByQuarter[1]++;
    else if((date.getTime() >= firstQuarter3.getTime() && date.getTime() <= lastQuarter3.getTime()))
    statisticByQuarter[2]++;
    else if((date.getTime() >= firstQuarter4.getTime() && date.getTime() <= lastQuarter4.getTime()))
    statisticByQuarter[3]++;
  }

  
  res.render("chart/views/statisticByQuarter", {statisticByQuarter: statisticByQuarter});
};

exports.order = async function (req, res) {
  let page;
  if (req.query.page === undefined) {
    page = 1;
  } else if (req.query.page < 0) {
    page = 1;
  } else {
    page = parseInt(req.query.page);
  }
  const bills = await chartService.listBill(page);
  let totalPage = await chartService.totalBillNum();
  totalPage = Math.ceil(totalPage / 4);
  
  res.render("chart/views/bill", {
    page: page, // Current Page
    totalPage, // Total Page
    bills: bills
  });
};


exports.orderDetail = async function (req, res) {
  let order;

  try {
    order = await chartService.viewOne(req.params.id);
    order._id = order._id.toString();
    console.log(order);
  } catch (err) {}
  res.render("chart/views/orderDetail", { order });
};
