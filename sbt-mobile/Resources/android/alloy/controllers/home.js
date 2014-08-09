function Controller() {
    function getDate() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        top: Alloy.Globals.windowTop,
        width: Ti.UI.FILL,
        navBarHidden: true,
        backgroundColor: "#fff",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.win.add($.__views.__alloyId0);
    $.__views.longitude = Ti.UI.createLabel({
        id: "longitude",
        height: "50dp",
        width: "70%",
        top: "20dp"
    });
    $.__views.__alloyId0.add($.__views.longitude);
    $.__views.latitude = Ti.UI.createLabel({
        id: "latitude",
        height: "50dp",
        width: "70%",
        top: "20dp"
    });
    $.__views.__alloyId0.add($.__views.latitude);
    $.__views.day = Ti.UI.createLabel({
        id: "day",
        height: "50dp",
        width: "70%",
        top: "20dp"
    });
    $.__views.__alloyId0.add($.__views.day);
    $.__views.month = Ti.UI.createLabel({
        id: "month",
        height: "50dp",
        width: "70%",
        top: "20dp"
    });
    $.__views.__alloyId0.add($.__views.month);
    $.__views.year = Ti.UI.createLabel({
        id: "year",
        height: "50dp",
        width: "70%",
        top: "20dp"
    });
    $.__views.__alloyId0.add($.__views.year);
    $.__views.hours = Ti.UI.createLabel({
        id: "hours",
        height: "50dp",
        width: "70%",
        top: "20dp"
    });
    $.__views.__alloyId0.add($.__views.hours);
    $.__views.minutes = Ti.UI.createLabel({
        id: "minutes",
        height: "50dp",
        width: "70%",
        top: "20dp"
    });
    $.__views.__alloyId0.add($.__views.minutes);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            alert("HFL cannot get your current location");
            return;
        }
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        $.hours.text = "hours  :" + hours;
        $.minutes.text = "minutes  :" + minutes;
        $.month.text = "month  :" + month;
        $.day.text = "day  :" + day;
        $.year.text = "year  :" + year;
        var longitude = e.coords.longitude;
        var latitude = e.coords.latitude;
        e.coords.altitude;
        e.coords.heading;
        e.coords.accuracy;
        e.coords.speed;
        e.coords.timestamp;
        e.coords.altitudeAccuracy;
        Ti.API.info("current longitude" + longitude);
        Ti.API.info("current latitude" + latitude);
        $.longitude.text = "longitude  :" + longitude;
        $.latitude.text = "latitude  :" + latitude;
        getDate();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;