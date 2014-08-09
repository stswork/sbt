Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

//
//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
//  THIS VALUE IS IN METERS
//
Titanium.Geolocation.distanceFilter = 10;

//
// GET CURRENT POSITION - THIS FIRES ONCE
//
Titanium.Geolocation.getCurrentPosition(function(e) {
	if (e.error) {
		alert('HFL cannot get your current location');
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
	var altitude = e.coords.altitude;
	var heading = e.coords.heading;
	var accuracy = e.coords.accuracy;
	var speed = e.coords.speed;
	var timestamp = e.coords.timestamp;
	var altitudeAccuracy = e.coords.altitudeAccuracy;
	//alert("longitude" + longitude + "longitude" + longitude + "Date" + month + "/" + day + "/" + year + "Time" + hours + ":" + minutes);
	Ti.API.info("current longitude" + longitude);
	Ti.API.info("current latitude" + latitude);

	$.longitude.text = "longitude  :" + longitude;
	$.latitude.text = "latitude  :" + latitude;
	getDate();

});

function getDate() {

}

