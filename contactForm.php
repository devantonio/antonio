<div class="form-container">
	<div class="messages"></div>
	<p class="error-msg">Please fill out all required fields.</p>
	<p class="emailValidation">Invalid Email</p>
	<section><h1 class="contact-me">contact me</h1><hr class="intro-line"></section>

	<form action="contact.php" method="post">
		<div class="input-container1">
			<div class='dot1'></div>
			<input class="name" type="text" name="name"  placeholder="Your Name">
		</div>
        <div class="input-container2">
            <div class='dot1'></div>
			<input class="email" type="text" name="email"  placeholder="Your Email">
		</div>
		<input class="address" type="text" name="address" placeholder="leave this blank" style="display
			: none">
		<input class="subject" type="text" name="subject"  placeholder="Subject">
		<div class="textarea-container">
			<div class='dot2'></div>
			<textarea class="textarea" type="text" name="message" id="textarea" placeholder="How can I help you?" cols="15" rows="5"></textarea>
		</div><br>
		<button class="btn" type="submit">Send Message</button>
    </form>
	<div class="push"></div>
</div>

   