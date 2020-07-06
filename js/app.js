// //epiose 1
// let email = prompt("entrez votre adresse mail :");
// let emailRegexp = new RegExp('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$', 'g'); // verification des caracteres

// if (email.match(emailRegexp)) {
//     console.log('adresse email valide');
//     alert('adresse email valide');
// } else {
//     console.log('adresse email invalide');
//     alert('adresse email invalide');
// }

//episode2
// let mdp = prompt("");
// let condition = new RegExp("^[a-zA-Z]+$");
// console.log(condition);
// let mdp = prompt("entrez votre mot de passe: ");
// let nombreCaractere = /.{8,}/g;
// let lettreMiniscule = /\d+/g; //veriefie si ya au moins un chiffre dans dans les caracter saisie.
// let lettreMajuscule = /[A-Z]+/g;
// if (nombreCaractere.test(mdp) && lettreMiniscule.test(mdp) && lettreMajuscule.test(mdp)) {
//     alert("Mot de passe  Valide");
// } else {
//     alert("invalide");
// }

//episode 3
// let nom = prompt("quel est votre nom:" + "");
// let enfant = Number(prompt("combien d'enfant avez vous" + ""));
// const pluriel = "s";
// if (nom == nom && enfant == 0) {
//     alert(nom + " vous n'avez pas d'enfant");
// } else if (nom == nom && enfant == 1) {
//     alert(nom + " vous avez " + enfant + " d'enfant ");
// } else if (nom == nom && enfant >= 2) {
//     alert(nom + " vous avez " + enfant + " enfant" + pluriel);
// } else {
//     alert(" erreur verifiez les champs!!");
// }
// console.log(nom);
// console.log(enfant);

//episode 4
// let jour = Number(prompt("quel est votre jour de naissance!!!" + ""));
// let moi = Number(prompt("quel est votre moi de naissance!!!" + ""));
// let annee = Number(prompt("quel est votre annee de naissance!!!" + ""));

// ////let moiLettre = ["janvier", "fevrier", "mars", "avril", "mai"];
// ////let moiNumero = ["1", "2", "3", "4", "5"];
// ////let moiLettre = moi;

// if ((jour >= 01 && jour <= 31) && (moi >= 01 && moi <= 12) && (annee >= 1800 && annee <= 2017)) {
//     alert("votre jour de naissance est le " + jour + "/" + moi + "/" + annee);
//     console.log(moi);
// } else {
//     alert("vous avez mal saisie un champ");

// }

// //episode 5
// let nom = prompt("Quel est votre Nom ?");
// let prenom = prompt("Quel est votre Prénom ?");
// let sexe;
// let profile;
// sexe = prompt("Quel est  votre Sexe ? (Choisir Homme ou Femme )");
// // condition qui gere le profile et sexe
// if (sexe == "Homme" || sexe == "Femme") {
//     (sexe === "Homme") ? profile = "M.r": profile = "Mme";
// } else {
//     alert("vous n'avez pas respecter la syntaxe  de Homme ou Femme!!!")
// }

// //Déclaration de l'objet qui récupère les informations
// let identitee = {
//     nom: nom,
//     prenom: prenom,
//     sexe: sexe,
//     titre: profile
// };
// console.log(identitee);

// episope 6
//let nombre = parseInt(prompt("entrez un nombre equiveaux au jour d'une semaine" + ""))
// let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]; // tableau des jour de la semaine
// alert(jour[Number(prompt("entrez un nombre conrespendant a un jour de la semaine.\n 0 = lundi "))]); //lecture du tableau en fonction des nombres
// console.log(jour);

// //episode 7
// //tableau de note de math
// let noteMath = [];
// noteMath[0] = Number(prompt("entrez votre note N1 de math" + "  "));
// noteMath[1] = Number(prompt("entrez votre note N2 de math" + "  "));
// noteMath[2] = Number(prompt("entrez votre note N3 de math" + "  "));
// noteMath[3] = Number(prompt("entrez votre note N4 de math" + "  "));
// noteMath[4] = Number(prompt("entrez votre note N5 de math" + "  "));
// //somme des notes
// let moyenne = noteMath[0] + noteMath[1] + noteMath[2] + noteMath[3] + noteMath[4];
//// conditionnement des note entre 0 et 20
// if ((noteMath[0] >= 0 && noteMath[0] <= 20) && (noteMath[1] >= 0 && noteMath[1] <= 20) && (noteMath[2] >= 0 && noteMath[2] <= 20) && (noteMath[3] >= 0 && noteMath[3] <= 20) && (noteMath[4] >= 0 && noteMath[4] <= 20)) {
//     alert(noteMath);
//     alert("votre moyenne en math est de " + moyenne / 5 + " / 20 ");
// } else {
//     alert("saisie incorrecte!!");
// }
// console.log(noteMath);
// console.log(moyenne);
// console.log(moyenne / 5);

// //episode 8

// while (ajouterNom = prompt("ajouterNom \n pour finir saisissez non" + " ") != "non") {

//     nom = prompt("entrez votre nom");
//     note = Number(prompt(" quel est votre moyenne ?"));

//     let nomEtNote = {
//         nom: ["nom"],
//         note: ["note"]
//     };
//     console.log(nomEtNote);
//     console.log(nomEtNote.nom);
//     console.log(nomEtNote.note);
//     // console.log(ajouterNom);
// }