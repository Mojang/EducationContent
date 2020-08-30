### @explicitHints 1

#Lesson 1: Code a Park Fence

## Step 1
Rename the **run** element of the ``||Player||on chat command||`` block to **park_fence**. 

Drag and drop the ``||Agent:agent set active slot||`` code block to the coding Workspace and add it to your  ``||Player:on chat command||`` code block.  

#### ~ tutorialhint
``` blocks
player.onChat("park_fence", function () {
    agent.setSlot(1)
})
```


## Step 4
Drag the ``||Agent:agent [place on move]||`` code block to the coding Workspace, add it to your ``||Player:on chat command||`` code block, then set it to **true**. Now your Agent will place the **Iron Fence** from inventory **slot 1**, as it walks.

``` blocks
player.onChat("park_fence", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
})
```

## Step 5
Drag the ``||Loops:repeat [4] times||`` into your ``||Player:on chat command||`` set and change it to **2**. 

``` blocks
player.onChat("park_fence", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 2; index++) {
    	
    }
})
```

## Step 6
Drag the ``||Agent:agent move [forward]||`` code block to the coding Workspace, add it to your ``||Player:on chat command||`` code block, inside the ``||Loops:repeat [4] times||`` loop, then set it to our first number, **25**(from **Step 5**). 

``` blocks
player.onChat("park_fence", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 25)
    }
})
```

## Step 7
Drag the ``||Agent:agent turn [left]||`` code block to your ``||PLayer:on chat command||`` code block, inside the ``||Loops:repeat [2] times||`` and set it to the direction your Agent needs to turn. In our example, this is **left**. 

``` blocks
player.onChat("park_fence", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 25)
        agent.turn(LEFT_TURN)
    }
})
```

## Step 8
Drag the ``||Agent:agent move [forward]||`` code block to your ``||Player:on chat command||`` code block, then set it to our second number, **23** (from **Step 6**). 

``` blocks
player.onChat("park_fence", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 25)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 23)
    }
})
```

## Step 9
Drag one more ``||Agent:agent turn [left]||`` code block to your ``||Player:on chat command||`` code block inside the **loop** and leave it set to **left**.

``` blocks
player.onChat("park_fence", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 25)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 23)
        agent.turn(LEFT_TURN)
    }
})
```

## Step 10
Test your code. Place your Agent on the starting block and run your code by pressing **T** to open the chat box and type **park_fence**. 

You will notice that the last block, on the second loop, isn't placed by the Agent. This is because it is technically blocked by the very first block you placed, so it's in the way of the last block to be placed. You may wish to place this manually or use it as the entrance to the park. 

