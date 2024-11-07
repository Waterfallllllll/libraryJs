import $ from "../core";

$.prototype.addClass = function(...classes) {
	for (let i = 0; i < this.length; i++) {
		this[i].classList.add(...classes);
	}
}