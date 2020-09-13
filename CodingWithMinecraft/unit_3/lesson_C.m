### @explicitHints 1

# Activity: Auto Farmer

## Step 1
Get ``||Player:on walk||`` block and drag it into the workspace.

Drag the ``||Mobs:spawn||`` block into ``||Player:on walk||``block. Select the **sheep** or another animal for your farm in ``||Mobs:spawn||`` block.

## Step 3
Put the coordinates **(~0, ~0, ~1)** in ``||Mobs:spawn||`` block. Sheep will spawn one block south of the player along the **Z**-axis.

### ~ tutorialhint
``` blocks
player.onTravelled(TravelMethod.Walk, function () {
    mobs.spawn(SHEEP, pos(0, 0, 1))
})
```

## Step 4
Start the sheep pen. Drag a new ``||Player:on chat command||`` to the workspace and change the command to **"pen"**.

## Step 5
Place a ``||Blocks:fill with||`` bllock inside the ``||Player:on chat command "pen"||``.

Adjust the ``||Blocks:fill with||`` to **Nether Brick Fence**. And change coordinates to **~5, ~0, ~1** and **~-5, ~4, ~1**. 

### ~ tutorialhint
``` blocks
    player.onTravelled(TravelMethod.Walk, function () {
        mobs.spawn(SHEEP, pos(0, 0, 1))
    })
    player.onChat("pen", function () {
        blocks.fill(
        NETHER_BRICK_FENCE,
        pos(5, 0, 1),
        pos(-5, 4, 1),
        FillOperation.Replace
        )
})
```

## Step 6
Create side walls. Right-click the ``||Blocks:fill with||`` block that is making your south wall and duplicate it twice. These new duplicates will be your side walls.

## Step 7
Adjust the material for the side walls. One side can be **Acacia Fence**, and the other can be **Birch Fence**.

## Step 8
Adjust the coordinates for **Acacia Fence** to **~5, ~0, ~1** and **~-5, ~4, ~20**; and **Birch Fence** to **~5, ~0, ~1** and **~-5, ~4, ~20**.

### ~ tutorialhint
``` blocks 
    player.onTravelled(TravelMethod.Walk, function () {
        mobs.spawn(SHEEP, pos(0, 0, 1))
    })
    player.onChat("pen", function () {
        blocks.fill(
        NETHER_BRICK_FENCE,
        pos(5, 0, 1),
        pos(-5, 4, 1),
        FillOperation.Replace
        )
        blocks.fill(
        BIRCH_FENCE,
        pos(-5, 0, 1),
        pos(-5, 4, 20),
        FillOperation.Replace
        )
        blocks.fill(
        ACACIA_FENCE,
        pos(5, 0, 1),
        pos(5, 4, 20),
        FillOperation.Replace
        )
})
```
## Step 9
Close the sheep pen with north entrance. **Z** should be exactly **20** blocks away from your south wall because that is how long your side walls are. Try it out in Minecraft and spawn as many sheep as you want!

### ~ tutorialhint
``` blocks
player.onChat("pen", function () {
    blocks.fill(
    blocks.block(Block.NetherBrickFence),
    positions.create(5, 0, -1),
    positions.create(-5, 4, -1),
    FillOperation.Replace
    )
    blocks.fill(
    blocks.block(Block.AcaciaFence),
    positions.create(-5, 0, -1),
    positions.create(-5, 4, 20),
    FillOperation.Replace
    )
    blocks.fill(
    blocks.block(Block.BirchFence),
    positions.create(5, 0, -1),
    positions.create(5, 4, 20),
    FillOperation.Replace
    )
    blocks.fill(
    blocks.block(Block.NetherBrickFence),
    positions.create(5, 0, 20),
    positions.create(-5, 4, 20),
    FillOperation.Replace
    )
})
```
