### @explicitHints 1
# Activity: Arrow Counter

## Step 1
Create a new variable and name it **arrows**.

## Step 2
Record arrows shot. Drag ``||Player:on arrow shot||`` block into the Workspace.

## Step 3
Drag ``||Variables:change item||`` variable inside ``||Player:on arrow shot||`` block.

## Step 4
In ``||Variables:change item||``, select ``||Variables:arrows||``.

## Step 5
Put text together: click the **Advanced** category in the Toolbox to display the ``||Text:TEXT||`` Toolbox drawer. Drag ``||Text:join||`` block into ``||Player:say||`` to replace the **"Hi"** string.

### ~ tutorialhint
 ``` blocks
 let arrows = 0
player.onArrowShot(function () {
    arrows += 1
    player.say("Hello" + "World")
})
```
## Step 6
Join the variable to the message. In the first slot of ``||Text:join||``, enter **"Arrows Shot"**.

## Step 7
From ``||Variables:VARIABLES||``, drag the **arrows** variable into the second slot of ``||Text:join||``, replacing the string "World". This block will join the string "Arrows Shot: " to the number variable. ``||Player:say||`` will print the message at the top of the screen every time you shoot an arrow.

### ~ tutorialhint
``` blocks
let arrows = 0
player.onArrowShot(function () {
    arrows += 1
    player.say("Arrows Shot: " + arrows)
})
```

## Step 8
Try it Out! Go into Minecraft and try it out! Give yourself a bow and arrows by typing the following commands into the chat window:
* /give @p bow
* /give @p arrows 64
