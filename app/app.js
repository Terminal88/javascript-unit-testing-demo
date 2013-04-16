function App() {
    var self = this;
    self.oneString = 'my example default string';
    self.twoFunction = function(){
    	// empty function
    }
    self.threeObject = {"example": "object"};
    // display in progress
	self.updateData = function(){	
		// Run the request.
		var response = $.ajax({
		  dataType: "json",
		  url: "api.php",
		  data: {"example":"data"}
		});

		response.done(function(){
			var responseData = jQuery.parseJSON(response.responseText);
		});
	};
}
