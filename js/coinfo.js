function submit(){
    var email = document.querySelector("#email")
    var checkbox = document.querySelector("#checkbox")
    var first_name = document.querySelector("#first_name")
    var last_name = document.querySelector("#last_name")
    var address = document.querySelector("#address")
    var city = document.querySelector("#city")
    var country = document.querySelector("#country")
    var state = document.querySelector("#state")
    var zip_code = document.querySelector("#zip_code")
    var phone = document.querySelector("#phone")
    var reg=/^([a-z0-9_\.-]+)@([\da-z\.]+)\.([a-z\.]{2,6})$/g;
    
    if (!email.value) {
        alert('email can not be empty!');
        return;
    }
    if(!reg.test(email.value)){
         alert('The mailbox format is incorrect');
         return;
    }
    if (!checkbox.checked) {
        alert('checkbox need to be selected!');
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
    if (!country.value) {
        alert('country can not be empty!');
        return;
    }
    if (!state.value) {
        alert('state can not be empty!');
        return;
    }
    
    if (!zip_code.value) {
        alert('zip code can not be empty!');
        return;
    }
    if (!phone.value) {
        alert('phone can not be empty!');
        return;
    }
    
    location.href = 'checkoutinfo.html'
}
