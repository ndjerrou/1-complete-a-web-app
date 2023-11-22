// le bloc de code suivant s'éxécute lorsque l'utilisateur clique sur le bouton "Valilder mes choix"
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  if (Array.from(event.target.elements.hobbies.selectedOptions).length !== 2) {
    console.log('stop - pas asez de hobbies');
    alert('Merci de sélectionner au moins 2 hobbies');
    return;
  }

  const target = event.target;
  const elements = target.elements;

  const inputFirstName = elements.firstName;
  const inputAge = elements.age;

  const hobbies = Array.from(event.target.elements.hobbies.selectedOptions);
});

const btnAddFriends = document.querySelector('#add__friends');
const inputFriends = document.querySelector('input[name="friend"]');
const blocFriends = document.querySelector('#blocFriends > ul');
let friends = [];
let friendName = null;

btnAddFriends.disabled = true;

// ce bloc de code s'éxécute lorsque l'utilisateur tape une lettre dans l'input qui permet d'ajouter un ami
inputFriends.addEventListener('input', event => {
  friendName = null;
  const condition = null;

  if (condition) {
    btnAddFriends.disabled = false;
  }
});

// ce bloc de code s'exécute lorsque le bouton ajouter un Ami est cliqué
btnAddFriends.addEventListener('click', event => {
  inputFriends.value = '';

  displayFriends(friends);
});

// ce bloc de code s'éxécute lorsque l'utilisateur clique sur le 'X' à côté de l'ami que nous avons ajouté
document.querySelector('#blocFriends').addEventListener('click', e => {
  if (e.target.classList.contains('delete__friend')) {
    displayFriends(friends);
  }
});

// fonction qui affiche les amis ajoutés
function displayFriends(friends) {
  blocFriends.innerHTML = '';
  let str = '';
  console.log(friends);
  friends.forEach(friend => {
    str += `
      <li>${friend}<button class="delete__friend" id="btn__delete__friend${Math.random()}" data-friendname="${friend}" style="margin-left: 20px">Supprimer</button></li>
      `;
  });

  blocFriends.innerHTML = str;
}
