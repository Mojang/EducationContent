### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# Change the world!

## Step 1
Use ``||player:on player walk||`` event to set a block at a specific set of ``||positions: world||``coordinates, which are **100, 68, 100**. Create a ``||variable||`` and name it **count**. Drag the ``||change count by 1||`` block and ``||blocks:place||`` block with an added ``||count||`` variable, this will increase by 1 and place a block that's associated with that block ID. 1=Stone, 2=Grass, 3=Dirt, etc. Use another event block, for example ``||player:on player fall||`` to reset the block. To do that, drag ``||set count||`` to **0** to restart the count and add a ``||blocks: place||`` block with an added ``||variable:count||`` variable set with the same world coordinates. This way whenever you jump in the world, the block will get reset. 

### ~ tutorialhint 
Don't forget to use ``||positions: world||`` positions to indicate the coordinates. 

```blocks
let count = 0
player.onTravelled(WALK, function () {
    count += 1
    blocks.place(count, world(100, 68, 100))
})
```


```ghost
let count = 0
player.onTravelled(WALK, function () {
    count += 1
    blocks.place(count, world(100, 68, 100))
})
player.onTravelled(FALL, function () {
    count = 0
    blocks.place(count, world(100, 68, 100))
})
```

