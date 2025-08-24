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
    localStorage.scoreWalk = 0;
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
    localStorage.sundayWalk = localStorage.scoreWalk;
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
    localStorage.mondayWalk = localStorage.scoreWalk;
    localStorage.mondaySitUps = localStorage.scoreSitUps;
    localStorage.mondayBurpees = localStorage.scoreBurpees;
    localStorage.mondaySquats = localStorage.scoreSquats;
    {
        localStorage.removeItem("sundayPushUps");
        localStorage.removeItem("sundayPullUps");
        localStorage.removeItem("sundayChinUps");
        localStorage.removeItem("sundaySwim");
        localStorage.removeItem("sundayRun");
        localStorage.removeItem("sundayWalk");
        localStorage.removeItem("sundaySitUps");
        localStorage.removeItem("sundayBurpees");
        localStorage.removeItem("sundaySquats");

        localStorage.removeItem("saturdayPushUps");
        localStorage.removeItem("saturdayPullUps");
        localStorage.removeItem("saturdayChinUps");
        localStorage.removeItem("saturdaySwim");
        localStorage.removeItem("saturdayRun");
        localStorage.removeItem("saturdayWalk");
        localStorage.removeItem("saturdaySitUps");
        localStorage.removeItem("saturdayBurpees");
        localStorage.removeItem("saturdaySquats");

        localStorage.removeItem("fridayPushUps");
        localStorage.removeItem("fridayPullUps");
        localStorage.removeItem("fridayChinUps");
        localStorage.removeItem("fridaySwim");
        localStorage.removeItem("fridayRun");
        localStorage.removeItem("fridayWalk");
        localStorage.removeItem("fridaySitUps");
        localStorage.removeItem("fridayBurpees");
        localStorage.removeItem("fridaySquats");

        localStorage.removeItem("thursdayPushUps");
        localStorage.removeItem("thursdayPullUps");
        localStorage.removeItem("thursdayChinUps");
        localStorage.removeItem("thursdaySwim");
        localStorage.removeItem("thursdayRun");
        localStorage.removeItem("thursdayWalk");
        localStorage.removeItem("thursdaySitUps");
        localStorage.removeItem("thursdayBurpees");
        localStorage.removeItem("thursdaySquats");

        localStorage.removeItem("wensdayPushUps");
        localStorage.removeItem("wensdayPullUps");
        localStorage.removeItem("wensdayChinUps");
        localStorage.removeItem("wensdaySwim");
        localStorage.removeItem("wensdayRun");
        localStorage.removeItem("wensdayWalk");
        localStorage.removeItem("wensdaySitUps");
        localStorage.removeItem("wensdayBurpees");
        localStorage.removeItem("wensdaySquats");

        localStorage.removeItem("tuesdayPushUps");
        localStorage.removeItem("tuesdayPullUps");
        localStorage.removeItem("tuesdayChinUps");
        localStorage.removeItem("tuesdaySwim");
        localStorage.removeItem("tuesdayRun");
        localStorage.removeItem("tuesdayWalk");
        localStorage.removeItem("tuesdaySitUps");
        localStorage.removeItem("tuesdayBurpees");
        localStorage.removeItem("tuesdaySquats");
    }
}
if (newDay==2) {
    localStorage.tuesdayPushUps = localStorage.scorePushUps;
    localStorage.tuesdayPullUps = localStorage.scorePullUps;
    localStorage.tuesdayChinUps = localStorage.scoreChinUps;
    localStorage.tuesdaySwim = localStorage.scoreSwim;
    localStorage.tuesdayRun = localStorage.scoreRun;
    localStorage.tuesdayWalk = localStorage.scoreWalk;
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
    localStorage.wensdayWalk = localStorage.scoreWalk;
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
    localStorage.thursdayWalk = localStorage.scoreWalk;
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
    localStorage.fridayWalk = localStorage.scoreWalk;
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
    localStorage.saturdayWalk = localStorage.scoreWalk;
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
    if (Boolean(localStorage.scoreWalk) == false) {localStorage.scoreWalk=0}
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
        localStorage.streakActive = true;
    }
    function m1push() {
        if (+scorePushUps.innerText>0) {
            scorePushUps.innerText = +scorePushUps.innerText - 1;
            localStorage.scorePushUps = scorePushUps.innerText;    
        }}
        localStorage.streakActive = true;
    function p1push() {
        scorePushUps.innerText = +scorePushUps.innerText + 1;
        localStorage.scorePushUps = scorePushUps.innerText;
        localStorage.streakActive = true;
    }
    function p5push() {
        scorePushUps.innerText = +scorePushUps.innerText + 5;
        localStorage.scorePushUps = scorePushUps.innerText;
        localStorage.streakActive = true;
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
        localStorage.streakActive = true;
    }
    function m1pull() {
        if (+scorePullUps.innerText>0) {
            scorePullUps.innerText = +scorePullUps.innerText - 1;
            localStorage.scorePullUps = scorePullUps.innerText;
        }
        localStorage.streakActive = true;
    }
    function p1pull() {
        scorePullUps.innerText = +scorePullUps.innerText + 1;
        localStorage.scorePullUps = scorePullUps.innerText;
        localStorage.streakActive = true;
    }
    function p5pull() {
        scorePullUps.innerText = +scorePullUps.innerText + 5;
        localStorage.scorePullUps = scorePullUps.innerText;
        localStorage.streakActive = true;
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
        localStorage.streakActive = true;
    }
    function m1chin() {
        if (+scoreChinUps.innerText>0) {
            scoreChinUps.innerText = +scoreChinUps.innerText - 1;
            localStorage.scoreChinUps = scoreChinUps.innerText;
        }
        localStorage.streakActive = true;
    }
    function p1chin() {
        scoreChinUps.innerText = +scoreChinUps.innerText + 1;
        localStorage.scoreChinUps = scoreChinUps.innerText;
        localStorage.streakActive = true;
    }
    function p5chin() {
        scoreChinUps.innerText = +scoreChinUps.innerText + 5;
        localStorage.scoreChinUps = scoreChinUps.innerText;
        localStorage.streakActive = true;
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
        }
        localStorage.streakActive = true;
    }
    function p100swim() {
        scoreSwim.innerText = +scoreSwim.innerText + 100;
        localStorage.scoreSwim = scoreSwim.innerText;
        localStorage.streakActive = true;
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
        }
        localStorage.streakActive = true;
    }
    function p500run() {
        scoreRun.innerText = +scoreRun.innerText + 500;
        localStorage.scoreRun = scoreRun.innerText;
        localStorage.streakActive = true;
    }
} //run maths

{
    document.getElementById("walk").innerText = localStorage.scoreWalk;
    let scoreWalk = document.getElementById("walk");
    localStorage.scoreWalk = +scoreWalk.innerText;
    function m500walk() {
        if (+scoreWalk.innerText>0) {
            scoreWalk.innerText = +scoreWalk.innerText - 500;
            localStorage.scoreWalk = scoreWalk.innerText;
        }
        localStorage.streakActive = true;
    }
    function p500walk() {
        scoreWalk.innerText = +scoreWalk.innerText + 500;
        localStorage.scoreWalk = scoreWalk.innerText;
        localStorage.streakActive = true;
    }
} //walk maths

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
        localStorage.streakActive = true;
    }
    function m1sit() {
        if (+scoreSitUps.innerText>0) {
            scoreSitUps.innerText = +scoreSitUps.innerText - 1;
            localStorage.scoreSitUps = scoreSitUps.innerText;    
        }
        localStorage.streakActive = true;
    }
    function p1sit() {
        scoreSitUps.innerText = +scoreSitUps.innerText + 1;
        localStorage.scoreSitUps = scoreSitUps.innerText;
        localStorage.streakActive = true;
    }
    function p5sit() {
        scoreSitUps.innerText = +scoreSitUps.innerText + 5;
        localStorage.scoreSitUps = scoreSitUps.innerText;
        localStorage.streakActive = true;
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
        localStorage.streakActive = true;
    }
    function m1burpee() {
        if (+scoreBurpees.innerText>0) {
            scoreBurpees.innerText = +scoreBurpees.innerText - 1;
            localStorage.scoreBurpees = scoreBurpees.innerText;    
        }
        localStorage.streakActive = true;
    }
    function p1burpee() {
        scoreBurpees.innerText = +scoreBurpees.innerText + 1;
        localStorage.scoreBurpees = scoreBurpees.innerText;
        localStorage.streakActive = true;
    }
    function p5burpee() {
        scoreBurpees.innerText = +scoreBurpees.innerText + 5;
        localStorage.scoreBurpees = scoreBurpees.innerText;
        localStorage.streakActive = true;
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
        localStorage.streakActive = true;
    }
    function m1squat() {
        if (+scoreSquats.innerText>0) {
            scoreSquats.innerText = +scoreSquats.innerText - 1;
            localStorage.scoreSquats = scoreSquats.innerText;    
        }
        localStorage.streakActive = true;
    }
    function p1squat() {
        scoreSquats.innerText = +scoreSquats.innerText + 1;
        localStorage.scoreSquats = scoreSquats.innerText;
        localStorage.streakActive = true;
    }
    function p5squat() {
        scoreSquats.innerText = +scoreSquats.innerText + 5;
        localStorage.scoreSquats = scoreSquats.innerText;
        localStorage.streakActive = true;
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
} //navbar

const today = new Date().getDate();
{
    let monthPushUps = JSON.parse(localStorage.getItem("monthPushUps")) || {};
    let yearPushUps = JSON.parse(localStorage.getItem("yearPushUps")) || {};
    if (localStorage.streakActive = true) {
        if (!monthPushUps[today]) {
            monthPushUps[today] = 0;
        }
        monthPushUps[today] = localStorage.scorePushUps;
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
    } else {
        monthPushUps = [];
    }
    localStorage.setItem("yearPushUps", JSON.stringify(yearPushUps));
    localStorage.setItem("monthPushUps", JSON.stringify(monthPushUps));
} //month&year push ups

{
    let monthPullUps = JSON.parse(localStorage.getItem("monthPullUps")) || {};
    let yearPullUps = JSON.parse(localStorage.getItem("yearPullUps")) || {};
    if (localStorage.streakActive = true) {
        if (!monthPullUps[today]) {
            monthPullUps[today] = 0;
        }
        monthPullUps[today] = localStorage.scorePullUps;
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
    } else {
        monthPullUps = [];
    }
    localStorage.setItem("yearPullUps", JSON.stringify(yearPullUps));
    localStorage.setItem("monthPullUps", JSON.stringify(monthPullUps));
} //month&year pull ups

{
    let monthChinUps = JSON.parse(localStorage.getItem("monthChinUps")) || {};
    let yearChinUps = JSON.parse(localStorage.getItem("yearChinUps")) || {};
    if (localStorage.streakActive = true) {
        if (!monthChinUps[today]) {
            monthChinUps[today] = 0;
        }
        monthChinUps[today] = localStorage.scoreChinUps;
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
    } else {
        monthChinUps = [];
    }
    localStorage.setItem("yearChinUps", JSON.stringify(yearChinUps));
    localStorage.setItem("monthChinUps", JSON.stringify(monthChinUps));
} //month&year chin ups

{
    let monthSwim = JSON.parse(localStorage.getItem("monthSwim")) || {};
    let yearSwim = JSON.parse(localStorage.getItem("yearSwim")) || {};
    if (localStorage.streakActive = true) {
        if (!monthSwim[today]) {
            monthSwim[today] = 0;
        }
        monthSwim[today] = localStorage.scoreSwim;
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
    } else {
        monthSwim = [];
    }
    localStorage.setItem("yearSwim", JSON.stringify(yearSwim));
    localStorage.setItem("monthSwim", JSON.stringify(monthSwim));
} //month&year swim

{
    let monthRun = JSON.parse(localStorage.getItem("monthRun")) || {};
    let yearRun = JSON.parse(localStorage.getItem("yearRun")) || {};
    if (localStorage.streakActive = true) {
        if (!monthRun[today]) {
            monthRun[today] = 0;
        }
        monthRun[today] = localStorage.scoreRun;
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
    } else {
        monthRun = [];
    }
    localStorage.setItem("yearRun", JSON.stringify(yearRun));
    localStorage.setItem("monthRun", JSON.stringify(monthRun));
} //month&year run

{
    let monthWalk = JSON.parse(localStorage.getItem("monthWalk")) || [];
    let yearWalk = JSON.parse(localStorage.getItem("yearWalk")) || [];
    if (localStorage.streakActive = true) {
        if (!monthWalk[today]) {
            monthWalk[today] = 0;
        }
        monthWalk[today] = localStorage.scoreWalk;
        yearWalk[month] = monthWalk.reduce((acc, val) => {
            const num = Number(val);
            return acc + (isNaN(num) ? 0 : num);
            }, 0);
        if (localStorage.currentYear!=year) {
            yearWalk = [];
        }
        if (localStorage.currentMonth!=month) {
            monthWalk = [];
        }
    } else {
        monthWalk = [];
    }
    localStorage.setItem("yearWalk", JSON.stringify(yearWalk));
    localStorage.setItem("monthWalk", JSON.stringify(monthWalk));
} //month&year walk

{
    let monthSitUps = JSON.parse(localStorage.getItem("monthSitUps")) || {};
    let yearSitUps = JSON.parse(localStorage.getItem("yearSitUps")) || {};
    if (localStorage.streakActive = true) {
        if (!monthSitUps[today]) {
            monthSitUps[today] = 0;
        }
        monthSitUps[today] = localStorage.scoreSitUps;
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
    } else {
        monthSitUps = [];
    }
    localStorage.setItem("yearSitUps", JSON.stringify(yearSitUps));
    localStorage.setItem("monthSitUps", JSON.stringify(monthSitUps));
} //month&year sit ups

{
    let monthBurpees = JSON.parse(localStorage.getItem("monthBurpees")) || {};
    let yearBurpees = JSON.parse(localStorage.getItem("yearBurpees")) || {};
    if (localStorage.streakActive = true) {
        if (!monthBurpees[today]) {
            monthBurpees[today] = 0;
        }
        monthBurpees[today] = localStorage.scoreBurpees;
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
    } else {
        monthBurpees = [];
    }
    localStorage.setItem("yearBurpees", JSON.stringify(yearBurpees));
    localStorage.setItem("monthBurpees", JSON.stringify(monthBurpees));
} //month&year burpees

{
    let monthSquats = JSON.parse(localStorage.getItem("monthSquats")) || {};
    let yearSquats = JSON.parse(localStorage.getItem("yearSquats")) || {};
    if (localStorage.streakActive = true) {
        if (!monthSquats[today]) {
            monthSquats[today] = 0;
        }
        monthSquats[today] = localStorage.scoreSquats;
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
    } else {
        monthSquats = [];
    }
    localStorage.setItem("yearSquats", JSON.stringify(yearSquats));
    localStorage.setItem("monthSquats", JSON.stringify(monthSquats));
} //month&year squats

