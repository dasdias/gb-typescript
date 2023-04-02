import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData, getFavoritesAmount } from './localStorage.js'
import { getSearchElem } from './search-form-data.js'

const user = getUserData('user');
const favoritesAmount = getFavoritesAmount('favoritesAmount');

window.addEventListener('DOMContentLoaded', () => {
	renderUserBlock(user, favoritesAmount)
	renderSearchStubBlock()
	renderSearchFormBlock('2023-03-31', '2023-04-02')
	renderToast(
		{ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
		{
			name: 'Понял', handler: () => {
				const modal = document.querySelector('.info-block') as HTMLElement | null;
				// console.log(modal)
				modal.style.display = 'none';
				console.log('Уведомление закрыто')
			}
		}
	)
	getSearchElem();







})
