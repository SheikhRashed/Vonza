function showMenu() {
  $('#mainNavigation').css('width', '100%');
  $('#openNav').hide();
  $('#closeNav').show();
}

function hideMenu() {
  $('#mainNavigation').css('width', '0%');
  $('#openNav').show();
  $('#closeNav').hide();
}

function copyCode() {
  alert($('#copy-code').val());
}

$(document).ready(function() {
  var dataTable = $('.data-table-holder > table');
  var selectControl = $('.form-control-select');

  if (selectControl.length > 0) {
    selectControl.select2({
      placeholder: 'Please choose and option...',
      allowClear: true
    });
  }
  if (dataTable.length > 0) {
    dataTable.DataTable();
  }

  var windowHeight = $(window).height();
  var containerHeight = $('.header-less #wrapper .container > .row > div, #wrapper').height();

  if (windowHeight <= containerHeight) {
    $('html').addClass('height-auto');
  }

  var frameClass = $('.modal-video-holder iframe');
  $('.video-testimonail').on('click', function() {
    var videoSrc = $(this).attr('data-video-frame');
    var title = $(this)
      .find('h3')
      .text();
    $('#video-modal .modal-title')
      .empty()
      .text(title);
    frameClass.attr('src', '');
    frameClass.attr('src', videoSrc);
    $('#video-modal').modal({
      backdrop: 'static',
      keyboard: false
    });
  });

  $('#video-modal .close').on('click', function() {
    frameClass.attr('src', '');
  });

  $('.pricing-tabs-nav a').on('click', function(e) {
    e.preventDefault();
    $(this)
      .closest('.pricing-tabs-nav')
      .find('.active')
      .removeClass('active');
    $(this).addClass('active');
    var switchForm = $(this).attr('href');
    $(switchForm)
      .parent('div')
      .find('.active')
      .removeClass('active')
      .addClass('d-none');
    $(switchForm)
      .addClass('active')
      .removeClass('d-none');
  });
});

(function smoothscroll() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothscroll);
    window.scrollTo(0, currentScroll - currentScroll / 5);
  }
})();

jQuery('#scrolToTop').click(function() {
  jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});

$(window).scroll(function() {
  var $height = $(window).scrollTop();
  if ($height > 50) {
    $('#header').addClass('active');
  } else {
    $('#header').removeClass('active');
  }
});

// Side Bar
  // side bar
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.display = "block";
    document.getElementsByClassName("sidebar").style.display = "none";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.display = "none";
  }  


  $(document).ready(function() {
    $('.sidebarBtn').click(function() {
      $('.sidebar').toggleClass('active');
      $('.sidebarBtn').toggleClass('toggle');
    })
  });
  
     