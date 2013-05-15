jquery-dom-tmpl
=====================

HTML テンプレートを DOM で用意して DOM のまま操作する jQuery プラグイン

存在理由はこんな感じ ->
[JavaScript テンプレートエンジン vs DOM 直接操作](https://gist.github.com/froop/5492623)

tmplBind
--------------------
DOM 上のテンプレートに値を設定。
[Transparency](https://github.com/leonidas/transparency) と違い、
`input:radio` の同一 name 属性グループ単位の checked 設定に対応。

	<div id="direct-bind">
		<span id="text1"></span>
		<div><span id="text2"></span></div>
		<input name="input1">
		<input name="input2">
		<input name="checkbox1" type="checkbox" value="1">
		<select name="select1">
			<option value=""></option>
			<option value="s1">select1</option>
			<option value="s2">select2</option>
		</select>
		<span id="radios">
			<span><input name="radio1" type="radio" value="r1"><label>radio1</label></span>
			<span><input name="radio1" type="radio" value="r2"><label>radio2</label></span>
		</span>
	</div>

	$("#direct-bind").tmplBind({
		text1: "root text",
		text2: "nested text",
		input1: "input text",
		input2: 123,
		checkbox1: true,
		select1: "o1",
		radio1: "r1"
	});

tmplAppend
--------------------
指定要素内のテンプレートを `clone()` して子要素を追加する。戻り値として追加した要素を返す。
値設定は内部で `tmplBind()` を使用するのでそちらを参照。

	<ol id="clone-list">
		<li class="clone1"></li>
	</ol>

	$("#clone-list").tmplAppend({clone1: "clone11"}).css({color: "red"});
	$("#clone-list").tmplAppend({clone1: "clone12"}).css({color: "blue"});

tmplSelectOpts
--------------------
内部値と表示文字列を組み合わせた選択肢項目を配列から動的に作成。
引数はプロパティに value, text を持つオブジェクトの配列。

下記のテンプレートに対応する。

* select タグ内の option タグ
* input タグ (radio, checkbox を想定) 及び対応する label タグ

	<select name="select1">
		<option></option>
	</select>
	<span id="radios">
		<span><input name="radio1" type="radio"><label></label></span>
	</span>

	$("select[name=select1]").tmplSelectOpts([
		{value: "", text: ""},
		{value: "o1", text: "select11"},
		{value: "o2", text: "select12"}
	]);
	$("#radios").tmplSelectOpts([
		{value: "r1", text: "radio11"},
		{value: "r2", text: "radio12"}
	]);

tmplList
--------------------
一覧を一括設定。値設定は内部で `tmplBind()` を使用するのでそちらを参照。

	<ol id="direct-list">
		<li class="list1"></li>
	</ol>

	$("#direct-list").tmplList([
		{list1: "list11"},
		{list1: "list12"}
	]);
