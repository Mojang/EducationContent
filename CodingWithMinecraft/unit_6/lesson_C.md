### @explicitHints 1
# Activity: Burger 

## Step 1
Make a function. In the ``||Functions:FUNCTIONS||`` Toolbox drawer, click the **Make a Function** button.

Name the function. Name this function *bottomBun()*, and click **Ok**.

## Step 2
Make the meat(), lettuce(), tomato(), topBun() functions. Repeat the previous step to create two more functions named: **meat, lettuce, tomato,** and **Top Bun**.

## Step 3
Drag an ``||Player:on chat command||`` block onto the Workspace.

Rename this ``||Player:on chat command||`` to **"burger"**.

## Step 4
Drag five blocks ``||Functions:call function bottomBun||``, ``||Functions:call function meat||``, ``||Functions:call function lettuce||`` , ``||Functions:call function tomato||`` and ``||Functions:call function topBun||`` into ``||Blocks:on chat command "play"||``.

**NOTE**: The order of these function calls is important.

### ~ tutorialhint
``` blocks
function lettuce()  {

}
function bottomBun()  {

}
function topBun()  {

}
player.onChat("burger", function () {
    bottomBun()
    meat()
    lettuce()
    tomato()
    topBun()
})
function meat()  {

}
function tomato()  {

}
```

## Step 5
Create the bottom bun. The first thing you’ll do is create the bottom bun.

Drag a ``||Blocks:fill||`` into ``||Functions:bottomBun||``. Change the block by clicking **Oak Wood Planks** from the drop-down menu.

## Step 6
Enter the coordinates for the top bun with a starting position of **(~3, ~0, ~3)** and ending position of **(~8, ~0, ~8)**.

### ~ tutorialhint
``` blocks
function bottomBun() {
    blocks.fill(
    PLANKS_OAK,
    pos(3, 0, 3),
    pos(8, 0, 8),
    FillOperation.Replace
    )
}
function lettuce() {
}
player.onChat("burger", function () {
    bottomBun()
    meat()
    lettuce()
    tomato()
    topBun()
})
function topBun() {

}
function meat() {

}
function tomato() {

}
```

## Step 7
“Cook” the meat. Let’s create a layer of meat. Drag a ``||Blocks:fill||`` into ``||Functions:meat||``. 

Adjust the material by selecting **Brown Terracotta** from the drop-down menu. Then change the position in the coordinates section to a starting position of **(~4, ~1, ~4)** and a finishing position of **(~7, ~1, ~7)**.

Duplicate it. 

### ~ tutorialhint
``` blocks
function bottomBun() {
    blocks.fill(
    PLANKS_OAK,
    pos(3, 0, 3),
    pos(8, 0, 8),
    FillOperation.Replace
    )
}
function lettuce() {

}
player.onChat("burger", function () {
    bottomBun()
    meat()
    lettuce()
    tomato()
    topBun()
})
function topBun() {

}
function meat() {
    blocks.fill(
    BROWN_TERRACOTTA,
    pos(4, 1, 4),
    pos(7, 1, 7),
    FillOperation.Replace
    )
}
function tomato() {

}
```
## Step 8
Create the lettuce. Let’s create a layer of lettuce. Drag a ``||Blocks:fill||`` into the ``||Functions:lettuce||`` function.

Change the material selecting **Lime Concrete** from the drop-down menu. Then change the position in the coordinates to a starting position of **(~4, ~2, ~4)** and a finishing position of **(~7, ~2, ~7)**.

### ~ tutorialhint
``` blocks

function bottomBun() {
    blocks.fill(
    PLANKS_OAK,
    pos(3, 0, 3),
    pos(8, 0, 8),
    FillOperation.Replace
    )
}
function lettuce() {
     blocks.fill(
    LIME_CONCRETE,
    pos(4, 2, 4),
    pos(7, 2, 7),
    FillOperation.Replace
    )
}
player.onChat("burger", function () {
    bottomBun()
    meat()
    lettuce()
    tomato()
    topBun()
})
function topBun() {

}
function meat() {
    blocks.fill(
    BROWN_TERRACOTTA,
    pos(4, 1, 4),
    pos(7, 1, 7),
    FillOperation.Replace
    )
}
function tomato() {

}
```

## Step 9
Create the tomato. Let’s create a layer of tomato. Drag a ``||Blocks:fill||`` into the ``||Functions:tomato||`` function.

Change the material selecting **Red Concrete** from the drop-down menu. Then change the position in the coordinates to a starting position of **(~4, ~3, ~4)** and a finishing position of **(~7, ~3, ~7)**.

### ~ tutorialhint
``` blocks

function tomato() {
    blocks.fill(
    RED_CONCRETE,
    pos(4, 3, 4),
    pos(7, 3, 7),
    FillOperation.Replace
    )
}
tomato()

```

## Step 10
Create the top bun. The final function is the **top bun**. To give the burger a more realistic look, this function will fill in two layers instead of just one. Drag two ``||Blocks:fill||`` blocks into the ``||Functions:topBun||`` function.

Change the material for each fill to **Oak Wood Planks**.

## Step 11
Change the top fill coordinates first. The position for the coordinates should have a starting position of **(~3, ~4, ~3)** and a finishing position of **(~8, ~4, ~8)**.

## Step 12
The bottom fill should have a starting position of **(~4, ~5, ~4)** and a finishing position of **(~7, ~5, ~7)**.

### ~ tutorialhint
``` blocks

function topBun() {
    blocks.fill(
    PLANKS_OAK,
    pos(3, 4, 3),
    pos(8, 4, 8),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    pos(4, 5, 4),
    pos(7, 5, 7),
    FillOperation.Replace
    )
}
topBun()

```

## Step 13

Complete the program!

### ~ tutorialhint
``` blocks
function meat() {
    blocks.fill(
    BROWN_TERRACOTTA,
    pos(4, 1, 4),
    pos(7, 1, 7),
    FillOperation.Replace
    )
}
player.onChat("burger", function () {
    bottomBun()
    meat()
    lettuce()
    tomato()
    topBun()
})
function topBun() {
    blocks.fill(
    PLANKS_OAK,
    pos(3, 4, 3),
    pos(8, 4, 8),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_OAK,
    pos(4, 5, 4),
    pos(7, 5, 7),
    FillOperation.Replace
    )
}
function tomato() {
    blocks.fill(
    RED_CONCRETE,
    pos(4, 3, 4),
    pos(7, 3, 7),
    FillOperation.Replace
    )
}
function bottomBun() {
    blocks.fill(
    PLANKS_OAK,
    pos(3, 0, 3),
    pos(8, 0, 8),
    FillOperation.Replace
    )
}
function lettuce() {
    blocks.fill(
    LIME_CONCRETE,
    pos(4, 2, 4),
    pos(7, 2, 7),
    FillOperation.Replace
    )
}

```
