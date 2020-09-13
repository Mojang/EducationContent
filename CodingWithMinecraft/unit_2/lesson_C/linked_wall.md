### @explicitHints 1

# The Linked Wall

## Step 1
Get a jump start. You are given some starter code to use for this activity. Now add a new ``||Player:on chat||`` event handler. Change **"jump"** to **"wall"**.

```template
let PlayerPosition: Position = null
let from_position: Position = null
let to_position: Position = null
player.onChat("position", function () {
    PlayerPosition = player.position()
    from_position = positions.add(
    PlayerPosition,
    pos(6, 0, 0)
    )
    to_position = positions.add(
    PlayerPosition,
    pos(-6, 13, 0)
    )
})
```

## Step 2
Build a wall: from ``||Blocks:BLOCKS||``, place a ``||Blocks:fill with||`` block inside the ``||Player:chat command "wall"||``.

## Step 3
Adjust some things: change **grass** into **glass** inside the ``||Blocks:fill with||`` block.

## Step 4
From ``||Variables:VARIABLES||`` drag ``||Variables:from_position||`` into the **from**  ``||Blocks:fill with||`` block.

## Step 5
Next, drag ``||Variables:to_position||`` into the **to** in the ``||Blocks:fill with||`` block. Try the command out in Minecraft.

### ~ tutorialhint
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

## Step 6
React when blocks are broken. From ``||Blocks:BLOCKS||``, drag a ``||Blocks:on broken||`` block onto the Workspace.

## Step 7
Change **grass** into **glass**.

## Step 8
From ``||Blocks:BLOCKS||`` put a ``||Blocks:place||`` block  into the ``||Blocks:on broken||`` block.

## Step 9
Change **grass** into **diamond**.

### ~ tutorialhint
```blocks
blocks.onBlockBroken(GLASS, function () {
    blocks.place(DIAMOND_BLOCK, pos(0, 0, 0))
})
```
## Step 10
Fix the position code. Place pick ``||Positions:random position||`` block into the ``||Blocks:place diamond||`` block. 

## Step 11
Put ``||Variables:from_position||`` into **from** in this block.

Put ``||Variables:to_position||`` into **to** in this block.  

### ~ tutorialhint
```blocks
blocks.onBlockBroken(GLASS, function () {
    blocks.place(DIAMOND_BLOCK, randpos(
    from_position,
    to_position
    ))
})
```

## Step 12
Duplicate ``||Blocks:on glass broken||`` block and change a few things. Change **glass** into **diamond**.

## Step 13
Then change ``||Blocks:place diamond||`` to ``||Blocks:place orange wool||``. Now try it out in Minecraft. 

### ~ tutorialhint

```blocks

let to_position: Position = null
let from_position: Position = null
let PlayerPosition: Position = null
blocks.onBlockBroken(GLASS, function () {
    blocks.place(DIAMOND_BLOCK, randpos(
    from_position,
    to_position
    ))
})
blocks.onBlockBroken(DIAMOND_BLOCK, function () {
    blocks.place(ORANGE_WOOL, randpos(
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
    PlayerPosition,
    pos(6, 0, 0)
    )
    to_position = positions.add(
    PlayerPosition,
    pos(-6, 13, 0)
    )
})
```
