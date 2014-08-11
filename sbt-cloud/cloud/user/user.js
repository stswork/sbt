var Response = {
    InternalServerError: "Internal server error occurred!",
    NotFound: "Not found!",
    LoginProblem: "Some problem with login!",
    SaveSuccess: "User successfully saved!",
    UpdateSuccess: "User successfully updated!",
    ParametersEmpty: "Some parameter/s empty!",
    DeleteSuccess: "User successfully deleted!",
    DuplicatePhone: "Phone number already registered!",
    InvalidCompanyCode: "Invalid company code provided!"
};

//SAVE USER FUNCTION
exports.save = function(params) {
	if(!params || !params.userType || !params.phone || !params.name || !params.companyCode || !params.success || !params.error) {
    	params.error(Response.ParametersEmpty);
	} else {
		var currentUser = Parse.User.current();
		if(!currentUser)
		  params.error(Response.LoginProblem);

		var userQuery = new Parse.Query(Parse.User);
		userQuery.equalTo("phone", params.phone);
		userQuery.first({
			success: function(user) {
				if(user) {
					params.error(Response.DuplicatePhone);
				} else {
					var Company = Parse.Object.extend("Company");
					var companyQuery = new Parse.Query(Company);
					companyQuery.equalTo("companyCode", params.companyCode);
					companyCode.first({
						success: function(company) {
							if(company) {
								var user = new Parse.User();
								user.setUsername(params.phone);
								user.setPassword("PASSWORD");
								user.set("phone", params.phone);
								user.set("name", params.name);
								user.set("userType", params.userType);
								user.set("company", company);
								user.set("createdBy", currentUser);
								user.signUp(null, {
									success: function(user) {
										params.success(Response.SaveSuccess);
									},
									error: function(user, error) {
										params.error(Response.InternalServerError);
									}
								});
							} else {
								params.error(Response.InvalidCompanyCode);
							}
						},
						error: function(company, error) {
							params.error(Response.InternalServerError);
						}
					});
				}
			},
			error: function(user, error) {
				params.error(Response.InternalServerError);
			}
		});
	}	
};

//UPDATE USER FUNCTION
exports.update = function(params) {
	if(!params || !params.id || !params.userType || !params.phone || !params.name || !params.success || !params.error) {
    	params.error(Response.ParametersEmpty);
	} else {
		//USING MASTER KEY AS UPDATING USER OBJECT
		Parse.Cloud.useMasterKey();

		//CURRENT USER
		var currentUser = Parse.User.current();
		if(!currentUser)
			params.error(Response.LoginProblem);

		//FETCHING USER TO UPDATE
        var userQuery = new Parse.Query(Parse.User);
        userQuery.equalTo("objectId", params.id);
        userQuery.include("organization");
        userQuery.first({
			success: function(user) {
				if(user) {
					user.setUsername(params.phone);
					user.set("phone", params.phone);
					user.set("name", params.name);
					user.set("updatedBy", currentUser);
					user.save(null, {
						success: function(user) {
							params.success(Response.UpdateSuccess);
						},
						error: function(user, error) {
							params.error(Response.InternalServerError);
						}
					});
				} else {
					params.error(Response.InternalServerError);
				}
			},
			error: function(user, error) {
				params.error(Response.InternalServerError);
			}
        });
	}
};	