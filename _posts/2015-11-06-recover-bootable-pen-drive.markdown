---
layout: post
title: ""
date: 2015-11-06 22:26:00
categories:
  -miscellaneous
---

Last month, when my laptop's hard disk failed hard, all my work came to a grinding halt. In a desperate
attempt to restore order in the universe, I attempted to install Ubuntu on it. So I used two drives, one as a bootable drive and another to actually store the OS and data.

Now this make-shift *ghetto* setup worked for a week or so before the performance degradation due to
running an OS out of a pen drive became too much to handle. I ended up assembling a custom PC and joining
the [#PCMasterRace](https://twitter.com/hashtag/pcmasterrace).

![pcmasterrace](http://vignette2.wikia.nocookie.net/dragonballzroleplaying/images/0/01/Glorious_pc_gaming_master_race_by_sasukekun17-d7mdjvo.jpg/revision/latest?cb=20140801050039)

Anyway, when I plugged in the pen drives from before, to my surprise, one of the drives wasn't being recognized by Windows while the other drive showed its capacity as 2MB(!). I, being a noob at such things, thought there was nothing I could do about the drives..

..until I came across `DISKPART` utility after thorough digging (googling).

Here's what I did:

{%highlight bash%}

Run CMD as Administrator
list disk
select disk 4 (mine was 4)
clean
create partition primary
active
format fs=ntfs quick
assign
exit

{%endhighlight%}  
