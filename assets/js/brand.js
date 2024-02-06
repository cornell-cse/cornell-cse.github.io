$(document).ready(function() {
  // Enable Tooltips
  $('[data-toggle="tooltip"]').tooltip().css('cursor','default'); 

  // Enable Searchbar
  $('[data-search-toggle="true"]').on('click',function(e){
    $('body').toggleClass('search-enabled');
    $('.cu-search > input').focus();
  });

  // DropdownHover
  dropdownHover();
  mobileSizing();
  
  if(document.getElementById("form")){
    photoRequest();
  }
  

  // Mobile tabs
  $('.navbar-tabs a[data-toggle="tab"]').on('show.bs.tab click',function(e){
    var wrapper = $(this).closest('.navbar-tabs');

    // On selection of tab, change the toggle button text to the active tab
    $( wrapper ).find('span.active-tab').html( $(e.target).html() );

    // In mobile, collapse the tabs when one is selected.
    $(wrapper).find('.collapse').collapse('hide');
  });

  // Trigger tab with URL
  // Javascript to enable link to tab
  var url = document.location.toString();
  if (url.match('#')) {
    var selector = '.nav-tabs a[href="#' + url.split('#')[1] + '"]';
    if( $(selector).length > 0 ){
      $(selector).tab('show');
      smoothScroll( $(selector).closest('.navbar-tabs') );
    }

    // Scroll to Element
  } 

  // Change hash for page-reload
  $('.nav-tabs a').on('shown.bs.tab', function (e) {
    // Adds hash to URL
    history.replaceState(null, null, e.target.hash);
  })

  // Makes QuickBar sticky on scroll
  var bar = document.getElementById("quickBar");

  function stickToTop(){
    if(!bar.offsetParent){
      var barTop = document.getElementsByClassName('main')[0].offsetTop;
    } else{
      var barTop = bar.offsetParent.offsetTop;
    }
    
    barTop += bar.offsetTop;

    if(document.body.scrollTop >= barTop){
      bar.classList.add('fixed');
    } else{
      bar.classList.remove('fixed');
    }
  }

  // Initialize on load and on scroll
  if( window.getComputedStyle(bar).display != 'none' ){
    stickToTop();
    document.addEventListener('scroll',stickToTop);
  }
});


// DropdownHover
function dropdownHover(){
  var navGrp = '.navbar-default';
  var nav = navGrp + ' ul.nav>li';

  $(nav+'.dropdown').hover(function(){
    $('li.dropdown').removeClass('open');
    $(this).toggleClass('open');
  });

  $(nav+':not(.dropdown)').hover(function(){
    $('li.dropdown').removeClass('open');
  });

  $('header.header, .main').on('mouseout',function(){
    $('li.dropdown').removeClass('open');
    $('li.dropdown.active').toggleClass('open');
  })
}

// smoothScroll
function smoothScroll(el){
  $('html, body').animate({
    scrollTop: $(el).offset().top - $(el).height()
  }, 500);
}

// show Photo Request alert 
function photoRequest(val){
  document.getElementById('topic').addEventListener("change", function(){
    var photoRequest = document.getElementById('photoRequest').classList;

    if(this.value == 'Pv Photo' || this.value == 'Pv Video'){
      photoRequest.remove("hide");
    } else{
      if(!photoRequest.contains("hide")){
        photoRequest.add("hide");
      }
    }
  });
}

function mobileSizing(){
  $('.media-displays input[type="radio"]').on('change',function(){

    // Target the image change
    var target = $(this).data('target');
    // console.log(target);
    var type = $(this).val();

    // For swapping images, do this
    if(type.indexOf("img-") >= 0){
      var img = $(target).data(type);      
      var typeClass = type.replace("img-","");

      $(target).attr('class','media-display ' + typeClass);
      $(target).find('img').attr('src',img);
    } else{
      $(target).attr('class','media-display ' + type);
    }

  })
}