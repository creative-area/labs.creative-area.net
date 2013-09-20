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
