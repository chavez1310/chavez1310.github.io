---
layout: post
title:  "Relative, Absolute, and Fixed positioning?"
date:   2015-05-31

---

<p class="intro"><span class="dropcap">T</span>his week during phase 0 of DBC, we studied html and css. HTML and CSS are used pretty much all websites, so it's pretty important to know these well. One of the things I had trouble with while building my own website, and cloning another was positioning, how was I supposed to get these blocks of pixels exactly where I wanted them?
</p>

First up is Relative, if we use position: relative in our css, without specifying another positioning attribute, then this will have no effect. However, if you do say give it a top: 10px; the space where the element would have been had you not given moved is now empty, that's becasue even though you moved the item, it is still occupying that space, weird, I know.

Next, we have Absolute, when you use position: absolute, the element is now removed from the document, and placed exactly where you tell it to go. This is useful if you know exactly where you want an element to be. When you use Absolute, and move an element, the other elements in the document are also affected, they take up the free space your Aboslute positioned element has left.

Then there's Fixed, when you use position: Fixed, you set the element's position relative to the browser window. This could be useful if you would like to make your header follow the user as he scrolls his way through the page.