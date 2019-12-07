 $(document).ready(function () {
     //program
     $(".timeBlock>a").click(function () {
         $("a").removeClass("active");
         $(this).addClass("active");
         $(".articleBlock>div").hide();
         t_content = $(this).attr("href");
         $(t_content).fadeIn(600);
         return false
     })
     //slow scrolling
     $("#menu").on("click", "a", function (event) {
         event.preventDefault();
         var id = $(this).attr('href'),
             top = $(id).offset().top;
         $('body,html').animate({
             scrollTop: top
         }, 1500);
     });
     $(".btn").on("click", "a", function (event) {
         event.preventDefault();
         var id = $(this).attr('href'),
             top = $(id).offset().top;
         $('body,html').animate({
             scrollTop: top
         }, 1500);
     });
     //button hover effects
     $(".btn").mouseover(function () {
         $(this).css("border", "4px solid #eaa72f");
     });
     $(".btn").mouseout(function () {
         $(this).css("border", "4px solid rgba(255, 255, 255, 0.2)");
     });
     $(".btnup").mouseover(function () {
         $(this).css("border", "4px solid #eaa72f");
     });
     $(".btnup").mouseout(function () {
         $(this).css("border", "4px solid rgba(255, 255, 255, 0.2)");
     });
     //button to return to Top
     
     $(function () {
         $(window).scroll(function () {
             if ($(this).scrollTop() != 0) {
                 $('#toTop').fadeIn();
             } else {
                 $('#toTop').fadeOut();
             }
         });
         $('#toTop').click(function () {
             $('body,html').animate({
                 scrollTop: 0
             }, 800);
         });
     });
     //login Slide Down
     $('#login-trigger').click(function(){
		$(this).next('#login-content').slideToggle();
		$(this).toggleClass('active');					
		
		if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
			else $(this).find('span').html('&#x25BC;')
		})
     //fixed menu
     var $menu = $("#menu");
     $(window).scroll(function () {
         if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
             $menu.removeClass("default").addClass("fixed");
         } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
             $menu.removeClass("fixed").addClass("default");
         }

     }); //scroll
     
 });
