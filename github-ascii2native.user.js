// ==UserScript==
// @name         github-ascii2native-userscript
// @namespace    https://github.com/teloo/github-ascii2native
// @version      0.1
// @description  ascii2native in GitHub
// @author       teloo
// @match        https://github.com/*
// @grant
// ==/UserScript==

(function() {
  var traverse = function(elem){
    var children = elem.childNodes;

    for(var i = 0; i < children.length; i++){
      var child = children.item(i);
      if(child.nodeType == 3){
        child.nodeValue = child.nodeValue.replace(/\\u[0-9a-fA-F]{4}/g, function(match) {
          var charCode = parseInt(match.substring(2, 6), 16);
          return String.fromCharCode(charCode);
        });
      }else{
        if(child.childNodes.length > 0){
          traverse(child);
        }
      }
    }
  };

  traverse(document.body);
}());
