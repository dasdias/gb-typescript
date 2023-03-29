import { renderBlock } from './lib.js'

export function checkDate() {
	// const dateEnter: {
	// 	checkOutDate: number | null,
	// 	checkInDate: number | null,
	// } = {
	// 	checkOutDate: null,
	// 	checkInDate: null
	// };
	// const checkOutDate = document.getElementById('check-out-date') as HTMLInputElement | null;
	// const checkInDate = document.getElementById('check-in-date') as HTMLInputElement | null;
	// checkInDate.addEventListener('change', (e) => {
	// 	console.log(checkInDate.value);
	// 	// console.log(checkOutDate.value)
	// })
	// checkOutDate.addEventListener('change', (e) => {
	// 	console.log(checkOutDate.value)
	// })
	// dateEnter.checkOutDate = checkOutDate
	// console.log(checkInDate.value)
	// console.log(checkOutDate.value)
	return
}


export function renderSearchFormBlock(checkInDate: string | undefined = "", checkOutDate: string | undefined = "" ) {
  const t = new Date();
  const currentDate = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  const currentDatePlusDay = new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1);
  const dateDeparture = new Date(currentDatePlusDay.getTime() + 1000 * 60 * 60 * 48);

  const lastDayNextMonths = new Date(t.getFullYear(), t.getMonth() + 2, 0)
  
	console.log('checkInDate', checkInDate);
	console.log('checkOutDate', checkOutDate);


	function formatDate(currentDate: Date) {

		function prependZero(number: number): string {
			if (number < 9)
				return "0" + number;
			else
				return number.toString();
		}

		const year = currentDate.getFullYear();
		const month = currentDate.getMonth() + 1;
		const date = currentDate.getDate();
		return `${year}-${prependZero(month)}-${prependZero(date)}`
	}

	// value = "${formatDate(currentDatePlusDay)}"
	// value = "${formatDate(dateDeparture)}"

	renderBlock(
		'search-form-block',
		`
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${formatDate(currentDatePlusDay)}" min="${formatDate(currentDate)}" max="${formatDate(lastDayNextMonths)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${formatDate(dateDeparture)}" min="${formatDate(currentDate)}" max="${formatDate(lastDayNextMonths)}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
	)
}
