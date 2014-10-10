## File Extension Validator

This is a js module that will validate file types that you feed it. I'm creating it to validate image file types for a node app, but you should be able to use it for whatever.


### How it works
You feed the contructor a string of the filename and an array of file extensions you wish to validate on. Right now I'm using indexOf so it won't support < IE9.

### To come
 - Working on a demo page
 - Additional methods to validate common file types


### How to use

```javascript
	<script src='js/fev.js'></script>

	<script>
		(function(){
			var myFileCheck = new fileExtensionValidator({
			  file: 'unicorn-bike.bmp',
			  fileTypes: ['jpg','jpeg','png','gif','bmp']
			});

			var check = myFileCheck.validateExt();
			console.log(check);
		})();
	</script>
```