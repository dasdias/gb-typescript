import { checkDate, renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
	renderUserBlock('Wade Warren', '/img/avatar.png', 2)
	renderSearchStubBlock()
	renderSearchFormBlock()
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




	const checkOutDate = document.getElementById('check-out-date') as HTMLInputElement | null;
	const checkInDate = document.getElementById('check-in-date') as HTMLInputElement | null;

	checkInDate.addEventListener('change', (e) => {
		// console.log(checkInDate.value);
		// console.log(checkOutDate.value)
		renderSearchFormBlock(checkInDate.value, checkOutDate.value)

	})
	checkOutDate.addEventListener('change', (e) => {
		// console.log(checkOutDate.value)
		renderSearchFormBlock(checkInDate.value, checkOutDate.value)

	})



})
