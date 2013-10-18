---
---

/*************************
 * Various functionality
 ************************/

function getOS() {
  var osname = "Unknown OS";
  if (navigator.appVersion.indexOf("Windows NT 5.1") != -1)osname = "winXP-32bit";
  if (navigator.appVersion.indexOf("Windows NT 6.1") != -1){
  	osname = "Win7-32bit";
  	if (navigator.appVersion.indexOf("WOW64") != -1) osname = "Win7-64bit";
  	}
  if (navigator.appVersion.indexOf("Mac") != -1) {
    if (navigator.appVersion.indexOf("10_6") != -1) osname = "SnowLeopard-64bit";
    if (navigator.appVersion.indexOf("10_7") != -1) osname = "Lion-64bit";
  	if (navigator.appVersion.indexOf("10_8") != -1) osname = "Lion-64bit";	
  }
  if (navigator.appVersion.indexOf("Linux") != -1) osname = "Linux";
  return osname;
}


/***************************
 * Document initialization
 **************************/
$(document).ready(function(){

  // background image on frontpage
  $(".splash").backstretch("{{ site.baseurl }}/resources/img/voronoi-main.png");

  // tooltips (front page)
  $(".marker").mouseover(function(){ $(".tip").show(); });
  $(".marker").mouseout(function(){ $(".tip").hide(); });

  $("#source-code").mouseover(function(){ $(this).find(".toptip").show(); });
  $("#source-code").mouseout(function(){ $(this).find(".toptip").hide(); });
  $("#scala-lang-twitter").mouseover(function(){ $(this).find(".toptip").show(); });
  $("#scala-lang-twitter").mouseout(function(){ $(this).find(".toptip").hide(); });

  // get current year and put it in span
  var currYear = new Date().getFullYear()
  $(".current-year").text(currYear);

  // same height hack for scala in a nutshell boxes
  function makeAllBoxesSameHeight(boxes) {
    maxHeight = Math.max.apply(
      Math, boxes.map(function() {
          return $(this).height();
    }).get());
    boxes.height(maxHeight);
  }
  var nutshell = $(".bullet-point").not(".span12");
  makeAllBoxesSameHeight(nutshell);

  // var newsBoxes = $(".newsbox");
  // makeAllBoxesSameHeight(newsBoxes);

  // expanding code snippets (front page)
  function expandSnippetAction(snippetID, container) {
    var codeBox = container.find(".row");

    function go() {
      var snippet = $(snippetID).html();

      // for positioning the arrow
      var arrow = $(this).parent().siblings(".code-snippet-arrow");
      var centerPoint = $(this).position().left + $(this).width()/2;
      arrow.css("left", centerPoint);

      var codeSnippetInContainer = codeBox.html();

      if (container.is(":hidden")) {
        arrow.show();
        arrow.addClass("hover");
        codeBox.html(snippet);
        container.slideDown();
      } else if (codeSnippetInContainer == snippet) {
        container.slideUp(function() {
          arrow.hide();
        });
      } else {
        var hgt = $(snippetID).height();
        arrow.addClass("hover");
        codeBox.html(snippet);
        codeBox.animate({height: hgt}, 400);
      }
    }
    return go;
  }

  var row1 = $("#code-snippet-row1");
  var row2 = $("#code-snippet-row2");

  $("#java-interop").click(expandSnippetAction("#hidden-java-interop", row1));
  $("#type-inference").click(expandSnippetAction("#hidden-type-inference", row1));
  $("#concurrency-distribution").click(expandSnippetAction("#hidden-concurrency-distribution", row1));

  $("#traits").click(expandSnippetAction("#hidden-traits", row2));
  $("#pattern-matching").click(expandSnippetAction("#hidden-pattern-matching", row2));
  $("#higher-order-functions").click(expandSnippetAction("#hidden-higher-order-functions", row2));

  // arrow color hack for hover-overs
  function arrowMouseover (snippetID, container) {

    function go () {
      var codeSnippetInContainer = container.find(".row").html();
      var snippet = $(snippetID).html();
      if (codeSnippetInContainer == snippet) {
        var arrow = $(this).parent().siblings(".code-snippet-arrow");
        arrow.addClass("hover");
      }
    }
    return go;
  }
  function arrowMouseout () {
    var arrow = $(this).parent().siblings(".code-snippet-arrow");
    arrow.removeClass("hover");
  }

  $("#java-interop").hover(arrowMouseover("#hidden-java-interop", row1), arrowMouseout);
  $("#type-inference").hover(arrowMouseover("#hidden-type-inference", row1), arrowMouseout);
  $("#concurrency-distribution").hover(arrowMouseover("#hidden-concurrency-distribution", row1), arrowMouseout);

  $("#traits").hover(arrowMouseover("#hidden-traits", row2), arrowMouseout);
  $("#pattern-matching").hover(arrowMouseover("#hidden-pattern-matching", row2), arrowMouseout);
  $("#higher-order-functions").hover(arrowMouseover("#hidden-higher-order-functions", row2), arrowMouseout);

  // truncate main visible news item if it exceeds height of sidebar
  var sideboxHgt = $(".recent-news-items").height();
  var mainboxHgt = $(".newsbox.left").height();
  if (sideboxHgt < mainboxHgt) {
    $(".newsbox.left").height(sideboxHgt);
    $(".shadow").css('display','block');
  }

  // tweets
  $(function(){
    $("#tweets").tweetMachine('', {
      backendScript: 'http://www.scala-lang.org/webscripts/ajax/getFromTwitter.php?callback=?',
      endpoint: 'statuses/user_timeline',
      user_name: 'scala_lang',
      include_retweets: true,
      exclude_replies: false,
      limit: 4,
      autoRefresh: false,
      tweetFormat: '\
        <div class="tweet-container">\
          <div class="tweet">\
            <p class="text content"></p>\
          </div>\
          <div class="caret-container">\
            <div class="caret-divider">\
              <div class="caret-outer"></div>\
              <div class="caret-inner"></div>\
            </div>\
          </div>\
          <div class="raw bottom-anchored">\
            <div class="avatar-wrapper">\
              <img class="avatar" width="50" height="50" src="" />\
            </div>\
            <span class="tweet-username">\
              <a href="" class="username" rel="external"></a>\
            </span>\
          </div>\
        </div>\
      '
    });
  });

});

<!-- prettyprint js to prepend generated pre/code tags -->
$(document).ready(styleCode);
function styleCode() {
  if (typeof disableStyleCode != "undefined") {
    return;
  }
  var a = false;
  $("pre code").parent().each(function() {
    if (!$(this).hasClass("prettyprint")) {
      $(this).addClass("prettyprint lang-scala linenums");
      a = true
    }
  });
  if (a) { prettyPrint() }
}


/***********************
 * Main Page Download Button
 **********************/
 $(document).ready(function() {
  var os = getOS();
  console.log(os);
  if (os.indexOf("Win") != -1 || os.indexOf("win") != -1) {
    $('#download-button').addClass("windows");
    var link = "http://sourceforge.net/projects/vmtk/files/vmtk/1.0/vmtk-1.0.1-"+os+".exe"
    $('#download-button').prop("href", link);
    $('#download-button').prop("target","_blank");
  }
  if (os.indexOf("Lion") != -1 || os.indexOf("Snow") != -1  ) {
    $('#download-button').addClass("macos");
    var link = "http://sourceforge.net/projects/vmtk/files/vmtk/1.0/vmtk-1.0.1-"+os+".dmg"
    $('#download-button').prop("href", link);
    $('#download-button').prop("target","_blank");
  }
  if (os == "Linux") {
    $('#download-button').addClass("unix");
    var link = "http://sourceforge.net/projects/vmtk/files/vmtk/1.0/vmtk-1.0.1.tar.gz"
    $('#download-button').prop("href", link);
    $('#download-button').prop("target","_blank");
  }
 }
 );