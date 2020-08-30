### @explicitHints 1

#Lesson 2: Code Zoo Paths 

## Step 1
In Minecraft, ensure your player is near following coordinates to get to the area near the zoo gate from the last session: **-32, 69, -561**. If needed, use the slash command to teleport your player to the position by typing **/tp -32 69 -561** and selecting **Enter**. 

Now, find the first coordinate to start your gravel path in the zoo. You'll find markers for three start and end points for paths allowing players to navigate your zoo. These are marked by **Green Wool, Yellow Wool, Orange Wool,** and **Red Wool**. You'll be coding a path from green to green, yellow to yellow, and so on. 

Position yourself on the first of the **Green Wool** blocks and face the other **Green Wool** block. Take note of your position from the top left of the screen in the space in your workbook. In this example, we are standing on the block at **-40 69 -575 (-40, 69, -575)**. 

You must pay close attention to whether each number is a minus or not. There is no undo button, and so a mistake with the numbers of your coordinates cannot always be easily fixed. 

Go to the second **Green Wool** block and take note of the coordinates for this in your workbook as well. In this example, we have selected the block at **-60 69 -575 (minus 60, 69, minus 575)**. 

## Step 2
In MakeCode, rename the **run** element of the ``||Player:on chat command||`` block to **zoo_path_1**. 

Select the ``||Blocks:fill with||`` code block and drag it into your ``||Player:on chat command||`` block. 

``` blocks
player.onChat("zoo_path_1", function () {
    blocks.fill(
    GRASS,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## Step 3
Use the drop-down menu to change the type of material from **Grass** to **Gravel**. 

``` blocks
player.onChat("zoo_path_1", function () {
    blocks.fill(
    GRAVEL,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## Step 4
Now open ``||Positions:POSITIONS||`` on the left-hand menu. 

Remember, this drawer contains code blocks that allow you to manipulate the Minecraft world through ***positions*** or ***coordinates***. Every block in a Minecraft world has a position on an X, Y, and Z axis. 

Drag two ``||Positions:world [0] [0] [0]||`` ovals onto your coding Workspace and replace the ``||Positions:[~0] [~0] [~0]||`` ovals in the ``||Blocks:from||`` and ``||Blocks:to||`` elements. 

``` blocks
player.onChat("zoo_path_1", function () {
    blocks.fill(
    GRAVEL,
    world(0, 0, 0),
    world(0, 0, 0),
    FillOperation.Replace
    )
})
```

## Step 5
Now add your first set of coordinates from **Step 3** to the ``||Blocks:from||`` set of ``||Positions:world [0] [0] [0]||`` positions. 

``` blocks
player.onChat("zoo_path_1", function () {
    blocks.fill(
    GRAVEL,
    world(-40, 69, -575),
    world(0, 0, 0),
    FillOperation.Replace
    )
})
```

## Step 6
Do the same for the ``||Blocks:to||`` set of ``||Positions:world [0] [0] [0]||`` positions, adding your coordinates from **Step 4**. 

``` blocks
player.onChat("zoo_path_1", function () {
    blocks.fill(
    GRAVEL,
    world(-40, 69, -575),
    world(-60, 69, -575),
    FillOperation.Replace
    )
})
```

## Step 7
Change the center, or **Z** coordinate, to one number lower. In this example, this will be **68**.  

Remember, the center number of coordinates represents the height, from the bottom of the world **0** to the top **256**. We must change this to one block lower because we want to change the **Grass** beneath our feet to **Grey Concrete** and the block selected as part of the original coordinates is the that of our player's legs. So if we ran the code now, the road would be one block above ground level. This way, we replace the grass instead. 


``` blocks
player.onChat("zoo_path_1", function () {
    blocks.fill(
    GRAVEL,
    world(-40, 68, -575),
    world(-60, 68, -575),
    FillOperation.Replace
    )
})
```
## Step 8
Now test your code. If you have coded correctly, you should see a road appear in place of the grass.   

## Step 9
Repeat the steps for the second, third, and fourth paths using your **Yellow Wool, Orange Wool** and **Red Wool** markers. You can plan any path network you wish if the example below doesn't suit your plans for your zoo. 

