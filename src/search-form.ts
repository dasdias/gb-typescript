import { renderBlock } from './lib.js'

export function checkDate(): object {
  const dateEnter: {
    checkOutDate: number | null,
    checkInDate: number | null,
  } = {
    checkOutDate: null,
    checkInDate: null
  };
  const checkOutDate = document.getElementById('check-out-date') as HTMLInputElement | null;
  const checkInDate = document.getElementById('check-in-date') as HTMLInputElement | null;
  const currentDate = new Date(checkOutDate.value);

  // dateEnter.checkOutDate = checkOutDate
  // console.log(checkInDate.value)
  // console.log(checkOutDate.value)
  return dateEnter
}


export function renderSearchFormBlock() {
  const currentDate = new Date();
  // console.log(currentDate.toISOString())

  const datePlusMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 1))

  console.log(formatDate(datePlusMonth))
  function formatDate(currentDate: Date) {

    function prependZero(number: number | string): string | number {
      if (number < 9)
        return "0" + number;
      else
        return number;
    }
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const date = currentDate.getDate().toString();
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
            <input id="check-in-date" type="date" value="${formatDate(currentDate)}" min="${formatDate(currentDate)}" max="${formatDate(datePlusMonth)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="2021-05-13" min="2021-05-11" max="2021-06-30" name="checkout" />
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
