// nav
$(function () {
  $("nav a[href='" + window.location.href + "']").addClass("active");
});

// recipe
$(function () {
  if ($("body#recipe").length) {
    let slug = $("#data").data("slug");
    let url = $("#data").data("api");
    $.getJSON(url + slug, function (data) {
      $.each(data, function (index, ingredient) {
        $("#imperial").append("<li>" + ingredient.Amount + " " + ingredient.Unit + " " + ingredient.Name + "</li>");
      })
      $("#measurements").show();
    });
    $("#system").change(function () {
      $("#metric").toggle();
      $("#imperial").toggle();
    });
  }
})

// submit
$(function () {
  if ($("body#submit").length) {
    let form = $("form#recipe");
    form.submit(function (e) {
      e.preventDefault();
      let data = form.serializeArray().reduce(function (a, x) { a[x.name] = x.value; return a; }, {});
      $.ajax({
        type: form.attr("method"),
        url: form.attr("action"),
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (data) {
          form.hide();
          $("#result").append(data).show();
        }
      });
    });
  }
})
//forms  
hbspt.forms.create({
	portalId: "4169016",
	formId: "ccf094e5-a5c9-4cb7-9729-ed63e11bc6d1",
    onFormSubmit: function($form) {
    ga('send', 'event', 'CloudForm', 'Submit', 'Contact Us');
        }
});
// parallax
$( document ).ready(function() {
	ScrollReveal().reveal('#lp-pom-box-86, #lp-pom-box-128, #lp-pom-image-147, #lp-pom-box-168, #lp-pom-box-262, #lp-pom-box-479, #lp-pom-box-514', {
    delay: 50,
    reset: true,
})
  
ScrollReveal().reveal('#lp-pom-box-19, #lp-pom-box-58, #lp-pom-box-203, #lp-pom-box-180, #lp-pom-box-187, #lp-pom-box-210, #lp-pom-box-215, #lp-pom-box-220, #lp-pom-box-225, #lp-pom-box-242, #lp-pom-box-249, #lp-pom-box-253, #lp-pom-box-283, #lp-pom-box-290, #lp-pom-box-319, #lp-pom-box-324, #lp-pom-box-329, #lp-pom-box-334, #lp-pom-box-342, #lp-pom-image-346', {
    delay: 50,
    reset: true,
    interval: 150,
})
$('.num_animate').waypoint(function() {
  $(this).numerator( {
	easing: 'linear', 
	duration: 2000, 
	delimiter: '.',
	rounding: 0, 
    fromValue: '0',
	toValue: parseInt($(this).text())
});
  }, {
  triggerOnce: true,
  offset: 'bottom-in-view'
});
});
// Tippy.js in Unbounce - Tool Tippy-fying your Pages. Version 0.1

// The buttons you want to add tooltips to. Enter the ID of your button,
// followed by the text you want to pop up. Add additional buttons in the
// same format if wanted/needed
var buttons = [
  ['lp-pom-text-93', 'Web technology that creates a customer-first<br />experience across devices and platforms'],
  ['lp-pom-text-96', 'Technology that loads<br />mobile websites almost instantly'],
  ['lp-pom-text-99', '100% customizable loyalty platform<br />with ready-to-use features']
];
// Don't touch this, except for 'theme', which can be 'light', 'dark', 
// or 'transparent'. You can also create your own themes if you're crafty: 
// https://atomiks.github.io/tippyjs/#creating-themes
for (let item of buttons) {
  var button = item[0];
  var text = item[1];
  document.getElementById(button).setAttribute("title", text);

  tippy('#' + button, {
  theme: 'dark'
     }
  );
}
  
function clearErrors(){var e=document.querySelectorAll(".errorSpan");if(e.length>0)for(t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t]);for(t=0;t<textInputs.length;t++)textInputs[t].classList.remove("hasError");for(var t=0;t<dropdowns.length;t++)dropdowns[t].classList.remove("hasError")}function gaForm(e){var t,r,o;if(e.preventDefault(),e.stopPropagation(),r=lp.jQuery(e.currentTarget).closest(".lp-pom-form"),(t=r.children("form")).valid())return"undefined"!=typeof eventTracker&&eventTracker._isGaLoaded()?(o=lp.jQuery.extend({category:"Form",action:"Submit",label:"#"+r.attr("id")},r.data("ubGAParams")),eventTracker._logEvent(o),ga("send","event",o.category,o.action,o.label,{hitCallback:function(){return t.submit()}})):t.submit()}function yourSubmitFunction(e,t){e.preventDefault(),lp.jQuery(".lp-pom-form form").validate().form()?(gaForm(e),lp.jQuery(".lp-pom-form form").submit()):(clearErrors(),validateForm())}var errorSpan=document.createElement("span");errorSpan.classList.add("hide"),errorSpan.classList.add("errorSpan");for(var textInputs=document.querySelectorAll("input[type=text], textarea"),optionList=document.querySelectorAll("input[type=checkbox], input[type=radio]"),dropdowns=document.querySelectorAll("select"),focusField,validateField=function(){var e=!0;lp.jQuery(".lp-pom-form form").validate().form();for(var t,r,o=focusField.id,n=lp.jQuery(".lp-pom-form form").validate().errorList,i=0;i<n.length;i++)o==n[i].element.id&&(e=!1,t=n[i].element.parentNode.id,"checkbox"!=n[i].element.type&&"radio"!=n[i].element.type||(t=document.getElementById(fieldId).parentNode.parentNode.parentNode.id),r=n[i].message);clearError(focusField),e||showError(o,t,r)},validateForm=function(){lp.jQuery(".lp-pom-form form").validate().form();for(var e=lp.jQuery(".lp-pom-form form").validate().errorList,t=0;t<e.length;t++){var r=e[t].element.id,o=e[t].element.parentNode.id;"checkbox"!=e[t].element.type&&"radio"!=e[t].element.type||(o=document.getElementById(r).parentNode.parentNode.parentNode.id);var n=e[t].message;showError(r,o,n)}},showError=function(e,t,r){var o=errorSpan.cloneNode(!0);o.textContent=r,o.classList.remove("hide"),document.getElementById(t).appendChild(o),document.getElementById(e).classList.add("hasError")},clearError=function(e){var t=e.parentNode.id;"checkbox"!=e.type&&"radio"!=e.type||(t=e.parentNode.parentNode.parentNode.id);var r=document.getElementById(t).querySelector(".errorSpan");r&&r.parentNode.removeChild(r),e.classList.remove("hasError")},i=0;i<textInputs.length;i++)textInputs[i].addEventListener("blur",function(){validateField()});for(var i=0;i<textInputs.length;i++)textInputs[i].addEventListener("focus",function(){focusField=this});for(var i=0;i<optionList.length;i++)optionList[i].addEventListener("click",function(){focusField=this});for(var i=0;i<dropdowns.length;i++)dropdowns[i].addEventListener("click",function(){focusField=this});for(var i=0;i<optionList.length;i++)optionList[i].addEventListener("change",function(){validateField()});for(var i=0;i<dropdowns.length;i++)dropdowns[i].addEventListener("change",function(){validateField()});lp.jQuery(function(e){e(".lp-pom-form .lp-pom-button").unbind("click tap touchstart").bind("click.formSubmit",function(t){yourSubmitFunction(t,e)}),e("form").unbind("keypress").bind("keypress.formSubmit",function(t){13===t.which&&"textarea"!==t.target.nodeName.toLowerCase()&&yourSubmitFunction(t,e)})});
  
jQuery.fn.FormSelectChange = function(position) {
	this.click( function()
	{
		$("#subscription_plan-ccf094e5-a5c9-4cb7-9729-ed63e11bc6d1").prop('selectedIndex', position).change();
  		$('html, body').animate({ scrollTop: $("#lp-pom-block-506").offset().top-100 }, 1000);
	});
  }
$('#lp-pom-button-186').FormSelectChange(1)
$('#lp-pom-button-15').FormSelectChange(1)
$('#lp-pom-button-392').FormSelectChange(2)
$('#lp-pom-button-440').FormSelectChange(3)
$('#lp-pom-button-421').FormSelectChange(4)

lp.jQuery(function($) {
	// The speed of the scroll in milliseconds
	var speed = 1000;
	// Find links that are #anchors and scroll to them
	$('a[href*="#"]:not([href="#"])').unbind('click.smoothScroll').bind('click.smoothScroll', function(event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top-100 }, speed);
});});
/* 
 *   jQuery Numerator Plugin 0.2.1
 *   https://github.com/garethdn/jquery-numerator
 *
 *   Copyright 2015, Gareth Nolan
 *   http://ie.linkedin.com/in/garethnolan/

 *   Based on jQuery Boilerplate by Zeno Rocha with the help of Addy Osmani
 *   http://jqueryboilerplate.com
 *
 *   Licensed under the MIT license:
 *   http://www.opensource.org/licenses/MIT
 */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        // Neither AMD nor CommonJS used. Use global variables.
        if (typeof jQuery === 'undefined') {
            throw 'jquery-numerator requires jQuery to be loaded first';
        }
        factory(jQuery);
    }
}(function ($) {

    var pluginName = "numerator",
    defaults = {
        easing: 'swing',
        duration: 500,
        delimiter: undefined,
        rounding: 0,
        toValue: undefined,
        fromValue: undefined,
        queue: false,
        onStart: function(){},
        onStep: function(){},
        onProgress: function(){},
        onComplete: function(){}
    };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function () {
            this.parseElement();
            this.setValue();
        },

        parseElement: function () {
            var elText = $.trim($(this.element).text());

            this.settings.fromValue = this.settings.fromValue || this.format(elText);
        },

        setValue: function() {
            var self = this;

            $({value: self.settings.fromValue}).animate({value: self.settings.toValue}, {

                duration: parseInt(self.settings.duration, 10),

                easing: self.settings.easing,

                start: self.settings.onStart,

                step: function(now, fx) {
                    $(self.element).text(self.format(now));
                    // accepts two params - (now, fx)
                    self.settings.onStep(now, fx);
                },

                // accepts three params - (animation object, progress ratio, time remaining(ms))
                progress: self.settings.onProgress,

                complete: self.settings.onComplete
            });
        },

        format: function(value){
            var self = this;

            if ( parseInt(this.settings.rounding ) < 1) {
                value = parseInt(value, 10);
            } else {
                value = parseFloat(value).toFixed( parseInt(this.settings.rounding) );
            }

            if (self.settings.delimiter) {
                return this.delimit(value)
            } else {
                return value;
            } 
        },

        // TODO: Add comments to this function
        delimit: function(value){
            var self = this;

            value = value.toString();

            if (self.settings.rounding && parseInt(self.settings.rounding, 10) > 0) {
                var decimals = value.substring( (value.length - (self.settings.rounding + 1)), value.length ),
                    wholeValue = value.substring( 0, (value.length - (self.settings.rounding + 1)));

                return self.addDelimiter(wholeValue) + decimals;
            } else {
                return self.addDelimiter(value);
            }
        },

        addDelimiter: function(value){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.settings.delimiter);
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( $.data( this, "plugin_" + pluginName ) ) {
                $.data(this, 'plugin_' + pluginName, null);
            }
            $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
        });
    };

}));
  // jQuery 2.2.4 requierd
  // CDN link here - https://code.jquery.com/
$(function() { 
  // Add a box to the page and nest the elements inside (can include boxes with grouped content)
  // The first element that is nested in the containing box will be what shows on page load

  // Add ID of box containing elements. 
  var container = $("#lp-pom-box-812");

  // Add the amount of time before the element switches. EX: 2000 = 2 seconds
  var time = 9000; 
  
  // code to select and centre elements 

  var allEls = container.children().not(":eq(0)");
  var notFirst = allEls.not(":eq(0)");
  notFirst.css('display', 'none');
     
  // Function to cycle through the elements in the containing box and show/hide them  
  function ShowEls(el, delay) {
    $(el[0]).fadeIn(500)
	    .delay(delay)
	    .fadeOut(500)
	    .promise()
	    .done(function() {
	      var putBack = el.splice(0, 1);
	      if (el.length >= 1) {
	        ShowEls(el, delay);
	        allEls.push(putBack[0]);	             
	      }
	    });
    }

  ShowEls(allEls, time); 

});
// See README.md for documentation
lp.jQuery().ready(function($) {
  $('input[name^=ubafs-]', 'form').remove();

  var info = JSON.stringify({
    date: new Date(),
    agent: navigator.userAgent,
    screen: {
      availWidth: screen.availWidth,
      availHeight: screen.availHeight,
      width: screen.width,
      height: screen.height
    },
    window: {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    },
    hasPlugins: ('length' in navigator.plugins && navigator.plugins.length > 0)
  });

  var jevField = $('<input type="hidden" id="ubafs-jev" name="ubafs-jev">').val(info);
  $('form').append(jevField);
});
