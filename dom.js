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