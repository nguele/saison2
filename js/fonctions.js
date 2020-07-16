//episode 9

/*function multiple(nombre) {
    nombre;
    for (let i = 0; i <= 10; i++) {
        console.log(nombre + " x " + i + " = " + nombre * i);
        //alert(nombre + " x " + i + " = " + nombre * i);
    }
    return nombre
}
console.log(multiple(parseInt(prompt("entrez le nombre a multiplier" + ""))));*/

//episode 10

/*function nombres(nombreP) {
    nombreP;
    if (nombreP % 2 == 0) {
        alert(true);
        console.log(true);
    } else {
        alert(false);
        console.log(false);
    }
    return nombreP
}
console.log(nombres(parseInt(prompt("saisir un nombre" + ""))));*/

//episode 11
/*//epi 1
function eMail(email, emailRegexp) {
    email;
    emailRegexp = new RegExp('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$', 'g'); // verification des caracteres

    if (email.match(emailRegexp)) {
        console.log('adresse email valide');
        alert('adresse email valide');
    } else {
        console.log('adresse email invalide');
        alert('adresse email invalide');
    }
    return email
        //return emailRegexp

}
console.log(eMail(email = prompt("entrez votre adresse mail :")));*/

/*// epi 2
function motDePasse(mdp, nombreCaractere, lettreMiniscule, ) {

    mdp;
    nombreCaractere = /.{8,}/g;
    lettreMiniscule = /\d+/g; //veriefie si ya au moins un chiffre dans dans les caracter saisie.
    lettreMajuscule = /[A-Z]+/g;
    if (nombreCaractere.test(mdp) && lettreMiniscule.test(mdp) && lettreMajuscule.test(mdp)) {
        alert("Mot de passe  Valide");
    } else {
        alert("invalide");
    }
    return mdp
}
console.log(motDePasse(prompt("entrez votre mot de passe: ")));*/

/*//episo 3

function profile(nom, enfant, pluriel) {

    nom;
    enfant;
    pluriel = "s";
    if (nom == nom && enfant == 0) {
        alert(nom + " vous n'avez pas d'enfant");
    } else if (nom == nom && enfant == 1) {
        alert(nom + " vous avez " + enfant + " d'enfant ");
    } else if (nom == nom && enfant >= 2) {
        alert(nom + " vous avez " + enfant + " enfant" + pluriel);
    } else {
        alert(" erreur verifiez les champs!!");
        console.log(nom);
    }

    return nom, enfant;
}

console.log(
    profile(
        prompt("quel est votre nom:" + ""),
        parseInt(prompt("combien d'enfant avez vous" + ""))
    )
);*/


/*//epi 4

function naissance(jour, moi, annee) {
    Number(jour);
    Number(moi);
    Number(annee);

    ////let moiLettre = ["janvier", "fevrier", "mars", "avril", "mai"];
    ////let moiNumero = ["1", "2", "3", "4", "5"];
    ////let moiLettre = moi;

    if ((jour >= 01 && jour <= 31) && (moi >= 01 && moi <= 12) && (annee >= 1800 && annee <= 2017)) {
        alert("votre jour de naissance est le " + jour + "/" + moi + "/" + annee);
        console.log(jour + " / " + moi + " / " + annee);
    } else {
        alert("vous avez mal saisie un champ");

    }
    return jour, moi, annee;
}

console.log(
    naissance(
        prompt("quel est votre jour!!!" + " "),
        prompt("quel est votre moi de naissance!!!" + ""),
        prompt("quel est votre annee de naissance!!!" + "")
    )
);*/

//epi 5

/*function identitees(nom, prenom, sexe, profile, identitee) {
    nom;
    prenom;
    sexe;
    profile;

    // condition qui gere le profile et sexe
    if (sexe == "Homme" || sexe == "Femme") {
        (sexe === "Homme") ? profile = "M.r": profile = "Mme";
    } else {
        alert("vous n'avez pas respecter la syntaxe  de Homme ou Femme!!!")
    }

    //Déclaration de l'objet qui récupère les informations
    identitee = {
        nom: nom,
        prenom: prenom,
        sexe: sexe,
        titre: profile
    };
    console.log(identitee);
    return nom, prenom, sexe;
}
console.log(
    identitees(
        prompt("Quel est votre Nom ?" + " "),
        prompt("Quel est votre Prénom ?" + " "),
        prompt("Quel est  votre Sexe ? (Choisir Homme ou Femme )" + " ")
    )
);*/

//epi 6

/*//fonction prend en parametre un nombre 
function semaine(nombre) {

    //tableau des jours de la semaine 
    jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

    //return le jour correspondant au nombre
    return jours[nombre]
}
alert(semaine(Number(prompt("entrez un nombre conrespendant a un jour de la semaine.\n 0 = lundi "))));*/

//epi 9

function calcul(noteMath, moyenne) {

    //tableau de note de math
    noteMath = [];

    //somme des notes
    moyenne = noteMath[0] + noteMath[1] + noteMath[2] + noteMath[3] + noteMath[4];
    // conditionnement des note entre 0 et 20
    if ((noteMath[0] >= 0 && noteMath[0] <= 20) && (noteMath[1] >= 0 && noteMath[1] <= 20) && (noteMath[2] >= 0 && noteMath[2] <= 20) && (noteMath[3] >= 0 && noteMath[3] <= 20) && (noteMath[4] >= 0 && noteMath[4] <= 20)) {
        alert(noteMath);
        alert("votre moyenne en math est de " + moyenne / 5 + " / 20 ");
    } else {
        alert("saisie incorrecte!!");
    }
    console.log(noteMath);
    console.log(moyenne);
    console.log(moyenne / 5);

    return moyenne
}
console.log(
    calcul(
        [0] = Number(prompt("entrez votre note N1 de math" + "  ")), [1] = Number(prompt("entrez votre note N2 de math" + "  ")), [2] = Number(prompt("entrez votre note N3 de math" + "  ")), [3] = Number(prompt("entrez votre note N4 de math" + "  ")), [4] = Number(prompt("entrez votre note N5 de math" + "  "))
    )
);