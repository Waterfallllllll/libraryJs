import "./lib/lib";

$("#first").on("click", () => {
	$("div").eq(1).fadeToggle(800);
});

$("[data-count='second']").on("click", () => {
	$("div").eq(2).fadeToggle(800);
});

$("button").eq(2).on("click", () => {
	$(".w-500").fadeToggle(800);
});

$("#trigger").click(() => $("#trigger").createModal({
	text: {
		title: "Modal title",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo, autem a earum quae tempore eum, veniam possimus fugit dolorum repellat laboriosam. Dolorum eos illo, numquam enim ipsa suscipit maxime!"
	},
	btns: {
		count: 2,
		settings: [
			[
				"Close",
				["btn-danger", "mr-10"],
				true
			],
			[
				"Save changes",
				["btn-success"],
				false,
				() => {
					alert("Данные сохранены");
				}
			]
		]
	}
}));

        
