import ('https://tomashubelbauer.github.io/github-pages-local-storage/index.js');

const xValues = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
{
    const yValuesPushUps = [localStorage.mondayPushUps, localStorage.tuesdayPushUps, localStorage.wensdayPushUps, localStorage.thursdayPushUps, localStorage.fridayPushUps, localStorage.saturdayPushUps, localStorage.sundayPushUps];
    const barColorsPushUps = ["rgb(50, 168, 82)", "rgb(168, 137, 50)","rgb(168, 58, 50)","rgb(50, 168, 160)","rgb(50, 62, 168)","rgb(129, 50, 168)","rgb(168, 50, 123)"];
    new Chart("pushUps", {
        type: "bar",
        data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColorsPushUps,
            data: yValuesPushUps
        }]
        },
        options: {
            legend: {display: false},
            title: {
              display: false,
              text: "Отжимания за эту неделю",
              fontColor: '#FFF',
              fontSize: 16
            },
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF'
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
} //push ups chart

{
    const yValuesPullUps = [localStorage.mondayPullUps, localStorage.tuesdayPullUps, localStorage.wensdayPullUps, localStorage.thursdayPullUps, localStorage.fridayPullUps, localStorage.saturdayPullUps, localStorage.sundayPullUps];
    const barColorsPullUps = ["rgb(209, 206, 4)", "rgb(168, 58, 50)","rgb(50, 168, 82)","rgb(50, 62, 168)","rgb(50, 168, 160)","rgb(129, 50, 168)","rgb(168, 137, 50)"];
    new Chart("pullUps", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColorsPullUps,
        data: yValuesPullUps
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: false,
            text: "Подтягивания прямым хватом за эту неделю",
            fontColor: '#FFF',
            fontSize: 16
        },
        scales: {
            xAxes: [{
              ticks: {
                fontColor: '#FFF'
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
    const yValuesSitUps = [localStorage.mondaySitUps, localStorage.tuesdaySitUps, localStorage.wensdaySitUps, localStorage.thursdaySitUps, localStorage.fridaySitUps, localStorage.saturdaySitUps, localStorage.sundaySitUps];
    const barColorsSitUps = ["rgb(50, 62, 168)", "rgb(129, 50, 168)","rgb(50, 168, 160)","rgb(209, 206, 4)","rgb(168, 50, 123)","rgb(168, 58, 50)","rgb(50, 168, 82)"];
    new Chart("sitUps", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColorsSitUps,
        data: yValuesSitUps
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: false,
            text: "Скручивания пресса за эту неделю",
            fontColor: '#FFF',
            fontSize: 16
        },
        scales: {
            xAxes: [{
              ticks: {
                fontColor: '#FFF'
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
    const yValuesBurpees = [localStorage.mondayBurpees, localStorage.tuesdayBurpees, localStorage.wensdayBurpees, localStorage.thursdayBurpees, localStorage.fridayBurpees, localStorage.saturdayBurpees, localStorage.sundayBurpees];
    const barColorsBurpees = ["rgb(168, 58, 50)", "rgb(168, 50, 123)","rgb(129, 50, 168)","rgb(50, 168, 82)","rgb(50, 62, 168)","rgb(209, 206, 4)","rgb(168, 137, 50)"];
    new Chart("burpees", {
        type: "bar",
        data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColorsBurpees,
            data: yValuesBurpees
        }]
        },
        options: {
            legend: {display: false},
            title: {
                display: false,
                text: "Бёрпи за эту неделю",
                fontColor: '#FFF',
                fontSize: 16
            },
            scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#FFF'
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
    const yValuesChinUps = [localStorage.mondayChinUps, localStorage.tuesdayChinUps, localStorage.wensdayChinUps, localStorage.thursdayChinUps, localStorage.fridayChinUps, localStorage.saturdayChinUps, localStorage.sundayChinUps];
    const barColorsChinUps = ["rgb(50, 168, 160)", "rgb(168, 137, 50)","rgb(209, 206, 4)","rgb(129, 50, 168)","rgb(168, 58, 50)","rgb(50, 62, 168)","rgb(168, 50, 123)"];
    new Chart("chinUps", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColorsChinUps,
        data: yValuesChinUps
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: false,
            text: "Подтягивания обратным хватом за эту неделю",
            fontColor: '#FFF',
            fontSize: 16
        },
        scales: {
            xAxes: [{
              ticks: {
                fontColor: '#FFF'
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
    const yValuesSquats = [localStorage.mondaySquats, localStorage.tuesdaySquats, localStorage.wensdaySquats, localStorage.thursdaySquats, localStorage.fridaySquats, localStorage.saturdaySquats, localStorage.sundaySquats];
    const barColorsSquats = ["rgb(50, 62, 168)", "rgb(168, 137, 50)","rgb(50, 168, 82)","rgb(168, 50, 123)","rgb(168, 58, 50)","rgb(209, 206, 4)","rgb(129, 50, 168)"];
    new Chart("squats", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColorsSquats,
        data: yValuesSquats
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: false,
            text: "Приседания за эту неделю",
            fontColor: '#FFF',
            fontSize: 16
        },
        scales: {
            xAxes: [{
              ticks: {
                fontColor: '#FFF'
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