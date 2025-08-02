import ('https://tomashubelbauer.github.io/github-pages-local-storage/index.js');

const yearPushUps = JSON.parse(localStorage.getItem("yearPushUps")) || {}; 
const yearPullUps = JSON.parse(localStorage.getItem("yearPullUps")) || {};
const yearChinUps = JSON.parse(localStorage.getItem("yearChinUps")) || {};
const yearSwim = JSON.parse(localStorage.getItem("yearSwim")) || {};
const yearRun = JSON.parse(localStorage.getItem("yearRun")) || {};
const yearSitUps = JSON.parse(localStorage.getItem("yearSitUps")) || {};
const yearBurpees = JSON.parse(localStorage.getItem("yearBurpees")) || {};
const yearSquats = JSON.parse(localStorage.getItem("yearSquats")) || {};
const xValues = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']


{
    let yValuesPushUps = [yearPushUps[1], yearPushUps[2], yearPushUps[3], yearPushUps[4], yearPushUps[5], yearPushUps[6], yearPushUps[7], yearPushUps[8], yearPushUps[9], yearPushUps[10], yearPushUps[11], yearPushUps[12]];
    
    new Chart("pushUps", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesPushUps,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(206, 13, 13)',
            pointRadius: 4,
            pointHitRadius: 8,
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
                    fontSize: 8
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
    let yValuesPullUps = [yearPullUps[1], yearPullUps[2], yearPullUps[3], yearPullUps[4], yearPullUps[5], yearPullUps[6], yearPullUps[7], yearPullUps[8], yearPullUps[9], yearPullUps[10], yearPullUps[11], yearPullUps[12]];

    new Chart("pullUps", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesPullUps,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(44, 138, 182)',
            pointRadius: 4,
            pointHitRadius: 8,
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
                    fontSize: 8
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
    let yValuesChinUps = [yearChinUps[1], yearChinUps[2], yearChinUps[3], yearChinUps[4], yearChinUps[5], yearChinUps[6], yearChinUps[7], yearChinUps[8], yearChinUps[9], yearChinUps[10], yearChinUps[11], yearChinUps[12]];

    new Chart("chinUps", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesChinUps,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(203, 238, 78)',
            pointRadius: 4,
            pointHitRadius: 8,
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
                    fontSize: 8
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
    let yValuesSwim = [yearSwim[1], yearSwim[2], yearSwim[3], yearSwim[4], yearSwim[5], yearSwim[6], yearSwim[7], yearSwim[8], yearSwim[9], yearSwim[10], yearSwim[11], yearSwim[12]];

    new Chart("swim", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesSwim,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(0, 54, 116)',
            pointRadius: 4,
            pointHitRadius: 8,
            pointBorderWidth: 2,
            borderColor: 'rgb(0, 54, 116)',
            backgroundColor: 'rgba(0, 54, 116, 0.3)'
        }]
        },
        options: {
            legend: {display: false},
            title: {display: false},
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    fontSize: 8
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
} //swim chart

{
    let yValuesRun = [yearRun[1], yearRun[2], yearRun[3], yearRun[4], yearRun[5], yearRun[6], yearRun[7], yearRun[8], yearRun[9], yearRun[10], yearRun[11], yearRun[12]];

    new Chart("run", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesRun,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(148, 11, 11)',
            pointRadius: 4,
            pointHitRadius: 8,
            pointBorderWidth: 2,
            borderColor: 'rgb(148, 11, 11)',
            backgroundColor: 'rgba(148, 11, 11, 0.3)'
        }]
        },
        options: {
            legend: {display: false},
            title: {display: false},
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF',
                    fontSize: 8
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
} //run chart

{
    let yValuesSitUps = [yearSitUps[1], yearSitUps[2], yearSitUps[3], yearSitUps[4], yearSitUps[5], yearSitUps[6], yearSitUps[7], yearSitUps[8], yearSitUps[9], yearSitUps[10], yearSitUps[11], yearSitUps[12]];

    new Chart("sitUps", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesSitUps,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(15, 114, 23)',
            pointRadius: 4,
            pointHitRadius: 8,
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
                    fontSize: 8
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
    let yValuesBurpees = [yearBurpees[1], yearBurpees[2], yearBurpees[3], yearBurpees[4], yearBurpees[5], yearBurpees[6], yearBurpees[7], yearBurpees[8], yearBurpees[9], yearBurpees[10], yearBurpees[11], yearBurpees[12]];

    new Chart("burpees", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesBurpees,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(22, 19, 182)',
            pointRadius: 4,
            pointHitRadius: 8,
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
                    fontSize: 8
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
    let yValuesSquats = [yearSquats[1], yearSquats[2], yearSquats[3], yearSquats[4], yearSquats[5], yearSquats[6], yearSquats[7], yearSquats[8], yearSquats[9], yearSquats[10], yearSquats[11], yearSquats[12]];

    new Chart("squats", {
        type: "line",
        data: {
        labels: xValues,
        datasets: [{
            data: yValuesSquats,
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(43, 12, 63)',
            pointRadius: 4,
            pointHitRadius: 8,
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
                    fontSize: 8
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
