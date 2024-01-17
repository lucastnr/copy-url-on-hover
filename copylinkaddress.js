function getAbsoluteURL(url) {
  const link = new URL(url);
  return encodeURI(link.toString());
}

window.onkeydown = (event) => {
  if (!event.ctrlKey) return;
  const hoveredLink = $("a:hover");

  if (!hoveredLink.length) return;

  const commands = {
    x: () => {
      navigator.clipboard.writeText(hoveredLink.text());
    },
    c: () => {
      const hoveredHrefAttr = hoveredLink.attr("href");
      navigator.clipboard.writeText(getAbsoluteURL(hoveredHrefAttr));
    },
  };

  commands[event.key]?.();
};
