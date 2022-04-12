# Parallax Class Editor
This project uses Javascript with gsap and scrollmagic libraries to create parallax effects for webpages. It's made to make adding parallax to any website easy. Instead of needing to program new Javascript for each parallax object, it makes it easy to add parallax by adding new classes to objects.

Instructions:
Add "parx" as a class
Add "parxa|type|x|y|trigger|duration" as a class
- type can be "to" or "from"
- x the number of pixels to move
- y is the number of pixels to move
- trigger is the height on the page to trigger the animation at (0 is the top and 1 is the bottom)
- duration is the amount of time the animation should last (1 is a full page length)
Add "fadein" as a class for the object to fade in
