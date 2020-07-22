# Linked Walls: Blocks

## Step 1
Rename the existing ``||player:on chat||`` command into “**position**”.

```blocks
player.onChat("position", function () { 
     
}) 
```

## Step 2
Create a ``|||variable:new variable||`` and name it **PlayerPosition**. Then, drag a ``||player:player world position||`` into the “**0**” parameter of the set variable.

```blocks
let PlayerPosition: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
}) 
```

## Step 3
Create another ``|||variable: variable||`` and name it **from_position**. Then, drag an ``||positions:+ (add position)||`` block into the “**0**” argument of the set variable. 

Drag this ``||variable:variable||`` into the end of the ``||player:on chat||`` command. Get the **PlayerPosition** ``||variable:variable||`` and drag it into the top set of coordinates in the new **from_position** variable. Set the **bottom** coordinates to (**6**, 0, 0).

```blocks
let PlayerPosition: Position = null 
let from_position: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
    from_position = positions.add( 
    player.position(), 
    pos(6, 0, 0) 
    ) 
}) 
```

## Step 4
Create another ``|||variable: variable||`` and name it **to_position**. Then, drag an ``||positions:+ (add position)||`` into the “**0**” argument of the set variable.

Drag this ``||variable:variable||`` into the end of the ``||player:on chat||`` command. Get the **PlayerPosition** ``||variable:variable||`` and drag it into the top set of coordinates in the new **to_position** variable. Set the **bottom** coordinates to (**-6, 13, 0**).

```blocks
let from_position: Position = null 
let to_position: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
    from_position = positions.add( 
    player.position(), 
    pos(6, 0, 0) 
    ) 
    to_position = positions.add( 
    player.position(), 
    pos(6, 13, 0) 
    ) 
}) 
```

## Step 5
Get another ``||player:on chat||`` command and name it “**wall**”.

```blocks
player.onChat("wall", function () { 
 
}) 
```

## Step 6
Insert a ``||blocks:fill with||`` block and set it to **Glass**. Take the  **from_position** ``||variable:variable||`` and drag it into the **from** argument of the **Glass** ``||blocks:fill||`` command. Also, take the  **to_position** ``||variable:variable||`` and drag it into the **to** argument of the **Glass** ``||blocks:fill||`` command. 

```blocks
player.onChat("wall", function () { 
    blocks.fill( 
    GLASS, 
    from_position, 
    to_position, 
    FillOperation.Replace 
    ) 
}) 
```

## Step 7
Get an ``||blocks: on block broken||`` command, set it to **Glass**. Insert a ``||blocks:place||`` block and set to **Diamond**. Drag a ``||positions:pick random position||`` block into the **at** argument of the **Diamond** ``||blocks:place||`` block. Get the **from_position** variable and drag it into the **from** argument of the **Diamond** ``||blocks:place||`` block. Get the variable **to_position** and drag it into the **to** argument of the **Diamond** ``||blocks:place||`` block.

```blocks
blocks.onBlockBroken(AIR, function () { 
    blocks.place(DIAMOND_BLOCK, randpos( 
    from_position, 
    to_position 
    )) 
}) 
```

## Step 8
Duplicate the ``||blocks:on block broken||`` block structure. Change the **Glass** to **Diamond** and the **Diamond** ``||blocks:place||`` block to **Orange Wool**.

```blocks
blocks.onBlockBroken(DIAMOND_BLOCK, function () { 
    blocks.place(ORANGE_WOOL, randpos( 
    from_position, 
    to_position 
    )) 
}) 
```

## Step 9
Press the **Play** button, go into Minecraft and test out all the events.

```blocks
let from_position: Position = null 
let to_position: Position = null 
let PlayerPosition: Position = null 
blocks.onBlockBroken(AIR, function () { 
    blocks.place(DIAMOND_BLOCK, randpos( 
    from_position, 
    to_position 
    )) 
}) 
player.onChat("wall", function () { 
    blocks.fill( 
    GLASS, 
    from_position, 
    to_position, 
    FillOperation.Replace 
    ) 
}) 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
    from_position = positions.add( 
    player.position(), 
    pos(6, 0, 0) 
    ) 
    to_position = positions.add( 
    player.position(), 
    pos(6, 13, 0) 
    ) 
}) 
blocks.onBlockBroken(DIAMOND_BLOCK, function () { 
    blocks.place(ORANGE_WOOL, randpos( 
    from_position, 
    to_position 
    )) 
}) 
```

