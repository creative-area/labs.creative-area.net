**jQuery form autofill 0.1**: simply autofill an empty form with data. 

## Download

## How to use it

you have a form

	<form id="f">
		name <input type="text" name="name">
		email <input type="text" name="email">
		love jQuery
		<input type="radio" name="lovejquery" value="yes"> yes
		<input type="radio" name="lovejquery" value="no"> no
	</form>

and data

	var data = {
		"name": "John Doe",
		"email": "johndoe@mail.com",
		"lovejquery": "yes"
	}

autofill the form with data ? just do

	$("#f").autofill( data );

## Try it !

<form id="f_try" class="form-stacked">
<div class="clearfix">
	<label for="name">name</label>
	<div class="input"><input type="text" name="name"></div>
</div>
<div class="clearfix">
	<label for="email">email</label>
	<div class="input"><input type="text" name="email"></div>
</div>
<div class="clearfix">
	<label for="lovejquery_try">love jQuery</label>
	<div class="input">
		<input type="radio" name="lovejquery" value="yes"> yes
		&nbsp;
		<input type="radio" name="lovejquery" value="no"> no
	</div>
</div>
<input type="button" class="btn info clickaction" value="autofill the form with data">
<input class="btn" type="reset" value="reset" />
</form>


## Optional parameters

you can pass an optional object as second argument. available options with default values are

```javascript
var options = {
	findbyname: true,
	restrict: true
}
// autofill with options :
$("#f").autofill( data, options );
```

<span class="label label-success">findbyname</span> <span class="label label-important">true</span>: if true, find elements by name attribute. if false, find elements by id.

<span class="label label-success">restrict</span> <span class="label label-important">true</span>: if true, restrict the fields search in the node childs. if false, search in all the document.


## Examples

<span class="label label-success">findbyname</span> <span class="label label-important">false</span>

	<form id="f_findbyname">
		name <input type="text" name="name" id="name_id">
		email <input type="text" name="email" id="email_id">
		love jQuery
		<input type="radio" name="lovejquery" id="lovejquery_yes" value="yes"> yes
		<input type="radio" name="lovejquery" id="lovejquery_no" value="no"> no
		<input type="button" class="btn" value="autofill by id">
	</form>

	<script>
	var data = {
		"name_id": "John Doe",
		"email_id": "johndoe@mail.com",
		// always use "name" to find radio or checkbox multiple
		"lovejquery": "yes"
	}
	$("#f_findbyname .btn").bind("click", function() {
		$("#f_findbyname").autofill(data, {
			findbyname: false
		});
	});
	</script>

<form class="form-stacked" id="f_findbyname">
	<div class="clearfix">
		<label for="name">name</label>
		<div class="input"><input type="text" id="name_id" name="name"></div>
	</div>
	<div class="clearfix">
		<label for="email">email</label>
		<div class="input"><input type="text" id="email_id" name="email"></div>
	</div>
	<div class="clearfix">
		<label for="lovejquery_try">love jQuery</label>
		<div class="input">
			<input type="radio" value="yes" name="lovejquery"> yes
			&nbsp;
			<input type="radio" value="no" name="lovejquery"> no
		</div>
	</div>
	<input type="button" value="autofill by id" class="btn info clickaction">
	<input type="reset" value="reset" class="btn">
</form>


<span class="label label-success">restrict</span> <span class="label label-important">false</span> - <span class="label label-success">findbyname</span> <span class="label label-important">false</span>

	<form id="f_restrict">
		name <input type="text" name="name" id="name_not_restricted">
		email <input type="text" name="email" id="email_not_restricted">
		<input type="button" class="btn" value="autofill by id">
	</form>

	<script>
	var data = {
		"name_not_restricted": "John Doe",
		"email_not_restricted": "johndoe@mail.com"
	}
	$("#f_restrict .btn").bind("click", function() {
		$("body").autofill(data, {
			findbyname: false,
			restrict: false
		});
	});
	</script>

<form class="form-stacked" id="f_restrict">
	<div class="clearfix">
		<label for="name">name</label>
		<div class="input"><input type="text" id="name_not_restricted" name="name"></div>
	</div>
	<div class="clearfix">
		<label for="email">email</label>
		<div class="input"><input type="text" id="email_not_restricted" name="email"></div>
	</div>
	<input type="button" value="autofill not restricted" class="btn info clickaction">
	<input type="reset" value="reset" class="btn">
</form>


<span class="label label-success">restrict</span> <span class="label label-important">false</span> - <span class="label label-success">findbyname</span> <span class="label label-important">true</span>

	<form>
		<legend>First form</legend>
		name <input type="text" name="name_multiple">
		email <input type="text" name="email_multiple">
	</form>
	<form>
		<legend>Second form</legend>
		name <input type="text" name="name_multiple">
		email <input type="text" name="email_multiple">
		<div id="f_restrict_only">
			<input type="button" class="clickaction" value="autofill">
		</div>
	</form>

	<script>
	var data = {
		"name_multiple": "John Doe",
		"email_multiple": "johndoe@mail.com"
	}
	$("#f_restrict_only .clickaction").bind("click", function() {
		$("body").autofill(data, {
			restrict: false
		});
	});
	</script>

<form class="form-stacked">
	<legend>First form</legend>
	<div class="clearfix">
		<label for="name">name</label>
		<div class="input"><input type="text" name="name_multiple"></div>
	</div>
	<div class="clearfix">
		<label for="email">email</label>
		<div class="input"><input type="text" name="email_multiple"></div>
	</div>
	<input type="reset" value="reset" class="btn">
</form>
<form class="form-stacked">
	<legend>Second form</legend>
	<div class="clearfix">
		<label for="name">name</label>
		<div class="input"><input type="text" name="name_multiple"></div>
	</div>
	<div class="clearfix">
		<label for="email">email</label>
		<div class="input"><input type="text" name="email_multiple"></div>
	</div>
	<div id="f_restrict_only">
		<input type="button" value="autofill" class="btn info clickaction">
		<input type="reset" value="reset" class="btn">
	</div>
</form>


### With all html elements - my "unit test" :-)

```javascript
var data = {
	"input": "input unit test",
	"select": "3",
	"multiselect": ["1", "4"],
	"textarea": "textarea unit test",
	"checkbox_checked": "1",
	"checkbox_not_checked": "0",
	"checkbox_multiple": ["1", "3"],
	"radio": "off",
	"field_not_exist": "noop"
};
$("#f_unit_test .clickaction_by_name").bind("click", function() {
	$("#f_unit_test").autofill(data);
});
$("#f_unit_test .clickaction_by_id").bind("click", function() {
	$("#f_unit_test").autofill(data, {
		findbyname: false,
		restrict: false
	});
});
```

<form enctype="multipart/form-data" method="post" action="" class="form-stacked" id="f_unit_test">
	<fieldset>
		<div class="clearfix">
			<label for="input">input text</label>
			<div class="input">
				<input type="text" id="input" name="input" class="span4">
			</div>
		</div><!-- /clearfix -->
		
		<div class="clearfix">
			<label for="notfill">not filled</label>
			<div class="input">
				<input type="text" id="notfill" name="notfill" class="span4">
			</div>
		</div><!-- /clearfix -->
			
		<div class="clearfix">
			<label for="select">select</label>
			<div class="input">
				<select class="span4" id="select" name="select">
				<option value="1">value = 1</option>
				<option value="2">value = 2</option>
				<option value="3">value = 3</option>
				<option value="4">value = 4</option>
				<option value="5">value = 5</option>
				</select>
			</div>
		</div><!-- /clearfix -->
			
		<div class="clearfix">
			<label for="multiselect">multiple select</label>
			<div class="input">
				<select size="4" multiple="multiple" class="span4" id="multiselect" name="multiselect[]">
				<option value="1">value = 1</option>
				<option value="2">value = 2</option>
				<option value="3">value = 3</option>
				<option value="4">value = 4</option>
				<option value="5">value = 5</option>
				</select>
			</div>
		</div><!-- /clearfix -->
		
		<div class="clearfix">
			<label for="textarea">textarea</label>
			<div class="input">
				<textarea rows="3" id="textarea" name="textarea" class="span4"></textarea>
			</div>
		</div><!-- /clearfix -->
		
		<div class="clearfix">
			<label for="checkbox_checked">checkbox checked</label>
			<div class="input">
				<ul class="inputs-list">
					<li>
						<label>
							<input type="checkbox" value="1" id="checkbox_checked" name="checkbox_checked">
							<span>value = 1</span>
						</label>
					</li>
				</ul>
			</div>
		</div><!-- /clearfix -->
		
		<div class="clearfix">
			<label for="checkbox_not_checked">and not checked</label>
			<div class="input">
				<ul class="inputs-list">
					<li>
						<label>
							<input type="checkbox" value="1" id="checkbox_not_checked" name="checkbox_not_checked">
							<span>value = 1</span>
						</label>
					</li>
				</ul>
			</div>
		</div><!-- /clearfix -->
		
		<div class="clearfix">
			<label for="checkbox_multiple">checkbox multiple</label>
			<div class="input">
				<ul class="inputs-list inputs-list-hack">
					<li>
						<label>
							<input type="checkbox" value="1" name="checkbox_multiple[]">
							<span>1</span>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" value="2" name="checkbox_multiple[]">
							<span>2</span>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" value="3" name="checkbox_multiple[]">
							<span>3</span>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" value="4" name="checkbox_multiple[]">
							<span>4</span>
						</label>
					</li>
				</ul>
			</div>
		</div><!-- /clearfix -->
		
		<div class="clearfix">
			<label for="radio">radio</label>
			<div class="input">
				<ul class="inputs-list inputs-list-hack">
					<li>
						<label>
							<input type="radio" value="on" name="radio">
							<span>on</span>
						</label>
					</li>
					<li>
						<label>
							<input type="radio" value="off" name="radio">
							<span>off</span>
						</label>
					</li>
					<li>
						<label>
							<input type="radio" value="other" name="radio">
							<span>other</span>
						</label>
					</li>
				</ul>
			</div>
		</div><!-- /clearfix -->
		
		<input type="button" value="autofill by name" class="btn info clickaction_name">
		<input type="button" value="autofill by id" class="btn info clickaction_id">
		<input type="reset" value="reset" class="btn">
		
	</fieldset>
	
</form>



<script type="text/javascript" src="js/jquery.formautofill.js"></script>
<script type="text/javascript">
// bind demo events
// try it!
$(document).ready(function() {
	$('#f_try .clickaction').on( 'click', function() {
		$('#f_try').autofill({
			"name": "John Doe",
			"email": "johndoe@mail.com",
			"lovejquery": "yes"
		});
	});
	// example findbyname = false
	$('#f_findbyname .clickaction').on( 'click', function() {
		$('#f_findbyname').autofill({
			"name_id": "John Doe",
			"email_id": "johndoe@mail.com",
			"lovejquery": "yes"
		}, {
			findbyname: false
		});
	});
	// example restrict = false
	$('#f_restrict .clickaction').on( 'click', function() {
		$('body').autofill({
			"name_not_restricted": "John Doe",
			"email_not_restricted": "johndoe@mail.com"
		}, {
			findbyname: false,
			restrict: false
		});
	});
	// example restrict only
	$('#f_restrict_only .clickaction').on( 'click', function() {
		$('body').autofill({
			"name_multiple": "John Doe",
			"email_multiple": "johndoe@mail.com"
		}, {
			restrict: false
		});
	});
	var data = {
		'input':'input unit test',
		'select':'3',
		'multiselect':['1','4'],
		'textarea':'textarea unit test',
		'checkbox_checked':'1',
		'checkbox_not_checked':'0',
		'checkbox_multiple':['1','3'],
		'radio':'off',
		'field_not_exist':'noop'
	};
	// example unit tests (by name)
	$('#f_unit_test .clickaction_name').on('click', function(){
		$('#f_unit_test').autofill( data );
	});
	// example unit tests (by id)
	$('#f_unit_test .clickaction_id').on('click', function(){
		$('#f_unit_test').autofill( data, {
			findbyname: false,
			restrict: false
		});
	});
});
</script>