function appendvalue(chiffre){
    const resultatActuel = document.getElementById("resultat").textContent;
    const nouveauresultat = resultatActuel + chiffre;
    document.getElementById("resultat").textContent = nouveauresultat;
}
function effacerDernier(){
    const resultatActuel = document.getElementById('resultat').textContent;
    if(resultatActuel.length > 0){
        const nouveauresultat = resultatActuel.slice(0, -1);
        document.getElementById('resultat').textContent = nouveauresultat;
    }
}
function effacertout(){
    document.getElementById('resultat').textContent = '';
}
function calculer(){
    const expression = document.getElementById('resultat').textContent;
    try {
        const resultat = Function(`'use strict';return(${expression})`)();
        document.getElementById('resultat').textContent = resultat;
    }catch(error){
        document.getElementById('resultat').textContent = 'Erreur de calcul';
    }

}


