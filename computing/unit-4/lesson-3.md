#Lesson 3: Code Animal Enclosures 

## Step 1
Tell the BUILDER where to start. In MakeCode, rename the **run** element of the ``||Player:on chat command||`` block to **ocelot_wall**. 

Visit the ``||Builder:BUILDER||`` drawer on the left of the screen. The ``||Builder:BUILDER||`` drawer allows players to access and manipulate the positions mechanic of Minecraft. Imagine the ``||Builder:BUILDER||`` as an invisible ``||Agent:Agent||``. 

Set the coordinates of the first to begin. Drag a ``||Builder:builder teleport to [~0] [~0] [~0]||`` block into your ``||Player:on chat command||`` block. 

``` blocks
player.onChat("ocelot_wall", function () {
    builder.teleportTo(pos(0, 0, 0))
})
```

## Step 2
Drag the``||Positions:world [0] [0] [0]||`` oval onto your coding Workspace, replacing the **relative** coordinates oval already in there. 

Now set the ``||Positions:world [0] [0] [0]||`` coordinates to the position you want to start building your wall. We have marked our intended start point with **Yellow Wool** in the picture below with the coordinates **-38, 69, -576**. Write the coordinates of your starting point, or first marker, in your workbook. 

``` blocks
player.onChat("ocelot_wall", function () {
    builder.teleportTo(world(-38, 69, -576))
})
```

## Step 3
Tell the BUILDER the direction. Now, we need to tell it what direction to build in. Remember, Minecraft worlds have a North to South and East to West, as well as up and down grid. The easiest way to do this is to use a Compass. 

Open your inventory search for **compass**. 

Drag the **compass** to your main inventory and select it. As you move around, the **compass** does too. You can use this to find your North (the red dial is pointing North), East, South and West. The direction on the **compass** in the image below is West. This is the direction we want the ``||Builder:BUILDER||`` to work. 

## Step 4
Return to the ``||Builder:BUILDER||`` drawer and look for the ``||Builder:builder face [West (negative X)||`` code block. Add this to your main code and use the drop-down menu to set the correct direction for your build. 

Note:  If the direction your player is facing is East, North or South, change this code block accordingly. To recap, you use the **compass** to find the direction you want the ``||Builder:BUILDER||`` to go and then enter that into this code block. 


``` blocks
player.onChat("ocelot_wall", function () {
    builder.teleportTo(world(-38, 69, -576))
    builder.face(WEST)
})
```

## Step 5
Now return to the ``||Builder:BUILDER||`` menu and drag a ``||Builder:builder move [forward]||`` block to your main code. 

``` blocks
player.onChat("ocelot_wall", function () {
    builder.teleportTo(world(-38, 69, -576))
    builder.face(WEST)
    builder.move(FORWARD, 1)
})
```

## Step 6
Change the number of the ``||Builder:builder move [forward]||`` to the number of blocks you would like to build. In our example, this is **21**, but it might be different for your enclosure. 

Now drag a ``||Builder:builder turn [left]||`` code block to your main code. 

``` blocks
player.onChat("ocelot_wall", function () {
    builder.teleportTo(world(-38, 69, -576))
    builder.face(WEST)
    builder.move(FORWARD, 21)
    builder.turn(LEFT_TURN)
})
```

## Step 7
Change this to the direction you wish your ``||Builder:BUILDER||`` to face next. In our example, this will be right. 

Add another ``||Builder:builder move [forward]||`` code block and change the number to the total number of blocks you would like to build in this new direction. In our example, this is **9**. 

``` blocks
player.onChat("ocelot_wall", function () {
    builder.teleportTo(world(-38, 69, -576))
    builder.face(WEST)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
})
```

## Step 8
Tell the BUILDER what material to use. Finally, give your ``||Builder:BUILDER||`` something to build with. Return to your ``||Builder:BUILDER||`` drawer and drag a ``||Builder:builder trace a path from mark with||`` code block to your main code. 

This tells your builder to leave a trail of a given material in the path it traces as it moves. 

``` blocks
player.onChat("ocelot_wall", function () {
    builder.teleportTo(world(-38, 69, -576))
    builder.face(WEST)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.tracePath(GRASS)
})
```

## Step 9
Use the drop-down menu to change the material element to the material you would like your perimeter wall to be. In our example, we will use **Stone Bricks**. 

``` blocks
player.onChat("ocelot_wall", function () {
    builder.teleportTo(world(-38, 69, -576))
    builder.face(WEST)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.tracePath(STONE_BRICKS)
})
```

## Step 10
Run the code to build the walls.Test your code. ``||Builder:BUILDER||`` should now start at position **-38, 69, -576** and move West by **21** blocks, turn left and move **9** blocks while placing **Stone Bricks** on the way. The result is a small perimeter wall around your ocelot enclosure. You'll see this happens very fast in comparison to ``||Agent:Agent||`` and ``||Blocks:BLOCKS||`` in previous lessons. With a little preplanning, you can create huge structures in seconds. 

## Step 11
Add fencing and other details. This wall won't keep ocelots in, let's add fencing above to make sure they don't escape. 

## Step 12
Repeat the above coding or adjust your existing code to do this. You will only need to change your location to one block higher and the material to **Oak Fence**. See our example: 

``` blocks
player.onChat("ocelot_wall", function () {
    builder.teleportTo(world(-38, 70, -576))
    builder.face(WEST)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## Step 13
Now we can add some features to the enclosure for the ocelot. 

Code an ocelot to the enclosure. All that remains is to introduce the ocelot to its new enclosure. 

## Step 14
Bring a new ``||Player:on chat command||`` block to the coding window and name it **ocelot**. 

## Step 15
Drag a ``||Mobs:spawn [animal] at||`` code block from the ``||Mobs:MOBS||`` menu to your new ``||Player:on chat command||`` code. 

Use the drop-down menu to change the **animal** element to **ocelot**. 

``` blocks
player.onChat("ocelot", function () {
    mobs.spawn(OCELOT, pos(0, 0, 0))
})
```

## Step 16
Go to the ``||Positions:POSITIONS||`` drawer and grab a ``||Positions:world [0] [0] [0]||`` to replace the **relative** coordinates oval. Then change the numbers to a position inside the enclosure. In our example, we will set them to **-50, 69, -580**. 

``` blocks
player.onChat("ocelot", function () {
    mobs.spawn(OCELOT, world(-50, 69, -580))
})
```

## Step 17
Spawn the ocelot. Run your code. Once complete, you should see an **ocelot** appear! 

## Step 18
Add other enclosures and animals. Now you can add more enclosures and animals, like a **wolf** and a **polar bear**. Consider their habitat and decorate their enclosures accordingly.
