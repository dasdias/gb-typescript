import { searchData } from './search.js'

interface SearchFormData {
  city: string
  checkInDate: string
  checkInOut: string
  maxPrice: string
}

export const SearchFormData: SearchFormData = {
  city: '',
  checkInDate: '',
  checkInOut: '',
  maxPrice: ''
}

export function getSearchElem() {
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.querySelector('#city') as HTMLFormElement
    const checkInDate = document.querySelector('#check-in-date') as HTMLFormElement
    const checkOutDate = document.querySelector('#check-out-date') as HTMLFormElement
    const maxPrice = document.querySelector('#max-price') as HTMLFormElement

    SearchFormData.city = city.value
    SearchFormData.checkInDate = checkInDate.value
    SearchFormData.checkInOut = checkOutDate.value
    SearchFormData.maxPrice = maxPrice.value

    searchData(SearchFormData);
  })
}