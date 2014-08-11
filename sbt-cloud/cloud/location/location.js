var Location = Parse.Object.extend("Location");
var Response = {
    InternalServerError: "Internal server error occurred!",
    NotFound: "Not found!",
    LoginProblem: "Some problem with login!",
    SaveSuccess: "Location successfully saved!",
    UpdateSuccess: "Location successfully updated!",
    ParametersEmpty: "Some parameter/s empty!",
    DeleteSuccess: "Location successfully deleted!",
    DuplicatePhone: "Phone number already registered!",
    InvalidCompanyCode: "Invalid company code provided!"
};

//SAVE LOCATION FUNCTION
exports.save = function(params) {
	if(!params || !params.employeeId || !params.latitude || !params.longitude || !params.success || !params.error) {
    	params.error(Response.ParametersEmpty);
	} else {
		var currentUser = Parse.User.current();
		if(!currentUser)
		  params.error(Response.LoginProblem);

		var employee = new Parse.User();
		employee.id = params.employeeId;

		var location = new Location();
		location.set("point", new Parse.GeoPoint({latitude: "19.184133000000000000", longitude: "72.832691000000070000"}));
		location.set("employee", employee);
		location.set("createdBy", currentUser);
		location.save(null, {
			success: function(location) {
				params.success(Response.SaveSuccess);
			},
			error: function(location, error) {
				params.error(Response.InternalServerError);
			}
		});
	}
};