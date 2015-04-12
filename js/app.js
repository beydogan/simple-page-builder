var pageBuilder = function(){

}

pageBuilder.prototype.init = function() {
	this.initBindings();
};


pageBuilder.prototype.initBindings = function() {
	_this = this;
	$(".add-new-widget").click(this.newWidgetModal)
};

pageBuilder.prototype.newWidgetModal = function(e) {
	e.preventDefault();

	$("#newWidgetModal").modal('show')
};

pageBuilder.prototype.widgets = function() {
	console.log('he')
};