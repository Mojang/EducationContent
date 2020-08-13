# Application 

## Step 1
Spawn mobs that eat a particular crop. 

```ghost
player.onTravelled(WALK, function () {
    blocks.place(CARROTS, pos(0, 0, 0))
    if (blocks.testForBlock(CARROTS, pos(0, 0, 0))) {
        mobs.spawn(HORSE, pos(0, 0, 0))
    }
})
player.onChat("jump", function () {
	
})
```
