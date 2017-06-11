var info = {
	name: 'Carlos Medina',
	formValid: false,
	formInvalid: false,
	sub_jump: "#signup__input",
	body_desc1: "With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed to websites in search for information. Imagine a website without any text and completely overloaded with pictures. That would be too much to bear for us.",
	body_desc2: 'Many businesses, manufacturers and wholesalers use blogs to promote their products, services. Social interest groups also use blogs for airing their opinion on important issues. Writing catchy blogs is an art as much as developing a website. So how doyou Make Your Blog Popular?',
	footer_desc: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often have low picture quality and resolution. Modern advances with the LCD computer monitors have changed a lot of that. The screen itself is flat, and very thin, needing very little desktop space, therefore giving you more room while working at your PC. A big advantage in my opinion is that LCD monitors don’t put off all the heat that the old monitors do.'
};

var methods = {
	getEmail: function (e) {;
		var input = document.querySelector('#email');
		var val = document.querySelector('#email').value;
		var that = this;
		e.view.methods.validateEmail(val, this);
	},
	validateEmail: function (email, that) {
		var regex = /.+@.+/;

		if (regex.test(email)) {
			that.formInvalid = false;
			that.formValid = true;
		} else {
			that.formInvalid = true;
		}
	}
};

var header = new Vue({
	el: "#header",
	data: info,
});

var body = new Vue({
	el: "#body",
	data: info
});

var signup = new Vue({
	el: '#sign-up',
	data: info,
	methods: methods
})

var footer = new Vue({
	el: "#footer",
	data: info
});