import ('https://tomashubelbauer.github.io/github-pages-local-storage/index.js');

const now = new Date();
const newDay = now.getDay();
const month = new Date().getMonth()+1;
const year = now.getFullYear();


if (localStorage.currentDay!=newDay) {

    localStorage.scorePushUps = 0;
    localStorage.scorePullUps = 0;
    localStorage.scoreChinUps = 0;
    localStorage.scoreSwim = 0;
    localStorage.scoreRun = 0;
    localStorage.scoreSitUps = 0;
    localStorage.scoreBurpees = 0;
    localStorage.scoreSquats = 0;

    localStorage.currentDay = newDay;
    localStorage.currentYear = year;
}


if (newDay==0) {
    localStorage.sundayPushUps = localStorage.scorePushUps;
    localStorage.sundayPullUps = localStorage.scorePullUps;
    localStorage.sundayChinUps = localStorage.scoreChinUps;
    localStorage.sundaySwim = localStorage.scoreSwim;
    localStorage.sundayRun = localStorage.scoreRun;
    localStorage.sundaySitUps = localStorage.scoreSitUps;
    localStorage.sundayBurpees = localStorage.scoreBurpees;
    localStorage.sundaySquats = localStorage.scoreSquats;
}
if (newDay==1) {
    localStorage.mondayPushUps = localStorage.scorePushUps;
    localStorage.mondayPullUps = localStorage.scorePullUps;
    localStorage.mondayChinUps = localStorage.scoreChinUps;
    localStorage.mondaySwim = localStorage.scoreSwim;
    localStorage.mondayRun = localStorage.scoreRun;
    localStorage.mondaySitUps = localStorage.scoreSitUps;
    localStorage.mondayBurpees = localStorage.scoreBurpees;
    localStorage.mondaySquats = localStorage.scoreSquats;
    {
        localStorage.removeItem("sundayPushUps");
        localStorage.removeItem("sundayPullUps");
        localStorage.removeItem("sundaySitUps");
        localStorage.removeItem("sundayBurpees");
        localStorage.removeItem("sundayChinUps");
        localStorage.removeItem("sundaySwim");
        localStorage.removeItem("sundaySquats");

        localStorage.removeItem("saturdayPushUps");
        localStorage.removeItem("saturdayPullUps");
        localStorage.removeItem("saturdaySitUps");
        localStorage.removeItem("saturdayBurpees");
        localStorage.removeItem("saturdayChinUps");
        localStorage.removeItem("saturdaySwim");
        localStorage.removeItem("saturdaySquats");

        localStorage.removeItem("fridayPushUps");
        localStorage.removeItem("fridayPullUps");
        localStorage.removeItem("fridaySitUps");
        localStorage.removeItem("fridayBurpees");
        localStorage.removeItem("fridayChinUps");
        localStorage.removeItem("fridaySwim");
        localStorage.removeItem("fridaySquats");

        localStorage.removeItem("thursdayPushUps");
        localStorage.removeItem("thursdayPullUps");
        localStorage.removeItem("thursdaySitUps");
        localStorage.removeItem("thursdayBurpees");
        localStorage.removeItem("thursdayChinUps");
        localStorage.removeItem("thursdaySwim");
        localStorage.removeItem("thursdaySquats");

        localStorage.removeItem("wensdayPushUps");
        localStorage.removeItem("wensdayPullUps");
        localStorage.removeItem("wensdaySitUps");
        localStorage.removeItem("wensdayBurpees");
        localStorage.removeItem("wensdayChinUps");
        localStorage.removeItem("wensdaySwim");
        localStorage.removeItem("wensdaySquats");

        localStorage.removeItem("tuesdayPushUps");
        localStorage.removeItem("tuesdayPullUps");
        localStorage.removeItem("tuesdaySitUps");
        localStorage.removeItem("tuesdayBurpees");
        localStorage.removeItem("tuesdayChinUps");
        localStorage.removeItem("tuesdaySquats");
        localStorage.removeItem("tuesdaySquats");
    }
}
if (newDay==2) {
    localStorage.tuesdayPushUps = localStorage.scorePushUps;
    localStorage.tuesdayPullUps = localStorage.scorePullUps;
    localStorage.tuesdayChinUps = localStorage.scoreChinUps;
    localStorage.tuesdaySwim = localStorage.scoreSwim;
    localStorage.tuesdayRun = localStorage.scoreRun;
    localStorage.tuesdaySitUps = localStorage.scoreSitUps;
    localStorage.tuesdayBurpees = localStorage.scoreBurpees;
    localStorage.tuesdaySquats = localStorage.scoreSquats;
}
if (newDay==3) {
    localStorage.wensdayPushUps = localStorage.scorePushUps;
    localStorage.wensdayPullUps = localStorage.scorePullUps;
    localStorage.wensdayChinUps = localStorage.scoreChinUps;
    localStorage.wensdaySwim = localStorage.scoreSwim;
    localStorage.wensdayRun = localStorage.scoreRun;
    localStorage.wensdaySitUps = localStorage.scoreSitUps;
    localStorage.wensdayBurpees = localStorage.scoreBurpees;
    localStorage.wensdaySquats = localStorage.scoreSquats;
}
if (newDay==4) {
    localStorage.thursdayPushUps = localStorage.scorePushUps;
    localStorage.thursdayPullUps = localStorage.scorePullUps;
    localStorage.thursdayChinUps = localStorage.scoreChinUps;
    localStorage.thursdaySwim = localStorage.scoreSwim;
    localStorage.thursdayRun = localStorage.scoreRun;
    localStorage.thursdaySitUps = localStorage.scoreSitUps;
    localStorage.thursdayBurpees = localStorage.scoreBurpees;
    localStorage.thursdaySquats = localStorage.scoreSquats;
}
if (newDay==5) {
    localStorage.fridayPushUps = localStorage.scorePushUps;
    localStorage.fridayPullUps = localStorage.scorePullUps;
    localStorage.fridayChinUps = localStorage.scoreChinUps;
    localStorage.fridaySwim = localStorage.scoreSwim;
    localStorage.fridayRun = localStorage.scoreRun;
    localStorage.fridaySitUps = localStorage.scoreSitUps;
    localStorage.fridayBurpees = localStorage.scoreBurpees;
    localStorage.fridaySquats = localStorage.scoreSquats;
}
if (newDay==6) {
    localStorage.saturdayPushUps = localStorage.scorePushUps;
    localStorage.saturdayPullUps = localStorage.scorePullUps;
    localStorage.saturdayChinUps = localStorage.scoreChinUps;
    localStorage.saturdaySwim = localStorage.scoreSwim;
    localStorage.saturdayRun = localStorage.scoreRun;
    localStorage.saturdaySitUps = localStorage.scoreSitUps;
    localStorage.saturdayBurpees = localStorage.scoreBurpees;
    localStorage.saturdaySquats = localStorage.scoreSquats;
}


{
    if (Boolean(localStorage.scorePushUps) == false) {localStorage.scorePushUps=0}
    if (Boolean(localStorage.scorePullUps) == false) {localStorage.scorePullUps=0}
    if (Boolean(localStorage.scoreChinUps) == false) {localStorage.scoreChinUps=0}
    if (Boolean(localStorage.scoreSwim) == false) {localStorage.scoreSwim=0}
    if (Boolean(localStorage.scoreRun) == false) {localStorage.scoreRun=0}
    if (Boolean(localStorage.scoreSitUps) == false) {localStorage.scoreSitUps=0}
    if (Boolean(localStorage.scoreBurpees) == false) {localStorage.scoreBurpees=0}
    if (Boolean(localStorage.scoreSquats) == false) {localStorage.scoreSquats=0}
} // score undefined prevent

{
    document.getElementById("push-up").innerText = localStorage.scorePushUps;
    let scorePushUps = document.getElementById("push-up");
    localStorage.scorePushUps = +scorePushUps.innerText;
    function m5push() {
        if (+scorePushUps.innerText>4) {
            scorePushUps.innerText = +scorePushUps.innerText - 5;
            localStorage.scorePushUps = scorePushUps.innerText;    
        } else {
            scorePushUps.innerText = 0;
            localStorage.scorePushUps = scorePushUps.innerText;    
        }
    }
    function m1push() {
        if (+scorePushUps.innerText>0) {
            scorePushUps.innerText = +scorePushUps.innerText - 1;
            localStorage.scorePushUps = scorePushUps.innerText;    
        }}
    function p1push() {
        scorePushUps.innerText = +scorePushUps.innerText + 1;
        localStorage.scorePushUps = scorePushUps.innerText;
    }
    function p5push() {
        scorePushUps.innerText = +scorePushUps.innerText + 5;
        localStorage.scorePushUps = scorePushUps.innerText;
    }
} //push ups maths

{
    document.getElementById("pull-up").innerText = localStorage.scorePullUps;
    let scorePullUps = document.getElementById("pull-up");
    localStorage.scorePullUps = +scorePullUps.innerText;
    function m5pull() {
        if (+scorePullUps.innerText>4) {
            scorePullUps.innerText = +scorePullUps.innerText - 5;
            localStorage.scorePullUps = scorePullUps.innerText;    
        } else {
            scorePullUps.innerText = 0;
            localStorage.scorePullUps = scorePullUps.innerText;   
        }
    }
    function m1pull() {
        if (+scorePullUps.innerText>0) {
            scorePullUps.innerText = +scorePullUps.innerText - 1;
            localStorage.scorePullUps = scorePullUps.innerText;    
        }}
    function p1pull() {
        scorePullUps.innerText = +scorePullUps.innerText + 1;
        localStorage.scorePullUps = scorePullUps.innerText;
    }
    function p5pull() {
        scorePullUps.innerText = +scorePullUps.innerText + 5;
        localStorage.scorePullUps = scorePullUps.innerText;
    }
} //pull ups maths

{
    document.getElementById("chin-up").innerText = localStorage.scoreChinUps;
    let scoreChinUps = document.getElementById("chin-up");
    localStorage.scoreChinUps = +scoreChinUps.innerText;
    function m5chin() {
        if (+scoreChinUps.innerText>4) {
            scoreChinUps.innerText = +scoreChinUps.innerText - 5;
            localStorage.scoreChinUps = scoreChinUps.innerText;    
        } else {
            scoreChinUps.innerText = 0;
            localStorage.scoreChinUps = scoreChinUps.innerText;  
        }
    }
    function m1chin() {
        if (+scoreChinUps.innerText>0) {
            scoreChinUps.innerText = +scoreChinUps.innerText - 1;
            localStorage.scoreChinUps = scoreChinUps.innerText;    
        }}
    function p1chin() {
        scoreChinUps.innerText = +scoreChinUps.innerText + 1;
        localStorage.scoreChinUps = scoreChinUps.innerText;
    }
    function p5chin() {
        scoreChinUps.innerText = +scoreChinUps.innerText + 5;
        localStorage.scoreChinUps = scoreChinUps.innerText;
    }
} //chin ups maths

{
    document.getElementById("swim").innerText = localStorage.scoreSwim;
    let scoreSwim = document.getElementById("swim");
    localStorage.scoreSwim = +scoreSwim.innerText;
    function m100swim() {
        if (+scoreSwim.innerText>0) {
            scoreSwim.innerText = +scoreSwim.innerText - 100;
            localStorage.scoreSwim = scoreSwim.innerText;    
        }}
    function p100swim() {
        scoreSwim.innerText = +scoreSwim.innerText + 100;
        localStorage.scoreSwim = scoreSwim.innerText;
    }
} //swim maths

{
    document.getElementById("run").innerText = localStorage.scoreRun;
    let scoreRun = document.getElementById("run");
    localStorage.scoreRun = +scoreRun.innerText;
    function m500run() {
        if (+scoreRun.innerText>0) {
            scoreRun.innerText = +scoreRun.innerText - 500;
            localStorage.scoreRun = scoreRun.innerText;    
        }}
    function p500run() {
        scoreRun.innerText = +scoreRun.innerText + 500;
        localStorage.scoreRun = scoreRun.innerText;
    }
} //run maths

{
    document.getElementById("sit-up").innerText = localStorage.scoreSitUps;
    let scoreSitUps = document.getElementById("sit-up");
    localStorage.scoreSitUps = +scoreSitUps.innerText;
    function m5sit() {
        if (+scoreSitUps.innerText>4) {
            scoreSitUps.innerText = +scoreSitUps.innerText - 5;
            localStorage.scoreSitUps = scoreSitUps.innerText;    
        } else {
            scoreSitUps.innerText = 0;
            localStorage.scoreSitUps = scoreSitUps.innerText;  
        }
    }
    function m1sit() {
        if (+scoreSitUps.innerText>0) {
            scoreSitUps.innerText = +scoreSitUps.innerText - 1;
            localStorage.scoreSitUps = scoreSitUps.innerText;    
        }}
    function p1sit() {
        scoreSitUps.innerText = +scoreSitUps.innerText + 1;
        localStorage.scoreSitUps = scoreSitUps.innerText;
    }
    function p5sit() {
        scoreSitUps.innerText = +scoreSitUps.innerText + 5;
        localStorage.scoreSitUps = scoreSitUps.innerText;
    }
} //sit ups maths

{
    document.getElementById("burpee").innerText = localStorage.scoreBurpees;
    let scoreBurpees = document.getElementById("burpee");
    localStorage.scoreBurpees = +scoreBurpees.innerText;
    function m5burpee() {
        if (+scoreBurpees.innerText>4) {
            scoreBurpees.innerText = +scoreBurpees.innerText - 5;
            localStorage.scoreBurpees = scoreBurpees.innerText;    
        } else {
            scoreBurpees.innerText = 0;
            localStorage.scoreBurpees = scoreBurpees.innerText; 
        }
    }
    function m1burpee() {
        if (+scoreBurpees.innerText>0) {
            scoreBurpees.innerText = +scoreBurpees.innerText - 1;
            localStorage.scoreBurpees = scoreBurpees.innerText;    
        }}
    function p1burpee() {
        scoreBurpees.innerText = +scoreBurpees.innerText + 1;
        localStorage.scoreBurpees = scoreBurpees.innerText;
    }
    function p5burpee() {
        scoreBurpees.innerText = +scoreBurpees.innerText + 5;
        localStorage.scoreBurpees = scoreBurpees.innerText;
    }
} //burpee maths

{
    document.getElementById("squat").innerText = localStorage.scoreSquats;
    let scoreSquats = document.getElementById("squat");
    localStorage.scoreSquats = +scoreSquats.innerText;
    function m5squat() {
        if (+scoreSquats.innerText>4) {
            scoreSquats.innerText = +scoreSquats.innerText - 5;
            localStorage.scoreSquats = scoreSquats.innerText;    
        } else {
            scoreSquats.innerText = 0;
            localStorage.scoreSquats = scoreSquats.innerText;  
        }
    }
    function m1squat() {
        if (+scoreSquats.innerText>0) {
            scoreSquats.innerText = +scoreSquats.innerText - 1;
            localStorage.scoreSquats = scoreSquats.innerText;    
        }}
    function p1squat() {
        scoreSquats.innerText = +scoreSquats.innerText + 1;
        localStorage.scoreSquats = scoreSquats.innerText;
    }
    function p5squat() {
        scoreSquats.innerText = +scoreSquats.innerText + 5;
        localStorage.scoreSquats = scoreSquats.innerText;
    }
} //squats maths

{
    const navbar = document.getElementById("navbar");

    function openSidebar() {
        navbar.classList.add('show')
    }

    function closeSidebar() {
        navbar.classList.remove('show')
    }

    let reloadTimer = null; 
    document.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
        if (reloadTimer) {
            clearTimeout(reloadTimer);
        }

        reloadTimer = setTimeout(function() {
            location.reload();
        }, 800);
        }
    });
}

const today = new Date().getDate();
{
    let monthPushUps = JSON.parse(localStorage.getItem("monthPushUps")) || {};
    if (!monthPushUps[today]) {
        monthPushUps[today] = 0;
    }
    monthPushUps[today] = localStorage.scorePushUps;
    let yearPushUps = JSON.parse(localStorage.getItem("yearPushUps")) || {};
    yearPushUps[month] = monthPushUps.reduce((acc, val) => {
        const num = Number(val);
        return acc + (isNaN(num) ? 0 : num);
        }, 0);
    if (localStorage.currentYear!=year) {
        yearPushUps = [];
    }
    if (localStorage.currentMonth!=month) {
        monthPushUps = [];
    }
    localStorage.setItem("yearPushUps", JSON.stringify(yearPushUps));
    localStorage.setItem("monthPushUps", JSON.stringify(monthPushUps));
} //month&year push ups

{
    let monthPullUps = JSON.parse(localStorage.getItem("monthPullUps")) || {};
    if (!monthPullUps[today]) {
        monthPullUps[today] = 0;
    }
    monthPullUps[today] = localStorage.scorePullUps;
    let yearPullUps = JSON.parse(localStorage.getItem("yearPullUps")) || {};
    yearPullUps[month] = monthPullUps.reduce((acc, val) => {
        const num = Number(val);
        return acc + (isNaN(num) ? 0 : num);
        }, 0);
    if (localStorage.currentYear!=year) {
        yearPullUps = [];
    }
    if (localStorage.currentMonth!=month) {
        monthPullUps = [];
    }
    localStorage.setItem("yearPullUps", JSON.stringify(yearPullUps));
    localStorage.setItem("monthPullUps", JSON.stringify(monthPullUps));
} //month&year pull ups

{
    let monthChinUps = JSON.parse(localStorage.getItem("monthChinUps")) || {};
    if (!monthChinUps[today]) {
        monthChinUps[today] = 0;
    }
    monthChinUps[today] = localStorage.scoreChinUps;
    let yearChinUps = JSON.parse(localStorage.getItem("yearChinUps")) || {};
    yearChinUps[month] = monthChinUps.reduce((acc, val) => {
        const num = Number(val);
        return acc + (isNaN(num) ? 0 : num);
        }, 0);
    if (localStorage.currentYear!=year) {
        yearChinUps = [];
    }
    if (localStorage.currentMonth!=month) {
        monthChinUps = [];
    }
    localStorage.setItem("yearChinUps", JSON.stringify(yearChinUps));
    localStorage.setItem("monthChinUps", JSON.stringify(monthChinUps));
} //month&year chin ups

{
    let monthSwim = JSON.parse(localStorage.getItem("monthSwim")) || {};
    if (!monthSwim[today]) {
        monthSwim[today] = 0;
    }
    monthSwim[today] = localStorage.scoreSwim;
    let yearSwim = JSON.parse(localStorage.getItem("yearSwim")) || {};
    yearSwim[month] = monthSwim.reduce((acc, val) => {
        const num = Number(val);
        return acc + (isNaN(num) ? 0 : num);
        }, 0);
    if (localStorage.currentYear!=year) {
        yearSwim = [];
    }
    if (localStorage.currentMonth!=month) {
        monthSwim = [];
    }
    localStorage.setItem("yearSwim", JSON.stringify(yearSwim));
    localStorage.setItem("monthSwim", JSON.stringify(monthSwim));
} //month&year swim

{
    let monthRun = JSON.parse(localStorage.getItem("monthRun")) || {};
    if (!monthRun[today]) {
        monthRun[today] = 0;
    }
    monthRun[today] = localStorage.scoreRun;
    let yearRun = JSON.parse(localStorage.getItem("yearRun")) || {};
    yearRun[month] = monthRun.reduce((acc, val) => {
        const num = Number(val);
        return acc + (isNaN(num) ? 0 : num);
        }, 0);
    if (localStorage.currentYear!=year) {
        yearRun = [];
    }
    if (localStorage.currentMonth!=month) {
        monthRun = [];
    }
    localStorage.setItem("yearRun", JSON.stringify(yearRun));
    localStorage.setItem("monthRun", JSON.stringify(monthRun));
} //month&year run

{
    let monthSitUps = JSON.parse(localStorage.getItem("monthSitUps")) || {};
    if (!monthSitUps[today]) {
        monthSitUps[today] = 0;
    }
    monthSitUps[today] = localStorage.scoreSitUps;
    let yearSitUps = JSON.parse(localStorage.getItem("yearSitUps")) || {};
    yearSitUps[month] = monthSitUps.reduce((acc, val) => {
        const num = Number(val);
        return acc + (isNaN(num) ? 0 : num);
        }, 0);
    if (localStorage.currentYear!=year) {
        yearSitUps = [];
    }
    if (localStorage.currentMonth!=month) {
        monthSitUps = [];
    }
    localStorage.setItem("yearSitUps", JSON.stringify(yearSitUps));
    localStorage.setItem("monthSitUps", JSON.stringify(monthSitUps));
} //month&year sit ups

{
    let monthBurpees = JSON.parse(localStorage.getItem("monthBurpees")) || {};
    if (!monthBurpees[today]) {
        monthBurpees[today] = 0;
    }
    monthBurpees[today] = localStorage.scoreBurpees;
    let yearBurpees = JSON.parse(localStorage.getItem("yearBurpees")) || {};
    yearBurpees[month] = monthBurpees.reduce((acc, val) => {
        const num = Number(val);
        return acc + (isNaN(num) ? 0 : num);
        }, 0);
    if (localStorage.currentYear!=year) {
        yearBurpees = [];
    }
    if (localStorage.currentMonth!=month) {
        monthBurpees = [];
    }
    localStorage.setItem("yearBurpees", JSON.stringify(yearBurpees));
    localStorage.setItem("monthBurpees", JSON.stringify(monthBurpees));
} //month&year burpees

{
    let monthSquats = JSON.parse(localStorage.getItem("monthSquats")) || {};
    if (!monthSquats[today]) {
        monthSquats[today] = 0;
    }
    monthSquats[today] = localStorage.scoreSquats;
    let yearSquats = JSON.parse(localStorage.getItem("yearSquats")) || {};
    yearSquats[month] = monthSquats.reduce((acc, val) => {
        const num = Number(val);
        return acc + (isNaN(num) ? 0 : num);
        }, 0);
    if (localStorage.currentYear!=year) {
        yearSquats = [];
    }
    if (localStorage.currentMonth!=month) {
        monthSquats = [];
        localStorage.currentMonth = month;
    }
    localStorage.setItem("yearSquats", JSON.stringify(yearSquats));
    localStorage.setItem("monthSquats", JSON.stringify(monthSquats));
} //month&year squats

