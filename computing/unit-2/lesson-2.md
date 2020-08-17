# Lesson 2: Code a Building 

## Step 1
Make sure the Agent has these blocks in its inventory: **Slot 1: Light Grey Concrete** for the walls. **Slot 2: Stone Slabs** for the roof. **Slot 3: White Stained-Glass Pane** for the windows. **Slot 4: A Birch Door**.  

## Step 2
We will start with building the walls. Rename the ``||Player:on chat command||`` block to **build_a_structure**. 

Drag and drop the ``||Agent:agent set active slot||`` code block to the coding Workspace and add it to your  ``||Player:on chat command||`` code block. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
})
```

## Step 3
Drag the ``||Agent:agent [place on move]||`` code block to your ``||Player:on chat command||`` code set.
Use the drop-down menu to change the **false** element of this block to **true**. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
})
```

## Step 4
Drag the ``||Loops:repeat [4] times||`` code block to become the next step in your ``||Player:on chat command||`` set. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
    	
    }
})
```

## Step 5
Drag the ``||Agent:agent move [forward]||``, this time placing it inside your ``||Loops:repeat [4] times||`` code set. 

Change the number in the ``||Agent:agent move [forward]||`` code block to **5**. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
    }
})
```

## Step 6
Drag the ``||Agent:agent turn [left]||``, this time placing it inside your ``||Loops:repeat [4] times||`` code set. You can change the direction, depending on what and where you are building. For this example, we will leave it to **left**. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 5)
        agent.turn(LEFT_TURN)
    }
})
```

## Step 7
If you test the code, it's going to build four walls and leave our Agent near the start again. 
The ``||Agent:repeat [4] times||`` code block has coded the Agent to walk forward and turn left four times, while the code before this coded the Agent to leave a block of material each time it moved. But the Agent is stuck because the first block placed is in the way. So, we need to add another piece of code that will put Agent back to the start. 

## Step 8
Add another ``||Agent:agent move [forward]||``, then change it to **up**. Place this one outside of and after the ``||Agent:repeat [4] times||`` code block as a new and separate action. This will move your Agent up one block and fill the block below as it does.

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 5)
        agent.turn(LEFT_TURN)
    }
    agent.move(UP, 1)
})
```

## Step 9
Add another ``||Agent:agent place on move ||``, and leave this one set to **false** because we don't want our Agent to build this time as it moves. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 5)
        agent.turn(LEFT_TURN)
    }
    agent.move(UP, 1)
    agent.setAssist(PLACE_ON_MOVE, false)
})
```

## Step 10
Add another ``||Agent:agent move [forward]||``, then change it to **right**. This will put your Agent back at the beginning and ready to start the second layer of walls. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 5)
        agent.turn(LEFT_TURN)
    }
    agent.move(UP, 1)
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(RIGHT, 1)
})
```

## Step 11
Now, we need to repeat this process for the four layers of wall. This will require another loop. 
Add another ``||Loops:repeat [4] times||`` to your coding Workspace, only this time, we want to repeat everything from **Steps 12-18**. Drag it and hold it until you can see the yellow **insert** marker show above the first ``||Loops:repeat [4] times||`` code block, as shown below. Once you add it fully, it will create a loop of the original loop. It will repeat what your Agent does another four times. 

## Step 12
Add another ``||Agent:agent [place on move]||``, and set it to **true**. 
Test your code! 

## Step 13
Add another ``||Agent:agent set active slot||``, and set it to **2**. This means that your Agent will now start to use the materials set in the second slot of its inventory. In our example, this will be **Stone Slabs**. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
})
```

## Step 14
Bring another ``||Loops:repeat [4] times||`` to the coding Workspace, set it to **3**. Add this to the end of your coding so far. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
    	
    }
})
```

## Step 15
Agent needs to ``||Agent:agent move [forward]||`` **5** steps, then **left** **1** block, then **back** **5** blocks and **left** **1** block. 


``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 5)
        agent.move(LEFT, 1)
        agent.move(BACK, 5)
        agent.move(LEFT, 1)
    }
})
```

## Step 16
Test the code now. Now let's add the final details: a window and a door. Your Agent should now hover above one wall and so let's start adding details there.  

## Step 17
Drag another ``||Agent:agent [place on move]||`` block and leave it set to **false**. Then add another ``||Agent:agent move [forward]||``, and set it to **down** and **3**. Your Agent will move down three spaces to the level that a window might be placed so it won't place any roof tiles. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 5)
        agent.move(LEFT, 1)
        agent.move(BACK, 5)
        agent.move(LEFT, 1)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(DOWN, 3)
})
```

## Step 18
Add another ``||Agent:agent move [forward]||``, and set it to ``||Agent:forward||`` and **1**.

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 5)
        agent.move(LEFT, 1)
        agent.move(BACK, 5)
        agent.move(LEFT, 1)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(DOWN, 3)
    agent.move(FORWARD, 1)
})
```

## Step 19
Add another ``||Agent:set active slot||``, and set it to **3**. This will select your Agent's third Inventory slot and make **Glass Panes** your next building material. 

Select the new code block, ``||Agent:agent destroy [forward]||``. Add it below the last block and change its value to **right**. This will make your Agent remove the block immediately to the right making a hole in the wall, ready for a window. 

## Step 20
Drag an ``||Agent:agent place [back]||`` and use the drop-down menu to change it to **right**. This will code your Agent to place a **Glass Pane** in the gap left after destroying the wall block. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 5)
        agent.move(LEFT, 1)
        agent.move(BACK, 5)
        agent.move(LEFT, 1)
    }
    agent.move(DOWN, 3)
    agent.move(FORWARD, 1)
    agent.setSlot(3)
    agent.destroy(RIGHT)
    agent.place(RIGHT)
})
```

## Step 21
Add another ``||Agent:agent destroy [forward]||`` code block. Leave it set to **forward** and change the numbering to **2**.

## Step 22
We are placing a door, that's why we will need to destroy two blocks high in the wall. Start by destroying this one by placing an ``||Agent:agent destroy [forward]||`` code block and setting it to **right**. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 5)
        agent.move(LEFT, 1)
        agent.move(BACK, 5)
        agent.move(LEFT, 1)
    }
    agent.move(DOWN, 3)
    agent.move(FORWARD, 1)
    agent.setSlot(3)
    agent.destroy(RIGHT)
    agent.place(RIGHT)
    agent.move(FORWARD, 2)
    agent.destroy(RIGHT)
})
```

## Step 23
Add another ``||Agent:agent move [forward]||`` code block. Change it to **down**. This will place your Agent right where we want to place a door. So, we need to set the right active inventory slot and then place a door. 

``` blocks 
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 5)
        agent.move(LEFT, 1)
        agent.move(BACK, 5)
        agent.move(LEFT, 1)
    }
    agent.move(DOWN, 3)
    agent.move(FORWARD, 1)
    agent.setSlot(3)
    agent.destroy(RIGHT)
    agent.place(RIGHT)
    agent.move(FORWARD, 2)
    agent.destroy(RIGHT)
    agent.move(DOWN, 1)
})
```

## Step 24
Add another ``||Agent:agent destroy [forward]||`` code block. Change it to **right**.
Drag another ``||Agent:select active slot||`` code block. Change it to **4**. This will select your Agent's fourth Inventory slot, the **Acacia Door**. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 5)
        agent.move(LEFT, 1)
        agent.move(BACK, 5)
        agent.move(LEFT, 1)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(DOWN, 3)
    agent.move(FORWARD, 1)
    agent.setSlot(3)
    agent.destroy(RIGHT)
    agent.place(RIGHT)
    agent.move(FORWARD, 2)
    agent.destroy(RIGHT)
    agent.move(DOWN, 1)
    agent.destroy(RIGHT)
    agent.setSlot(4)
})
```

## Step 25
Add another ``||Agent:agent place [back]||`` code block and change it to **right**. This will place your door and complete your building. 

``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 5)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(RIGHT, 1)
        agent.setAssist(PLACE_ON_MOVE, true)
    }
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 5)
        agent.move(LEFT, 1)
        agent.move(BACK, 5)
        agent.move(LEFT, 1)
    }
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.move(DOWN, 3)
    agent.move(FORWARD, 1)
    agent.setSlot(3)
    agent.destroy(RIGHT)
    agent.place(RIGHT)
    agent.move(FORWARD, 2)
    agent.destroy(RIGHT)
    agent.move(DOWN, 1)
    agent.destroy(RIGHT)
    agent.setSlot(4)
    agent.place(RIGHT)
})
```

## Step 26
Now test your code. Now you need to create more new buildings to complete your city. Code a unique building that will be used as the town hall, for the mayor or any other city buildings that you might think of. 



