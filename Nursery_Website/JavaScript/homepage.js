var images = ['../Picture/toogle1.jpg','../Picture/toogle2.jpg'];
/*Two variables are defined: x is set to 0, and imgs is set to the HTML element with an ID of img */
		var x = 0;
		var imgs = document.getElementById('img');
		/*A setInterval function is called, which repeatedly executes the slider function every 1000 milliseconds (1 second). */
		setInterval(slider, 1000);

		function slider()
		{
			if (x < images.length)
			{
				x = x + 1;

			}
			else
			{
				x = 1;
			}
			imgs.innerHTML = "<img src=" + images[x - 1 ] + ">";
		} 


