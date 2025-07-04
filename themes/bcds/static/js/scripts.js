$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
        $("#gotoTop").addClass("show");
    } else {
        $("#gotoTop").removeClass("show");
    }
});
 

 //slider js
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#slider-arrow-left',
        prevEl: '#slider-arrow-right',
    },
});






 

// slider js
var swiper = new Swiper('.swiper-container2', {
    loop: true,

    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Gallery js
var swiper = new Swiper('.swiper-container3', {
    loop: false,

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
	 pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 4,
    spaceBetween: 30,
     navigation: {
          nextEl: "#gallery-arrow-right",
          prevEl: "#gallery-arrow-left",
        },
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10, 
    },
    // when window width is >= 480px
    400: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
	 992: {
      slidesPerView: 4,
      spaceBetween: 10
    },
	 1200: {
      slidesPerView: 6,
      spaceBetween: 10
    },
	 1600: {
      slidesPerView: 7,
      spaceBetween: 10
    }
	}
});

 


//Start  This is for toggle FAQ JS
$(".faqpage .toggle.faq").click(function() {
    $(this).find(".togglet").toggleClass("toggleta");
    $(this).find(".togglec").toggleClass("show");
});
 
$('.faqpage .toggle.faq').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $(this).find(".togglet").toggleClass("toggleta");
    $(this).find(".togglec").toggleClass("show");
  }
});  

//END  This is for toggle FAQ JS


 
 //This is for Enroll Page
$(".enrollpage .toggle.faq .headfirst, .toggle.faq .headsec").click(function() {
    $(this).parent().parent().find(".togglet").toggleClass("toggleta");
    $(this).parent().parent().find(".togglec").toggleClass("show");
	$(this).parent().parent().find(".details span").toggleClass("hide");
});
 
$(".enrollpage .toggle.faq .enrollbtn .details").click(function() {
    $(this).parent().parent().parent().find(".togglet").toggleClass("toggleta");
    $(this).parent().parent().parent().find(".togglec").toggleClass("show");
});
 
$(".enrollpage .toggle.faq .details").click(function() {
    $(this).parent().parent().find(".togglet").toggleClass("toggleta");
    $(this).parent().parent().find(".togglec").toggleClass("show");
});
  
$(".enrollpage .toggle.faq .details").click(function() {
    $(this).find("span").toggleClass("hide"); 
});
 
 
$('.enrollpage .toggle.faq .details ').keypress(function (e) {
 var enterpress = e.which;
 if(enterpress == 13)  // the enter key code
  {
 $(this).find("span").toggleClass("hide"); 
	  $(this).parent().parent().find(".togglet").toggleClass("toggleta");
    $(this).parent().parent().find(".togglec").toggleClass("show");
	  $(this).parent().parent().parent().find(".togglet").toggleClass("toggleta");
    $(this).parent().parent().parent().find(".togglec").toggleClass("show");
  }
}); 

$('.enrollpage .toggle.faq').keypress(function (e) {
 var enterpress1 = e.which;
 if(enterpress1 == 13)  // the enter key code
  {
 $(this).find(".details  span").toggleClass("hide");  
	  $(this).find(".togglet").toggleClass("toggleta");
    $(this).find(".togglec").toggleClass("show");
	 
  }
}); 

 //END This is for Enroll Page



// Show the year updated automatically in footer
$('#spanYear').html(new Date().getFullYear());
// Script for last updated
var x = document.lastModified;
document.getElementById("lasdupdated").innerHTML = x;



 

$('.counter').each(function () {
$(this).prop('Counter',0).animate({
Counter: $(this).text()
}, {
duration: 4000,
easing: 'swing',
step: function (now) {
$(this).text(Math.ceil(now));
}
});
});
 

$(".sub-menu").click(function(){
	$(this).toggleClass("active"); 
	$(this).find(".dropdown-menu").toggleClass("show"); 
  	  
})
 
 
$(document).ready(function(eOuter) {
  $('#primary-menu ul.dropdown-menu li a').on('keydown', function(eInner) {
    if (eInner.which === 40) { //enter key
      var tabindex = $(this).attr('tabindex');
      tabindex++; //increment tabindex
      $('[tabindex=' + tabindex + ']').focus(); 
    }
  });
});


// Start JS for the menu Header TAB FOCUS
$("#primary-menu ul li a.nodropdown").focus(function () {

	$(this).parent().siblings().removeClass("active");
	$(this).parent().siblings().find("ul").removeClass("showmenu");

});

$("#primary-menu ul li a.hasdropdown").focus(function () {

	$(this).parent().addClass("active");
	$(this).next("ul").addClass("showmenu");

});


$("#primary-menu ul li.sub-menu ul").focusout(function () {

	$(this).parent().toggleClass("active");
	$(this).toggleClass("showmenu");

});


$("#primary-menu ul li a.hasdropdown").hover(function () { 
	$(this).parent().toggleClass("active");
	$(this).next("ul").toggleClass("showmenu");
 
});

$("#primary-menu ul li.sub-menu ul li a").focus(function () {
	
	$(this).closest("ul").parent().addClass("active");
	$(this).closest("ul").addClass("showmenu");
 
});
 

// on click toggle menu
$(".lines-button").click(function() {
     $(".menubar").slideToggle();  
	  $(this).toggleClass("close");  
});
$(".lines-button.close").click(function() {
    $(".menubar").slideToggle();  
	 $(this).toggleClass("close");  

});
		// End JS for line CSS menu


  // JS for drop down menu  
	 (function() {                               
  var dropdownMenu;                                   
  $(window).on('show.bs.dropdown', function(e) {      
    dropdownMenu = $(e.target).find('.dropdown-menu'); 
    $('body').append(dropdownMenu.detach());    
    var eOffset = $(e.target).offset(); 
    dropdownMenu.css({
        'display': 'block',
        'top': eOffset.top + $(e.target).outerHeight() - 5,
        'left': eOffset.left  
    });                                                
  }); 
  $(window).on('hide.bs.dropdown', function(e) {        
    $(e.target).append(dropdownMenu.detach());        
    dropdownMenu.hide();                              
  });                                                   
})(); 
	

// Load packages code started
function mainLoadPackages(){
  var packageList;
   
        $.ajax({ 
url: 'https://myeform4.net/CRestAPI/Service1.svc/getAllActivePackages/MDBayCountry241129',
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (data) {
                packageList = data.getAllActivePackagesResult.PackageList;
                LoadPrices();
            },
            error: function () { },
        });
  
 
   function LoadPrices(){
	   $('.packagedetails').each(function(){
		   $(this).children().each(function(index, value){
             var attr = $(value).attr('data-packageid');
            if (typeof attr !== 'undefined' && attr !== false) 
            {               
            updatePackageDetails(value);
            }
        }); 
	   })
        $('#packagedetails').children().each(function(index, value){
             var attr = $(value).attr('data-packageid');
            if (typeof attr !== 'undefined' && attr !== false) 
            {               
            updatePackageDetails(value);
            }
        });
    }

    function updatePackageDetails(obj){
        var pacakageId = $(obj).data('packageid'); 
        var pack = $.grep(packageList, function( p, i ) {
            if(p.packageId ==  pacakageId) {
                return p;
            }
        });
        if(pack.length>0){ 
        $(obj).children('div.togglet').children('div.price_holder').children('h2').text('$' + pack[0].price);
        $(obj).children('div.togglet').children('div.title_holder').text(pack[0].title);
        $(obj).children('div.togglec').children('.description_holder').html(pack[0].description);
        }
		else {
			$(obj).hide();
		}
    }
  }
// Widgets started in JS

function allWidgets(){
	// <!--Dynamic Content widget - 1 Home Page -->
 $.ajax({ 
               url: 'https://www.myeform5.net/RestWebContent/RestWebContent.svc/getSchoolWebContentByVersion/MDBayCountry241129/v1',
				type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function (data) {
                    $('#contentwidget1').html(data.getSchoolWebContentByVersionResult.Content); 
                },
                error: function () { }, 
            }); 
    

  		// <!--Dynamic Content widget -2 About Us Page -->
 
            $.ajax({ 
               url: 'https://www.myeform5.net/RestWebContent/RestWebContent.svc/getSchoolWebContentByVersion/MDBayCountry241129/v2',
				type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function (data) {
                    $('#contentwidget2').html(data.getSchoolWebContentByVersionResult.Content); 
                },
                error: function () { }, 
            }); 
      
		
		
		// <!--Dynamic Content widget - 3 Enroll Page -->
    
            $.ajax({ 
               url: 'https://www.myeform5.net/RestWebContent/RestWebContent.svc/getSchoolWebContentByVersion/MDBayCountry241129/v3',
				type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function (data) {
                    $('#contentwidget3').html(data.getSchoolWebContentByVersionResult.Content); 
                },
                error: function () { }, 
            }); 
     
		
		// <!--Dynamic Content widget - 4 FAQ -->
     
            $.ajax({ 
               url: 'https://www.myeform5.net/RestWebContent/RestWebContent.svc/getSchoolWebContentByVersion/MDBayCountry241129/v4',
				type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function (data) {
                    $('#contentwidget4').html(data.getSchoolWebContentByVersionResult.Content); 
                },
                error: function () { }, 
            }); 
      
		
		
		
		
		// <!--Dynamic Content widget -5 Not in use -->
        
            $.ajax({ 
               url: 'https://www.myeform5.net/RestWebContent/RestWebContent.svc/getSchoolWebContentByVersion/MDBayCountry241129/v5',
				type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function (data) {
                    $('#contentwidget5').html(data.getSchoolWebContentByVersionResult.Content); 
                },
                error: function () { }, 
            }); 
       
}


 

  // Conversion Tracking Code - Do Not Remove --> 
 function clickpathchecker(){ 
function setCookie(cname, cvalue, exdays) { 
var d = new Date();
 d.setTime(d.getTime() + (exdays*24*60*60*1000));
 var expires = "expires="+ d.toUTCString();
 document.cookie= cname+ "=" + cvalue+ ";" + expires + ";path=/"; 
}
 function getCookie(cname) { 
    var name = cname+ "=";
     var decodedCookie= decodeURIComponent(document.cookie); 
      var ca = decodedCookie.split(';'); 
       for(var i= 0; i<ca.length; i++) { 
             var c = ca[i]; 
             while (c.charAt(0) == ' ') { 
                c = c.substring(1); 
            }
           if (c.indexOf(name) == 0) { 
                return c.substring(name.length, c.length);
                 } 
     } 
return ""; 
}
 function rewriteURLS(newClickPath, allUrls) {    
          for(let i= 0;i< allUrls.length; i++){   
    // In testing, replace the "https://tds.ms/" with "staging"   
           if(allUrls[i].href.includes("https://tds.ms/")|| allUrls[i].href.includes("https://www.tdsm.app/")) {
            if(allUrls[i].href.includes('?')) {      
                allUrls[i].href= allUrls[i].href+ '&clickPath=' + newClickPath;
       }else{      
             allUrls[i].href= allUrls[i].href+ '?clickPath=' + newClickPath;      
           }                  
                console.log(allUrls[i].href+ newClickPath);    
         }
    }
}
var path = window.location.pathname;
 var page = path.split("/").pop(); 
var fullURL= window.location.href; 
var Params = fullURL.split("?"); 
page=fullURL.replaceAll("&", "|"); 
page = escape(page); 

if (page == '') {   
       page = 'Index'; 
}
if (getCookie('clickPath') != ''){
    if(Params[1]) {      
              clickPath= page;   
    }else{      
              clickPath= page + ',';    
         }
 }else{
    clickPath= getCookie('clickPath') + page;
}
setCookie('clickPath', clickPath, 30);
 ///newClickPath= "&clickPath=" + clickPath.replace(/,+$/,''); 
rewriteURLS(clickPath, document.getElementsByTagName('a'));
	}
// Conversion Tracking Code - Do Not Remove --> 
 
// Type JS Starts

function typedJs() {	 
//	
//var slide1text = new Typed('#slide1text', {
//      strings: ['', 'Bay Country Driving School', 'Class A Basic training', 'Job placement.'],
//      typeSpeed: 30,
//		 loop: true
//    });   
//	 var slide2text = new Typed('#slide2text', {
//      strings: ['CDL class A Driving lessons.', 'Pre-inspection packages.','All year driving lessons | Ages 18 and up'],
//      typeSpeed: 30,
//		 loop: true
//    });  
//	 	 
// var typedBanner = new Typed('#typedBanner', {
//     strings: ['- Driving Lessons | DOT Medical.', '- DOT Regulated Drug Test | Road Test.', '- Permit Training, Graduation'],
//      typeSpeed: 120,
//    loop: true
//  });  
//	

document.querySelectorAll('.typed').forEach(function(el) {
    new Typed(el, {
    stringsElement: el.previousElementSibling,
    loop: false,
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 1700,
    showCursor: false,
  })
});
	}
 

// Language translator
function languages(){
const xhttpr = new XMLHttpRequest();xhttpr.open('GET', 'https://www.tdsm.app/dssapi/api/LanguageTranslation?id=qzt/dUmw74wM8DnGu3Wwr7C/yAXzFjNs56frL7Ef97ZvJPDeFk4Ll4vgW93xLOng', true);xhttpr.send();xhttpr.onload = () => {if (xhttpr.status === 200){var dmelement=document.createElement('div');dmelement.innerHTML=xhttpr.response;var newelement=document.createElement('div');newelement.innerHTML=xhttpr.response;for(var paras=newelement.getElementsByTagName('script');paras[0];)newelement.removeChild(paras[0]);document.getElementsByTagName('body')[0].appendChild(newelement);var input=dmelement.getElementsByTagName('script');console.log(input.length);for(let i=0;i<input.length;i++)if(input[i].hasAttribute('src')){var scriptTag=document.createElement('script');scriptTag.src=input[i].src,document.getElementsByTagName('body')[0].appendChild(scriptTag)}else eval(input[i].innerHTML);}}; 

}