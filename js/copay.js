function submit(){
    var card_number = document.querySelector("#card_number")
    var card_name = document.querySelector("#card_name")
    var expiration_date = document.querySelector("#expiration_date")
    var security_code = document.querySelector("#security_code")
    var country = document.querySelector("#country")
    var first_name = document.querySelector("#first_name")
    var last_name = document.querySelector("#last_name")
    var address = document.querySelector("#address")
    var city = document.querySelector("#city")
    var phone = document.querySelector("#phone")
    
    if (!card_number.value) {
        alert('card number can not be empty!');
        return;
    }
    
    if (!card_name.value) {
        alert('card name can not be empty!');
        return;
    }
    
    if (!expiration_date.value) {
        alert('expiration date can not be empty!');
        return;
    }
    
    if (!security_code.value) {
        alert('security code can not be empty!');
        return;
    }
    
    if (!country.value) {
        alert('country can not be empty!');
        return;
    }
    
    if (!first_name.value) {
        alert('First Name can not be empty!');
        return;
    }
    
    if (!last_name.value) {
        alert('Last Name can not be empty!');
        return;
    }
    
    if (!address.value) {
        alert('address can not be empty!');
        return;
    }
    
    if (!city.value) {
        alert('city can not be empty!');
        return;
    }
    
    if (!phone.value) {
        alert('phone can not be empty!');
        return;
    }
    location.href = 'checkoutpay.html'
}