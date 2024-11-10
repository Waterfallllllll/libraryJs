import $ from "../core";

$.prototype.on = function (event, callback) {
	if (!event || !callback) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		this[i].addEventListener(event, callback);
	}

	return this;
};

$.prototype.off = function (event, callback) {
	if (!event || !callback) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		this[i].removeEventListener(event, callback);
	}

	return this;
};

$.prototype.click = function (callback) {

	for (let i = 0; i < this.length; i++) {
		if (callback) {
			this[i].addEventListener("click", callback);
		} else {
			this[i].click();
		}
	}

	return this;
};