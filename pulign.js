//=== UNIVERSAL SELECTOR FUNCTION ====///
const $=function(selector){
   return document.querySelector(selector)
}
//===UNIVERSAL SELECTOR FUNCTION ====///
const $$=function(selector){
   return document.querySelectorAll(selector)
}

////=============== DYNAMIC CREAT ELEMENT=========

const createElement=function(tagname,className,content){
   const newElement=document.createElement(tagname);
   if(className){
      newElement.setAttribute("class",className);
   }
   if(content){
      newElement.innerHTML=content;

   }
   return newElement;
}