### @explicitHints 1

# Lesson 3: Code a Lighting System  

## Step 1
Code a wind indicator. The first thing we need to do is to create the illusion that the blades of the turbines are not always turning. Like there is not always enough wind to do this, as is the case in real life.   

Use the starter code and change the value for the ``||loops:repeat||`` element from **4** to **10**. 

``` template
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 2
Code to generate power. Drag a ``||Blocks:place [block] at||`` code block and slot it into the first part of your code, inside your ``||Loops:repeat [10] times||`` block but on top of the ``||Blocks:clone from||`` block. 

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
        blocks.place(GRASS, pos(0, 0, 0))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 3
Use the drop-down menu to change the **Grass Block** element to **Block of Redstone**. Remember, **Block of Redstone** is the input block we explored earlier in our inventory.  

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
        blocks.place(REDSTONE_BLOCK, pos(0, 0, 0))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 4
Replace the **relative** coordinates oval with the ``||Positions:world [0] [0] [0]||`` coordinates oval from the ``||Positions:POSITIONS||`` toolbox drawer.  

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
        blocks.place(REDSTONE_BLOCK, world(0, 0, 0))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 5
Return to your game and stand on the first block in the trench you dug for your **Redstone**. Take note of the coordinates of this block in your workbook. In our example, this is **8 81 -412**, though yours will be unique to your own build.  

## Step 6
In MakeCode, insert these new coordinates into your ``||Blocks:place [Block of Redstone]||`` set.  

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
        blocks.place(REDSTONE_BLOCK, world(8, 81, -412))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 7
Right-click on your completed ``||Blocks:place [Block of Redstone]||`` code block and select **Duplicate**.  

Drag the duplicated, faded version of this code block to the bottom of your main code and place it after your third ``||Blocks:clone from||`` code block and crucially, outside the ``||Loops:LOOP||``.  

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
        blocks.place(REDSTONE_BLOCK, world(8, 81, -412))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
    blocks.place(REDSTONE_BLOCK, world(8, 81, -412))
})
```

## Step 8
Use the drop-down menu to change the **Block of Redstone** element to **air**.Complete code so far. Your complete code so far should look like this, but with your own coordinates

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
        blocks.place(REDSTONE_BLOCK, world(8, 81, -412))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
    blocks.place(AIR, world(8, 81, -412))
})
```

## Step 9
Test your code. If successful, your **Redstone Lamp** will light up whenever you run your **wind_turbine** command.  

## Step 10
Get the ``||Loops:forever||`` code block.  

This code block creates a loop then runs eternally. This is useful for global constants, like weather conditions or in this case, wind. 

## Step 11
Drag this to the coding Workspace, then click and hold your left mouse button on your ``||Blocks:place [Block of Redstone]||`` code block. Dragging your mouse while holding the left button will drag this code block and all those attached below it. Remove it all from your current ``||Loops:repeat [10] times||`` loop block and into your new ``||Loops:forever||`` block.  

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
    	
    }
    blocks.place(AIR, world(8, 81, -412))
})
loops.forever(function () {
    blocks.place(REDSTONE_BLOCK, world(8, 81, -412))
    blocks.clone(
    world(55, 78, -291),
    world(61, 85, -291),
    world(8, 113, -409),
    CloneMask.Replace,
    CloneMode.Normal
    )
    blocks.clone(
    world(63, 78, -291),
    world(69, 85, -291),
    world(8, 113, -409),
    CloneMask.Replace,
    CloneMode.Normal
    )
    blocks.clone(
    world(71, 78, -291),
    world(77, 85, -291),
    world(8, 113, -409),
    CloneMask.Replace,
    CloneMode.Normal
    )
})
``` 

## Step 12
Your final ``||Blocks:place [Block of Redstone]||`` code block remains as this was outside of the original ``||Loops:repeat [10] times||`` block. We will deal with this shortly.  

## Step 13
Open the ``||Loops:LOOPS||`` menu and take another ``||Loops:repeat [4] times||`` code block, adding it to the start of your ``||Loops:forever||`` block. 

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
    	
    }
    blocks.place(AIR, world(8, 81, -412))
})
loops.forever(function () {
    for (let index = 0; index < 4; index++) {
        blocks.place(REDSTONE_BLOCK, world(8, 81, -412))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 14
Add a limited ``||Loops:repeat [4] times||`` loop block inside an eternal ``||Loops:forever||`` loop block as a specific step with a purpose. This means that we have created a condition where one action will happen a set amount of times before changing, and both actions will loop in and out forever.  

Change the number in this ``||Loops:repeat [4] times||`` to **20**.  

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
    	
    }
    blocks.place(AIR, world(8, 81, -412))
})
loops.forever(function () {
    for (let index = 0; index < 20; index++) {
        blocks.place(REDSTONE_BLOCK, world(8, 81, -412))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 15
Return to your original **wind_turbine** code and drag the remaining ``||Blocks:place [Air]||`` code block to your new code and place it at the bottom, between the ``||Loops:repeat [20] times||`` block and the ``||Loops:forever||`` block. 

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
    	
    }
})
loops.forever(function () {
    for (let index = 0; index < 20; index++) {
        blocks.place(REDSTONE_BLOCK, world(8, 81, -412))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
    blocks.place(AIR, world(8, 81, -412))
})
```

## Step 16
Mimic wind variation. Finally, we need to add something that means a period of no wind activity. So far, we have the turbines turning endlessly and the power going on and off very quickly. A well-placed pause in this code will give us that effect. 

## Step 17
Return to the ``||Loops:LOOPS||`` menu and select the ``||Loops:pause (ms)||`` code block. Drag it to your code and place it immediately after your final ``||Blocks:place [Air]||`` block. Then set the number to **5000**.  

As a guide, 1000ms is one second of in-game time. So, setting this to 5000ms will give us a pause in our animation of 5 seconds. Simulating a loss of wind power for 5 seconds. 

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 10; index++) {
    	
    }
})
loops.forever(function () {
    for (let index = 0; index < 20; index++) {
        blocks.place(REDSTONE_BLOCK, world(8, 81, -412))
        blocks.clone(
        world(55, 78, -291),
        world(61, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(63, 78, -291),
        world(69, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(71, 78, -291),
        world(77, 85, -291),
        world(8, 113, -409),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
    blocks.place(AIR, world(8, 81, -412))
    loops.pause(5000)
})
```
## Step 18
Run your code. Test your code. Your blades should now be turning 20 times, before stopping for 5 seconds and doing this on an endless loop. Your **Redstone Lamp** should light up only when the blades are turning. If it doesn't work, go back to review your code and make adjustments as needed. Then you can repeat the steps for your other turbines.
