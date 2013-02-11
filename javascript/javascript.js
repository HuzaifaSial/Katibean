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

drawAreaGraph = function()
{
	
}

changeGraph = function( value ) 
{
	var table1 = document.getElementById( 'table_1' );
	var table2 = document.getElementById( 'table_2' );
	switch( value ) 
	{
		case 1:
			table1.setAttribute( 'style', 'display: visible;' );
			table2.setAttribute( 'style', 'display: none;' );
		break;
		
		case 2:
			table1.setAttribute( 'style', 'display: none;' );
			table2.setAttribute( 'style', 'display: visible;' );
		break;
		
	}
}

longest_streak_width = function( value )
{
	var streak = document.getElementById( 'prayer_per_day_average_streak' );
	streak.style.width = ( 241/5 ) * value + 'px';
}

longest_streak_topText = function( value )
{
	var el = document.getElementById( 'prayer_per_day' );
	el.innerHTML = '<p><span>' + value + '</span>' + ' per day' + '</p>';
}

longest_streak_bottomText = function( value )
{
	var el = document.getElementById( 'longest_streak' );
	el.innerHTML = '<p>' + 'longest streak - ' + value + ' days' +'</p>';
}

total_missed_prayers = function( value )
{
	var el = document.getElementById( 'total_missed_prayers' );
	el.innerHTML = '<p><span>' + value + '</span>' + ' missed' +'</p>';
}

most_missed = function( value )
{
	var el = document.getElementById( 'most_missed' );
	el.innerHTML = '<p>' + 'most missed - ' + value +'</p>';
}

weekly_prayer_average_streak = function( value, el )
{
	var streak = document.getElementById( el );
	var parent = streak.parentNode;
	streak.style.width = ( 49/5 ) * value + 'px';

	parent.childNodes[ parent.childNodes.length - 2 ].innerHTML = value;
}

best_day = function( value )
{
	var el = document.getElementById( 'best_day' );
	el.innerHTML = '<p><span>' + value + '</span>' + ' best day' + '</p>';
}

worst_day = function( value )
{
	var el = document.getElementById( 'worst_day' );
	el.innerHTML = '<p>' + 'worst day - ' + value +'</p>';
}

graph_averages_graphics = function()
{
	var path_d = 'M0 60 L0 50 L100 20 L160 50 L230 20 L300 20 L360 50 L420 20 L450 20 L450 60' + 
					'L0 50 L100 20 L160 50 L230 20 L300 20 L360 50 L420 20 L450 20 L450 60';
	var path = document.getElementById( 'graph_averages' );
	path.setAttribute( 'd', path_d );
	/*
	path.setAttribute( 'fill', '#606060' );
	path.setAttribute( 'fill-opacity', '0.1' );
	path.setAttribute( 'stroke', 'none' );
	path.setAttribute( 'stroke-width', '0' );
	*/
	console.log( path );
}

loadVisuals = function() 
{
	//graph_averages_graphics();

	longest_streak_width( 4.25 );
	longest_streak_topText( 4.25 );
	longest_streak_bottomText( 7 );
	total_missed_prayers( 112 );
	most_missed( 'Fajr' );

	weekly_prayer_average_streak( 2.5, 'weekly_average_streak_mon' );
	weekly_prayer_average_streak( 2.7, 'weekly_average_streak_tues' );
	weekly_prayer_average_streak( 3.9, 'weekly_average_streak_wed' );
	weekly_prayer_average_streak( 1.1, 'weekly_average_streak_thurs' );
	weekly_prayer_average_streak( 2.5, 'weekly_average_streak_fri' );
	weekly_prayer_average_streak( 5, 'weekly_average_streak_sat' );
	weekly_prayer_average_streak( 4.5, 'weekly_average_streak_sun' );

	best_day( 'Sunday' );
	worst_day( 'Thursday' );
}