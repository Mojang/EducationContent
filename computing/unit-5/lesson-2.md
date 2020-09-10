### @explicitHints 1

# Lesson 2: Animate the Wind Farm 

## Step 1
Code three model blades. In Minecraft, ensure your player is at your wind farm, which should be near the following coordinates: **19, 79, -413**. If needed, use the slash command to teleport your player to the position by typing **/tp 19 79 -413** and selecting **Enter**.   

Find a space away from your wind farm to create secret models that will be used for the animations. For this activity you can do this high up in the sky or dig a chamber underground, or just make sure they're far enough away so they won't be seen.

Create your first model of the turbine blades in one specific position of rotation. In our example below, we've made the blades in **Yellow Wool**, but you can make these from anything you wish. You must create these in the direction you want them to appear in final animation, so build them facing the way you want to see them when they finally appear at the end of this lesson. 

Remember when you use the ``||Blocks:clone||`` tool, the orientation of whatever you copy will always be the same. For example, if a building faces east, it is always going to face east. 

## Step 2
Now create another next to this one, only design the blades to be in another state of rotation. Create the third and final variation of the blades in one more, a different state of rotation.   

These three builds are three frames of what will be an animation. Like frames of a cartoon or a movie, when quickly played one after the other, they will create the illusion of movement.  

Clone the model blades on your first turbine. The next phase is to code the model blades to move. We'll work on one model blade. Then, you'll be able to repeat the steps for the other two wind blades afterward. 

## Step 3
Select a new ``||Player:on chat command||`` code block, then change the text to **wind_turbine**. 

Drag a ``||Loops:repeat [4] times||`` code block to your ``||Player:on chat command||`` block. For testing purposes, we will leave it set to **4**. 
#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
```

## Step 4
Now visit the ``||Blocks:BLOCKS||`` drawer and select a ``||Blocks:clone from||`` block to your ``||Player:on chat command||`` block. 

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 4; index++) {
        blocks.clone(
        pos(0, 0, 0),
        pos(0, 0, 0),
        pos(0, 0, 0),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 5
Replace all three of the **relative** coordinates oval with ``||Positions:world [0] [0] [0]||`` coordinates oval from the ``||Positions:POSITIONS||`` menu.  

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 4; index++) {
        blocks.clone(
        world(0, 0, 0),
        world(0, 0, 0),
        world(0, 0, 0),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 6
Right click on the ``||Blocks:clone from||`` code block and select **Duplicate** to create another faded version, then drag it into your code block, under the first.   

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 4; index++) {
        blocks.clone(
        world(0, 0, 0),
        world(0, 0, 0),
        world(0, 0, 0),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(0, 0, 0),
        world(0, 0, 0),
        world(0, 0, 0),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 7
Create one more duplicate and place this below again, so you have three ``||Blocks:clone from||`` blocks in total. 

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 4; index++) {
        blocks.clone(
        world(0, 0, 0),
        world(0, 0, 0),
        world(0, 0, 0),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(0, 0, 0),
        world(0, 0, 0),
        world(0, 0, 0),
        CloneMask.Replace,
        CloneMode.Normal
        )
        blocks.clone(
        world(0, 0, 0),
        world(0, 0, 0),
        world(0, 0, 0),
        CloneMask.Replace,
        CloneMode.Normal
        )
    }
})
```

## Step 8
Return to your turbine blade models and note the coordinates you will need for cloning in your workbook. Set the coordinates to the top right and bottom left of each build to create an invisible cube that includes the entire blade. 

**Blade set 1** – From: **55 78 -291** To: **61 85 -291**

**Blade set 2** – From: **63 78 -291** To: **69 85 -291**

**Blade set 3** – From: **71 78 -291** To: **77 85 -291**

## Step 9
Input the cloning coordinates. Return to MakeCode and carefully input the coordinates for the first, second and third set of blades into ``||Blocks:clone from||`` code blocks, in the ``||Blocks:from||`` and ``||Blocks:to||`` sections. Leave the ``||Blocks:into||`` set blank for now.  

## Step 10
Return to your wind turbine structure, created in **Lesson 1** of this unit.  

## Step 11
From the top of your turbine pillar, build a tower of 20 blocks, of any kind of material. This is a test pillar to allow you to find your final coordinates. In our example, we have built one from **Yellow Wool**.  

Note the coordinate of the top most block of the tower in your workbook.  

## Step 12
Then add this to the into coordinates of all three of your ``||Blocks:clone from||`` code blocks. 

#### ~ tutorialhint
``` blocks
player.onChat("wind_turbine", function () {
    for (let index = 0; index < 4; index++) {
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
## Step 13
Test the cloning coordinates. Run a small test before you commit to placing your animation permanently. This part is about finding where the blades clone in when you run the command. This is likely to differ for everyone depending on the direction you placed them, the size of them, etc.  

Using the center of your blades, work your way down and to the center again. In our example, we have marked this with **Orange Wool**. Write this information in your workbook. 

The bottom, horizontal part of this tells us that the center of our blade animation was three blocks too far to the right so that we can compensate for that later. 

Now do the same for the height, from the top of your pillar to the center of the blade animation and note it in your workbook. Again, we have marked this in **Orange Wool** and on the left this time.  

This top, vertical part tells us that the center was four blocks too high. We can compensate for both now. 

Using another material, measure from your turbine's actual center point, and compensate for the direction and numbers.  

## Step 14
We have found our new and accurate center coordinates for our animation. Stand on this final block to get the coordinates. Note these in your workbook and add them to your code in the ``||Blocks:into||`` set of coordinates.  

## Step 15
Now run your code to see if you have an accurate and working wind blade at the top of your turbine pillar. If you don't have an accurate and working wind turbine, make other adjustments as needed. Use the space in your workbook as needed for notes. 

## Step 16
When it's cloned correctly, remove the test blocks that you added to determine how much the test clone was off. In the example, it would be removing the **Yellow, Orange, **and **Red Wool** blocks. 

Don't remove your model blades! They must stay there so you can clone them on your other turbines. 

Animate the other turbines in your farm. Now that you finished the first one, you're ready to animate other turbines. Remember, you can use the same model coordinates and just change the ``||Blocks:into||`` coordinates input for each new turbine. 
 
