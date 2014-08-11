

/*-------------------------------USER-------------------------------*/

//SAVE AND UPDATE USER FUNCTION
Parse.Cloud.define("saveUser", function(req, res) {
	if(!req.params.id || req.params.id == 0) {
		user.save({userType: req.params.userType, phone: req.params.phone, name: req.params.name, countryCode: req.params.countryCode,success: function(message) {res.success(message);},error: function(message) {res.error(message);}});
	} else {
		user.update({id: req.params.id, userType: req.params.userType, phone: req.params.phone, name: req.params.name, countryCode: req.params.countryCode,success: function(message) {res.success(message);},error: function(message) {res.error(message);}});
	}
});

//BEFORE SAVE FUNCTION FOR PARSE USER
Parse.Cloud.beforeSave(Parse.User, function(req, res) {
	Parse.Cloud.useMasterKey();
	var currentUser = req.object.get("createdBy");
	var userType = req.object.get('userType');

	//DEFINING ACL FOR THE USER TYPE ROLE
	var _userACL = new Parse.ACL();
	_userACL.setReadAccess(currentUser, true);
	_userACL.setWriteAccess(currentUser, true);
	_userACL.setRoleWriteAccess("ADMIN", true);
	_userACL.setRoleReadAccess("ADMIN", true);

	var userTypeRole = new Parse.Role(userType.toUpperCase(), _userACL);
	userTypeRole.save();

	//DEFINING ACL FOR ADMIN ROLE
	var _administratorACL = new Parse.ACL();
	_administratorACL.setRoleWriteAccess("ADMIN", true);
	_administratorACL.setRoleReadAccess("ADMIN", true);

	//SAVING THE ADMIN ROLE
	var administratorRole = new Parse.Role("ADMIN", _administratorACL);
	administratorRole.save();

	var tags = "#" + req.object.get("name") + "#" + req.object.get("phone");
	req.object.set("tags", tags);

	//ASSIGINING ACL TO USER
	req.object.setACL(_userACL);
	res.success();
});

//AFTER SAVE FUNCTION FOR PARSE USER
Parse.Cloud.afterSave(Parse.User, function(req, res) {
	//USING MASTER KEY AS UPDATING USER OBJECT
	Parse.Cloud.useMasterKey();

	var userType = req.object.get('userType');
	//QUERY TO FIND ROLE OF USER TYPE
	var roleQuery= new Parse.Query(Parse.Role);
	roleQuery.equalTo("name", userType.toUpperCase());
	var role = roleQuery.first({
		success: function(role) {
			//ADDING USER TO THE ROLE
			role.relation("users").add(req.object);
			role.save();
		}
	});
});

/*-------------------------------LOCATION-------------------------------*/
//SAVE LOCATION FUNCTION
Parse.Cloud.define("saveLocation", function(req, res) {
	if(!req.params.id || req.params.id == 0) {
		user.save({employeeId: req.params.employeeId, latitude: req.params.latitude, longitude: req.params.longitude,success: function(message) {res.success(message);},error: function(message) {res.error(message);}});
	}
});

//AFTER SAVE FUNCTION FOR PARSE USER
Parse.Cloud.afterSave("Location", function(req, res) {
	
	var currentUser = req.object.get("createdBy");
	var employee = req.object.get("employee");

	//DEFINING ACL FOR THE USER TYPE ROLE
	var _locationACL = new Parse.ACL();
	_locationACL.setReadAccess(currentUser, true);
	_locationACL.setWriteAccess(currentUser, true);
	_locationACL.setReadAccess(employee, true);
	_locationACL.setRoleWriteAccess("ADMIN", true);
	_locationACL.setRoleReadAccess("ADMIN", true);

	//ASSIGNING ACL TO LOCATION
	req.object.setACL(_locationACL);
	res.success();
});