!function(n){n(".tml").on("submit",'form[data-ajax="1"]',function(a){var e=n(this),s=e.find(":input"),t=e.find(":submit"),r=n(a.delegateTarget).find(".tml-alerts");a.preventDefault(),r.empty(),s.prop("readonly",!0),t.prop("disabled",!0),n.ajax({data:e.serialize()+"&ajax=1",method:e.attr("method")||"get",url:e.attr("action")}).always(function(){s.prop("readonly",!1),t.prop("disabled",!1)}).done(function(a){a.success?a.data.refresh?location.reload(!0):a.data.redirect?location.href=a.data.redirect:a.data.notice&&r.hide().html(a.data.notice).fadeIn():r.hide().html(a.data.errors).fadeIn()}).fail(function(a,e,s){a.responseJSON.data.errors&&r.hide().html(a.responseJSON.data.errors).fadeIn()})})}(jQuery),function(s){s(function(){var a,e;if(!themeMyLogin.action)return;switch(a=s("#user_login"),themeMyLogin.action){case"activate":(e=s("#key")).length&&e.focus();break;case"lostpassword":case"retrievepassword":case"register":a.focus();break;case"resetpass":case"rp":s("#pass1").focus();break;case"login":-1!=themeMyLogin.errors.indexOf("invalid_username")&&a.val(""),a.val()?s("#user_pass").focus():a.focus()}})}(jQuery),function(s){function a(){var a=s("#pass1").val(),e=s("#pass-strength-result");if(e.removeClass("short bad good strong"),a)switch(wp.passwordStrength.meter(a,wp.passwordStrength.userInputBlacklist(),a)){case-1:e.addClass("bad").html(pwsL10n.unknown);break;case 2:e.addClass("bad").html(pwsL10n.bad);break;case 3:e.addClass("good").html(pwsL10n.good);break;case 4:e.addClass("strong").html(pwsL10n.strong);break;case 5:e.addClass("short").html(pwsL10n.mismatch);break;default:e.addClass("short").html(pwsL10n.short)}else e.html("&nbsp;")}s(document).ready(function(){s("#pass1").val("").on("keyup paste",a)})}(jQuery);