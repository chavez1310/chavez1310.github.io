---
layout: post
title:  "Enumerable group_by"
date:   2015-06-14
---

<p class="intro"><span class="dropcap">I</span>n the simplest possible terms I could put it in, the enumerable method group_by pretty much just breaks a collection into groups bsed on a given criteria. When you use group_by, what is expected is a block containg the criteria by which the items are going to be grouped, and it returns a hash in which each key represents a groups, and the values are the corresponding arrays containing the members of the group.

</p>

The group_by method has slightly different affects depending on whether you are using it on an array or a hash, however I'm still trying to understand this part, more to follow...