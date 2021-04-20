const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".img");

window.onload = ()=>{
	filterItem.onclick = (selectedItem)=>{
	    if (selectedItem.target.classList.contains("item")) {
	    	filterItem.querySelector(".active").classList.remove("active");
	    	selectedItem.target.classList.add("active");
	    	 let filterName = selectedItem.target.getAttribute("data-name");
	    	filterImg.forEach((img)=>{
	    		let filterImg = img.getAttribute("data-name");
	    	if ((filterImg == filterName) || filterName == "all") {
	    		img.classList.remove("hide");
	    		img.classList.add("show");
	    	}else{
	    		img.classList.add("hide");
               img.classList.remove("show");
	    	}
	    	});
	    }
	}
for (let i = 0 ;i < filterImg.length; i++) {
	    	filterImg[i].setAttribute("onclick","preview(this)");//add onclick attribute in all images
	    }
}
/**/
/*Selecting all elements*/
const pr = document.querySelector(".preview"),
previewImg = pr.querySelector("img"),
closeIcon = pr.querySelector(".icon"),
categoryName = pr.querySelector(".title p"),
shadow = document.querySelector(".shadow");
/*Screen Function*/
function preview(element){
	document.querySelector("body").style.overflow="hidden";
	let selectedImg = element.querySelector("img").src;
	let selectedCategory = element.getAttribute("data-name");//get Category 
	categoryName.textContent = selectedCategory;
	previewImg.src = selectedImg;
	shadow.classList.add("show");//display Shadow
	pr.classList.add("show");
	closeIcon.onclick = () =>{
		/*onclick on the close*/
		pr.classList.remove("show");
		shadow.classList.remove("show");
		document.querySelector("body").style.overflow="scroll";
	}
}
/*Video*/
	var vPlayer = document.getElementById('videoPlayer');
	var myV = document.getElementById('myV');
	var btnClose = document.querySelector(".close-btn");
	function stopVideo(){
		vPlayer.style.display="none";
		myV.style.display="none";
		btnClose.style.display="none";
		myV.pause();
        myV.currentTime = 0;
	}
	function playV(file){
		myV.src= file;
		vPlayer.style.display="block";
		myV.style.display="block";
		btnClose.style.display="block";
	}