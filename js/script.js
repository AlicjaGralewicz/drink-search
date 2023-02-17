const input = document.querySelector('.search');
const ul = document.querySelector('ul')
const li = document.querySelectorAll('li')

let items = []

function searchLI(){
for(i = 0; i < li.length; i++){

items.push(li[i].innerText)
}
}


function filterItems(searchtext){
 const array = [];


 items.forEach((value) => {
  if(value.toLowerCase().startsWith(searchtext.toLowerCase())){
   array.push(value)
  }
 })


 return array
}




searchLI()
console.log(items);

input.addEventListener('keyup', (e) => {
const inputValue = e.target.value
const filteredArray = filterItems(inputValue)
console.log(filteredArray);
ul.innerHTML = ' '
filteredArray.forEach((value) => {
 ul.innerHTML += '<li>' + value + '</li>'
})

})



// const search = document.querySelector('.search');
// const li = document.querySelectorAll('li')

// const searchEngine = (e) => {
//  const text = e.target.value.toLowerCase();
 
// li.forEach(el => {
 
//  const task = el.textContent;

//  if(task.toLowerCase().indexOf(text) !== -1){
//   el.style.display = 'block'
//  } else {
//   el.style.display = 'none'
//  }
// })
// }

// search.addEventListener('keyup', searchEngine)











Kalkulator napiwków 

/* const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');


const showBill = () => {
    if (price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola!';
        costInfo.style.display = 'none'; 
    } else {
        error.textContent = '';
        countBill();
    }
};

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    const sum = (newPrice + (newPrice * newTip)) / newPeople;

    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);
};


countBtn.addEventListener('click', showBill); */