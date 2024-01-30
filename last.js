let btn =document.getElementById('btnj');
btn.addEventListener('click' ,addFood)
function addFood(a) {
    let currentBtn = a.currentTarget ;
    console.log(currentBtn);

    let currentInput = currentBtn.previousElementSibling ;
    console.log(currentInput.value);

    let currentFoodName = currentInput.value ;
    let newli =document.createElement('li');
    newli.className = `list-group-item d-flex my-2 `;
    newli.innerHTML = `
            <h3 class="flex-grow-1">${currentFoodName}</h3>
            <button class="btn btn-dark text-white mx-2 ">Read</button>
            <button class="btn btn-danger text-white ">Delete</button>
    `
    let parentlist = document.getElementById('parentlist');
    parentlist.appendChild(newli);
}