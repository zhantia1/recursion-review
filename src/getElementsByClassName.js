// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, element = document.body) {
  // your code here
  var results = [];
  var children = element.childNodes; //[text, div1, text, div2]
  
  for(var i = 0; i < element.classList.length; i++) {
    if(element.classList[i] === className) {
      results.push(element); // results = [body.classTarget]
    }
  }
  
  for(var i = 0; i < children.length; i++) {
    
    if(children[i].classList !== undefined) {
      
      if(element.hasChildNodes()) {
        results = results.concat(getElementsByClassName(className, children[i]));
      }      
    }
  }
  

  /**
  for(var i = 0; i < children.length; i++) {
  
    if(children[i].classList !== undefined) {
      
      for(var j = 0; j < children[i].classList.length; j++) {
        if(children[i].classList[j] === className) {
          results.push(children[i]);
        }        
      }
      
      if(element.hasChildNodes()) {
        results.concat(getElementsByClassName(className, children[i]));
      }
    }
    
  }*/
  
  
  return results;
  
};
