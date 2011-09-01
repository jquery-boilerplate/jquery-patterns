
/*
*****************************************************
Light plugin with public/private methods
*****************************************************
*/

;(function($, undefined){
  
  var private_var;
  
  $.myNamespace = {

    public_method1: function(){
      private_method();

    },
    public_method2: function(){
      return private_var;

    }
  };
  
  function private_method() {
    $.myNamespace.public_method2();
  }
  
})(jQuery);
