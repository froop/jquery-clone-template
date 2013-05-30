(function ($) {
	$("select[name=select1]").tmplSelectOpts([
		{value: "s1", text: "select11"},
		{value: "s2", text: "select12"}
	], {
		canEmpty: true
	});
	$("#radios").tmplSelectOpts([
		{value: "r1", text: "radio11"},
		{value: "r2", text: "radio12"}
	], {
		canEmpty: true,
		emptyText: "none"
	});
	$("#checks").tmplSelectOpts([
		{value: "c1", text: "check21"},
		{value: "c2", text: "check22"},
		{value: "c3", text: "check22"}
	]);

	$("#direct-bind").tmplBind({
		text1: "root text",
		text2: "nested text",
		input1: "input text",
		input2: 123,
		checkbox1: true,
		textarea1: "textarea11\ntextarea12",
		select1: "s1",
		radio1: "r1",
		checkbox2: ["c1", "c3"],
		alternate1: "alt1",
		alternate21: "alt21",
		alternate22: "alt22",
		custom21: "http://google.co.jp/",
		custom22: true,
		nest1: {
			nest11: "nested text"
		}
	}, {
		find: {
			alternate1: "#custom11,[name=custom12]",
			alternate21: "#custom21",
			alternate22: "#custom2 > input"
		},
		attr: {
			custom21: "href"
		},
		prop: {
			custom22: "disabled"
		},
		error: true
	});

	console.log($("#direct-bind").tmplUnbind({
		text1: null,
		input1: null,
//TODO
//		radio1: null,
//		checkbox2: null,
		textarea1: null,
		select1: null,
		alternate1: "#custom11",
		nest1: {
			nest11: null
		}
	}, {
		error: true
	}));

	$("#clone-list").tmplAppend({clone1: "clone11"}).css({color: "red"});
	$("#clone-list").tmplAppend({clone1: "clone12"}).css({color: "blue"});

	$("#direct-list").tmplList([
		{list1: "list11"},
		{list1: "list12"}
	]);
	$("#direct-list").tmplAppend({list1: "list13"});
})(jQuery);
