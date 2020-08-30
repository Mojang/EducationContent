### @explicitHints 1

# Lesson A: Code a Road Network 

## Step 1
Rename the **run** element of the ``||Player:on chat command||`` block to **road_1**. 

Select the ``||Blocks:fill with||`` code block and drag it into your ``||Player:on chat command||`` block. Use the drop-down menu to change the type of block from **Grass** to **Grey Concrete**. 

#### ~ tutorialhint
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

## Step 2
Now open ``||Positions:POSITIONS||`` toolbox drawer on the left-hand menu. Drag the world ``||Positions:[0] [0] [0]||`` code block onto your coding Workspace. 

## Step 3
Drag the world ``||Positions:[0] [0] [0]||`` block and replace the ``||Positions:relative||`` positions block inside the ``||Blocks:fill||`` block. 

#### ~ tutorialhint
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

## Step 4
Drag another ``||Positions:world [0] [0] [0]||`` positions code block from the ``||Positions:POSITIONS||`` drawer and replace the second ``||Positions:relative||`` positions block inside the ``||Blocks:fill with||`` block. 

Now add your first set of written coordinates to the first set of ``||Positions:world [0] [0] [0]||`` positions block. 

#### ~ tutorialhint
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

## Step 5
Do the same for the second set of world positions, adding your coordinates. Change the center, or **Z** coordinate, to one number lower. In this example, this will be **68**.
Test your code.

#### ~ tutorialhint
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
## Step 6
Repeat the steps for the second and third roads.

#### ~ tutorialhint
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
## Step 7
Now run your code in Minecraft. 


