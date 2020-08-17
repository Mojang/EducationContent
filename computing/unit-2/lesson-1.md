### @explicitHints 1

# Lesson A: Code a Road Network 

## Step 1
In Minecraft, ensure your player is at the following coordinates: **67, 69, -557**. If needed, use the slash command to teleport your player to the position by typing **/tp 67 69 -557** and selecting Enter.  

## Step 2
Stand on the exact block you wish to start your road. This must be the corner of what you would like to fill. In this image, we have marked the block you should stand on with Yellow Wool. 

## Step 3
Take a note of your position from the top left of the screen in the space in your workbook. In this example, we are standing on the block at -22, 69, -565.

## Step 4
Find your second position and take note of the coordinates for this in the space in your workbook as well. In this example, we have selected the block at **61, 69, -570**. This should be at the opposite side and end of the road you want to place. In the images below, we have marked the positions in **Yellow Wool** and used **Green Wool** to show the path you should take to get there accurately

## Step 5
Rename the **run** element of the ``||Player:on chat command||`` block to **road_1**. 

``` blocks
player.onChat("road_1", function () {
	
})
```

## Step 6
Click on the ``||Blocks:BLOCKS||`` toolbox drawer on the left-hand menu. 

## Step 7
Select the ``||Blocks:fill with||`` code block and drag it into your ``||Player:on chat command||`` block. 

``` blocks
player.onChat("road_1", function () {
    blocks.fill(
    GRASS,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## Step 8
Use the drop-down menu to change the type of block from **Grass** to **Grey Concrete**. 

``` blocks
player.onChat("road_1", function () {
    blocks.fill(
    GRAY_CONCRETE,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## Step 9
Now open ``||Positions:POSITIONS||`` toolbox drawer on the left-hand menu. 

## Step 10
Drag the world ``||Positions:[0] [0] [0]||`` code block onto your coding Workspace. It will be transparent until you link it to your main code.

``` blocks
player.onChat("road_1", function () {
    blocks.fill(
    GRAY_CONCRETE,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## Step 11
Drag the world ``||Positions:[0] [0] [0]||`` block and replace the ``||Positions:relative||`` positions block inside the ``||Blocks:fill||`` block. 

``` blocks
player.onChat("road_1", function () {
    blocks.fill(
    GRAY_CONCRETE,
    world(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## Step 12
Drag another ``||Positions:world [0] [0] [0]||`` positions code block from the ``||Positions:POSITIONS||`` drawer and replace the second ``||Positions:relative||`` positions block inside the ``||Blocks:fill with||`` block. 

``` blocks
player.onChat("road_1", function () {
    blocks.fill(
    GRAY_CONCRETE,
    world(0, 0, 0),
    world(0, 0, 0),
    FillOperation.Replace
    )
})
```

## Step 13
Now add your first set of written coordinates to the first set of ``||Positions:world [0] [0] [0]||`` positions block. 

## Step 14
Do the same for the second set of world positions, adding your coordinates.  

``` blocks
player.onChat("road_1", function () {
    blocks.fill(
    GRAY_CONCRETE,
    world(-22, 68, -565),
    world(61, 68, -569),
    FillOperation.Replace
    )
})
```

## Step 15
We are almost ready to test our code, however there is one more important thing we have to do to make this code work properly. Change the center, or **Z** coordinate, to one number lower. In this example, this will be **68**.

## Step 16
Now test your code. If you have coded correctly, you should see a road appear in place of the Grass. 

## Step 17
Repeat Steps 3-17 for the second road. 

``` blocks
player.onChat("road_2", function () {
    blocks.fill(
    GRAY_CONCRETE,
    world(-22, 68, -565),
    world(61, 68, -569),
    FillOperation.Replace
    )
})
```
## Step 18
Repeat Steps 3-17 for the third road, crossing over the previous two to create a road network. 

``` blocks
player.onChat("road_3", function () {
    blocks.fill(
    GRAY_CONCRETE,
    world(-22, 68, -565),
    world(61, 68, -569),
    FillOperation.Replace
    )
})
```


## This is the last step @tutorialCompleted