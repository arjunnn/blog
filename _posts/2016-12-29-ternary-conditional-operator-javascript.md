---
layout: post
title: Conditional (ternary) operator in JavaScript
date: "2016-12-29"
tags: javascript
---
I noticed an interesting behavior while using the ternary operator in JavaScript
today for a simple Palindrome program. Usually ternary operator is used as a
shortcut for `if` statement.

So this:

{% highlight javascript %}

function palindrome(str) {

  var re = /[^a-z 0-9]/gi;
  str = str.replace(re, "").toLowerCase().split(" ").join("");

  if(str === str.split("").reverse().join("")){
    return true;
  }
  else {
    return false;
  }
  return true;
}

palindrome("_RaceCar__");

{% endhighlight %}

becomes this:

{% highlight javascript %}


function palindrome(str) {
  var re = /[^a-z 0-9]/gi;
  str = str.replace(re, "").toLowerCase().split(" ").join("");
  return str === str.split("").reverse().join("") ? true : false; //note the difference and redundancy
}

palindrome("_RaceCar__");

{% endhighlight %}

As it turns out, blindly copying expressions from the `if` statement won't work.

{% highlight javascript %}

str === str.split("").reverse().join("") ? return true : return false; //NOPE.

{% endhighlight %}

Anyway, in this case, we don't even need an `if` statement, or even a ternary operator.
 We can just return the result of the comparision.  ¯\_(ツ)_/¯
 like so:

{% highlight javascript %}

return str === str.split("").reverse().join("");  //that's it!

{% endhighlight %}

I'll try to read up on why this happens.

More info here:

[http://stackoverflow.com/a/7046153](http://stackoverflow.com/a/7046153)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
