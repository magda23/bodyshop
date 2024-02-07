'use strict';

var app = {
  init: function init() {
    app.windowResize();
    app.modals();
    app.menu();
    app.fancybox();
    app.custom();
    app.sliders();
    app.selectric();
    app.tabs();
    app.validate();
    app.accordeon();
  },

  windowResize: function windowResize() {
    $(window).on('resize', function () {});
  },

  windowLoad: function windowLoad() {
    $(window).on('load', function () {
      app.mCustomScrollbar();
    });
  },

  menu: function menu() {

    var $btnMenu = $('.jsMenu');
    $btnMenu.click(function () {
      // $(this).toggleClass('menu-is-active');
      $('.mobile_mega_menu').fadeIn(200);
      $('body').toggleClass('menuopen');
    });

    var firstMenuLink = $('.menu_wrap > ul > .menu-item-has-children > a');
    var firstMenu = $('.menu_wrap > ul > .menu-item-has-children > .sub-menu');
    var secondMenuLink = $('.menu_wrap > ul > .menu-item-has-children > .sub-menu > .menu-item-has-children > a');
    var secondMenu = $('.menu_wrap > ul > .menu-item-has-children > .sub-menu > .menu-item-has-children > .sub-menu');

    firstMenuLink.each(function () {
      var $this = $(this);
      var $thisSubMenu = $this.next('.sub-menu');

      $this.on('click', function (e) {
        e.preventDefault();
        firstMenu.slideUp(200);
        $thisSubMenu.slideToggle(200);
        secondMenu.slideUp(200);
      });
    });

    secondMenuLink.each(function () {
      var $this = $(this);
      var $thisSubMenu = $this.next('.sub-menu');

      $this.on('click', function (e) {
        e.preventDefault();
        secondMenu.slideUp(200);
        $thisSubMenu.slideToggle(200);
      });
    });

    $('.jsCloseMegaMenu').on('click', function () {
      $('.mobile_mega_menu').fadeOut(200);
      $('body').removeClass('menuopen');
    });

    $('.nav_title').on('click', function () {
      if ($(window).width() < 768) {
        var $this = $(this);
        $this.toggleClass('open');
        $this.next('.menu').slideToggle(200);
      }
    });
  },

  fancybox: function fancybox() {
    $('[data-fancybox]').fancybox();
  },

  mCustomScrollbar: function mCustomScrollbar() {
    $('.jsCustomScrollbarX').each(function () {
      var $this = $(this);
      $this.mCustomScrollbar({
        scrollInertia: 200,
        axis: 'x'
      });
    });
    $('.jsCustomScrollbarY').each(function () {
      var $this = $(this);
      $this.mCustomScrollbar({
        scrollInertia: 200,
        axis: 'y'
      });
    });
  },

  custom: function custom() {
    $('.jsMinus').click(function () {
      var $input = $(this).parent().find('input');
      if ($input.val() == '') {
        $input.val('1');
      }
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.jsPlus').click(function () {
      var $input = $(this).parent().find('input');
      if ($input.val() == '') {
        $input.val('0');
      }
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });

    $('.btn_filter').on('click', function (e) {
      e.preventDefault();
      $('#produts_filter').fadeIn(300);
      $('.bg_filter_overlay').fadeIn(300);
    });

    $('.btn_cancel_filter').on('click', function (e) {
      e.preventDefault();
      $('#produts_filter').fadeOut(300);
      $('.bg_filter_overlay').fadeOut(300);
    });

    $('.b_header').sticky({
      topSpacing: 0,
      zIndex: 5
    });

    $(document).on('mouseover', '.basket_wrap', function () {
      $('.mini_basket').fadeIn(300);
    });
    $(document).on('click touchstart', function (e) {
      var $basketWrap = $('.basket_wrap');
      if (!$basketWrap.is(e.target) && $basketWrap.has(e.target).length === 0) {
        $('.mini_basket').fadeOut(50);
      }
    });

    $('.jsSingleLink').on('click', function (e) {
      e.preventDefault();
      $('.mini_basket').fadeOut(1);
    });
  },

  sliders: function sliders() {
    $('.jsSlider').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      touchThreshold: 15,
      dots: false,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }]
    });

    $('.jsSliderForNav').each(function () {
      var $for = $(this).find('.jsSliderFor'),
        $nav = $(this).find('.jsSliderNav');

      $for.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        asNavFor: $nav,
        responsive: [{
          breakpoint: 651,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 2000
          }
        }]
      });

      $nav.slick({
        slidesToShow: 5,
        // arrows: false,
        slidesToScroll: 1,
        asNavFor: $for,
        focusOnSelect: true,
        dots: false,
        vertical: true,
        responsive: [{
          breakpoint: 1259,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            vertical: false,
            arrows: false
          }
        }]
      });
    });
  },

  selectric: function selectric() {
    $('.jsSelectric').selectric({
      maxHeight: 150,
      disableOnMobile: false,
      nativeOnMobile: false
    });
    $('.selectric').click(function (e) {
      let arr = document.querySelector('.selectric .button');
      let targ = document.querySelector('.selectric');
      let selectricStyles = window.getComputedStyle(this.parentElement.querySelector('.selectric-items'));

      if (selectricStyles.display === 'block') {
        this.querySelector('.button').style.transform = 'rotate(180deg)';
      } else {
        this.querySelector('.button').style.transform = 'rotate(0deg)';
      }
      document.querySelectorAll('.selectric-scroll li').forEach(function (liElement) {
        liElement.addEventListener('click', function () {
          document.querySelectorAll('.selectric .button').forEach(function (arrow) {
            arrow.style.transform = 'rotate(0deg)'
          });
        });
      });
    });
  },

  modals: function modals() {
    $('.jsOpenModals').magnificPopup({
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });
  },

  tabs: function tabs() {
    var tabs = $('.jsTabs');
    tabs.each(function () {
      var tabs = $(this),
        tab = tabs.find('.jsTabsTab'),
        content = tabs.find('.jsTabsItem');
      tab.each(function (index, element) {
        $(this).attr('data-tab', index);
      });

      function showContent(i) {
        tab.removeClass('-active');
        content.removeClass('-active').removeClass('-fade');
        tab.eq(i).addClass('-active');
        content.eq(i).addClass('-active');
        setTimeout(function () {
          content.eq(i).addClass('-fade');
        }, 1);
      }
      tab.on('click', function (e) {
        e.preventDefault();
        showContent(parseInt($(this).attr('data-tab')));
      });
    });
  },

  validate: function validate() {

    // $('input[type="tel"]').mask('+7 (999) 999-9999');

  },

  accordeon: function accordeon() {
    $('.jsAccord').each(function () {
      var accord = $(this),
        accord_btn = accord.find('.jsAccordBtn'),
        accord_content = accord.find('.jsAccordContent'),
        accord_item = accord.find('.jsAccordItem');

      accord_btn.on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
          $this_item = $this.closest('.jsAccordItem'),
          $this_content = $this.closest('.jsAccordItem').find('.jsAccordContent');
        if ($this.hasClass('-active')) {
          $this.removeClass('-active');
          $this_content.slideUp();
          $this_item.removeClass('item_active');
        } else {
          accord_item.removeClass('item_active');
          accord_btn.removeClass('-active');
          accord_content.slideUp();
          $this.addClass('-active');
          $this_content.slideDown();
          $this_item.addClass('item_active');
        }
      });
    });
  }

};

$(document).ready(app.init());

app.windowLoad();



$(document).ready(function () {
  $(".my_account_a").click(function () {
    $(".my_account_a").removeClass("side-nav__list-item--active");
    $(".my_account_a ").removeClass("side-nav__list-item--active");
    $(this).addClass("side-nav__list-item--active");
  });
});

/*dropdown menu*/

let addressBox = document.querySelectorAll('.chose_address_box');

function collapseCities(targetBlock) {
  let target = targetBlock.parentElement.parentElement;
  let selectAddress = target.querySelector('.chose_address_');
  let dropDownBox = target.querySelector('.drop_down');
  let infoLiElems = target.querySelectorAll('.info_li');
  let arrow = target.querySelector('.arrow_down');
  let saveButton = target.querySelector('.save_btn');
  dropDownBox.classList.toggle('show_');
  saveButton.classList.toggle('hide_btn');
  arrow.classList.toggle('arrow_up');
  infoLiElems.forEach(function (liElement) {
    liElement.addEventListener('click', function (e) {
      let name = liElement.querySelector('.drop_company').innerText;
      let address = liElement.querySelector('.drop_address').innerText;
      let template = `
          <div class="company_">${name}</div>
          <div class="address_">${address}</div>
        `;
      selectAddress.innerHTML = template;
      dropDownBox.classList.remove('show_');
      arrow.classList.remove('arrow_up');
      saveButton.classList.remove('hide_btn');
    });
  });
}
if (addressBox) {
  addressBox.forEach(function (addressInp) {
    addressInp.addEventListener('click', function () {
      collapseCities(addressInp)
    })
  })
}

/* /dropdown menu*/

/*show and hide password*/

const togglePasswords = document.querySelectorAll('.show_psw');
const password = document.querySelector('#password');
if (togglePasswords) {
  togglePasswords.forEach(function (togglePassword) {
    togglePassword.addEventListener('click', function (e) {
      let targetInput = togglePassword.parentElement.querySelector('.inputText');
      const type = targetInput.getAttribute('type') === 'password' ? 'text' : 'password';
      targetInput.setAttribute('type', type);
      togglePassword.classList.toggle('fa-eye-slash');
    });
  });
}


/*/show and hide password*/

// id for pages and block
const registrationBlock = document.querySelector('#registration_block');
const updateProfileBlock = document.querySelector('#updateProfileBlock');
const editBlock = document.querySelector('.t_');
// global functions
function validateForm(parrentBlock, callback) {
  let isRequierdFields;
  if (parrentBlock != undefined) {
    isRequierdFields = parrentBlock.querySelectorAll('.isRequierd');
  } else {
    isRequierdFields = document.querySelectorAll('.isRequierd')
  }
  const passwordField = document.querySelector('.psw_');
  const repeatPasswordField = document.querySelector('.rep_psw');
  let isValidated = false;
  let privacyConfirm = document.querySelector('.confirm_check');
  for (let i = 0; i < isRequierdFields.length; i++) {
    let targetPar = isRequierdFields[i].parentElement;
    let requiredIcon = targetPar.querySelector('.required_icon');
    let invalidFeedback = targetPar.querySelector('.invalid_feedback');
    let repPassFeedback = document.querySelector('.repeat_feedback');
    if (isRequierdFields[i].value == 0) {
      isRequierdFields[i].focus();
      requiredIcon.classList.add('show_');
      invalidFeedback.classList.add('show_');
      isRequierdFields[i].style.borderColor = 'red';
      if (isRequierdFields[i].type === 'password') {
        targetPar.querySelector('.show_psw').style.right = '40px';
      }
      isValidated = false;
      return false;
    } else {
      requiredIcon.classList.remove('show_');
      invalidFeedback.classList.remove('show_');
      isRequierdFields[i].style.borderColor = '#004236';
      if (isRequierdFields[i].type === 'password') {
        targetPar.querySelector('.show_psw').style.right = '20px';
      }
      if (repeatPasswordField) {
        if (repeatPasswordField.value != passwordField.value) {
          repPassFeedback.classList.add('show_');
        } else {
          repPassFeedback.classList.remove('show_');
        }
      }
      isValidated = true;

    }
  }
  if (privacyConfirm) {
    if (privacyConfirm.checked == false) {
      document.querySelector('.service_confirm').classList.add('show_');
      return false;
    } else {
      document.querySelector('.service_confirm').classList.remove('show_');
    }
  }
  if (callback != undefined) {
    callback(isValidated);
  }
}

function inputAnimations() {
  const inputs = document.querySelectorAll('.inputText');
  inputs.forEach(function (inp) {
    inp.addEventListener('change', function (e) {
      if (inp.value != '') {
        inp.nextElementSibling.classList.add('label_act');
      } else {
        inp.nextElementSibling.classList.remove('label_act');
      }
    });
  });
}
// registration block
if (registrationBlock) {
  const regButton = document.querySelector('#regButton');

  regButton.addEventListener('click', function (e) {
    e.preventDefault();
    validateForm(registrationBlock, function (isValidated) {
      jQuery.noConflict();
      if (isValidated) {
        window.location.reload();
        document.querySelector('.modal-backdrop').remove();
        let modal = regButton.parentElement.parentElement.parentElement.parentElement.parentElement;
        modal.style.display = 'none'
        $("#exampleModal_Two").modal();
      }
    });
  });
  inputAnimations();

}
if (editBlock) {
  let updateButton = document.querySelector('#updtButton');
  updateButton.addEventListener('click', function (e) {
    e.preventDefault();
    validateForm(editBlock, function (isValidated) {
      if (isValidated) {
        window.location.reload();
        // document.querySelector('.modal-backdrop').remove();
        // let modal = editBlock.parentElement.parentElement.parentElement.parentElement;
        // modal.style.display = 'none';
        // modal.classList.remove('in');
        // document.body.style.overflow = 'auto';
        // document.body.removeAttribute('style');
        // document.body.removeAttribute('class');
      }
    });
  });
  inputAnimations();
}
// profile block (edit/update profile page)
if (updateProfileBlock) {
  let updateButton = document.querySelector('#updateButton');

  updateButton.addEventListener('click', function (e) {
    e.preventDefault();
    validateForm();
  });
  inputAnimations();
}


const codeCheck = document.querySelectorAll('.pass_input');
const pinCodeSize = 4;

if (codeCheck) {
  codeCheck.forEach(function (check) {
    check.addEventListener('keyup', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      let checkParentDiv = check.parentElement;
      if (check.value.length === pinCodeSize) {
        checkParentDiv.innerHTML = '<i class="fas fa-check"></i>';
      }
    });
  });
}