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
		input2: 1234,
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
		bind: {
			input2: function ($elements, value) {
				$elements.val(value + ".0");
			}
		},
		error: true
	});

	var unbindData = $("#direct-bind").tmplUnbind({
		text1: "",
		input1: "",
		input2: 0, //TODO
		radio1: "",
		checkbox1: false,
		checkbox2: [],
		textarea1: "",
		select1: "",
		alternate1: "",
		nest1: {
			nest11: ""
		}
	}, {
		find: {
			alternate1: "[name=custom12]",
		},
		unbind: {
			input2: function ($element, template) {
				return parseInt($element.val());
			}
		},
		error: true
	})
	$("#unbind").text(JSON.stringify(unbindData));

	$("#bind-all").tmplBind({
		input1: "text1",
		input2: "text2",
	}, {
		bindAll: function ($elements, value, name) {
			$elements.val(name + ":" + value);
		},
		error: true
	});
	var unbindData2 = $("#bind-all").tmplUnbind({
		input1: "",
		input2: ""
	}, {
		unbindAll: function ($element, template, name) {
			return $element.val().replace(name + ":", "");
		},
		error: true
	})
	$("#unbind-all").text(JSON.stringify(unbindData2));

	$("#clone-list").tmplAppend({clone1: "clone11"}).css({color: "red"});
	$("#clone-list").tmplAppend({clone1: "clone12"}).css({color: "blue"});

	$("#direct-list").tmplList([
		{list1: "list11"},
		{list1: "list12"}
	]);
	$("#direct-list").tmplAppend({list1: "list13"});
})(jQuery);
