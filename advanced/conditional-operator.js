// const myAge = 7;
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';;
// console.log(message);

const myAge = 26;
const showPage = () => 'Showing the page';
const showErrorPage = () => 'Showing the error page';

const message = myAge >= 21 ? showPage() : showErrorPage();
console.log(message);

const team = ['Tyler', 'Porter'];

const teamMessage = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team';

console.log(teamMessage);