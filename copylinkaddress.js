function getAbsoluteURL(url) {
    var link = document.createElement("a");
    link.href = url;
    return link.protocol + "//" + link.host + link.pathname;
  }
  
  window.onkeydown = function (event) {
    if (!event.ctrlKey) return;
    var hoveredLink = $("a:hover");
  
    if (!hoveredLink.length) return;
  
    const commands = {
      x: () => {
        navigator.clipboard.writeText(hoveredLink.text());
      },
      v: () => {
        var hoveredHrefAttr = hoveredLink.attr("href");
        navigator.clipboard.writeText(getAbsoluteURL(hoveredHrefAttr));
      },
    };
  
    commands[event.key]?.();
  };
  