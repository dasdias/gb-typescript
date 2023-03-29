import { renderBlock } from './lib.js'

export function renderSearchFormBlock(checkInDate: string | undefined = "", checkOutDate: string | undefined = "" ) {
  const t: Date = new Date();
  const currentDate: Date = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  const currentDatePlusDay: Date = new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1);
  const dateDeparture: Date = new Date(currentDatePlusDay.getTime() + 1000 * 60 * 60 * 48);

  const lastDayNextMonths: Date = new Date(t.getFullYear(), t.getMonth() + 2, 0);

  const argCheckIn: Date = new Date(checkInDate);
  const argCheckOut: Date = new Date(checkOutDate);
  

	function formatDate(currentDate: Date): string {

		function prependZero(number: number): string {
			if (number < 9)
				return "0" + number;
			else
				return number.toString();
		}

		const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth() + 1;
    const date: number = currentDate.getDate();
		return `${year}-${prependZero(month)}-${prependZero(date)}`
	}

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
            <input id="check-in-date" type="date" value="${formatDate(argCheckIn) ? formatDate(argCheckIn) : formatDate(currentDatePlusDay) }" min="${formatDate(currentDate)}" max="${formatDate(lastDayNextMonths)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${formatDate(argCheckOut) ? formatDate(argCheckOut) : formatDate(dateDeparture) }" min="${formatDate(currentDate)}" max="${formatDate(lastDayNextMonths)}" name="checkout" />
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
