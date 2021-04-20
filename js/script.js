function toggle(){
   document.querySelector("nav ul").classList.toggle("show");
 /*  document.querySelector(".bar").classList.remove("fa-bars");*/
   document.querySelector(".bar").classList.toggle("fa-times");
}
/*Projects owl carousel script*/
		/*Projects owl carousel script*/
$(document).ready(function(){
	$('.carousel').owlCarousel({
		margin: 20,
		loop :true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
            0:{
            	items: 1,
            	nav: false
            },
            600:{
            	items: 2,
            	nav: false
            },
            1000:{
            	items: 3,
            	nav: false
            }
		}
	});
});
