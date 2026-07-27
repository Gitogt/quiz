const card = document.getElementById("card");
const languageBtn = document.getElementById("languageBtn");
const hearts = document.getElementById("hearts");


// ==========================
// EMAILJS SAFE INIT
// ==========================

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "48Ig_ee47ARSzdwUmGp23"
    });

}


// ==========================
// VARIABLES
// ==========================

let language = "sq";

let selectedDate = "";
let selectedTime = "";
let selectedActivity = "";

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

let currentPage = "home";




// ==========================
// TRANSLATIONS
// ==========================

const t = {

sq: {

question:
"A do të dalësh në një takim me mua? 💖",

subtitle:
"Kam një pyetje speciale për ty...",


yes:
"Po 💗",

no:
"Jo 🙈",


when:
"Kur mund të të vjedh pak kohë? 💕",

choose:
"Zgjidh një opsion:",


tonight:
"Sonte 🌙",

week:
"Këtë javë 💗",

surprise:
"Më surprizo 🎁",


calendar:
"Zgjidh ditën perfekte 📅",


time:
"Zgjidh orarin ⏰",


activity:
"Çfarë tingëllon bukur? 💕",


coffee:
"Kafe ☕",

movie:
"Natë filmi 🎬",

picnic:
"Piknik 🧺",

netflix:
"Netflix & Chill 🛋",

walk:
"Shëtitje në perëndim 🌅",

cook:
"Gatuajmë bashkë 👩‍🍳",


date:
"Shihemi më:",


its:
"YAY!! Është një takim! 🎉"

},



en: {

question:
"Would you be my date? 💖",

subtitle:
"I have a special question for you...",


yes:
"YES 💗",

no:
"NO 🙈",


when:
"When can I steal you away? 💕",

choose:
"Choose an option:",


tonight:
"Tonight 🌙",

week:
"This week 💗",

surprise:
"Surprise me 🎁",


calendar:
"Choose the perfect day 📅",


time:
"Pick a time ⏰",


activity:
"What sounds sweet? 💕",


coffee:
"Coffee ☕",

movie:
"Movie night 🎬",

picnic:
"Picnic 🧺",

netflix:
"Netflix & Chill 🛋",

walk:
"Sunset walk 🌅",

cook:
"Cook together 👩‍🍳",


date:
"See you on:",


its:
"YAY!! It's a date! 🎉"

}

};




// ==========================
// HEART ANIMATION
// ==========================

for(let i = 0; i < 40; i++){

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";


    heart.style.left =
    Math.random()*100 + "vw";


    heart.style.fontSize =
    15 + Math.random()*25 + "px";


    heart.style.animationDuration =
    5 + Math.random()*6 + "s";


    heart.style.animationDelay =
    Math.random()*5 + "s";


    hearts.appendChild(heart);

}






// ==========================
// LANGUAGE BUTTON
// ==========================

languageBtn.addEventListener("click", function(){


    if(language === "sq"){

        language = "en";

        languageBtn.innerHTML =
        "🇦🇱 Shqip";

    }

    else{

        language = "sq";

        languageBtn.innerHTML =
        "🇬🇧 English";

    }


    renderPage();


});

// ==========================
// PAGE SYSTEM
// ==========================

function renderPage(){


    if(currentPage === "home"){

        home();

    }


    else if(currentPage === "choose"){

        choose();

    }


    else if(currentPage === "calendar"){

        renderCalendar();

    }


    else if(currentPage === "time"){

        showTimes();

    }


    else if(currentPage === "activity"){

        showActivities();

    }


}








// ==========================
// HOME PAGE
// ==========================

function home(){


card.innerHTML = `


<div class="teddy">

🧸

</div>



<h1>

${t[language].question}

</h1>



<p>

${t[language].subtitle}

</p>




<div class="buttons">


<button id="yesBtn" class="yes-btn">

${t[language].yes}

</button>



<button id="noBtn" class="no-btn">

${t[language].no}

</button>


</div>


`;





const yesBtn = document.getElementById("yesBtn");


yesBtn.addEventListener("click", function(){


    currentPage = "choose";

    renderPage();


});






const noBtn = document.getElementById("noBtn");



function moveNo(){


    noBtn.style.left =
    Math.random()*65 + "%";


    noBtn.style.top =
    Math.random()*60 + "%";


}



noBtn.addEventListener(
"mouseenter",
moveNo
);


noBtn.addEventListener(
"touchstart",
moveNo
);



}











// ==========================
// CHOOSE PAGE
// ==========================

function choose(){


card.innerHTML = `


<div class="teddy">

🧸

</div>




<h1>

${t[language].when}

</h1>




<p>

${t[language].choose}

</p>





<div class="choice-card" onclick="openCalendar()">

🌙
<br>

${t[language].tonight}

</div>





<div class="choice-card" onclick="openCalendar()">

💗
<br>

${t[language].week}

</div>





<div class="choice-card" onclick="openCalendar()">

🎁
<br>

${t[language].surprise}

</div>



`;



}









// ==========================
// OPEN CALENDAR
// ==========================


window.openCalendar = function(){


currentPage = "calendar";


renderPage();


};









// ==========================
// CALENDAR
// ==========================

function renderCalendar(){



let firstDay = new Date(

currentYear,

currentMonth,

1

).getDay();





let totalDays = new Date(

currentYear,

currentMonth + 1,

0

).getDate();





let monthName = new Date(

currentYear,

currentMonth

)

.toLocaleString(

language === "sq"

? "sq-AL"

: "en-US",

{

month:"long"

}

);





let days = "";





for(let i = 0; i < firstDay; i++){

    days += `<div></div>`;

}





let today = new Date();

today.setHours(0,0,0,0);




let maxDate = new Date();

maxDate.setMonth(
maxDate.getMonth()+3
);






for(let d = 1; d <= totalDays; d++){



let date = new Date(

currentYear,

currentMonth,

d

);





if(date < today || date > maxDate){



days += `

<div class="day disabled">

${d}

</div>

`;



}

else{



days += `

<div class="day"

onclick="selectDay(${d})">

${d}

</div>

`;



}


}








card.innerHTML = `



<div class="teddy">

🧸

</div>




<h1>

${t[language].calendar}

</h1>







<div class="calendar-box">





<div class="calendar-header">



<button onclick="changeMonth(-1)">

‹

</button>





<div class="month-name">

${monthName}

${currentYear}

</div>





<button onclick="changeMonth(1)">

›

</button>



</div>







<div class="weekdays">

<div>Hë</div>

<div>Ma</div>

<div>Më</div>

<div>En</div>

<div>Pr</div>

<div>Sh</div>

<div>Di</div>

</div>








<div class="days">

${days}

</div>





</div>



`;



}

// ==========================
// CHANGE MONTH
// ==========================

window.changeMonth = function(value){


let newDate = new Date(

currentYear,

currentMonth + value,

1

);



let today = new Date();



let minDate = new Date(

today.getFullYear(),

today.getMonth(),

1

);



let maxDate = new Date();

maxDate.setMonth(
maxDate.getMonth()+3
);




if(newDate < minDate){

    return;

}



if(newDate > maxDate){

    return;

}




currentMonth = newDate.getMonth();

currentYear = newDate.getFullYear();



renderCalendar();


};









// ==========================
// SELECT DATE
// ==========================

window.selectDay = function(day){



selectedDate =

day +

" " +

new Date(

currentYear,

currentMonth

)

.toLocaleString(

language === "sq"

? "sq-AL"

: "en-US",

{

month:"long"

}

)

+

" " +

currentYear;



currentPage = "time";


renderPage();


};









// ==========================
// TIME PAGE
// ==========================

function showTimes(){


card.innerHTML = `



<div class="teddy">

🧸

</div>





<h1>

${t[language].time}

</h1>






<div class="time-grid">





<div class="time-card"

onclick="setTime('08:00 - 10:30')">


🌅

<br>

${language==="sq" ? "Mëngjes" : "Morning"}

<br>

08:00 - 10:30


</div>







<div class="time-card"

onclick="setTime('12:00 - 16:30')">


☀️

<br>

${language==="sq" ? "Drekë / Pasdite" : "Lunch / Afternoon"}

<br>

12:00 - 16:30


</div>







<div class="time-card"

onclick="setTime('17:00 - 21:00')">


🌆

<br>

${language==="sq" ? "Mbrëmje" : "Evening"}

<br>

17:00 - 21:00


</div>







<div class="time-card"

onclick="setTime('21:30 - 00:00')">


🌙

<br>

${language==="sq" ? "Natë vonë" : "Late night"}

<br>

21:30 - 00:00


</div>





</div>


`;



}









window.setTime = function(time){


selectedTime = time;


currentPage = "activity";


renderPage();


};









// ==========================
// ACTIVITY PAGE
// ==========================

function showActivities(){


card.innerHTML = `



<div class="teddy">

🧸

</div>





<h1>

${t[language].activity}

</h1>







<div class="choice-card"

onclick="finish('${t[language].coffee}')">

${t[language].coffee}

</div>





<div class="choice-card"

onclick="finish('${t[language].movie}')">

${t[language].movie}

</div>





<div class="choice-card"

onclick="finish('${t[language].picnic}')">

${t[language].picnic}

</div>





<div class="choice-card"

onclick="finish('${t[language].netflix}')">

${t[language].netflix}

</div>





<div class="choice-card"

onclick="finish('${t[language].walk}')">

${t[language].walk}

</div>





<div class="choice-card"

onclick="finish('${t[language].cook}')">

${t[language].cook}

</div>



`;



}









// ==========================
// FINAL + EMAILJS
// ==========================

window.finish = function(activity){



selectedActivity = activity;





if(typeof emailjs !== "undefined"){



emailjs.send(

"service_pa5dujp",

"template_yhda3w9",

{

date: selectedDate,

time: selectedTime,

activity: selectedActivity

}

)

.then(function(){


console.log("Email sent ❤️");


})

.catch(function(error){


console.log("Email error:", error);


});



}







card.innerHTML = `



<div class="teddy">

🧸❤️

</div>







<h1 class="final-title">


🎉 YAY!!

<br>


${t[language].its}


</h1>







<p class="final-text">



${t[language].date}



<br><br>



📅 ${selectedDate}




<br><br>



⏰ ${selectedTime}




<br><br>



❤️ ${selectedActivity}




<br><br>



🎆✨



</p>




`;



};









// ==========================
// START
// ==========================


renderPage();
