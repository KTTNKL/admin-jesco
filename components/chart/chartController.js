//const userService = require("./userService");
const chartService = require("./chartService");

exports.list = async function (req, res) {
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
            { day: day2.getDate(), month: day2.getMonth() },
            { day: day3.getDate(), month: day3.getMonth() },
            { day: day4.getDate(), month: day4.getMonth() },
            { day: day5.getDate(), month: day5.getMonth() },
            { day: day6.getDate(), month: day6.getMonth() },
            { day: day7.getDate(), month: day7.getMonth() }
  ];
  res.render("chart/views/statistic",{Xaxist: Xaxist, statisticByDay: statisticByDay});
};
