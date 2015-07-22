---
layout: post
title:  "Class Methods"
date:   2015-06-28
---

<p class="intro"><span class="dropcap">C</span>lass methods are methods that are called on a class, they exist on a class, even whe we don't have an instance. Defining class methods is very simple. We do it just the same way we do instance methods except that we put the self keyword in front of it. So, self.method_name let's us know that that is a class method.</p>

When should I use a class method? You may ask. Class methods are for anything that does not deal with an individual instance of a class.We are going to use a class method when we want the class, to do something for us. Even though there may not be an instance in sight. It doesn't matter, maybe there are instances, maybe there aren't.

We can write methods inside of our classes. Writing methods inside of classes is powerful, because the methods can apply only to the individual instance that we're working with.