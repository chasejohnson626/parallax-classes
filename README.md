# Parallax Class Editor
This project uses Javascript with gsap and scrollmagic libraries to create parallax effects for webpages. It's made to make adding parallax to any website easy. Instead of needing to program new Javascript for each parallax object, it makes it easy to add parallax by adding new classes to objects.

Instructions:  

Add `parx` as a class. This indicates that the element will be using parallax.

Add `parxa|type|trigger|duration` as a class.  
- `parxa` should be written exactly
- `type` can either be `to` (scroll to position) or `from` (scroll from position)
- `trigger` is a number where 1 starts the animation at the bottom of the page and 0 starts at the top
- `duration` is how long the animation should last where 1 is a full screen height

Optional: add `parxslide|x|y` as a class.
- `parxslide` should be written exactly
- `x` slide position relative to original position
- `y` slide position relative to original position

Optional: add `parxsize|x|y|originX|originY` as a class.
- `parxsize` should be written exactly
- `x` is the horizontal scale (1 is original scale)
- `y` is the vertical scale (1 is original scale)
- `originX` a number that represents the percentage horizontal position that the element should grow from
- `originY` a number that represents the percentage vertical position that the element should grow from

Optional: add `parxfade` as a class. This will change the opacity to 0.
