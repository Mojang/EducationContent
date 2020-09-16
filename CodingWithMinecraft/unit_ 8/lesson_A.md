### @explicitHints 1

#Activity: We Built a Zoo

##Step 1
You will need an ``||Loops:on start||`` for the project. Create a new variable and name it **animalarray**.

## Step 2
Make an array for animals. Drag ``||Variables:set||`` block into the ``||Player:On start||`` block.

## Step 3
Using the drop-down menu in ``||Variables:set||``, select the **animalarray** variable.

Drag a ``||Arrays:create array with||`` block into ``||Variables:set "animalarray" to||``.

## Step 4
Add animals to the array. Click the Plus **(+)** sign on ``||Arrays:create array with||`` to add 7 more slots in your array. The total length of your array should be 8.

## Step 5
Drag an **Animal block** into the first slot of ``||Arrays:create array with||``.

Populate the rest of your array with animal blocks. You can right-click on ``||Mobs:animal||`` and select **Duplicate** to make copies of this block.

## Step 6
Pick your animals. Create a zoo with 8 different types of animals. Be aware that certain animals will eat other animals! For example, ocelots and chickens don’t get along very well. Think about what kind of zoo you want, and plan accordingly.
Using the drop-down menus in the ``||Mobs:animal||`` blocks, select different types of animals in your array.

## Step 7
Let’s have an animal pen. Now that you have your Animal Array set up, let’s work on creating a fenced-in enclosure for your zoo. You will use the ``||Builder:BUILDER||`` blocks for this. The Builder is like an invisible cursor in the game that can place blocks along a path very quickly. You will direct the Builder to go to a point in the southeast corner, and create a mark, which is an invisible point of reference. Then you will give it a series of commands to make it trace out a square. Finally, the builder is able to place fences along this path.

## Step 8
Drag an ``||Player:on chat command||`` block to the Workspace.

Rename the command “pen”.

## Step 9
Drag ``||Builder:builder teleport to||`` block into ``||PLayer:on chat command "pen"||``.

## Step 10
Find a place for the pen. Recall that Minecraft coordinates are always specified in **X, Y, Z**coordinates where **X** is west to east and **Z** is north to south. We want the Builder to start in the northeast corner of the pen in relation to the player, so go ahead and change the coordinates to specify a location 5 blocks east and 5 blocks north of your position.

##Step 11
In ``||Builder:builder teleport to||``, change the position values to **(~5, ~0, ~-5)**.

## Step 12
Set the starting mark. Let’s make sure the Builder is facing the right way so that it draws the pen around you. After the builder is facing the correct direction, you can then have it place a starting mark.

## Step 13
Drag ``||Builder:builder face||`` block out and under ``||Builder:builder teleport to||``. The default ‘face West’ is fine.

## Step 14
Grab a ``||Builder:builder place mark||`` to put after the ``||Builder:builder face||``.

Draw the outline of the pen. Now we’ll simply have the Builder draw a square.

## Step 15
Drag a ``||Loops:repeat loop||`` and place it after ``||Builder:builder place mark||``. A square has four sides so repeating four times is great.

## Step 25
From ``||Builder:BUILDER||``, drag a ``||Builder:builder move||`` into the ``||Loops:repeat||`` loop.

## Step 16
Type **10** into ``||Builder:builder move||`` to make the sides of your pen **10** blocks.

## Step 17
Drag ``||Builder:builder turn||`` after the ``||Builder:builder move||`` block.

## Step 18
Put up your fences. The last step is to have the Builder place fences along the square it traces.

## Step 19
Place a ``||Builder:builder trace path from mark||`` after the ``||Loops:repeat||`` loop.

Using the drop-down menu in ``||Builder:builder trace path from mark||``, select an Oak Fence.

### ~ tutorialhint
``` blocks
player.onChat("pen", function () {
    builder.teleportTo(pos(5, 0, -5))
    builder.face(WEST)
    builder.mark()
    for (let index = 0; index < 4; index++) {
        builder.move(FORWARD, 10)
        builder.turn(LEFT_TURN)
    }
    builder.tracePath(OAK_FENCE)
})

```

## Step 20
Try the “pen” command. Now, open up a Flat World in the Minecraft game, and type “pen” in the chat window. You should see a pen being built all the way around you! For an extra challenge, you might try to get the Builder to add a fence gate.

## Step 21
Get ready to release the animals. Now comes the fun part. The array is loaded up with animals, the pen has been built… it’s time to let them loose! For this command, we will simply go through the entire array and for each animal in the array, we will spawn two of them a few blocks away from you but still within the pen.

## Step 22
Get an ``||Player:on chat command||`` and rename it “zoo”.

Drag a ``||Loops:for element||`` into your ``||Player:on chat command "zoo"||``.

## Step 23
In the ``||Loops:for element||``, use the drop-down menu for the **2nd slot** to select animalarray.

## Step 24
Let them go! From ``||MObs:MOBS||``, drag a ``||Mobs:spawn animal||`` block and place it inside ``||Loops:for element||``.

## Step 26
From ``||Variables:VARIABLES||``, drag the value variable into the ``||Mobs:spawn animal||`` block, replacing the default chicken animal.

## Step 27
Adjust the coordinates in ``||Mobs:spawn animal||`` to **(~3, ~0, ~0)**, so the animals will spawn a few blocks away from the Player.

## Step 28
To create pairs of animals, right-click on the ``||Mobs:spawn animal||`` block to Duplicate it. You could also use a loop here if you choose.

### ~ tutorialhint
``` blocks
player.onChat("zoo", function () {
    let animalarray: number[] = []
    for (let value of animalarray) {
        mobs.spawn(value, pos(3, 0, 0))
        mobs.spawn(value, pos(3, 0, 0))
    }
})
```

## Step 29
Try the “zoo” command. Go back into your Minecraft world, and type the command “zoo” into the chat window, and watch the animals appear!

### ~ tutorialhint
``` blocks
let animalarray: number[] = []
player.onChat("pen", function () {
    builder.teleportTo(pos(5, 0, -5))
    builder.face(WEST)
    builder.mark()
    for (let i = 0; i < 4; i++) {
        builder.move(FORWARD, 10)
        builder.turn(TurnDirection.Left)
    }
    builder.tracePath(OAK_FENCE)
})
player.onChat("zoo", function () {
    for (let value of animalarray) {
        mobs.spawn(value, pos(3, 0, 0))
        mobs.spawn(value, pos(3, 0, 0))
    }
})
animalarray = [PIG, RABBIT, OCELOT,HORSE, DONKEY, MULE, LLAMA, POLAR_BEAR]
