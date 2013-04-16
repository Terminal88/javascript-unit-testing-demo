// this.App.test.js
describe('app.js', function () {
	// Test updateData
	before(function(){
		// Create a fake server
		this.server = sinon.fakeServer.create();
		it('App should exist', function(){
			assert.isFunction(App, 'App Exists');
		});
		// Initialize your app.
		this.App = new App();
	});
	after(function() {
		// Restores XHR to default behavior.
		this.server.restore();
	});
	describe('init', function () {
		it('oneString is a function',function(){
			assert.isString(this.App.oneString);
		});
		it('twoFunction is a function',function(){
			assert.isFunction(this.App.twoFunction);
		});
		it('threeObject is an object',function(){
			assert.isObject(this.App.threeObject);
		});
	});
	describe('Methods', function () {
		// update data async
		describe('updateData', function () {
			it('should exist', function(){
				assert.isFunction(this.App.updateData);
			});
			var json = JSON.stringify({
				"oneString": "updated by server"
			});
			it('returns xhr object', function(){
				this.server.respondWith(
					[
						200,
						{
							'Content-Type': 'application/json'
						},
						json
					]
				);
				// call the function
				this.App.updateData();
				this.server.respond();
			});
			//console.log('data: ', this.App.data);
			describe('oneString should be set', function () {
			  it('oneString parity not blank', function(){
			  	assert.equal(this.App.oneString, 'updated by server');
			  });
			  
			});
		}); // end describe('updateData', function () {})
	});
});
