const user: { username: string, avatarUrl: string } = { username: 'Alex', avatarUrl: '/img/avatar.png' }
const favoritesCount: string = '4';

function setUser() {
  localStorage.setItem('user', JSON.stringify(user));
}
function setFavoritesAmount() {
  localStorage.setItem('favoritesAmount', favoritesCount);
}
setUser();
setFavoritesAmount();

export function getUserData(value: string) {
  if (localStorage.getItem(value) == undefined) {
    return { username: 'User', avatarUrl: '/img/no_photp.png'};
  }
  return JSON.parse(localStorage.getItem(value));
}

export function getFavoritesAmount(value: string) {
  if (localStorage.getItem(value)) {
    return localStorage.getItem(value)
  }
  return '';
}
// console.log('favoritesAmount', getFavoritesAmount('favoritesAmount'));
// console.log('getUserData', getUserData('user'));


