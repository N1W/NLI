$(document).ready(function(){
    //enter
    if(localStorage.getItem('opt') == 'auto'){
        document.getElementById('main-header').setAttribute('style', 'background: url(../img/small/BG2Auto.jpg); background-size: 100% 100%;');
        $('.auto').addClass('active');
        $('.home').removeClass('active');
        $('.renters').removeClass('active');
        $('.condo').removeClass('active');
        $('.landlord').removeClass('active');
        $('.boat').removeClass('active');
        $('.moto').removeClass('active');
        $('.rv').removeClass('active');
        $('.business').removeClass('active');
        $('.life').removeClass('active');
        $('.umbrella').removeClass('active');

        $('.auto_link').addClass('bold');
        $('.home_link').removeClass('bold');
        $('.renters_link').removeClass('bold');
        $('.condo_link').removeClass('bold');
        $('.landlord_link').removeClass('bold');
        $('.boat_link').removeClass('bold');
        $('.moto_link').removeClass('bold');
        $('.rv_link').removeClass('bold');
        $('.business_link').removeClass('bold');
        $('.life_link').removeClass('bold');
        $('.umbrella_link').removeClass('bold');
    };
    if(localStorage.getItem('opt') == 'umbrella'){
        document.getElementById('main-header').setAttribute('style', 'background: url(../img/small/BG2Umbr.jpg); background-size: 100% 100%;');
        $('.umbrella').addClass('active');
        $('.home').removeClass('active');
        $('.renters').removeClass('active');
        $('.condo').removeClass('active');
        $('.auto').removeClass('active');
        $('.boat').removeClass('active');
        $('.moto').removeClass('active');
        $('.rv').removeClass('active');
        $('.business').removeClass('active');
        $('.life').removeClass('active');
        $('.landlord').removeClass('active');

        $('.umbrella_link').addClass('bold');
        $('.home_link').removeClass('bold');
        $('.renters_link').removeClass('bold');
        $('.condo_link').removeClass('bold');
        $('.auto_link').removeClass('bold');
        $('.boat_link').removeClass('bold');
        $('.moto_link').removeClass('bold');
        $('.rv_link').removeClass('bold');
        $('.business_link').removeClass('bold');
        $('.life_link').removeClass('bold');
        $('.landlord_link').removeClass('bold');
    };
    if(localStorage.getItem('opt') == 'boat'){
        document.getElementById('main-header').setAttribute('style', 'background: url(../img/small/BG2Boat.jpg); background-size: 100% 100%;');
        $('.boat').addClass('active');
        $('.home').removeClass('active');
        $('.renters').removeClass('active');
        $('.condo').removeClass('active');
        $('.auto').removeClass('active');
        $('.landlord').removeClass('active');
        $('.moto').removeClass('active');
        $('.rv').removeClass('active');
        $('.business').removeClass('active');
        $('.life').removeClass('active');
        $('.umbrella').removeClass('active');

        $('.boat_link').addClass('bold');
        $('.home_link').removeClass('bold');
        $('.renters_link').removeClass('bold');
        $('.condo_link').removeClass('bold');
        $('.auto_link').removeClass('bold');
        $('.landlord_link').removeClass('bold');
        $('.moto_link').removeClass('bold');
        $('.rv_link').removeClass('bold');
        $('.business_link').removeClass('bold');
        $('.life_link').removeClass('bold');
        $('.umbrella_link').removeClass('bold');
    };
    if(localStorage.getItem('opt') == 'home'){
        document.getElementById('main-header').setAttribute('style', 'background: url(../img/small/BG2Home.jpg); background-size: 100% 100%;');
        $('.home').addClass('active');
        $('.landlord').removeClass('active');
        $('.renters').removeClass('active');
        $('.condo').removeClass('active');
        $('.auto').removeClass('active');
        $('.boat').removeClass('active');
        $('.moto').removeClass('active');
        $('.rv').removeClass('active');
        $('.business').removeClass('active');
        $('.life').removeClass('active');
        $('.umbrella').removeClass('active');

        $('.home_link').addClass('bold');
        $('.landlord_link').removeClass('bold');
        $('.renters_link').removeClass('bold');
        $('.condo_link').removeClass('bold');
        $('.auto_link').removeClass('bold');
        $('.boat_link').removeClass('bold');
        $('.moto_link').removeClass('bold');
        $('.rv_link').removeClass('bold');
        $('.business_link').removeClass('bold');
        $('.life_link').removeClass('bold');
        $('.umbrella_link').removeClass('bold');
    }
    if(localStorage.getItem('opt') == 'life'){
        document.getElementById('main-header').setAttribute('style', 'background: url(../img/small/BG2Life.jpg); background-size: 100% 100%;');
        $('.life').addClass('active');
        $('.home').removeClass('active');
        $('.renters').removeClass('active');
        $('.condo').removeClass('active');
        $('.auto').removeClass('active');
        $('.boat').removeClass('active');
        $('.moto').removeClass('active');
        $('.rv').removeClass('active');
        $('.business').removeClass('active');
        $('.landlord').removeClass('active');
        $('.umbrella').removeClass('active');

        $('.life_link').addClass('bold');
        $('.home_link').removeClass('bold');
        $('.renters_link').removeClass('bold');
        $('.condo_link').removeClass('bold');
        $('.auto_link').removeClass('bold');
        $('.boat_link').removeClass('bold');
        $('.moto_link').removeClass('bold');
        $('.rv_link').removeClass('bold');
        $('.business_link').removeClass('bold');
        $('.landlord_link').removeClass('bold');
        $('.umbrella_link').removeClass('bold');
    }

    //events
	$('.home_link').click(function(){
	window.scroll(0,0);
    	$('.home').addClass('active');
    	$('.landlord').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.business').removeClass('active');
    	$('.life').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.home_link').addClass('bold');
    	$('.landlord_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.landlord_link').click(function(){
    	window.scroll(0,0);
    	$('.landlord').addClass('active');
    	$('.home').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.business').removeClass('active');
    	$('.life').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.landlord_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.renters_link').click(function(){
    	window.scroll(0,0);
    	$('.renters').addClass('active');
    	$('.home').removeClass('active');
    	$('.landlord').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.business').removeClass('active');
    	$('.life').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.renters_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.landlord_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.condo_link').click(function(){
    	window.scroll(0,0);
    	$('.condo').addClass('active');
    	$('.home').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.landlord').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.business').removeClass('active');
    	$('.life').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.condo_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.landlord_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.auto_link').click(function(){
    	window.scroll(0,0);
    	$('.auto').addClass('active');
    	$('.home').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.landlord').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.business').removeClass('active');
    	$('.life').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.auto_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.landlord_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.boat_link').click(function(){
    	window.scroll(0,0);
    	$('.boat').addClass('active');
    	$('.home').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.landlord').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.business').removeClass('active');
    	$('.life').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.boat_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.landlord_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.moto_link').click(function(){
    	window.scroll(0,0);
    	$('.moto').addClass('active');
    	$('.home').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.landlord').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.business').removeClass('active');
    	$('.life').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.moto_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.landlord_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.rv_link').click(function(){
    	window.scroll(0,0);
    	$('.rv').addClass('active');
    	$('.home').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.landlord').removeClass('active');
    	$('.business').removeClass('active');
    	$('.life').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.rv_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.landlord_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.business_link').click(function(){
    	window.scroll(0,0);
    	$('.business').addClass('active');
    	$('.home').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.landlord').removeClass('active');
    	$('.life').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.business_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.landlord_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.life_link').click(function(){
    	window.scroll(0,0);
    	$('.life').addClass('active');
    	$('.home').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.business').removeClass('active');
    	$('.landlord').removeClass('active');
    	$('.umbrella').removeClass('active');

    	$('.life_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.landlord_link').removeClass('bold');
    	$('.umbrella_link').removeClass('bold');
    });

    $('.umbrella_link').click(function(){
    	window.scroll(0,0);
    	$('.umbrella').addClass('active');
    	$('.home').removeClass('active');
    	$('.renters').removeClass('active');
    	$('.condo').removeClass('active');
    	$('.auto').removeClass('active');
    	$('.boat').removeClass('active');
    	$('.moto').removeClass('active');
    	$('.rv').removeClass('active');
    	$('.business').removeClass('active');
    	$('.life').removeClass('active');
    	$('.landlord').removeClass('active');

    	$('.umbrella_link').addClass('bold');
    	$('.home_link').removeClass('bold');
    	$('.renters_link').removeClass('bold');
    	$('.condo_link').removeClass('bold');
    	$('.auto_link').removeClass('bold');
    	$('.boat_link').removeClass('bold');
    	$('.moto_link').removeClass('bold');
    	$('.rv_link').removeClass('bold');
    	$('.business_link').removeClass('bold');
    	$('.life_link').removeClass('bold');
    	$('.landlord_link').removeClass('bold');
    });
});