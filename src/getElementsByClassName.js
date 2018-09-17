// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];
  var body = this.document.body.childNodes;
  console.log(body);
  
  for(var i = 0; i < body.length; i++) {
    console.log(body[i]);
    if(body[i].classList.includes(className)) {
      results.push(body[i]);
      console.log(results);
    } else if(body[i].hasChildNodes) {
      results.push(body[i].getElementsByClassName(className));
    }
  }
  return results;
};
