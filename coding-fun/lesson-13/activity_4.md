### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Change the world!
Figure out what the code will open the door to the next area.  Use ``||player:on player walk||`` event to set a block at a specific set of coordinates, which are **-43, 4, 23**. Create a ``||variable||`` and name it **count**. Set  ``||count||`` to  **0**.Wcount and will increase by 1 and place a block that's associated with that block ID. 1=Stone, 2=Grass, 3=Dirt, etc. Students should also use On Player Fall to reset the block. If they jump up, count will be reset to 0 and a block of air will be placed. Students need to determine the combination of blocks by walking around and jumping to reset the blocks.  



```template
let count = 0
player.onTravelled(WALK, function () {
    count += 1
    blocks.place(count, world(-43, 4, 23))
})
player.onTravelled(FALL, function () {
    count = 0
    blocks.place(count, world(-43, 4, 23))
})
```

