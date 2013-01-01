var colorTable = new Object();
colorTable[ 'Fajr' ] = '#FD5737';
colorTable[ 'Duhr' ] = '#F6C546';
colorTable[ 'Asr' ] = '#2BA6AE';
colorTable[ 'Maghrib' ] = '#9C5193';
colorTable[ 'Isha' ] = '#1B2723';

generateCircle = function( size, color, innerText, insertInto )
{
	var circle = document.createElement( 'div' );
	circle.setAttribute( 'class', 'circle' );

	var textField = document.createElement( 'p' );
	textField.width = '25px';
	textField.innerHTML = innerText;

	circle.appendChild( textField );

	return circle;
}

prayersPerWeek = function()
{
	var container = document.getElementById( 'prayers_per_week' ),
		table = document.createElement( 'table' ),
		trow = document.createElement( 'tr' ),
		count;

	for( count = 0; count < 5; count++ )
	{
		var td = document.createElement( 'td' );
		var circle = generateCircle( 5, 5, 5, 5 );

		td.appendChild( circle );
		td.appendChild( title )
		trow.appendChild( td );
	}

	table.setAttribute( 'align', 'center' );
	table.appendChild( trow );
	container.appendChild( table );
}