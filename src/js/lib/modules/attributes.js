import $ from "../core";

$.prototype.attr = function (attribute, attributeValue) {
	for (let i = 0; i < this.length; i++) {

		if (typeof attribute === "object") {
			for (const key in attribute) {
				this[i].setAttribute(key, attribute[key]);
			}
		} else if (attributeValue) {
			this[i].setAttribute(attribute, attributeValue);
		} else {
			return this[i].getAttribute(attribute);
		}
	}

	return this;
};

$.prototype.removeAttr = function (attribute) {
	for (let i = 0; i < this.length; i++) {
		this[i].removeAttribute(attribute);
	}

	return this;
};