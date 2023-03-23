import { checkDate, renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
	renderUserBlock('Wade Warren', '/img/avatar.png', 2)
	renderSearchFormBlock()
	renderSearchStubBlock()
	checkDate()
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



})
