### @explicitHints 1

# Lesson 2: Code a Building

## Step 1
Let's start with building the walls. Rename the **run** element of the ``||Player:on chat command||`` block to **build_a_structure**. Drag and drop the ``||Agent:agent set active slot||`` code block to the coding Workspace and add it to your  ``||Player:on chat command||`` code block. 

### ~ tutorialhint
``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
})
```

## Step 2
Drag the ``||Agent:agent [place on move]||`` code block to your   ``||Player:on chat command||`` code set. Use the drop-down menu to change the **false** element of this block to **true**. 

### ~ tutorialhint
``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
})
```

## Step 3
Now let's give our Agent some instructions on what to build and how. Visit the ``||Loops:LOOPS||`` toolbox drawer on the left-hand menu. Drag the ``||Loops:repeat [4] times||`` code block to become the next step in your ``||Player:on chat command||`` set. 

### ~ tutorialhint
``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
    	
    }
})
```


## Step 4
Return to the ``||Agent:AGENT||`` toolbox drawer and drag the ``||Agent:agent move [forward]||``, this time placing it inside your ``||Loops:repeat [4] times||`` code set. 

### ~ tutorialhint
``` blocks
player.onChat("build_a_structure.", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
    }
})
```

## Step 5
Change the number in the ``||Agent:agent move [forward]||`` code block to **5**. Drag the ``||Agent:agent turn [left]||``, this time placing it inside your ``||Loops:repeat [4] times||`` code set. You can change the direction, depending on what and where you are building. For this example, we will leave it to **left**. 

### ~ tutorialhint
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

## Step 6
Test the code, it's going to build four walls and leave our Agent near the start again. 

## Step 7
Return to the ``||Agent:AGENT||`` toolbox drawer and add another ``||Agent:agent move [forward]||``, then change it to **up**. Though place this one outside of and after the ``||Agent:repeat [4] times||`` code block as a new and separate action. This will move your Agent up one block and fill the block below as it does.

### ~ tutorialhint
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

## Step 8
Add another ``||Agent:agent move [forward]||``, and leave this one set to **false**. Because we don't want our Agent to build this time as it moves. 

### ~ tutorialhint
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


## Step 9
Add another ``||Agent:agent move [forward]||``, then change it to **right**. This will put your Agent back at the beginning and ready to start the second layer of walls. 

### ~ tutorialhint
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

## Step 10
Now, we need to repeat this process for the four layers of wall. This will require another loop. 
Return to your ``||Loops:LOOPS||`` drawer and bring another ``||Loops:repeat [4] times||`` to your coding Workspace, only this time, we want to repeat the walls building steps. 

## Step 11
Return to the ``||Agent:AGENT||`` toolbox drawer and add another ``||Agent:agent [place on move]||``, and set it to **true**. Test your code. 

## Step 12
Return to the ``||Agent:AGENT||`` toolbox drawer and add another ``||Agent:agent set active slot||``, and set it to **2**. This means that your Agent will now start to use the materials set in the second slot of its inventory. In our example, this will be **Stone Slabs**. 

### ~ tutorialhint

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

## Step 13
Now it is time to build a roof. Add another ``||Agent:agent [place on move]||`` and leave it set to **false**. Then add another ``||Agent:agent move [forward]||``, and set it to **down** and **3**. Your Agent will move down three spaces to the level that a window might be placed so it won't place any roof tiles. 

### ~ tutorialhint
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


## Step 14
Add another ``||Agent:agent move [forward]||``, and set it to ``||Agent:forward||`` and **1**.

### ~ tutorialhint
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


## Step 15
Add another ``||Agent:set active slot||``, and set it to **3**. This will select your Agent's third Inventory slot and make **Glass Panes** your next building material. 

Add an ``||Agent:agent destroy [forward]||`` block. Add it below the last block and change its value to **right**. This will make your Agent remove the block immediately to the right making a hole in the wall, ready for a window. 

## Step 16
Now select the new code block, ``||Agent:agent place [back]||`` and use the drop-down menu to change it to **right**. This will code your Agent to place a **Glass Pane** in the gap left after destroying the wall block. 

### ~ tutorialhint
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


## Step 17
Add another ``||Agent:agent destroy [forward]||`` code block. Leave it set to **forward** and change the numbering to **2**.

## Step 18
Because we are placing a door, we will need to destroy two blocks high in the wall. Start by destroying this one by placing an ``||Agent:agent destroy [forward]||`` code block and setting it to **right**. 

### ~ tutorialhint
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

## Step 19

Add another ``||Agent:agent move [forward]||`` code block. Change it to **down**. This will place your Agent right where we want to place a door. So, we need to set the right active inventory slot and then place a door. 

### ~ tutorialhint
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

## Step 20
Add another ``||Agent:agent destroy [forward]||`` code block. Change it to **right**.

Return to the ``||Agent:AGENT||`` drawer and add another ``||Agent:select active slot||`` code block. Change it to **4**. This will select your Agent's fourth Inventory slot, the **Acacia Door**. 

### ~ tutorialhint
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


## Step 21
Return to the ``||Agent:AGENT||`` toolbox drawer and add another ``||Agent:agent place [back]||`` code block and change it to **right**. This will place your door and complete your building. Test your code! 

### ~ tutorialhint
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




