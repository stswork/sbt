function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createWindow({
        top: Alloy.Globals.windowTop,
        width: "100%",
        navBarHidden: true,
        backgroundImage: "/images/login/loginbg1.png",
        height: "100%",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundColor: "black",
        opacity: "0.5",
        height: "100%",
        width: "100%",
        id: "__alloyId1"
    });
    $.__views.login.add($.__views.__alloyId1);
    $.__views.container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        id: "container"
    });
    $.__views.login.add($.__views.container);
    $.__views.username = Ti.UI.createTextField({
        borderWidth: "0dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontWeight: "normal",
            fontSize: "16dp"
        },
        color: "#FFF",
        width: "70%",
        height: "50dp",
        borderColor: "#FFF",
        value: "User Name",
        id: "username",
        top: "30dp"
    });
    $.__views.container.add($.__views.username);
    $.__views.phone = Ti.UI.createTextField({
        borderWidth: "0dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontWeight: "normal",
            fontSize: "16dp"
        },
        color: "#FFF",
        width: "70%",
        height: "50dp",
        borderColor: "#FFF",
        value: "Phone Number",
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        id: "phone",
        top: "10dp"
    });
    $.__views.container.add($.__views.phone);
    $.__views.companycode = Ti.UI.createTextField({
        borderWidth: "0dp",
        font: {
            fontFamily: "Helvetica Neue",
            fontWeight: "normal",
            fontSize: "16dp"
        },
        color: "#FFF",
        width: "70%",
        height: "50dp",
        borderColor: "#FFF",
        value: "Company Code",
        id: "companycode",
        top: "10dp"
    });
    $.__views.container.add($.__views.companycode);
    $.__views.signin = Ti.UI.createButton({
        font: {
            fontFamily: "Helvetica Neue",
            fontWeight: "normal",
            fontSize: "20dp"
        },
        color: "#FFF",
        backgroundColor: "#00BA8B",
        borderRadius: 3,
        width: "70%",
        height: "50dp",
        title: "Sign In",
        id: "signin",
        top: "30dp"
    });
    $.__views.container.add($.__views.signin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.username.addEventListener("focus", function() {
        "User Name" == this.value && (this.value = "");
    });
    $.username.addEventListener("blur", function() {
        this.value || (this.value = "User Name");
    });
    $.phone.addEventListener("focus", function() {
        "Phone Number" == this.value && (this.value = "");
    });
    $.phone.addEventListener("blur", function() {
        this.value || (this.value = "Phone Number");
    });
    $.companycode.addEventListener("focus", function() {
        "Company Code" == this.value && (this.value = "");
    });
    $.companycode.addEventListener("blur", function() {
        this.value || (this.value = "Company Code");
    });
    $.login.addEventListener("click", function() {
        $.username.blur();
        $.phone.blur();
        $.companycode.blur();
    });
    $.signin.addEventListener("click", function() {
        "" == $.username.value || "" == $.phone.value || "" == $.companycode.value ? alert("All fields mandatory") : Alloy.createController("home").getView().open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;