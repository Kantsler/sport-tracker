import 'https://tomashubelbauer.github.io/github-pages-local-storage/index.js';

{
    let scorePushUps = document.getElementById("push-up");
    localStorage.scorePushUps = +scorePushUps.innerText;
    function m5push() {
        if (+scorePushUps.innerText>4) {
            scorePushUps.innerText = +scorePushUps.innerText - 5;
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
}

{
    let scorePullUps = document.getElementById("pull-up");
    localStorage.scorePullUps = +scorePullUps.innerText;
    function m5pull() {
        if (+scorePullUps.innerText>4) {
            scorePullUps.innerText = +scorePullUps.innerText - 5;
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
}