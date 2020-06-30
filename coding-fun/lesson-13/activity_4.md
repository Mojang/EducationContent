### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# Change the world!

## Step 1
Use ``||player:on player walk||`` event to set a block at a specific set of coordinates, which are **100, 68, 100**. Create a ``||variable||`` and name it **count**. Drag the ``||change count by 1||`` block and ``||blocks:place||`` block with an added ``||count||`` variable, this will increase by 1 and place a block that's associated with that block ID. 1=Stone, 2=Grass, 3=Dirt, etc. Use ``||player:on player fall||`` to reset the block. To do that, drag ``||change count||`` by **0** to restart the count and add a ``||blocks: place||`` block with an added ``||count||`` variable set at the same world coordinates.  

### ~tutorialhint
Don't forget to use ``||positions: world||`` positions to indicate the coordinates. 

```template
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

