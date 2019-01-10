'use strict';
$(function() {
  $("nav a[href='" + window.location.href + "']").addClass("active");
});
$(function() {
  if ($("body#recipe").length) {
    let specificDay = $("#data").data("slug");
    let api_base = $("#data").data("api");
    $.getJSON(api_base + specificDay, function(arrayOfOptions) {
      $.each(arrayOfOptions, function(index, value) {
        $("#imperial").append("<li>" + value.Amount + " " + value.Unit + " " + value.Name + "</li>");
      });
      $("#measurements").show();
    });
    $("#system").change(function() {
      $("#metric").toggle();
      $("#imperial").toggle();
    });
  }
});
$(function() {
  if ($("body#submit").length) {
    let form = $("form#recipe");
    form.submit(function(event) {
      event.preventDefault();
      let req_group = form.serializeArray().reduce(function(a, b) {
        a[b.name] = b.value;
        return a;
      }, {});
      $.ajax({
        type : form.attr("method"),
        url : form.attr("action"),
        data : JSON.stringify(req_group),
        contentType : "application/json",
        success : function(data) {
          form.hide();
          $("#result").append(data).show();
        }
      });
    });
  }
});
hbspt.forms.create({
  portalId : "4169016",
  formId : "ccf094e5-a5c9-4cb7-9729-ed63e11bc6d1",
  onFormSubmit : function(callback) {
    ga("send", "event", "CloudForm", "Submit", "Contact Us");
  }
});
$(document).ready(function() {
  ScrollReveal().reveal("#lp-pom-box-86, #lp-pom-box-128, #lp-pom-image-147, #lp-pom-box-168, #lp-pom-box-262, #lp-pom-box-479, #lp-pom-box-514", {
    delay : 50,
    reset : true
  });
  ScrollReveal().reveal("#lp-pom-box-19, #lp-pom-box-58, #lp-pom-box-203, #lp-pom-box-180, #lp-pom-box-187, #lp-pom-box-210, #lp-pom-box-215, #lp-pom-box-220, #lp-pom-box-225, #lp-pom-box-242, #lp-pom-box-249, #lp-pom-box-253, #lp-pom-box-283, #lp-pom-box-290, #lp-pom-box-319, #lp-pom-box-324, #lp-pom-box-329, #lp-pom-box-334, #lp-pom-box-342, #lp-pom-image-346", {
    delay : 50,
    reset : true,
    interval : 150
  });
  $(".num_animate").waypoint(function() {
    $(this).numerator({
      easing : "linear",
      duration : 2000,
      delimiter : ".",
      rounding : 0,
      fromValue : "0",
      toValue : parseInt($(this).text())
    });
  }, {
    triggerOnce : true,
    offset : "bottom-in-view"
  });
});
/** @type {!Array} */
var buttons = [["lp-pom-text-93", "Web technology that creates a customer-first<br />experience across devices and platforms"], ["lp-pom-text-96", "Technology that loads<br />mobile websites almost instantly"], ["lp-pom-text-99", "100% customizable loyalty platform<br />with ready-to-use features"]];
for (let data of buttons) {
  var button = data[0];
  var text = data[1];
  document.getElementById(button).setAttribute("title", text);
  tippy("#" + button, {
    theme : "dark"
  });
}
/**
 * @return {undefined}
 */
function clearErrors() {
  /** @type {!NodeList<Element>} */
  var eiFrame = document.querySelectorAll(".errorSpan");
  if (eiFrame.length > 0) {
    /** @type {number} */
    i = 0;
    for (; i < eiFrame.length; i++) {
      eiFrame[i].parentNode.removeChild(eiFrame[i]);
    }
  }
  /** @type {number} */
  i = 0;
  for (; i < textInputs.length; i++) {
    textInputs[i].classList.remove("hasError");
  }
  /** @type {number} */
  var i = 0;
  for (; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove("hasError");
  }
}
/**
 * @param {!Event} event
 * @return {?}
 */
function gaForm(event) {
  var documentForm;
  var r;
  var data;
  if (event.preventDefault(), event.stopPropagation(), r = lp.jQuery(event.currentTarget).closest(".lp-pom-form"), (documentForm = r.children("form")).valid()) {
    return "undefined" != typeof eventTracker && eventTracker._isGaLoaded() ? (data = lp.jQuery.extend({
      category : "Form",
      action : "Submit",
      label : "#" + r.attr("id")
    }, r.data("ubGAParams")), eventTracker._logEvent(data), ga("send", "event", data.category, data.action, data.label, {
      hitCallback : function() {
        return documentForm.submit();
      }
    })) : documentForm.submit();
  }
}
/**
 * @param {!Event} e
 * @param {?} h
 * @return {undefined}
 */
function yourSubmitFunction(e, h) {
  e.preventDefault();
  if (lp.jQuery(".lp-pom-form form").validate().form()) {
    gaForm(e);
    lp.jQuery(".lp-pom-form form").submit();
  } else {
    clearErrors();
    validateForm();
  }
}
/** @type {!Element} */
var errorSpan = document.createElement("span");
errorSpan.classList.add("hide"), errorSpan.classList.add("errorSpan");
/** @type {!NodeList<Element>} */
var textInputs = document.querySelectorAll("input[type=text], textarea");
/** @type {!NodeList<Element>} */
var optionList = document.querySelectorAll("input[type=checkbox], input[type=radio]");
/** @type {!NodeList<Element>} */
var dropdowns = document.querySelectorAll("select");
var focusField;
/**
 * @return {undefined}
 */
var validateField = function() {
  /** @type {boolean} */
  var msg = true;
  lp.jQuery(".lp-pom-form form").validate().form();
  var fid;
  var error;
  var name = focusField.id;
  var notifications = lp.jQuery(".lp-pom-form form").validate().errorList;
  /** @type {number} */
  var i = 0;
  for (; i < notifications.length; i++) {
    if (name == notifications[i].element.id) {
      /** @type {boolean} */
      msg = false;
      fid = notifications[i].element.parentNode.id;
      if (!("checkbox" != notifications[i].element.type && "radio" != notifications[i].element.type)) {
        fid = document.getElementById(fieldId).parentNode.parentNode.parentNode.id;
      }
      error = notifications[i].message;
    }
  }
  clearError(focusField);
  if (!msg) {
    showError(name, fid, error);
  }
};
/**
 * @return {undefined}
 */
var validateForm = function() {
  lp.jQuery(".lp-pom-form form").validate().form();
  var notifications = lp.jQuery(".lp-pom-form form").validate().errorList;
  /** @type {number} */
  var i = 0;
  for (; i < notifications.length; i++) {
    var e = notifications[i].element.id;
    var fid = notifications[i].element.parentNode.id;
    if (!("checkbox" != notifications[i].element.type && "radio" != notifications[i].element.type)) {
      fid = document.getElementById(e).parentNode.parentNode.parentNode.id;
    }
    var error = notifications[i].message;
    showError(e, fid, error);
  }
};
/**
 * @param {?} el
 * @param {!Object} id
 * @param {string} reason
 * @return {undefined}
 */
var showError = function(el, id, reason) {
  var button = errorSpan.cloneNode(true);
  /** @type {string} */
  button.textContent = reason;
  button.classList.remove("hide");
  document.getElementById(id).appendChild(button);
  document.getElementById(el).classList.add("hasError");
};
/**
 * @param {!Object} e
 * @return {undefined}
 */
var clearError = function(e) {
  var id = e.parentNode.id;
  if (!("checkbox" != e.type && "radio" != e.type)) {
    id = e.parentNode.parentNode.parentNode.id;
  }
  /** @type {(Element|null)} */
  var gobel = document.getElementById(id).querySelector(".errorSpan");
  if (gobel) {
    gobel.parentNode.removeChild(gobel);
  }
  e.classList.remove("hasError");
};
/** @type {number} */
var i = 0;
for (; i < textInputs.length; i++) {
  textInputs[i].addEventListener("blur", function() {
    validateField();
  });
}
/** @type {number} */
i = 0;
for (; i < textInputs.length; i++) {
  textInputs[i].addEventListener("focus", function() {
    focusField = this;
  });
}
/** @type {number} */
i = 0;
for (; i < optionList.length; i++) {
  optionList[i].addEventListener("click", function() {
    focusField = this;
  });
}
/** @type {number} */
i = 0;
for (; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    focusField = this;
  });
}
/** @type {number} */
i = 0;
for (; i < optionList.length; i++) {
  optionList[i].addEventListener("change", function() {
    validateField();
  });
}
/** @type {number} */
i = 0;
for (; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("change", function() {
    validateField();
  });
}
lp.jQuery(function($$) {
  $$(".lp-pom-form .lp-pom-button").unbind("click tap touchstart").bind("click.formSubmit", function(alreadyFailedWithException) {
    yourSubmitFunction(alreadyFailedWithException, $$);
  });
  $$("form").unbind("keypress").bind("keypress.formSubmit", function(e) {
    if (13 === e.which && "textarea" !== e.target.nodeName.toLowerCase()) {
      yourSubmitFunction(e, $$);
    }
  });
});
/**
 * @param {number} name
 * @return {undefined}
 */
jQuery.fn.FormSelectChange = function(name) {
  this.click(function() {
    $("#subscription_plan-ccf094e5-a5c9-4cb7-9729-ed63e11bc6d1").prop("selectedIndex", name).change();
    $("html, body").animate({
      scrollTop : $("#lp-pom-block-506").offset().top - 100
    }, 1000);
  });
};
$("#lp-pom-button-186").FormSelectChange(1);
$("#lp-pom-button-15").FormSelectChange(1);
$("#lp-pom-button-392").FormSelectChange(2);
$("#lp-pom-button-440").FormSelectChange(3);
$("#lp-pom-button-421").FormSelectChange(4);
lp.jQuery(function($) {
  /** @type {number} */
  var interval_in_elements = 1000;
  $('a[href*="#"]:not([href="#"])').unbind("click.smoothScroll").bind("click.smoothScroll", function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop : $($(this).attr("href")).offset().top - 100
    }, interval_in_elements);
  });
});
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    if (typeof exports === "object") {
      factory(require("jquery"));
    } else {
      if (typeof jQuery === "undefined") {
        throw "jquery-numerator requires jQuery to be loaded first";
      }
      factory(jQuery);
    }
  }
})(function($) {
  /**
   * @param {!Object} elem
   * @param {?} options
   * @return {undefined}
   */
  function Plugin(elem, options) {
    /** @type {!Object} */
    this.element = elem;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    /** @type {string} */
    this._name = pluginName;
    this.init();
  }
  /** @type {string} */
  var pluginName = "numerator";
  var defaults = {
    easing : "swing",
    duration : 500,
    delimiter : undefined,
    rounding : 0,
    toValue : undefined,
    fromValue : undefined,
    queue : false,
    onStart : function() {
    },
    onStep : function() {
    },
    onProgress : function() {
    },
    onComplete : function() {
    }
  };
  Plugin.prototype = {
    init : function() {
      this.parseElement();
      this.setValue();
    },
    parseElement : function() {
      var elText = $.trim($(this.element).text());
      this.settings.fromValue = this.settings.fromValue || this.format(elText);
    },
    setValue : function() {
      /** @type {!Plugin} */
      var self = this;
      $({
        value : self.settings.fromValue
      }).animate({
        value : self.settings.toValue
      }, {
        duration : parseInt(self.settings.duration, 10),
        easing : self.settings.easing,
        start : self.settings.onStart,
        step : function(now, fx) {
          $(self.element).text(self.format(now));
          self.settings.onStep(now, fx);
        },
        progress : self.settings.onProgress,
        complete : self.settings.onComplete
      });
    },
    format : function(value) {
      /** @type {!Plugin} */
      var that = this;
      if (parseInt(this.settings.rounding) < 1) {
        /** @type {number} */
        value = parseInt(value, 10);
      } else {
        /** @type {string} */
        value = parseFloat(value).toFixed(parseInt(this.settings.rounding));
      }
      if (that.settings.delimiter) {
        return this.delimit(value);
      } else {
        return value;
      }
    },
    delimit : function(value) {
      /** @type {!Plugin} */
      var self = this;
      value = value.toString();
      if (self.settings.rounding && parseInt(self.settings.rounding, 10) > 0) {
        var decimals = value.substring(value.length - (self.settings.rounding + 1), value.length);
        var wholeValue = value.substring(0, value.length - (self.settings.rounding + 1));
        return self.addDelimiter(wholeValue) + decimals;
      } else {
        return self.addDelimiter(value);
      }
    },
    addDelimiter : function(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.settings.delimiter);
    }
  };
  /**
   * @param {boolean} options
   * @return {?}
   */
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if ($.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, null);
      }
      $.data(this, "plugin_" + pluginName, new Plugin(this, options));
    });
  };
});
$(function() {
  /**
   * @param {!Array} array
   * @param {number} delay
   * @return {undefined}
   */
  function remove(array, delay) {
    $(array[0]).fadeIn(500).delay(delay).fadeOut(500).promise().done(function() {
      var splitOnPrefix = array.splice(0, 1);
      if (array.length >= 1) {
        remove(array, delay);
        tokens.push(splitOnPrefix[0]);
      }
    });
  }
  var jQFieldset = $("#lp-pom-box-812");
  /** @type {number} */
  var delay = 9000;
  var tokens = jQFieldset.children().not(":eq(0)");
  var inpel = tokens.not(":eq(0)");
  inpel.css("display", "none");
  remove(tokens, delay);
});
lp.jQuery().ready(function($) {
  $("input[name^=ubafs-]", "form").remove();
  /** @type {string} */
  var level = JSON.stringify({
    date : new Date,
    agent : navigator.userAgent,
    screen : {
      availWidth : screen.availWidth,
      availHeight : screen.availHeight,
      width : screen.width,
      height : screen.height
    },
    window : {
      innerWidth : window.innerWidth,
      innerHeight : window.innerHeight
    },
    hasPlugins : "length" in navigator.plugins && navigator.plugins.length > 0
  });
  var label = $('<input type="hidden" id="ubafs-jev" name="ubafs-jev">').val(level);
  $("form").append(label);
});

