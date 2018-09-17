// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, element = document.body) {
  // your code here
  var results = [];
  var children = element.childNodes;
  
  
  for(var i = 0; i < element.classList.length; i++) {
    if(element.classList[i] === className) {
      results.push(element);
    }
  }

  for(var i = 0; i < children.length; i++) {
  
    if(children[i].classList !== undefined) {
      for(var j = 0; j < children[i].classList.length; j++) {
        if(children[i].classList[j] === className) {
          results.push(children[i]);
        }        
      }
      
      if(children[i].hasChildNodes()) {
        results.concat(getElementsByClassName(className, children[i]));
      }
    }
  }
  
  console.log(results);
  return results;
  
};
