### @explicitHints 1

# Activity: We Built a Zoo

## Step 1
You will need an ``||Loops:on start||`` for the project. Create a new variable and name it **animalarray**.

Make an array for animals. Drag ``||Variables:set||`` block into the ``||Loops:On start||`` block.

## Step 2
Using the drop-down menu in ``||Variables:set||``, select the **animalarray** variable.

Drag a ``||Arrays:create array with||`` block into ``||Variables:set "animalarray" to||``.

## Step 3
Add animals to the array. Click the Plus **(+)** sign on ``||Arrays:create array with||`` to add 7 more slots in your array. The total length of your array should be **8**.

## Step 4
Drag an **Animal block** into the first slot of ``||Arrays:create array with||``.

Populate the rest of your array with animal blocks. You can right-click on ``||Mobs:animal||`` and select **Duplicate** to make copies of this block.

## Step 5
Pick your animals. Create a zoo with **8** different types of animals. Be aware that certain animals will eat other animals! For example, ocelots and chickens don't get along very well. Think about what kind of zoo you want, and plan accordingly.
Using the drop-down menus in the ``||Mobs:animal||`` blocks, select different types of animals in your array.

## Step 6
Let's have an animal pen. Now that you have your Animal Array set up, let's work on creating a fenced-in enclosure for your zoo. You will use the ``||Builder:BUILDER||`` blocks for this. The Builder is like an invisible cursor in the game that can place blocks along a path very quickly. You will direct the Builder to go to a point in the southeast corner, and create a mark, which is an invisible point of reference. Then you will give it a series of commands to make it trace out a square. Finally, the builder is able to place fences along this path.

## Step 7
Drag an ``||Player:on chat command||`` block to the Workspace. Rename the command "pen".

Drag ``||Builder:builder teleport to||`` block into ``||PLayer:on chat command "pen"||``.

## Step 8
Find a place for the pen. We want the Builder to start in the northeast corner of the pen in relation to the player, so go ahead and change the coordinates to specify a location **5** blocks east and **5** blocks north of your position.

In ``||Builder:builder teleport to||``, change the position values to **(~5, ~0, ~-5)**.

## Step 9
Set the starting mark. Let's make sure the Builder is facing the right way so that it draws the pen around you. After the builder is facing the correct direction, you can then have it place a starting mark.

Drag ``||Builder:builder face||`` block out and under ``||Builder:builder teleport to||``. The default 'face West' is fine.

## Step 10
Grab a ``||Builder:builder place mark||`` to put after the ``||Builder:builder face||``.

Draw the outline of the pen. Now we'll simply have the Builder draw a square.

## Step 11
Drag a ``||Loops:repeat loop||`` and place it after ``||Builder:builder place mark||``. A square has **four** sides so repeating **four** times is great.

## Step 12
From ``||Builder:BUILDER||``, drag a ``||Builder:builder move||`` into the ``||Loops:repeat||`` loop.

Type **10** into ``||Builder:builder move||`` to make the sides of your pen **10** blocks.

## Step 13
Drag ``||Builder:builder turn||`` after the ``||Builder:builder move||`` block.

## Step 14
Put up your fences. The last step is to have the Builder place fences along the square it traces.

Place a ``||Builder:builder trace path from mark||`` after the ``||Loops:repeat||`` loop. Using the drop-down menu in ``||Builder:builder trace path from mark||``, select an Oak Fence.

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

## Step 15
Try the "pen" command. 

Get ready to release the animals. Now comes the fun part. The array is loaded up with animals, the pen has been built… it's time to let them loose! 

## Step 16
Get an ``||Player:on chat command||`` and rename it "zoo".

Drag a ``||Loops:for element||`` into your ``||Player:on chat command "zoo"||``.

## Step 17
In the ``||Loops:for element||``, use the drop-down menu for the **2nd slot** to select **animalarray**.

## Step 18
Let them go! From ``||Mobs:MOBS||``, drag a ``||Mobs:spawn animal||`` block and place it inside ``||Loops:for element||``.

## Step 19
From ``||Variables:VARIABLES||``, drag the value variable into the ``||Mobs:spawn animal||`` block, replacing the default chicken animal.

Adjust the coordinates in ``||Mobs:spawn animal||`` to **(~3, ~0, ~0)**, so the animals will spawn a few blocks away from the Player.

## Step 20
To create pairs of animals, right-click on the ``||Mobs:spawn animal||`` block to duplicate it. You could also use a loop here if you choose.

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

## Step 21
Try the "zoo" command. Go back into your Minecraft world, and type the command "zoo" into the chat window, and watch the animals appear!

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
```
