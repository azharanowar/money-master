document.getElementById("incomeInput").addEventListener('blur', function() {
    inputFieldValueValidation( "incomeInput", "incomeInputMessage" );
    reuiredFieldsValidation();
    
});

document.getElementById("foodCostInput").addEventListener('blur', function() {
    inputFieldValueValidation( "foodCostInput", "foodCostInputMessage" );
    reuiredFieldsValidation();
});

document.getElementById("rentCostInput").addEventListener('blur', function() {
    inputFieldValueValidation( "rentCostInput", "rentCostInputMessage" );
    reuiredFieldsValidation();
});





function inputFieldValueValidation( inputFieldId, messageElementId ) {
    const inputField = document.getElementById( inputFieldId );
    const inputFieldValue = inputField.value;

    if ( inputFieldValue === "" ) {
        document.getElementById( messageElementId ).innerText = "This field can't be empty!!!";
        document.getElementById( inputFieldId ).style.border = "2px solid #DC3545";
    } else if ( isNaN( inputFieldValue ) || inputFieldValue < 0 ) {
        document.getElementById( messageElementId ).innerText = "Input field most be a positive number!!!";
        document.getElementById( inputFieldId ).style.border = "2px solid #DC3545";
    } else {
        document.getElementById( messageElementId ).innerText = "";
        document.getElementById( inputFieldId ).style.border = "";
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
        return true; // All required field has valid value
    } else {
        document.getElementById("calculateBtn").disabled = true;
        return false; // Any of required field has error
    }
}