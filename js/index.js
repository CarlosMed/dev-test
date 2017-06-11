var client = contentful.createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: 'gqndkdwyc5hc',
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: '4c0982aa87f0841b3557f3c07f8bcd4b75a242992dd4991ee3d1ce94a2d399f7'
});

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

var Init = function (entry) {

	var info = {
		name: entry.fields.data.name,
		sub_jump: entry.fields.data.sub_jump,
		formValid: entry.fields.data.formValid,
		formInvalid: entry.fields.data.formInvalid,
		body_desc1: entry.fields.data.body_desc1,
		body_desc2: entry.fields.data.body_desc2,
		footer_desc: entry.fields.data.footer_desc,
	}

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
}

client.getEntry('4LML0PW0FqioGqEYgOO6AQ')
	.then(Init);