# Copy URL on Hover

This is an extension for both chromium-based and firefox-based browsers, so you can hover over a link and hit CTRL + C to copy the link address - or hit CTRL + C to copy the link text!

If you need to copy link addresses more than once, you know how annoying it is. You need to right-click, find the "Copy link address" menu item, and click it. I find this not very efficient and overly complicated, which is why I use this extension for copying links.

This project is a originally a fork from [noahvogt/copy-url-on-hover](https://github.com/noahvogt/copy-url-on-hover).

## Installation

### Chromium

To try the latest dev version of the extension follow the steps below.

1. Download the source (either hit the 'ZIP' button you see at the top of the page, or use `git clone`) and extract it to a directory.
2. In your chromium-based browser, launch `chrome://extensions` (note: instead of 'chrome' it could be something different like 'brave')
3. Enable 'Developer Mode'.
4. Click 'Load Unpacked Extensions' and point to the above directory.

## Known Issue

For my this bug is not really a problem, but for you it may be one: **_Hovering over a link while having focused text input fields will not block your input of pressing CTRL + X or CTRL + C_** . This is a design choice, in previous versions of this software the input was blocked, but the text field lost their focus. The current design is also not considered optimal, and may be subject to change, but it is perceived as the more intuitive behaviour. If you have a better idea, please contact me.

## Roadmap

- find a cleaner solution for the above mentioned known issue
- add a proper notification when text is copied
  - settings to toggle notification on/off
