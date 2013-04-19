
findById = function(arr,id) {
	for(i in arr) {
		if(id == arr[i].id) {
			return arr[i];
		}
	}
	return null;
};
findIndexById = function(arr,id) {
	for(i in arr) {
		if(id == arr[i].id) {
			return i;
		}
	}
	return -1;
};

AlertUnread = function(alertInfo) {
  var intervalId = document.title;
  var oldTitle = alertInfo.oldTitle;
  var timeout = 1500; //TODO: move to settings
  intervalId = setInterval(function(){
    var msg = alertInfo.msgs + " new messages from " + alertInfo.users + " users.";
    document.title = document.title === msg ? oldTitle : msg;
    }, timeout);
  return function() {
    if(oldTitle) {
      clearInterval(intervalId);
      document.title = oldTitle;
      oldTitle = null;
    }
  };
};

jQuery.fn.extend({
insertAtCaret: function(myValue){
  return this.each(function(i) {
    if (document.selection) {
      //For browsers like Internet Explorer
      this.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = startPos + myValue.length;
      this.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  })
}
});
