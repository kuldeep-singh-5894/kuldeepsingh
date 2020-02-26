
/*Education & Experience*/
var btn = document.getElementsByClassName("head");

for (var i=0; i<btn.length; i++) {
	btn[i].addEventListener("click",function(){
		this.classList.toggle("active");
		this.lastElementChild.classList.toggle("fa-chevron-circle-up")
		var desc = this.nextElementSibling;
		
		if (desc.style.maxHeight){
			 desc.style.maxHeight = null;
		    }
		else {
		    	desc.style.maxHeight = desc.scrollHeight + "px";
		    }
	});
}

/* Media queries*/

