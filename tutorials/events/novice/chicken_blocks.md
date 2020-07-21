# Chicken Rain: Blocks


## Step 1
Get an ``||player:on chat||`` command and name it **"chicken"**.

```blocks
player.onChat("chicken", function (){ 
 
}) 
```

## Step 2

Get a ``||mobs:spawn animal||`` and drag it into the ``||player:on chat||`` command. Select a **chicken** for the ``||mobs:spawn animal||`` and leave the coordinates as (0, 0, 0)—which is the current player position in 3D (x, y, z).

To change the ``||mobs:spawn animal||`` position for the chicken to 10 blocks **above** the head of the player, set the second number (Y) in the coordinates to **10** (0, 10, 0). 

**NOTE:** The **~** character in the position indicates that the coordinates are relative to the position of the player.

Go to Minecraft, press **t** to open the chat and type "chicken". Look up to see a single chicken drop from the sky from 10 blocks above your player.

```blocks
player.onChat("chicken", function () { 
    mobs.spawn(CHICKEN, pos(0, 10, 0)) 
}) 
```

## Step 3

The chicken is lonely. Get a ``||loops:repeat||`` and set it to **100** times. Drag the ``||mobs:spawn animal||`` into the ``||loops:repeat||`` 100, and then drag the ``||loops:repeat||`` 100 into the **chicken** ``||player:on chat||`` command.

Go to Minecraft, press **t** to open the chat and type chicken. Look up to see 100 chickens drop from the sky from 10 blocks above your player.

```blocks
player.onChat("chicken", function () { 
    for (let index = 0; index < 100; index++) { 
        mobs.spawn(CHICKEN, pos(0, 10, 0)) 
    } 
}) 
```

### Full Code: 

```blocks
player.onChat("chicken", function () { 
    for (let index = 0; index < 100; index++) { 
        mobs.spawn(CHICKEN, pos(0, 10, 0)) 
    } 
}) 
```

