
 $(document).ready(function () {	
	
	/* get id of form to work with */
	
	$('.show-lookup').click(function()	{
		var pairedId = $(this).attr('id').split('-');
		var lookupToDisplay = '#lookup-' + pairedId[1];
		$('.overlay').show();
		$(lookupToDisplay).show();
		$('.js-popup-focus').focus();
	});
	
/* put value selected in lookup into field in main form */
	
	$('.lookup-popup input').on('change', function() {  
		var fieldname = $(this).attr('name');
		var pairedId = $(this).parent().attr('id').split('-');
		var selOption = $('input[name='+fieldname+']:checked').val(); 
		$("#entry-"+pairedId[1]).val(selOption);
	});
	
/* for checkbox version, append selected values to field in main form */	
	
	$('.lookup-multiselect input').on('change', function() {  
		var pairedId = $(this).parent().attr('id').split('-');
		//event.preventDefault();
		var selOptions = $(".category input:checkbox:checked").map(function() {
		  return $(this).val();
		}).get(); // <----
		//console.log(selOptions);
		var selectedString = selOptions.toString();
		$("#entry-"+pairedId[1]).val(selOptions);
	});
	
	$('.close-button').click(function()	{
		$(this).parent().hide();
		var pairedId = $(this).parent().attr('id').split('-');
		$('.overlay').hide();
		$("#entry-"+pairedId[1]).focus();
	});
});