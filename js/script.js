/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
*/
'use strict';

const members = [
    {
        firstName: "Wayne",
        secondoName: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        firstName: "Angela",
        secondoName: "Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    {
        firstName: "Walter",
        secondoName: "Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    {
        firstName: "Angela",
        secondoName: "Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        firstName: "Scott",
        secondoName: "Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    {
        firstName: "Barbara",
        secondoName: "Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]

let createCards = []
for (let i = 0; i < members.length; i++) {
    console.log(members[i].firstName, members[i].secondoName, members[i].role);
    let card = `
    <div class="card text-bg-light mb-3 col-3"">
        <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">${members[i].firstName} ${members[i].secondoName}, in the role of ${members[i].role}</p>
        </div>
    </div>
    `;
    createCards.push(card);
}
document.body.innerHTML = createCards;