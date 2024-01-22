window.addEventListener("DOMContentLoaded", function(){
    let video=document.getElementById("main_video");
    main_video.muted=true; 
	video.addEventListener("loadeddata", function(){
        main_video.play();  
    });
    video.addEventListener("ended", function(){
        main_video.play(); 
    });
});
	$(function(){
		let wint=0;
		$(".top").hover(
			function(){
				if($("#mobile").css("display") === "block") return;
				$("#start .top").addClass("active");
			},
			function(){
				if($("#mobile").css("display") === "block") return;
				$("#start .top").removeClass("active");
			}
		);
		$(window).scroll(function(){
			wint=$(window).scrollTop();
			if(wint > 50){
				$("#start .top").addClass("fixed");
			}
			else {
				$("#start .top").removeClass("fixed");
			}
		});
		var swiper = new Swiper(".mySwiper", {
			loop:true,
			autoplay:
			{delay:3000},
		slidesPerView:1.5,
		centeredSlides: true,
		spaceBetween:50,
		pagination: {
			el: ".swiper-container .swiper-pagination",
			clickable:true,
		},
		breakpoints: {
        550: { 
            slidesPerView: 1.5,
        },
        991: { 
            slidesPerView: 3
        }
    }
	});
		$(".sub_slider a.prev").click(function(e){
			e.preventDefault();
			swiper.slidePrev();
		});
		$(".sub_slider a.next").click(function(e){
		e.preventDefault();
		swiper.slideNext();
	});
	let totalLi=$("#gnb > ul > li").length;
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
		if($(this).parent().index() === 0){
			$("header").addClass("active");
		}
	});

	$("#gnb li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
		if($(this).parent().parent().index() === (totalLi-1)){
			console.log(totalLi);
			$("header").removeClass("active");
		}
	});
	$("#tab.open").click(function(e){
		e.preventDefault();
		if($("#tab").hasClass("open")) {
        $("body").addClass("fixed");
        $("#mobile").slideDown(300);
        $(this).removeAttr("class");
        $(this).addClass("close");
    }
    else { 
        $("body").removeClass("fixed");
        $("#mobile").slideUp(300);
        $(this).removeAttr("class");
        $(this).addClass("open"); 
    }
	});
	$("#mobile > ul > li").click(function(e){
		e.preventDefault();
		if($(this).find("ul").css("display")==="none"){
			$("#mobile ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
			$("#mobile > ul > li").removeClass("on");
			$(this).addClass("on");
		}
		else{
            $(this).find("ul").slideUp(300);
            $(this).removeClass("on");   
        }
	});
	let winw;
	$(window).resize(function(){
		winw=$(window).width();
		if(winw > 1040){
			if($("#tab").hasClass("close")===true){
				$("body").removeClass("fixed");
				$(".top").removeClass("active");
				$("#mobile").hide();
				$("#tab").removeAttr("class");
				$("#tab").addClass("open");
			}
		}
	});	
	});