function loadXMLDoc(dname) {
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.open("GET","books.xml",false);
xmlhttp.send();
return xmlDoc=xmlhttp.responseXML; 
}