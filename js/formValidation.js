
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["email"].value;
  if (x == ""||x==null) {
    alert("Name must be filled out");
    return false;
  }
  else if(x.length>20){
  	alert("Name is too long");
    return false;
  }

  else if (y == ""||y==null) {
    alert("Email must be filled out");
    return false;
  }
 else{
 	alert("Submission Successful")
 	return true;
 }
  
}











