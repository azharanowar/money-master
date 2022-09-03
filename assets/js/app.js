document.getElementById("incomeInput").addEventListener('keyup', function() {
    inputFieldValueValidation( "incomeInput", "incomeInputMessage" );
    reuiredFieldsValidation();
});

document.getElementById("foodCostInput").addEventListener('keyup', function() {
    inputFieldValueValidation( "foodCostInput", "foodCostInputMessage" );
    reuiredFieldsValidation();
});

document.getElementById("rentCostInput").addEventListener('keyup', function() {
    inputFieldValueValidation( "rentCostInput", "rentCostInputMessage" );
    reuiredFieldsValidation();
});

document.getElementById("clothesCostInput").addEventListener('keyup', function() {
    inputFieldValueValidation( "clothesCostInput", "clothesCostInputMessage" );
});

document.getElementById("calculateBtn").addEventListener('click', function() {
    const totalExpenses = totalExpensesCalculation();
    const totalBalanceLeft = balanceLeftCalculation( totalExpenses );
});



function totalExpensesCalculation() {
    let totalExpenses = 0;
    const expensesInputFields = document.getElementsByClassName("expenses-input-fields");
    for ( const expensesInputField of expensesInputFields ) {
        if ( expensesInputField.value && !isNaN(expensesInputField.value) ) {
            totalExpenses += parseFloat( expensesInputField.value );
        }
    }

    return document.getElementById("totalExpensesAmount").innerText = totalExpenses;
}

function balanceLeftCalculation( totalExpenses ) {
    const incomeInput = document.getElementById("incomeInput");
    let totalIncomeAmount = parseFloat( incomeInput.value );
    if ( totalIncomeAmount > totalExpenses ) {
        totalIncomeAmount -= totalExpenses;
        return document.getElementById("balenceLeftAmount").innerText = totalIncomeAmount;
    } else {
        document.getElementById("expensesErrorMessage").innerText = "Expenses can't be more than your income!!!";
        document.getElementById("totalExpensesAmount").innerText = "00";
        document.getElementById("balenceLeftAmount").innerText = "00";
        document.getElementById("calculateBtn").disabled = true;
        return;
    }
}

function inputFieldValueValidation( inputFieldId, messageElementId ) {
    const inputField = document.getElementById( inputFieldId );
    const inputFieldValue = inputField.value;

    if ( inputFieldValue === "" && inputField.classList.contains('required') ) {
        document.getElementById( messageElementId ).innerText = "This field can't be empty!!!";
        document.getElementById( inputFieldId ).style.border = "2px solid #DC3545";
        document.getElementById("calculateBtn").disabled = true;
        
    } else if ( isNaN( inputFieldValue ) || inputFieldValue < 0 ) {
        document.getElementById( messageElementId ).innerText = "Input field most be a positive number!!!";
        document.getElementById( inputFieldId ).style.border = "2px solid #DC3545";
        document.getElementById("calculateBtn").disabled = true;
    } else {
        document.getElementById( messageElementId ).innerText = "";
        document.getElementById( inputFieldId ).style.border = "";
        document.getElementById("calculateBtn").disabled = false;
    }

    return;
}


function reuiredFieldsValidation() {
    let requiredConditionNotMaintained = 0;
    const requiredFields = document.getElementsByClassName("required");
    for ( let requiredField of requiredFields ) {
        if ( requiredField.value === "" || isNaN(requiredField.value) ) {
            requiredConditionNotMaintained++;
            break;
        } 
    }

    if ( requiredConditionNotMaintained === 0 ) {
        document.getElementById("calculateBtn").disabled = false;
        // return true; // All required field has valid value
    } else {
        document.getElementById("calculateBtn").disabled = true;
        // return false; // Any of required field has error
    }
}