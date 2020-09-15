### @explicitHints 1

# Activity: Leap of Faith Mini-Game 

## Step 1
Click the Advanced tab on the Toolbox to display more Toolbox categories.

In the ``||Functions:FUNCTIONS||`` Toolbox drawer, click the Make a Function button. Name the function **pool**, and click **Ok**.

## Step 2
Make the platform() and teleport() functions. Repeat the previous step to create two more functions named: **platform** and **teleport**.

## Step 3
Drag ``||Player:on chat command||`` onto the Workspace. Rename this ``||Player:on chat command||`` to **"play"**.

## Step 4
Drag the three blocks ``||Functions:call function pool||``, ``||Functions:call function platform||``, ``||Functions:call function teleport||`` into ``||Blocks:on start||``.

### ~ tutorialhint
``` blocks
pool()
platform()
teleport()
function pool(){}
function platform(){}
function teleport(){}
```

## Step 5
The ``||Blocks:on start||`` block runs when the program starts. This can be a pain at times if you are testing code or want to restart the program. Use the buttons in the lower-left corner to restart your code on these occasions. Click the stop button in the lower-left corner of your code connection window.

## Step 6
Fill in the pool. Drag ``||Blocks:fill with||`` block into ``||Functions:pool||``. ``||Blocks:Fill with||`` will fill a three-dimensional box from the first set of coordinates to the second set of coordinates.

## Step 7
Using the drop-down menu in ``||Blocks:fill with||``, select a block of water.

In ``||Blocks:fill with||``, enter the following values for the first set of from coordinates: **(0, -1, 0)** and  **(2, -3, 2)** as the second set of coordinates.

### ~ tutorialhint
``` blocks
function pool() {
    blocks.fill(
    WATER,
    pos(0, -1, 0),
    pos(2, -3, 2),
    FillOperation.Replace
    )
}
pool()
```

## Step 8
Build a platform. Drag another ``||Blocks:fill with||`` block into ``||Functions:platform||``. Using the drop-down menu in the ``||Blocks:fill with||``, select a **DoubleWoodenSlab**.

## Step 9
In the ``||Blocks:fill with||`` block, enter the following values for the first set of from coordinates: **(1, 64, 1)**.

Enter the following values for the second set of to coordinates: **(3, 64, 3)**.

### ~ tutorialhint
``` blocks
function platform() {
    blocks.fill(
    DOUBLE_WOODEN_SLAB,
    pos(1, 64, 1),
    pos(3, 64, 3),
    FillOperation.Replace
    )
}
platform()
```

## Step 10
Teleport yourself. The last step is to teleport the player to a spot just above the middle of the platform. Drag a ``||Player:teleport to||`` into ``||Functions:teleport||``.

## Step 11
In ``||Player:teleport to||``, enter the following values for the coordinates: **(2, 65, 2)**.

## Step 12
Set the gamemode to survival by going to ``||Gameplay:GAMEPLAY||`` and dragging out a ``||Gameplay:change game mode to||``. Try out your mini-game!

### ~ tutorialhint
``` blocks

function teleport() {
    player.teleport(pos(2, 65, 2))
    gameplay.setGameMode(
        SURVIVAL,
        mobs.target(LOCAL_PLAYER)
    )
}
teleport()

```

## Step 13
Find a spot of open ground. Remember, because your game basically starts whenever the ``||Blocks:on start||`` loop executes, you might need to start and stop the code to get it to reset for you. Then take a Leap of Faith! Remember that when you are up on the platform, holding down the Shift key while moving around will keep you from falling off while you look for a good spot to jump. 

Click the stop button in the lower-left corner of your code connection window.

## Step 14
Restart the coding environment. Click the play button. If the play button is not on, then your code will not run in Minecraft.

### ~ tutorialhint
``` blocks

function pool() {
    blocks.fill(
    WATER,
    pos(0, -1, 0),
    pos(2, -3, 2),
    FillOperation.Replace
    )
}
function teleport() {
    player.teleport(pos(2, 65, 2))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
}
function platform() {
    blocks.fill(
    DOUBLE_WOODEN_SLAB,
    pos(1, 64, 1),
    pos(3, 64, 3),
    FillOperation.Replace
    )
}
pool()
platform()
teleport()
```
