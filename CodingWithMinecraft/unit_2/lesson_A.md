### @explicitHints 1

# Activity: Yellow Brick Road

## Step 1 
Listening for the walk event. Drag the ``||Player: on player walk||`` block into the coding workspace.

### ~ tutorialhint
``` blocks
         player.onTravelled(WALK, function () {
	
})
```

## Step 2 
Place some grass. Drag the ``||Blocks: Place at||`` block under the ``||Player:On player walk||`` block until you hear and see it snap into place.

### ~ tutorialhint      
``` blocks
         player.onTravelled(WALK, function () {
   		 blocks.place(GRASS, pos(0, 0, 0))
})
```

## Step 3
Place a Flower. Select the **dandelion** (yellow flower) from the ``||Blocks: place at||`` using the dropdown menu to replace the **Grass** block. 

### ~ tutorialhint
        ```blocks
         player.onTravelled(WALK, function () {
    blocks.place(YELLOW_FLOWER, pos(0, 0, 0))
})
        ```

## Step 4 
Go to Minecraft and start walking for a second or two. Turn around and look at your flower trail. If you walk backward, you can watch the flowers pop from the ground as you move.


## Step 5: Try with Gold!

Add gold. Drag the ``||Player: on player walk||`` block into the coding workspace. add the ``||Blocks: Place at||`` block and place gold instead of a flower.

### ~ tutorialhint
``` blocks
player.onTravelled(TravelMethod.Walk, function () {
blocks.place(GOLD_BLOCK, pos(0, 0, 0))
})
```

## Step 6
Watch what happens. That's the right idea, but not exactly what you are going for. You are actually leaving a gold wall behind you,which is rather inconvenient. How might you sink those blocks into the ground so that they form a yellow brick road?

## Step 7  
Modify Y coordinate. Let's modify the **Y** coordinate by **subtracting 1** so that the bottoms of the bricks are one level down.

### ~ tutorialhint
``` blocks
player.onTravelled(TravelMethod.Walk, function () {
blocks.place(GOLD_BLOCK, pos(0, -1, 0))
})
```

##Step 8 
Make a proper brick road. See what happens from the Game then **add** a different block from the ``||Blocks: Blocks||`` menu!

### ~ tutorialhint
``` blocks
player.onTravelled(TravelMethod.Walk, function () {
blocks.fill(
GOLD_BLOCK,
pos(-1, -1, -1),
pos(1, -1, 1),
FillOperation.Replace
)
})
```

