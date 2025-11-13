var szamlalo = 1
function ujDivHozzaad() {
    const ujDiv =document.createElement("div");
    const h2 = document.createElement("H2");
    h2.innerHTML = "Cikk" + szamlalo
    ujDiv.append(h2)
    const container = document.getElementById("container"); 
    container.append(ujDiv)
    szamlalo=szamlalo+1
}
function addP() {
    const ujP = document.createElement("p");
    ujP.innerHTML = "Új bekezdés szövege";
    const cont = document.getElementById("container");
    const divek = cont.getElementsByTagName("div");
    const utolso_div = divek[divek.length-1]
    
    if (divek.length>0) {
        utolso_div.append(ujP);
    }else{
        alert("Először divet hozz létre!")
    }
}
function stilusKeszites() {
    //Bármilyen p ami egy div belsejében van
    const bekezdesek1 = document.querySelectorAll("div p");
    bekezdesek1.forEach(function (p) {
        p.style.color = "blue";
    }
        
    );
    
    const bekezdesek2 = document.querySelectorAll("div > p");
    bekezdesek2.forEach(function (elem) {
        elem.style.fontweight = "bold";
    }

    );
    //testvér 
    const bekezdesek3 = document.querySelectorAll("div~p");
    bekezdesek3.forEach(function (db) {
        db.style.textDecoration = "underline";
    }

    );
    //Szülőének második gyereke
    const bekezdesek4 = document.querySelectorAll("p:nth-child(3)");
    bekezdesek4.forEach(function (gyerek) {
        gyerek.style.backgroundColor = "lightyellow";
    }

    );
    const bekezdesek5 = document.querySelectorAll("p:nth-of-type(2)")
    bekezdesek5.forEach(function (e) {
        e.style.borded = "1px solid red";   
    }

    );
}