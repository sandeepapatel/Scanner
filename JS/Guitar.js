var myArr ;
var tmp = 0 ;
function myOnload() {
	var xmlhttp = new XMLHttpRequest();
	alert("Hello");
	/*var xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");*/
	var url = "guitar.json";
	var Image = 0;
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        myArr = JSON.parse(xmlhttp.responseText);
	        ChangeImage("FIRST");
	        /*  myFunction(myArr); */
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
}

function ChangeImage (ImageStatus) {
	if (ImageStatus == "FIRST") {
		tmp = 0 ;
	} else if (ImageStatus == "PREV") {
		if (tmp == 0) {
			tmp = myArr.allProducts.Length - 1 ;
		}
		tmp = tmp - 1;
	} else if (ImageStatus == "NEXT") {
		if (tmp+1 >= myArr.allProducts.Length) {
			tmp = 0;
		}
		tmp = tmp + 1 ;
		/*Object.keys(obj.shareInfo[0]).length;
		alert(myArr.allProducts[0].Length) ;
	 	Object.keys(data.shareInfo[i]).length */
	}
	document.getElementById("idProduct").innerHTML = myArr.allProducts[tmp].product_description ;
	document.getElementById("idShipping").innerHTML = myArr.allProducts[tmp].shipping_details ;
	document.getElementById("idReview").innerHTML = myArr.allProducts[tmp].customer_reviews ;
	/*document.getElementById("idImage").innerHTML = myArr.allProducts[tmp].customer_reviews ;*/
	idImage.src = myArr.allProducts[tmp].image_path ;
}

function myOnload_2 () {
	var xmlhttp = new XMLHttpRequest();
	/*var xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");*/
	var url = "guitar.json";
	var Image = 0;
	var buyGiutarindex = localStorage.getItem("buyIndex") ;
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	        document.getElementById("idProduct").innerHTML = myArr.allProducts[buyGiutarindex].product_description ;
	    	//document.getElementById("idShipping").innerHTML = myArr.allProducts[tmp].shipping_details ;
	    	//document.getElementById("idReview").innerHTML = myArr.allProducts[tmp].customer_reviews ;
	    	/*document.getElementById("idImage").innerHTML = myArr.allProducts[tmp].customer_reviews ;*/
	    	idImage.src = myArr.allProducts[buyGiutarindex].image_path ;
	    	idDispReview.style.display = "none";
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
}

function btnBuy() {
	if(typeof(Storage) !== "undefined") {
		localStorage.setItem("buyIndex", tmp);
		// Code for localStorage/sessionStorage.
	} else {
	    alert("Sorry! No Web Storage support..") ;
	}
	location.href='BootGuitar2.html' ;
}

function btnReview() {
	idformReview.style.display ="none"; 
	idDispReview.style.display="block";
	document.getElementById("dispFN").innerHTML = document.getElementById("textFN").value ;
	document.getElementById("dispLN").innerHTML = document.getElementById("textLN").value ;
	document.getElementById("dispCC").innerHTML = document.getElementById("textCC").value ;
	document.getElementById("dispCVV").innerHTML = document.getElementById("textCVV").value ;

	/*dispFN   .style.display="block";*/
}

function btnEdit() {
	idDispReview.style.display="none";
	idformReview.style.display ="block"; 
	/*.style.display="block";*/
}

function btnNextBuy() {
	localStorage.setItem("locName", document.getElementById("textFN").value);
	localStorage.setItem("locLName", document.getElementById("textLN").value);
	localStorage.setItem("locCC", document.getElementById("textCC").value);
	localStorage.setItem("locCVV", document.getElementById("textCVV").value);
	location.href='BootGuitar3.html' ;
}

function myOnload_3 () {
	var xmlhttp = new XMLHttpRequest();
	/*var xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");*/
	var url = "guitar.json";
	var Image = 0;
	var buyGiutarindex = localStorage.getItem("buyIndex") ;
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	    	idImage.src = myArr.allProducts[buyGiutarindex].image_path ;
	        document.getElementById("idProduct").innerHTML = myArr.allProducts[buyGiutarindex].product_description ;
	        PageConf()	
	        //document.getElementById("idShipping").innerHTML = myArr.allProducts[tmp].shipping_details ;
	    	//document.getElementById("idReview").innerHTML = myArr.allProducts[tmp].customer_reviews ;
	    	/*document.getElementById("idImage").innerHTML = myArr.allProducts[tmp].customer_reviews ;*/
	    	//idDispReview.style.display = "none";
	    
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
}

function PageConf() {
	document.getElementById("dispFN").innerHTML = localStorage.getItem("locName") ;
	document.getElementById("dispLN").innerHTML = localStorage.getItem("locLName") ;
	document.getElementById("dispCC").innerHTML = localStorage.getItem("locCC") ;
	document.getElementById("dispCVV").innerHTML = localStorage.getItem("locCVV") ;
}


function btnHome() {
	location.href='BootGuitar.html' ;
}

function funNumber() {
	var xyz = document.getElementById("idCel") ;
	var ChkNum = Number(xyz.value) ;
	if (isNaN(ChkNum)) {
		idCel.style.borderColor = "red" ;
	} else {
		idCel.style.borderColor = "blue" ;
		c = (ChkNum - 32) * 5/9 ;
		document.getElementById("idP").innerHTML = c ;
	}

}