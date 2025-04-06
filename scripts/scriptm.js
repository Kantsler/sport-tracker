import ('https://tomashubelbauer.github.io/github-pages-local-storage/index.js');

const now = new Date();
let dayOfMonth = now.getDate();
let month = now.getMonth()+1;
let year = now.getFullYear();
dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
month = month < 10 ? '0' + month : month;
let xValues = [];
dayOfMonth = "01";
const monthPushUps = JSON.parse(localStorage.getItem("monthPushUps")) || {};
const monthPullUps = JSON.parse(localStorage.getItem("monthPullUps")) || {};
const monthSitUps = JSON.parse(localStorage.getItem("monthSitUps")) || {};
const monthBurpees = JSON.parse(localStorage.getItem("monthBurpees")) || {};
const monthChinUps = JSON.parse(localStorage.getItem("monthChinUps")) || {};
const monthSquats = JSON.parse(localStorage.getItem("monthSquats")) || {};



if (dayOfMonth=="01"){
    if ((month=="01") || (month=="03") || (month=="05") || (month=="07") || (month=="08") || (month=="10") || (month=="12")) {
        xValues = [`01.${month}`, `02.${month}`, `03.${month}`, `04.${month}`, `05.${month}`,`06.${month}`, `07.${month}`, `08.${month}`, `09.${month}`, `10.${month}`, `11.${month}`, `12.${month}`, `13.${month}`, `14.${month}`, `15.${month}`, `16.${month}`, `17.${month}`,`18.${month}`, `19.${month}`, `20.${month}`, `21.${month}`, `22.${month}`, `23.${month}`, `24.${month}`, `25.${month}`, `26.${month}`,`27.${month}`, `28.${month}`, `29.${month}`, `30.${month}`, `31.${month}`];
    } else if ((month=="04") || (month=="06") || (month=="09") || (month=="11")) {
        xValues = [`01.${month}`, `02.${month}`, `03.${month}`, `04.${month}`, `05.${month}`,`06.${month}`, `07.${month}`, `08.${month}`, `09.${month}`, `10.${month}`, `11.${month}`, `12.${month}`, `13.${month}`, `14.${month}`, `15.${month}`, `16.${month}`, `17.${month}`,`18.${month}`, `19.${month}`, `20.${month}`, `21.${month}`, `22.${month}`, `23.${month}`, `24.${month}`, `25.${month}`, `26.${month}`,`27.${month}`, `28.${month}`, `29.${month}`, `30.${month}`];
    }
    if ((month=="02") && (((year % 4 == 0) && (year % 100 !=0))||(year % 400==0))) {
        xValues = [`01.${month}`, `02.${month}`, `03.${month}`, `04.${month}`, `05.${month}`,`06.${month}`, `07.${month}`, `08.${month}`, `09.${month}`, `10.${month}`, `11.${month}`, `12.${month}`, `13.${month}`, `14.${month}`, `15.${month}`, `16.${month}`, `17.${month}`,`18.${month}`, `19.${month}`, `20.${month}`, `21.${month}`, `22.${month}`, `23.${month}`, `24.${month}`, `25.${month}`, `26.${month}`,`27.${month}`, `28.${month}`, `29.${month}`];
    } else if ((month=="02") && ((year % 4 != 0) || ((year % 100 ==0) && (year % 400!=0)))) {
        xValues = [`01.${month}`, `02.${month}`, `03.${month}`, `04.${month}`, `05.${month}`,`06.${month}`, `07.${month}`, `08.${month}`, `09.${month}`, `10.${month}`, `11.${month}`, `12.${month}`, `13.${month}`, `14.${month}`, `15.${month}`, `16.${month}`, `17.${month}`,`18.${month}`, `19.${month}`, `20.${month}`, `21.${month}`, `22.${month}`, `23.${month}`, `24.${month}`, `25.${month}`, `26.${month}`,`27.${month}`, `28.${month}`];
    }
} //define amount of days in a month

{
    let yValuesPushUps = [];
    if (xValues.length == 28) {
        yValuesPushUps = [monthPushUps[1],monthPushUps[2],monthPushUps[3],monthPushUps[4],monthPushUps[5],monthPushUps[6],monthPushUps[7],monthPushUps[8],monthPushUps[9],monthPushUps[10],monthPushUps[11],monthPushUps[12],monthPushUps[13],monthPushUps[14],monthPushUps[15],monthPushUps[16],monthPushUps[17],monthPushUps[18],monthPushUps[19],monthPushUps[20],monthPushUps[21],monthPushUps[22],monthPushUps[23],monthPushUps[24],monthPushUps[25],monthPushUps[26],monthPushUps[27],monthPushUps[28]];
    } else if (xValues.length == 29) {
        yValuesPushUps = [monthPushUps[1],monthPushUps[2],monthPushUps[3],monthPushUps[4],monthPushUps[5],monthPushUps[6],monthPushUps[7],monthPushUps[8],monthPushUps[9],monthPushUps[10],monthPushUps[11],monthPushUps[12],monthPushUps[13],monthPushUps[14],monthPushUps[15],monthPushUps[16],monthPushUps[17],monthPushUps[18],monthPushUps[19],monthPushUps[20],monthPushUps[21],monthPushUps[22],monthPushUps[23],monthPushUps[24],monthPushUps[25],monthPushUps[26],monthPushUps[27],monthPushUps[28],monthPushUps[29]];
    } else if (xValues.length == 30) {
        yValuesPushUps = [monthPushUps[1],monthPushUps[2],monthPushUps[3],monthPushUps[4],monthPushUps[5],monthPushUps[6],monthPushUps[7],monthPushUps[8],monthPushUps[9],monthPushUps[10],monthPushUps[11],monthPushUps[12],monthPushUps[13],monthPushUps[14],monthPushUps[15],monthPushUps[16],monthPushUps[17],monthPushUps[18],monthPushUps[19],monthPushUps[20],monthPushUps[21],monthPushUps[22],monthPushUps[23],monthPushUps[24],monthPushUps[25],monthPushUps[26],monthPushUps[27],monthPushUps[28],monthPushUps[29],monthPushUps[30]];        
    } else if (xValues.length == 31) {
        yValuesPushUps = [monthPushUps[1],monthPushUps[2],monthPushUps[3],monthPushUps[4],monthPushUps[5],monthPushUps[6],monthPushUps[7],monthPushUps[8],monthPushUps[9],monthPushUps[10],monthPushUps[11],monthPushUps[12],monthPushUps[13],monthPushUps[14],monthPushUps[15],monthPushUps[16],monthPushUps[17],monthPushUps[18],monthPushUps[19],monthPushUps[20],monthPushUps[21],monthPushUps[22],monthPushUps[23],monthPushUps[24],monthPushUps[25],monthPushUps[26],monthPushUps[27],monthPushUps[28],monthPushUps[29],monthPushUps[30],monthPushUps[31]];
    }
    
    new Chart("pushUps", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesPushUps,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(206, 13, 13)',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderColor: 'rgb(206, 13, 13)',
            backgroundColor: 'rgba(206, 13, 13, 0.3)'
        }]
        },
        options: {
            legend: {display: false},
            title: {display: false},
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    fontSize: 10
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    min:0
                  }
                }]
            }
        },
    });
} //push ups chart

{
    let yValuesPullUps = [];
    if (xValues.length == 28) {
        yValuesPullUps = [monthPullUps[1],monthPullUps[2],monthPullUps[3],monthPullUps[4],monthPullUps[5],monthPullUps[6],monthPullUps[7],monthPullUps[8],monthPullUps[9],monthPullUps[10],monthPullUps[11],monthPullUps[12],monthPullUps[13],monthPullUps[14],monthPullUps[15],monthPullUps[16],monthPullUps[17],monthPullUps[18],monthPullUps[19],monthPullUps[20],monthPullUps[21],monthPullUps[22],monthPullUps[23],monthPullUps[24],monthPullUps[25],monthPullUps[26],monthPullUps[27],monthPullUps[28]];
    } else if (xValues.length == 29) {
        yValuesPullUps = [monthPullUps[1],monthPullUps[2],monthPullUps[3],monthPullUps[4],monthPullUps[5],monthPullUps[6],monthPullUps[7],monthPullUps[8],monthPullUps[9],monthPullUps[10],monthPullUps[11],monthPullUps[12],monthPullUps[13],monthPullUps[14],monthPullUps[15],monthPullUps[16],monthPullUps[17],monthPullUps[18],monthPullUps[19],monthPullUps[20],monthPullUps[21],monthPullUps[22],monthPullUps[23],monthPullUps[24],monthPullUps[25],monthPullUps[26],monthPullUps[27],monthPullUps[28],monthPullUps[29]];
    } else if (xValues.length == 30) {
        yValuesPullUps = [monthPullUps[1],monthPullUps[2],monthPullUps[3],monthPullUps[4],monthPullUps[5],monthPullUps[6],monthPullUps[7],monthPullUps[8],monthPullUps[9],monthPullUps[10],monthPullUps[11],monthPullUps[12],monthPullUps[13],monthPullUps[14],monthPullUps[15],monthPullUps[16],monthPullUps[17],monthPullUps[18],monthPullUps[19],monthPullUps[20],monthPullUps[21],monthPullUps[22],monthPullUps[23],monthPullUps[24],monthPullUps[25],monthPullUps[26],monthPullUps[27],monthPullUps[28],monthPullUps[29],monthPullUps[30]];        
    } else if (xValues.length == 31) {
        yValuesPullUps = [monthPullUps[1],monthPullUps[2],monthPullUps[3],monthPullUps[4],monthPullUps[5],monthPullUps[6],monthPullUps[7],monthPullUps[8],monthPullUps[9],monthPullUps[10],monthPullUps[11],monthPullUps[12],monthPullUps[13],monthPullUps[14],monthPullUps[15],monthPullUps[16],monthPullUps[17],monthPullUps[18],monthPullUps[19],monthPullUps[20],monthPullUps[21],monthPullUps[22],monthPullUps[23],monthPullUps[24],monthPullUps[25],monthPullUps[26],monthPullUps[27],monthPullUps[28],monthPullUps[29],monthPullUps[30],monthPullUps[31]];
    }

    new Chart("pullUps", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesPullUps,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(44, 138, 182)',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderColor: 'rgb(44, 138, 182)',
            backgroundColor: 'rgba(44, 138, 182, 0.3)'
        }]
        },
        options: {
            legend: {display: false},
            title: {display: false},
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    fontSize: 10
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    min:0
                  }
                }]
            }
        }
    });
} //pull ups chart

{
    let yValuesSitUps = [];
    if (xValues.length == 28) {
        yValuesSitUps = [monthSitUps[1],monthSitUps[2],monthSitUps[3],monthSitUps[4],monthSitUps[5],monthSitUps[6],monthSitUps[7],monthSitUps[8],monthSitUps[9],monthSitUps[10],monthSitUps[11],monthSitUps[12],monthSitUps[13],monthSitUps[14],monthSitUps[15],monthSitUps[16],monthSitUps[17],monthSitUps[18],monthSitUps[19],monthSitUps[20],monthSitUps[21],monthSitUps[22],monthSitUps[23],monthSitUps[24],monthSitUps[25],monthSitUps[26],monthSitUps[27],monthSitUps[28]];
    } else if (xValues.length == 29) {
        yValuesSitUps = [monthSitUps[1],monthSitUps[2],monthSitUps[3],monthSitUps[4],monthSitUps[5],monthSitUps[6],monthSitUps[7],monthSitUps[8],monthSitUps[9],monthSitUps[10],monthSitUps[11],monthSitUps[12],monthSitUps[13],monthSitUps[14],monthSitUps[15],monthSitUps[16],monthSitUps[17],monthSitUps[18],monthSitUps[19],monthSitUps[20],monthSitUps[21],monthSitUps[22],monthSitUps[23],monthSitUps[24],monthSitUps[25],monthSitUps[26],monthSitUps[27],monthSitUps[28],monthSitUps[29]];
    } else if (xValues.length == 30) {
        yValuesSitUps = [monthSitUps[1],monthSitUps[2],monthSitUps[3],monthSitUps[4],monthSitUps[5],monthSitUps[6],monthSitUps[7],monthSitUps[8],monthSitUps[9],monthSitUps[10],monthSitUps[11],monthSitUps[12],monthSitUps[13],monthSitUps[14],monthSitUps[15],monthSitUps[16],monthSitUps[17],monthSitUps[18],monthSitUps[19],monthSitUps[20],monthSitUps[21],monthSitUps[22],monthSitUps[23],monthSitUps[24],monthSitUps[25],monthSitUps[26],monthSitUps[27],monthSitUps[28],monthSitUps[29],monthSitUps[30]];        
    } else if (xValues.length == 31) {
        yValuesSitUps = [monthSitUps[1],monthSitUps[2],monthSitUps[3],monthSitUps[4],monthSitUps[5],monthSitUps[6],monthSitUps[7],monthSitUps[8],monthSitUps[9],monthSitUps[10],monthSitUps[11],monthSitUps[12],monthSitUps[13],monthSitUps[14],monthSitUps[15],monthSitUps[16],monthSitUps[17],monthSitUps[18],monthSitUps[19],monthSitUps[20],monthSitUps[21],monthSitUps[22],monthSitUps[23],monthSitUps[24],monthSitUps[25],monthSitUps[26],monthSitUps[27],monthSitUps[28],monthSitUps[29],monthSitUps[30],monthSitUps[31]];
    }

    new Chart("sitUps", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesSitUps,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(15, 114, 23)',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderColor: 'rgb(15, 114, 23)',
            backgroundColor: 'rgba(15, 114, 23, 0.3)'
        }]
        },
        options: {
            legend: {display: false},
            title: {display: false},
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    fontSize: 10
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    min:0
                  }
                }]
            }
        }
    });
} // sit ups chart

{
    let yValuesBurpees = [];
    if (xValues.length == 28) {
        yValuesBurpees = [monthBurpees[1],monthBurpees[2],monthBurpees[3],monthBurpees[4],monthBurpees[5],monthBurpees[6],monthBurpees[7],monthBurpees[8],monthBurpees[9],monthBurpees[10],monthBurpees[11],monthBurpees[12],monthBurpees[13],monthBurpees[14],monthBurpees[15],monthBurpees[16],monthBurpees[17],monthBurpees[18],monthBurpees[19],monthBurpees[20],monthBurpees[21],monthBurpees[22],monthBurpees[23],monthBurpees[24],monthBurpees[25],monthBurpees[26],monthBurpees[27],monthBurpees[28]];
    } else if (xValues.length == 29) {
        yValuesBurpees = [monthBurpees[1],monthBurpees[2],monthBurpees[3],monthBurpees[4],monthBurpees[5],monthBurpees[6],monthBurpees[7],monthBurpees[8],monthBurpees[9],monthBurpees[10],monthBurpees[11],monthBurpees[12],monthBurpees[13],monthBurpees[14],monthBurpees[15],monthBurpees[16],monthBurpees[17],monthBurpees[18],monthBurpees[19],monthBurpees[20],monthBurpees[21],monthBurpees[22],monthBurpees[23],monthBurpees[24],monthBurpees[25],monthBurpees[26],monthBurpees[27],monthBurpees[28],monthBurpees[29]];
    } else if (xValues.length == 30) {
        yValuesBurpees = [monthBurpees[1],monthBurpees[2],monthBurpees[3],monthBurpees[4],monthBurpees[5],monthBurpees[6],monthBurpees[7],monthBurpees[8],monthBurpees[9],monthBurpees[10],monthBurpees[11],monthBurpees[12],monthBurpees[13],monthBurpees[14],monthBurpees[15],monthBurpees[16],monthBurpees[17],monthBurpees[18],monthBurpees[19],monthBurpees[20],monthBurpees[21],monthBurpees[22],monthBurpees[23],monthBurpees[24],monthBurpees[25],monthBurpees[26],monthBurpees[27],monthBurpees[28],monthBurpees[29],monthBurpees[30]];        
    } else if (xValues.length == 31) {
        yValuesBurpees = [monthBurpees[1],monthBurpees[2],monthBurpees[3],monthBurpees[4],monthBurpees[5],monthBurpees[6],monthBurpees[7],monthBurpees[8],monthBurpees[9],monthBurpees[10],monthBurpees[11],monthBurpees[12],monthBurpees[13],monthBurpees[14],monthBurpees[15],monthBurpees[16],monthBurpees[17],monthBurpees[18],monthBurpees[19],monthBurpees[20],monthBurpees[21],monthBurpees[22],monthBurpees[23],monthBurpees[24],monthBurpees[25],monthBurpees[26],monthBurpees[27],monthBurpees[28],monthBurpees[29],monthBurpees[30],monthBurpees[31]];
    }

    new Chart("burpees", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesBurpees,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(22, 19, 182)',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderColor: 'rgb(22, 19, 182)',
            backgroundColor: 'rgba(22, 19, 182, 0.3)'
        }]
        },
        options: {
            legend: {display: false},
            title: {display: false},
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    fontSize: 10
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    min:0
                  }
                }]
            }
        }
    });
} //burpees chart

{
    let yValuesChinUps = [];
    if (xValues.length == 28) {
        yValuesChinUps = [monthChinUps[1],monthChinUps[2],monthChinUps[3],monthChinUps[4],monthChinUps[5],monthChinUps[6],monthChinUps[7],monthChinUps[8],monthChinUps[9],monthChinUps[10],monthChinUps[11],monthChinUps[12],monthChinUps[13],monthChinUps[14],monthChinUps[15],monthChinUps[16],monthChinUps[17],monthChinUps[18],monthChinUps[19],monthChinUps[20],monthChinUps[21],monthChinUps[22],monthChinUps[23],monthChinUps[24],monthChinUps[25],monthChinUps[26],monthChinUps[27],monthChinUps[28]];
    } else if (xValues.length == 29) {
        yValuesChinUps = [monthChinUps[1],monthChinUps[2],monthChinUps[3],monthChinUps[4],monthChinUps[5],monthChinUps[6],monthChinUps[7],monthChinUps[8],monthChinUps[9],monthChinUps[10],monthChinUps[11],monthChinUps[12],monthChinUps[13],monthChinUps[14],monthChinUps[15],monthChinUps[16],monthChinUps[17],monthChinUps[18],monthChinUps[19],monthChinUps[20],monthChinUps[21],monthChinUps[22],monthChinUps[23],monthChinUps[24],monthChinUps[25],monthChinUps[26],monthChinUps[27],monthChinUps[28],monthChinUps[29]];
    } else if (xValues.length == 30) {
        yValuesChinUps = [monthChinUps[1],monthChinUps[2],monthChinUps[3],monthChinUps[4],monthChinUps[5],monthChinUps[6],monthChinUps[7],monthChinUps[8],monthChinUps[9],monthChinUps[10],monthChinUps[11],monthChinUps[12],monthChinUps[13],monthChinUps[14],monthChinUps[15],monthChinUps[16],monthChinUps[17],monthChinUps[18],monthChinUps[19],monthChinUps[20],monthChinUps[21],monthChinUps[22],monthChinUps[23],monthChinUps[24],monthChinUps[25],monthChinUps[26],monthChinUps[27],monthChinUps[28],monthChinUps[29],monthChinUps[30]];        
    } else if (xValues.length == 31) {
        yValuesChinUps = [monthChinUps[1],monthChinUps[2],monthChinUps[3],monthChinUps[4],monthChinUps[5],monthChinUps[6],monthChinUps[7],monthChinUps[8],monthChinUps[9],monthChinUps[10],monthChinUps[11],monthChinUps[12],monthChinUps[13],monthChinUps[14],monthChinUps[15],monthChinUps[16],monthChinUps[17],monthChinUps[18],monthChinUps[19],monthChinUps[20],monthChinUps[21],monthChinUps[22],monthChinUps[23],monthChinUps[24],monthChinUps[25],monthChinUps[26],monthChinUps[27],monthChinUps[28],monthChinUps[29],monthChinUps[30],monthChinUps[31]];
    }

    new Chart("chinUps", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesChinUps,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(203, 238, 78)',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderColor: 'rgb(203, 238, 78)',
            backgroundColor: 'rgba(203, 238, 78, 0.3)'
        }]
        },
        options: {
            legend: {display: false},
            title: {display: false},
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    fontSize: 10
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    min:0
                  }
                }]
            }
        }
    });
} //chin ups chart

{
    let yValuesSquats = [];
    if (xValues.length == 28) {
        yValuesSquats = [monthSquats[1],monthSquats[2],monthSquats[3],monthSquats[4],monthSquats[5],monthSquats[6],monthSquats[7],monthSquats[8],monthSquats[9],monthSquats[10],monthSquats[11],monthSquats[12],monthSquats[13],monthSquats[14],monthSquats[15],monthSquats[16],monthSquats[17],monthSquats[18],monthSquats[19],monthSquats[20],monthSquats[21],monthSquats[22],monthSquats[23],monthSquats[24],monthSquats[25],monthSquats[26],monthSquats[27],monthSquats[28]];
    } else if (xValues.length == 29) {
        yValuesSquats = [monthSquats[1],monthSquats[2],monthSquats[3],monthSquats[4],monthSquats[5],monthSquats[6],monthSquats[7],monthSquats[8],monthSquats[9],monthSquats[10],monthSquats[11],monthSquats[12],monthSquats[13],monthSquats[14],monthSquats[15],monthSquats[16],monthSquats[17],monthSquats[18],monthSquats[19],monthSquats[20],monthSquats[21],monthSquats[22],monthSquats[23],monthSquats[24],monthSquats[25],monthSquats[26],monthSquats[27],monthSquats[28],monthSquats[29]];
    } else if (xValues.length == 30) {
        yValuesSquats = [monthSquats[1],monthSquats[2],monthSquats[3],monthSquats[4],monthSquats[5],monthSquats[6],monthSquats[7],monthSquats[8],monthSquats[9],monthSquats[10],monthSquats[11],monthSquats[12],monthSquats[13],monthSquats[14],monthSquats[15],monthSquats[16],monthSquats[17],monthSquats[18],monthSquats[19],monthSquats[20],monthSquats[21],monthSquats[22],monthSquats[23],monthSquats[24],monthSquats[25],monthSquats[26],monthSquats[27],monthSquats[28],monthSquats[29],monthSquats[30]];        
    } else if (xValues.length == 31) {
        yValuesSquats = [monthSquats[1],monthSquats[2],monthSquats[3],monthSquats[4],monthSquats[5],monthSquats[6],monthSquats[7],monthSquats[8],monthSquats[9],monthSquats[10],monthSquats[11],monthSquats[12],monthSquats[13],monthSquats[14],monthSquats[15],monthSquats[16],monthSquats[17],monthSquats[18],monthSquats[19],monthSquats[20],monthSquats[21],monthSquats[22],monthSquats[23],monthSquats[24],monthSquats[25],monthSquats[26],monthSquats[27],monthSquats[28],monthSquats[29],monthSquats[30],monthSquats[31]];
    }

    new Chart("squats", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesSquats,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(43, 12, 63)',
            pointRadius: 4,
            pointBorderWidth: 2,
            borderColor: 'rgb(43, 12, 63)',
            backgroundColor: 'rgba(43, 12, 63, 0.3)'
        }]
        },
        options: {
            legend: {display: false},
            title: {display: false},
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    fontSize: 10
                  }
                }],
                yAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    min:0
                  }
                }]
            }
        }
    });
} //squats chart

const navbar = document.getElementById("navbar");

function openSidebar() {
    navbar.classList.add('show')
}

function closeSidebar() {
    navbar.classList.remove('show')
}
