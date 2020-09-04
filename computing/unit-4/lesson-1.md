### @explicitHints 1

#Lesson 1: Code a Zoo Entrance

## Step 1
Rename the **run** element of the ``||Player:on chat command||`` block to **build_gates**. 

Drag the ``||Loops:repeat [4] times||`` code block into your ``||Player:on chat command||`` and set the number to **15**. This is going to be a large gate. 

#### ~ tutorialhint
``` blocks
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
    	
    }
})
```

## Step 2
Drag the ``||Agent:agent set active slot||`` code block to the coding Workspace and leave it set it to **1**.   

#### ~ tutorialhint
``` blocks
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
    }
})
```

## Step 3
Drag the ``||Agent:agent place [back]||`` code block to the coding Workspace and use the drop-down menu to set it to down.   

Add an ``||Agent:agent move [forward]||`` code block to your main code, use the drop-down menu to change it to **right**, and leave the number at **1**. 

#### ~ tutorialhint
``` blocks
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
})
```

## Step 4
Drag another ``||Agent:agent place [back]||`` code block from the ``||Agent:Agent||`` drawer and set it to **down**. 

Drag another ``||Agent:agent move [forward]||`` code block to the coding Workspace, leaving it set to **forward** and **1**. 

#### ~ tutorialhint
``` blocks
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```

## Step 5
Drag another ``||Agent:agent place [back]||`` code block from the ``||Agent:Agent||`` drawer and set it to **down**.  

#### ~ tutorialhint
``` blocks
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
    }
})
```

## Step 6
Place another ``||Agent:agent move [forward]||`` code block from the ``||Agent:Agent||`` drawer and set it to **left**, leaving the number at **1**. 
#### ~ tutorialhint
``` blocks
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
})
```

## Step 7 
Drag another ``||Agent:agent place [back]||`` code block from the ``||Agent:AGENT||`` drawer and set it to **down**.  
Now we just need to get our ``||Agent:AGENT||`` to the next starting position to complete this part of the gate's code. 

#### ~ tutorialhint
``` blocks
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.move(LEFT, 1)
        agent.place(DOWN)
    }
})
```

## Step 8
Revisit the ``||Agent:Agent||`` drawer, drag two more ``||Agent:agent move [forward]||`` code blocks to the coding Workspace, and connect under the ``||Agent:agent place [down]||`` block. Use the drop-down menu to change **forward** to **back** in the first one and the **forward** to **up** in the second one.  

Position your Agent and run the code.

#### ~ tutorialhint
``` blocks
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.move(LEFT, 1)
        agent.place(DOWN)
        agent.move(BACK, 1)
        agent.move(UP, 1)
    }
})
```
## Step 9
Position your Agent using the **come_here** command you used in **Computing with Minecraft 1: The Agency, Lesson B**, so that it is on the bottom left corner of your marked square.

Remove the **Yellow Wool** blocks (or whichever material you used) from below your Agent. Don't worry; your Agent will float. 

## Step 10
Run your code. Type your ``||Player:on chat command||`` into the chat function **T** and watch your Agent build the first pillar of the gate. 

## Step 11
Repeat this for the second pillar. Placing your Agent in the same position as the second set of  **Yellow Wool** blocks before removing them and running your code. You should now have two wooden pillars.  

## Step 12
Code the sign entrance. Now we need to add the sign at the top.   

Get a new ``||Player:on chat command||`` block and rename the **jump** element to **zoo_sign**. 

#### ~ tutorialhint
``` blocks
player.onChat("zoo_sign", function () {
	
})
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.move(LEFT, 1)
        agent.place(DOWN)
        agent.move(BACK, 1)
        agent.move(UP, 1)
    }
})
```

## Step 13
Select the ``||Blocks:print [HELLO]||`` code block, and drag it to your new on chat command code block. 

Change the **HELLO** text to **ZOO**. 

#### ~ tutorialhint
``` blocks
player.onChat("zoo_sign", function () {
    blocks.print(
    "ZOO",
    GRASS,
    pos(0, 0, 0),
    WEST
    )
})
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.move(LEFT, 1)
        agent.place(DOWN)
        agent.move(BACK, 1)
        agent.move(UP, 1)
    }
})
```

## Step 14
Use the drop-down menu to change the type of block material from **Grass** to **Oak Wood**. 

Drag a ``||Positions:world [0] [0] [0]||`` oval, replacing the ``||Positions:[~0] [~0] [~0]||`` oval inside your ``||Blocks:print [ZOO]||`` block. 

#### ~ tutorialhint
``` blocks
player.onChat("zoo_sign", function () {
    blocks.print(
    "ZOO",
    LOG_OAK,
    world(0, 0, 0),
    WEST
    )
})
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.move(LEFT, 1)
        agent.place(DOWN)
        agent.move(BACK, 1)
        agent.move(UP, 1)
    }
})
```

## Step 15
Change the coordinates in the ``||Positions:world||`` position to the numbers of where you would like your text to begin. In our example, this is **-35, 82, -559**. Take a moment to remember the importance of the minus when using these numbers. 

This may take a little trial and error to get correct in your world, depending on how many letters you choose to create, where they are placed and what direction they are in. Our example will be shown in an image after the next step.

#### ~ tutorialhint
``` blocks
player.onChat("zoo_sign", function () {
    blocks.print(
    "ZOO",
    LOG_OAK,
    world(-35, 82, -559),
    WEST
    )
})
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.move(LEFT, 1)
        agent.place(DOWN)
        agent.move(BACK, 1)
        agent.move(UP, 1)
    }
})
```

## Step 16
Change the ``||Blocks:along||`` value to suit the direction you would like the text to go. In our example, this is **North (negative Z)**, but in your own version, it might be different.  

#### ~ tutorialhint
``` blocks
player.onChat("zoo_sign", function () {
    blocks.print(
    "ZOO",
    LOG_OAK,
    world(-35, 82, -559),
    NORTH
    )
})
player.onChat("build_gates", function () {
    for (let index = 0; index < 15; index++) {
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.move(LEFT, 1)
        agent.place(DOWN)
        agent.move(BACK, 1)
        agent.move(UP, 1)
    }
})
```

## Step 17
Run the code. Time to test your code. Enter the **zoo_sign** command into the chat **T** function and press Enter. You will see the word **ZOO** appear in the sky above the zoo gates. 
