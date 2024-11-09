import $ from "../core";

$.prototype.attr = function (attribute, attributeValue) {
	for (let i = 0; i < this.length; i++) {

		if (attributeValue) {
			this[i].setAttribute(attribute, attributeValue);
		} else {
			return this[i].getAttribute(attribute);
		}
	}

};