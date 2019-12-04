$(document).ready(function(){
	
	/** Selectors **/
	
		var dataTable = $('.data-table-holder > table');
		var selectControl = $('.form-control-select');
	
	/** end of Selectors **/
	
	
	/**Sidebar toggle Function**/
	$('.toggle-sidebar').on('click',function(){
		$('body').toggleClass('sidebar-collapsed');

	});
	/**Sidebar toggle Function**/
	/** tooltip **/
	  $('[data-toggle="tooltip"]').tooltip()
	 /** tooltip **/
	 /** Countdown **/
	 if ( $('#countdown').length > 0 ){
	   $('#countdown').countdown({
			year: 2019, 
			month: 12, 
			day: 31, 
			hour: 12, 
			minute: 0, 
			second: 0, 
		  });
	 }
	 /** Countdown **/
	 
	
	if ( selectControl.length > 0 ){
		selectControl.select2({
			placeholder: "Please choose and option...",
			allowClear: true
		});
	}
	
	if ( dataTable.length > 0 ){
		//dataTable.DataTable();
	}
	 
	
	if ( $('input[type="checkbox"],input[type="radio"]').length > 0 	){
		$('input').iCheck({
			checkboxClass: 'icheckbox_minimal-orange',
			radioClass: 'icheckbox_minimal-orange',
			increaseArea: '20%' // optional
		});
	}
	
	$('.toggle-form a').on('click',function(e){
		e.preventDefault();
		$(this).closest('.toggle-form').find('.active').removeClass('active');
		$(this).addClass('active');
		var switchForm  = $(this).attr('href');
		$(switchForm).parent('div').find('.active').removeClass('active');
		$(switchForm).addClass('active');
	})
});
