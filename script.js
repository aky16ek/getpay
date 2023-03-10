
function startGame() {
    if(document.getElementById('setdiff').getAttribute("value") === "" ) {alert('Выберите уровень сложности')}
    function myRandom(a,b) {return Math.floor((Math.random() * (b-a + 1) + a))}
    let tbl  = document.querySelectorAll('table')[0];
    let tdf = document.querySelectorAll('td');
    let newg = document.querySelectorAll('#start')[0];
    let step1 = 'x';
    let step2 = 'o';
    let currind;
    let chx = function(a,b,c,d) {
        return tdf[a].className === ''+d+'' && tdf[b].className  === ''+d+'' && tdf[c].className === ''+d+''};
    let ai = function(a,b) {
        return tdf[a].className === "x" && tdf[b].className === "x"};
    let randn = function(a,b,c,d) {
        let mass = [a,b,c,d];
        let rand = Math.floor(Math.random() * mass.length);
        let res = mass[rand]; return res;};
    let tdch = function (a) {
        return tdf[a].className !== "x" && tdf[a].className !== "o";};
    let whowin = '';
    let count = 0;

    function clearF() {
        if (tbl.innerHTML.indexOf('x') > -1 || tbl.innerHTML.indexOf('o') > -1) {
            for (let i = 0; tdf.length > i; i++) {
                tdf[i].classList.remove("x") || tdf[i].classList.remove("o");
                whowin = '';
                count = 0;
            }
        }
    }

    newg.addEventListener("click", clearF, false);


    tbl.addEventListener("click", function(event) {
        if(event.target.className === 'x'|| event.target.className === 'o' || event.target.className === 'dez') {
            return false;
        }

        event.target.className = step1;
        if(!checkWin()) {
            currind = event.target.title;
            currind = Number(currind);


        }





        if(!checkWin()) {

            if (difficult() === 1) {

                let checker = setTimeout(function() {
                    document.querySelectorAll('td:not([class="x"]):not([class="o"])')[myRandom(0,document.querySelectorAll('td:not([class="x"]):not([class="o"])').length-1)].className = step2;
                    setTimeout(function(){whowin = checkWin(); winner();},200);},100);

            }
            if(difficult() === 2 ) {
                setTimeout(function()
                {
                    if (tdf[4].className === "x")
                    {
                        if (ai(0,4)) {  tdf[8].className = step2; }
                        if (ai(1,4)) {  tdf[7].className = step2; }
                        if (ai(2,4)) {  tdf[6].className = step2; }
                        if (ai(3,4)) {  tdf[5].className = step2; }
                        if (ai(4,5)) {  tdf[3].className = step2; }
                        if (ai(4,6)) {  tdf[2].className = step2; }
                        if (ai(4,7)) {  tdf[1].className = step2; }
                        if (ai(4,8)) {  tdf[0].className = step2; }
                        if (count === 1 ) {tdf[randn(0,2,6,8)].className = step2; }

                    }
                    if (tdf[4].className !== "x")
                    { if( count === 1) {tdf[4].className = step2;}

                    else if (ai(0,1) && tdch(2) ) { tdf[2].className = step2; }
                    else if (ai(1,2) && tdch(0)) {  tdf[0].className = step2; }
                    else if (ai(2,5) && tdch(8)) {  tdf[8].className = step2; }
                    else if (ai(5,8) && tdch(2)) {  tdf[2].className = step2; }
                    else if (ai(7,8) && tdch(6)) {  tdf[6].className = step2; }
                    else if (ai(6,7) && tdch(8)) {  tdf[8].className = step2; }
                    else if (ai(3,6) && tdch(0)) {  tdf[0].className = step2; }
                    else if (ai(3,0) && tdch(6)) {  tdf[6].className = step2; }

                    else if (ai(0,2) && tdch(1)) {  tdf[1].className = step2; }
                    else if (ai(0,6) && tdch(3)) {  tdf[3].className = step2; }
                    else if (ai(2,8) && tdch(5)) {  tdf[5].className = step2; }
                    else if (ai(6,8) && tdch(7)) {  tdf[7].className = step2; }

                    else {

                        if (document.querySelectorAll('td:not([class="x"]):not([class="o"])').length > 0) {
                            document.querySelectorAll('td:not([class="x"]):not([class="o"])')[myRandom(0,document.querySelectorAll('td:not([class="x"]):not([class="o"])').length-1)].className = step2;
                        }


                    }
                    }
                    setTimeout(function(){whowin = checkWin(); winner();}, 300);
                },200);

            }




        } else {setTimeout(function(){whowin = checkWin(); winner();},200)}

        count++;





        function checkWin() {

            if (chx(0,1,2,"x") || chx(3,4,5,"x") || chx(6,7,8,"x") ||
                chx(0,3,6,"x") || chx(1,4,7,"x") || chx(2,5,8,"x") ||
                chx(0,4,8,"x") || chx(2,4,6,"x") ) { return whowin = "x";
            }
            if (chx(0,1,2,"o") || chx(3,4,5,"o") || chx(6,7,8,"o") ||
                chx(0,3,6,"o") || chx(1,4,7,"o") || chx(2,5,8,"o") ||
                chx(0,4,8,"o") || chx(2,4,6,"o") ) { return whowin = "o";
            }
            if (!(chx(0,1,2,"x") || chx(3,4,5,"x") || chx(6,7,8,"x") ||
                chx(0,3,6,"x") || chx(1,4,7,"x") || chx(2,5,8,"x") ||
                chx(0,4,8,"x") || chx(2,4,6,"x") || chx(0,1,2,"o") ||
                chx(3,4,5,"o") || chx(6,7,8,"o") || chx(0,3,6,"o") ||
                chx(1,4,7,"o") || chx(2,5,8,"o") || chx(0,4,8,"o") ||
                chx(2,4,6,"o")) && document.querySelectorAll('td[class="x"]').length >= 4 && document.querySelectorAll('td[class="o"]').length >= 4 ) { return whowin = "z"; }

        }

        function winner() {
            if (whowin === 'x') { alert('победитель крестик!!') }
            if (whowin === 'o') { alert('победитель нолик!!') }
            if (whowin === 'z') { alert('ничья') }

        }

        function difficult() {
            let n = setdiff.getAttribute('value');
            if (n === "beginner") {return 1}
            if (n === "normal") {return 2}
            if (n === "hard") {return 3}
        }

    });
}
let setdiff = document.querySelector("#setdiff");
document.querySelector("#difficult").onchange =  function(e) {

    document.querySelector("#setdiff").setAttribute("value",e.target.options[e.target.selectedIndex].value); }


for (let t = 0 ; document.querySelectorAll('td').length > t ; t++ ) {

    document.querySelectorAll('td')[t].title=t;

}


let text = 'X O X O X O X O X O X O';
let canvas = document.createElement("canvas");
let fontSize = 25;
canvas.setAttribute('height', fontSize);
let context = canvas.getContext('2d');
context.fillStyle    = 'rgba(0,0,0,0.1)';
context.font         = fontSize + 'px sans-serif';
context.fillText(text, 0, fontSize);

$('body').css({'background-image':"url(" + canvas.toDataURL("image/png")+ ")" });