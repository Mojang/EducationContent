#Lesson 1: Code a Park Fence

## Step 1
In Minecraft, ensure your player is at the following coordinates: **67, 69, -557**. If needed, teleport your player to the position by typing **/tp 67 69 -557** and selecting **Enter**.

Press **E** to access your inventory and select **Iron Bars**. Place them in your own inventory. 

Right click on your Agent and transfer the **Iron Bars** to its inventory. 

Position your Agent at the place you wish to start building the fence. In our example, we have marked this with **Yellow Wool**. 

## Step 2
Count the number of blocks you want your Agent to move and place fencing and note this in the space in your workbook. In our example, we have used **Yellow Wool** to mark every second space, allowing us to calculate it clearly and without error. We can replace these blocks with grass again once this is done. In our example, this is 25. 

Assuming your park is made up of four straight sides (as is our example park), measure the second side, immediately adjoining the end of the first you measured. In our example, this is 23. Our park is 23 x 25 bocks. Mark this information in the space in your workbook. 

## Step 3
Rename the **run** element of the ``||Player||on chat command||`` block to **park_fence**. 

Drag and drop the ``||Agent:agent set active slot||`` code block to the coding Workspace and add it to your  ``||Player:on chat command||`` code block.  

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

