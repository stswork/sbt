var args = arguments[0] || {};



$.username.addEventListener('focus', function(e) {
	if (this.value == 'User Name') {
		this.value = "";
	}
});

$.username.addEventListener('blur', function(e) {
	if (!this.value)
		this.value = 'User Name';
});
$.phone.addEventListener('focus', function(e) {
	if (this.value == 'Phone Number') {
		this.value = "";
	}
});

$.phone.addEventListener('blur', function(e) {
	if (!this.value)
		this.value = 'Phone Number';
});
$.companycode.addEventListener('focus', function(e) {
	if (this.value == 'Company Code') {
		this.value = "";
	}
});

$.companycode.addEventListener('blur', function(e) {
	if (!this.value)
		this.value = 'Company Code';
});
$.login.addEventListener('click', function(e) {
	$.username.blur();
	$.phone.blur();
	$.companycode.blur();

});

$.signin.addEventListener('click', function(e) {
	if ($.username.value == "" || $.phone.value == "" || $.companycode.value == "") {

		alert("All fields mandatory");

	}else{
		 Alloy.createController('home').getView().open();
	}

});





