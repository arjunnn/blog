---
title: "Using a Work Journal"
date: "2020-04-24"
tags: ["programming", "howto", "productivity"]
---

Since early last year, I've started maintaining a work journal, a simple markdown file to keep track of my work throughout the day. It helps when I write out my thoughts, to decide if they actually make sense, and flesh out ideas.

I've created a simple bash script to reduce the effort it takes to create a new log entry and make it as easy as entering a word.

It automatically creates a file for that day, if it is not yet created, or gets that day's file if it exists, and then opens up Vim editor with the current timestamp and in insert mode!


If you think it might he helpful to you, check it out:

```shell
homedir="/home/arjun/worklog/"
filename=$(date +%Y-%m-%d)".md"
title=$(date +%A,\ %b\ %d\ %Y)
 
cd $homedir
 
if [ -e $filename ]; then
  file_exists=true
else
  echo "# "$title > $filename
  file_exists=false
fi
 
newline_gap=''
if [ $file_exists ]; then
  newline_gap="\n\n"
fi
echo $newline_gap"## "$(date +%r)"\n- " >> $filename
vim '+ normal GA' -c 'startinsert' $filename
printf "\033c"
fortune | pokemonsay
```

Don't forget to add an alias:
```
$ worklog='sh ~/worklog/create-log.sh'
```

It is then as simple as typing `worklog`:
```
$ worklog
```

You will then see Vim editor opened up, nicely formatted, and in insert mode:
![screenshot](https://user-images.githubusercontent.com/6116387/80232950-58f47c00-8673-11ea-8a63-d574d236d522.png)