jQuery((function($){if("undefined"!=typeof ezTOC){var affix,smoothScroll;if(0!==$(".ez-toc-widget-container.ez-toc-affix").length){var affixOffset=30;void 0!==ezTOC.scroll_offset&&(affixOffset=parseInt(ezTOC.scroll_offset)),$(ezTOC.affixSelector).stick_in_parent({inner_scrolling:!1,offset_top:affixOffset})}if($.fn.shrinkTOCWidth=function(){$(this).css({width:"auto",display:"table"}),/MSIE 7\./.test(navigator.userAgent)&&$(this).css("width","")},1===parseInt(ezTOC.smooth_scroll)&&$("a.ez-toc-link").on("click",(function(){var self=$(this),target="",hostname=self.prop("hostname"),pathname=self.prop("pathname"),qs=self.prop("search"),hash=self.prop("hash");if(pathname.length>0&&"/"!==pathname.charAt(0)&&(pathname="/"+pathname),window.location.hostname===hostname&&window.location.pathname===pathname&&window.location.search===qs&&""!==hash){if(target='[id="'+hash.replace("#","")+'"]',0===$(target).length&&(console.log("ezTOC scrollTarget Not Found: "+target),target=""),void 0!==ezTOC.scroll_offset)var offset=-1*ezTOC.scroll_offset;else{var adminbar=$("#wpadminbar");offset=adminbar.length>0&&adminbar.is(":visible")?-30:0}target&&$.smoothScroll({scrollTarget:target,offset:offset,beforeScroll:deactivateSetActiveEzTocListElement,afterScroll:function(){setActiveEzTocListElement(),activateSetActiveEzTocListElement()}})}})),void 0!==ezTOC.visibility_hide_by_default){var toc=$("ul.ez-toc-list"),toggle=$("a.ez-toc-toggle"),invert=ezTOC.visibility_hide_by_default;Cookies&&1==Cookies.get("ezTOC_hidetoc")?toggle.data("visible",!1):toggle.data("visible",!0),invert&&toggle.data("visible",!1),toggle.data("visible")||toc.hide(),toggle.on("click",(function(event){event.preventDefault(),$(this).data("visible")?($(this).data("visible",!1),Cookies&&(invert?Cookies.set("ezTOC_hidetoc",null,{path:"/"}):Cookies.set("ezTOC_hidetoc","1",{expires:30,path:"/"})),toc.hide("fast")):($(this).data("visible",!0),Cookies&&(invert?Cookies.set("ezTOC_hidetoc","1",{expires:30,path:"/"}):Cookies.set("ezTOC_hidetoc",null,{path:"/"})),toc.show("fast"))}))}var headings=$("span.ez-toc-section").toArray(),headingToListElementLinkMap=getHeadingToListElementLinkMap(headings),listElementLinks=$.map(headingToListElementLinkMap,(function(value,key){return value})),scrollOffset=getScrollOffset();function setActiveEzTocListElement(){var activeHeading=getActiveHeading(scrollOffset,headings);if(activeHeading){var activeListElementLink=headingToListElementLinkMap[activeHeading.id];removeStyleFromNonActiveListElement(activeListElementLink,listElementLinks),setStyleForActiveListElementElement(activeListElementLink)}}function activateSetActiveEzTocListElement(){headings.length>0&&$(".ez-toc-widget-container").length&&$(window).on("load resize scroll",setActiveEzTocListElement)}function deactivateSetActiveEzTocListElement(){$(window).off("load resize scroll",setActiveEzTocListElement)}function getEzTocListElementLinkByHeading(heading){return $('.ez-toc-widget-container .ez-toc-list a[href="#'+$(heading).attr("id")+'"]')}function getHeadingToListElementLinkMap(headings){return headings.reduce((function(map,heading){return map[heading.id]=getEzTocListElementLinkByHeading(heading),map}),{})}function getScrollOffset(){var scrollOffset=5;void 0!==ezTOC.smooth_scroll&&1===parseInt(ezTOC.smooth_scroll)&&(scrollOffset=void 0!==ezTOC.scroll_offset?parseInt(ezTOC.scroll_offset):30);var adminbar=$("#wpadminbar");return adminbar.length&&(scrollOffset+=adminbar.height()),scrollOffset}function getActiveHeading(topOffset,headings){var scrollTop,relevantOffset=$(window).scrollTop()+topOffset+1,activeHeading=headings[0],closestHeadingAboveOffset=relevantOffset-$(activeHeading).offset().top;return headings.forEach((function(section){var topOffset=relevantOffset-$(section).offset().top;topOffset>0&&topOffset<closestHeadingAboveOffset&&(closestHeadingAboveOffset=topOffset,activeHeading=section)})),activeHeading}function removeStyleFromNonActiveListElement(activeListElementLink,listElementLinks){listElementLinks.forEach((function(listElementLink){activeListElementLink!==listElementLink&&listElementLink.parent().hasClass("active")&&listElementLink.parent().removeClass("active")}))}function correctActiveListElementBackgroundColorHeight(activeListElement){var listElementHeight;addListElementBackgroundColorHeightStyleToHead(getListElementHeightWithoutUlChildren(activeListElement))}function getListElementHeightWithoutUlChildren(listElement){var $listElement=$(listElement),content=$listElement.html();$listElement.parent().append('<li id="ez-toc-height-test" class="active">'+content+"</li>");var listItem=$("#ez-toc-height-test"),height=listItem.height();return listItem.remove(),height-$listElement.children("ul").first().height()}function addListElementBackgroundColorHeightStyleToHead(listElementHeight){$("#ez-toc-active-height").remove(),$('<style id="ez-toc-active-height">.ez-toc-widget-container ul.ez-toc-list li.active::before {height:'+listElementHeight+"px;} </style>").appendTo("head")}function setStyleForActiveListElementElement(activeListElementLink){var activeListElement=activeListElementLink.parent();activeListElement.hasClass("active")||activeListElement.addClass("active"),correctActiveListElementBackgroundColorHeight(activeListElement)}activateSetActiveEzTocListElement()}}));