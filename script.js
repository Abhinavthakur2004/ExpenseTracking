const expenseForm = document.getElementById('expense-form');

const expenseList = document.getElementById('expense-table');

expenseForm.addEventListener('submit',function(event){
    event.preventDefault();

    const description = document.getElementById('description').value;

    const catagory = document.getElementById('catagory').value;

    const amount = document.getElementById('amount').value;

    if(document && catagory && !isNaN(amount)){
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${description}</td>
    <td>${catagory}</td>
    <td>${amount}</td>`;
    expenseList.appendChild(newRow);

    document.getElementById('description').value='';
    document.getElementById('catagory').value='';
    document.getElementById('amount').value='';

    }else{
        alert('Please fill out all fields with valid data');
    }
})



    

