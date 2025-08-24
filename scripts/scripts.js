const today = new Date().getDate();
let monthPushUps = JSON.parse(localStorage.getItem("monthPushUps")) || {};
let monthPullUps = JSON.parse(localStorage.getItem("monthPullUps")) || {};
let monthChinUps = JSON.parse(localStorage.getItem("monthChinUps")) || {};
let monthSwim = JSON.parse(localStorage.getItem("monthSwim")) || {};
let monthRun = JSON.parse(localStorage.getItem("monthRun")) || {};
let monthWalk = JSON.parse(localStorage.getItem("monthWalk")) || {};
let monthSitUps = JSON.parse(localStorage.getItem("monthSitUps")) || {};
let monthBurpees = JSON.parse(localStorage.getItem("monthBurpees")) || {};
let monthSquats = JSON.parse(localStorage.getItem("monthSquats")) || {};

let streakNumber = document.getElementById("streakNumber");

{
    if (Boolean(localStorage.streakNumber) == false) {localStorage.streakNumber = 0}
    if (Boolean(monthPushUps[today]) == false) {monthPushUps[today]=0}
    if (Boolean(monthPullUps[today]) == false) {monthPullUps[today]=0}
    if (Boolean(monthChinUps[today]) == false) {monthChinUps[today]=0}
    if (Boolean(monthSwim[today]) == false) {monthSwim[today]=0}
    if (Boolean(monthRun[today]) == false) {monthRun[today]=0}
    if (Boolean(monthSitUps[today]) == false) {monthSitUps[today]=0}
    if (Boolean(monthBurpees[today]) == false) {monthBurpees[today]=0}
    if (Boolean(monthSquats[today]) == false) {monthSquats[today]=0}
}// undefined prevent

if (((monthPushUps[today]!=0) || (monthPullUps[today]!=0) || (monthChinUps[today]!=0) || (monthSwim[today]!=0) || (monthRun[today]!=0) || (monthWalk[today]!=0) || (monthSitUps[today]!=0) || (monthBurpees[today]!=0) || (monthSquats[today]!=0)) && (localStorage.currentMonthDay != today)) {
    localStorage.streakNumber = +localStorage.streakNumber + 1;
    localStorage.currentMonthDay = today;
}
if ((monthPushUps[today]==0) && (monthPullUps[today]==0) && (monthChinUps[today]==0) && (monthSwim[today]==0) && (monthRun[today]==0) && (monthWalk[today]==0) && (monthSitUps[today]==0) && (monthBurpees[today]==0) && (monthSquats[today]==0) && (localStorage.currentMonthDay == today)) {
    localStorage.streakNumber = +localStorage.streakNumber - 1;
    localStorage.currentMonthDay = today - 1;
}
streakNumber.innerText = localStorage.streakNumber;

const sumPushUps = monthPushUps.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
}, 0);
const sumPullUps = monthPullUps.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
}, 0);
const sumChinUps = monthChinUps.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
}, 0);
const sumSwim = monthSwim.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
}, 0);
const sumRun = monthRun.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
}, 0);
const sumWalk = monthWalk.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
}, 0);
const sumSitUps = monthSitUps.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
}, 0);
const sumBurpee = monthBurpees.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
}, 0);
const sumSquat = monthSquats.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
}, 0);

const monthValuesReps = [sumPushUps, sumSitUps, sumPullUps, sumBurpee, sumChinUps, sumSquat];
const monthValuesMS = [sumSwim, sumRun, sumWalk];
new Chart("monthStatsReps", {
        type: "radar",   
        data: {
        labels: [
            "Отжимания",
            "Скручивания пресса",
            "Подтягивания прямым хватом",
            "Бёрпи",
            "Подтягивания обратным хватом",
            "Приседания"],
        datasets: [{
            label: "Упражнения на повторения",
            backgroundColor: 'rgba(180, 4, 4, 0.5)',
            data: monthValuesReps,
            fill: true,
            borderColor: 'rgba(190, 0, 0, 1)',
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgb(148, 11, 11)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(240, 10, 2, 1)'
        }]
        },
        options: {
            label: {display: false},
            title: {display: false},
            legend: {display: false},
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            color: 'red'
                        }
                    }
                }
            }
        }
});
new Chart("monthStatsMS", {
        type: "radar",   
        data: {
        labels: [
            "Плавание",
            "Бег",
            "Ходьба"
            ],
        datasets: [{
            label: "Упражнения на длину дистанции",
            backgroundColor: 'rgba(7, 4, 180, 0.5)',
            data: monthValuesMS,
            fill: true,
            borderColor: 'rgba(13, 0, 190, 1)',
            pointBackgroundColor: 'rgb(255,255,255)',
            pointBorderColor: 'rgba(13, 11, 148, 1)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(65, 2, 240, 1)'
        }]
        },
        options: {
            legend: {display: false},
            title: {display: false},
            responsive: true,
            maintainAspectRatio: true
        }
});


const navbar = document.getElementById("navbar");

function openSidebar() {
    navbar.classList.add('show')
}

function closeSidebar() {
    navbar.classList.remove('show')
}
