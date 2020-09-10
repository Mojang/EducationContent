### @explicitHints 1

# Lesson 2: Code a Water Feature 

## Step 1
Rename the **run** element of the ``||Player:on chat command||`` block to **park_fountain**.

Dig the fountain boundary. The next phase is to create the frame or boundary of the fountain. We will do this by first digging out the ground and then replacing those blocks with **Cobblestone**. 

## Step 2
Drag the ``||Loops:repeat [4] times||`` code block into your ``||Player:on chat command||`` set and leave it set to **4**.  

This means our Agent will repeat the next set of actions four times. Because we're going to use multiple loops, this first one will be referred to as the **outer** loop.  

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
```

## Step 3
Drag another ``||Loops:repeat [4] times||`` code block into your ``||Player:on chat command||`` set. Place it inside the first loop and set it to **5**. 

Add an ``||Agent:agent move [forward]||`` code block to the coding Workspace and set it to **1**. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
        }
    }
})
```

## Step 4
Drag the ``||Agent:agent destroy [forward]||`` code block to the coding Workspace, place it in the second or inner ``||Loops:repeat [4] times||`` and use the drop-down menu to set it to **down**.   

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
    }
})
```


## Step 5
Add an ``||Agent:agent turn [left]||`` code block inside the first or **outer** ``||Loops:repeat [4] times||`` but outside the second or inner ``||Loops:repeat [5] times||``. 

Drag the ``||Agent:agent move [forward]||`` code block under ``||agent:agent turn left||``. Set the block to **back** and change the number to **1**. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
})
```

## Step 6
Test your code now. You will see your Agent dig out the ground in a 4 x 4 frame. 

Fill with Cobblestone. Now we need to fill this newly formed hole with Cobblestone as a frame for the fountain. 

## Step 7
Drag the ``||Agent:agent set active slot||`` code block and place it under the ``||Loops:repeat [4] times||`` inside the ``||Player:on chat command||`` blocks. The Agent does not need to repeat this, and this is part of a new action. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
})
```

## Step 8
Now repeat the steps, placing the new set after the ``||Agent:agent set active slot||`` and replacing only the ``||Agent:agent destroy [down]||`` with ``||Agent:agent place [down]||``.  

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
})
```

## Step 9
Test your code once more. Note that this time, the Agent digs out the ground and then replaces it with **Cobblestone**. This forms the frame for the fountain. 

Dig inside the fountain. Now, we need to code the Agent to clear the ground away inside the fountain, so the water doesn't flood the park. 

## Step 10
Drag an ``||Agent:agent move [forward]||`` code block, change it to **left** and place it last in your current code. 

Get another ``||Agent:agent move [forward]||`` code block, leave it set to **forward** and place it last in your current code. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
})
```

## Step 11
Drag a ``||Loops:repeat [4] times||`` code block onto the end of your ``||Player:on chat command||`` code and set it to **3**.

There is a 3 x 3 block of Grass in the center of the fountain frame that the Agent needs to clear. Therefore, we need to give it three actions and repeat these three times. Again, we'll refer to the first as the outer loop. And the second as the inner loop.  

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
    	
    }
})
```

## Step 12
Get another ``||Loops:repeat [4] times||`` code block. Place it inside the first loop and set it to **3**.  

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
        	
        }
    }
})
```

## Step 13
Next, get your Agent to ``||Agent:agent move [forward]||`` and leave it set to **1**. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
        }
    }
})
```

## Step 14
Get your Agent to ``||Agent:agent destroy||`` and set it to **down** with the drop-down menu. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
    }
})
```

## Step 15
Let's get the Agent back into position. Get your Agent to ``||Agent:agent move [forward]||``, set it to **back**, and change the number to **3**. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.move(BACK, 3)
    }
})
```

## Step 16
Get your Agent to ``||Agent:agent move [forward]||`` and set it to **left**. 
This will place your Agent at the start of the next set of three blocks to be removed, and the outer loop will ensure this is repeated three times. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.move(BACK, 3)
        agent.move(LEFT, 1)
    }
})
```

## Step 17
Test your code and watch your Agent dig out the inside of the fountain frame. 

## Step 18
Code the water feature. Drag an ``||Agent:agent move [forward]||`` code block to your main code then change the number to **2**. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.move(BACK, 3)
        agent.move(LEFT, 1)
    }
    agent.move(FORWARD, 2)
})
```

## Step 19
Get an ``||Agent:agent move [forward]||`` code block, change **forward** to **right** with the drop-down menu and the number to **2**. This will place your Agent in the center of the fountain. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.move(BACK, 3)
        agent.move(LEFT, 1)
    }
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 2)
})
```

## Step 20
Get a ``||Loops:repeat [4] times||`` code block, and change the number to **5**.

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.move(BACK, 3)
        agent.move(LEFT, 1)
    }
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 2)
    for (let index = 0; index < 5; index++) {
    	
    }
})
```

## Step 21
Return to the ``||Agent:AGENT||`` drawer and get an ``||Agent:agent place [down]||`` code block, and add it to your code, inside the ``||Loops:repeat [5] times||`` block. 
This means your Agent will place the first of five blocks of **Cobblestone** in the base of the fountain.

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.move(BACK, 3)
        agent.move(LEFT, 1)
    }
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 2)
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
    }
})
```


## Step 22
Get an ``||Agent:agent move [forward]||`` code block, add it to your code and change it to **up** with the drop-down menu. 
This will put your Agent at the top of the fountain, ready for the water to be added. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.move(BACK, 3)
        agent.move(LEFT, 1)
    }
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 2)
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(UP, 1)
    }
})
```


## Step 23
Get an ``||Agent:agent set active slot||`` code block, add it to your code and change it to **2**, which is the slot in your Agent's inventory that has the **Bucket of Water** in it. 
Get your Agent to ``||agent: move||`` **up** by **1**, then add an ``||agent:agent place||`` **down** block. 

#### ~ tutorialhint
``` blocks
player.onChat("park_fountain", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.destroy(DOWN)
        }
        agent.move(BACK, 3)
        agent.move(LEFT, 1)
    }
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 2)
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(UP, 1)
    }
    agent.setSlot(2)
    agent.move(UP, 1)
    agent.place(DOWN)
})
```


## Step 24
Now check and test your code before placing your fountain somewhere in the park.
