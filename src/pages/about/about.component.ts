import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: ` 
  
  <div class="image-left">
	<img src="/images/about.png" alt="Text with image example">
	<div>
<h2> Text with Left Image </h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu, massa scelerisque ac, cursus et, sollicitudin a, orci.</p>
		<footer>(A dummy text)</footer>
	</div>
</div>`,
  styles: `
  html
{
	padding: 0 1em;
	font-family: Calibri, sans-serif;
}

.cd__main{
    max-width: 720px !important;
}

img
{
	       max-width: 550px;
               height: auto;
}

.image-left, .image-right
{
	margin: 1em 0;
}

@media (min-width: 20em)
{
	.image-left, .image-right
	{
		display: flex;
		align-items: center;
	}

	.image-left img
	{

		margin-right: 1em;
		float: left; /* fallback */
	}

	.image-right img
	{
		order: 1;
		margin-left: 1em;
		float: right; /* fallback */
	}
	
	/* clearfix for fallback */
	.image-left::after,
	.image-right::after
	{
		content: "";
  	display: block;
		clear: both;
	}
}

@media (min-width: 30em)
{
	.image-left img, .image-right img
	{
		flex-shrink: 0;
	}
}
  `,
})
export class AboutComponent {}
