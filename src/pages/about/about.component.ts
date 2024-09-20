import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
// <<<<<<< branch
  template: `
    <h1 class="header text-center stacked-text mt-5">
      <span class="inline-block text-5xl bg-clip-text text-transparent ft">
        About Us
      </span>
    </h1>
    <div class="content-container">
      <div class="image-left">
        <img src="/images/about.png" alt="About BookHeaven">
      </div>
      <div class="text-content">
        <p class="text-lg mb-5 mt-2">
          Welcome to BookHeaven, your premier destination for books in English, Hindi, and Gujarati. Whether you're searching for your next literary escape, a cozy spot to browse, or a community event to attend, BookHeaven is here to make every visit a memorable experience.
          <br/><br/>
          Join us in celebrating the magic of books and the joy of reading! We're passionate about spreading the joy of reading and making literature accessible to everyone. Our mission is to provide a vast collection of books that cater to diverse tastes and interests.
          <br/><br/>
          From classics to contemporary bestsellers, our shelves are stocked with an impressive selection of fiction, non-fiction, biographies, self-help, and children's books.
        </p>
        <a href="library" class="btn">Explore Our Collection</a>
      </div>
    </div>
  `,
  styles: `
    html {
      padding: 0 1em;
      font-family: Calibri, sans-serif;
    }

    .header {
		padding: 1em;
    }

    .image-left {
      margin: 1em 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-left img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .content-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2em;
    }

    .text-content {
      max-width: 720px;
      margin: 0 auto;
    }

    .text-lg {
      color: #470829;
      padding: 0 1em;
      line-height: 1.6;
    }

    .btn {
      display: inline-block;
      background-color: #470829;
      color: white;
      padding: 0.5em 1.5em;
      border-radius: 4px;
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .btn:hover {
      background-color: #A17062;
      transform: scale(1.05);
    }

    .ft {
      font-family: Cursive;
      font-size: 45px;
    }

    .stacked-text {
      position: relative;
      margin-bottom: 1em;
    }

    .stacked-text::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      width: 100%;
      font-size: 50px;
      font-weight: bold;
      background: linear-gradient(to bottom, #cc2b5e, #753a88);
      background-clip: text;
      color: transparent;
      transform: translateY(-10px);
    }

    .stacked-text span:first-child {
      color: #cc2b5e;
    }

    .stacked-text span:last-child {
      color: #470829;
    }

    @media (min-width: 600px) {
      .content-container {
        flex-direction: row;
        align-items: flex-start;
        text-align: left;
      }

      .image-left {
        margin-right: 2em;
        flex: 1;
      }

      .text-content {
        flex: 2;
      }
    }
=======
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
