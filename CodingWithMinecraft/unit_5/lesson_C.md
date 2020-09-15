### @explicitHints 1

# Activity: Pyramid

## Step 1
Copy the Starter Code. Copy the code from the hint.

### ~ tutorialhint
```javascript
player.onChat("tp", function () {
        player.teleport(positions.create(3, 0, 3))
        agent.teleportToPlayer() 
        player.teleport(positions.create(-3, 0, -3)) 
}) 
player.onChat("pyramid", function (BaseSize) {
        agent.setAssist(AgentAssist.PlaceOnMove, true)
        for (let i = 0; i <= 3; i++) {
                agent.move(SixDirection.Forward, BaseSize - 1)
                agent.turn(TurnDirection.Left)
        } 
        agent.move(SixDirection.Up, 1)
        agent.setAssist(AgentAssist.PlaceOnMove, false)
        agent.move(SixDirection.Forward, 1)
        player.runChatCommand("pyramid " + (BaseSize - 2))
})
player.onChat("turn", function () {
        agent.turn(TurnDirection.Left)
})
```
## Step 2
Run the code, examine the problem with the Starter Code. If you run this code just the way it is, you will notice something peculiar. 

## Step 3
Equip your agent with some blocks.

In your chat window, enter **tp** to teleport your agent near you. You may want to turn your agent by using the Turn command as well, but perhaps this is not necessary.

## Step 4
Enter **pyramid 5** in the chat window and see what happens. Your agent should build the pyramid just fine, but it will not stop there. The agent just keeps building and building forever. Your code is in an infinite loop! This happens because at the very end of the code, you have a block that continues to call the code again and again.

### ~ tutorialhint
``` javascript
let BaseSize = 0
player.runChatCommand("pyramid " + (BaseSize - 2))
```

## Step 5
Add **If Statements**. Your task is to put some **If statements** into this code to stop the infinite behavior! 

### ~ tutorialhint
If you are caught in an infinite loop, you will need to stop your code from the code connection window. Click the stop button in the lower-left corner of your code connection window.

## Step 6
Stop Looping. To stop the loop, you need to check a variable and then tell your code to stop the loop. Using an if statement is great in this kind of situation. Drag an ``||Logic:if then else||`` command into your code so that the **if statement** surrounds all the code inside ``||Player:on chat command "pyramid"||``.

### ~ tutorialhint
``` javascript
player.onChat("pyramid", function (BaseSize) {
    if (true) {
        agent.setAssist(PLACE_ON_MOVE, true)
        for (let i = 0; i <= 3; i++) {
            agent.move(FORWARD, BaseSize - 1)
            agent.turn(TurnDirection.Left)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(FORWARD, 1)
        player.runChatCommand("pyramid " + (BaseSize - 2))
    } else {

    }
})
```

## Step 7
Now let’s enter the condition. You want the loop to stop if the **size** goes below **zero**. The user enters a size and after each pass through this code, the size gets reduced by **2**. Again, this block is where that is happening.

``` javascript
let BaseSize = 0
player.runChatCommand("pyramid " + (BaseSize - 2))
```

## Step 8
Grab one of the commands ``||Logic:0 = 0"||`` or ``||Logic:0 < 0"||`` and place this inside your ``||Logic:if then else||``.

### ~ tutorialhint
``` javascript
let MadePyramid = false
player.onChat("pyramid", function (BaseSize) {
    // Detect if we should continue building pyramid
    if (BaseSize > 0) {
        agent.setAssist(PLACE_ON_MOVE, true)
        // Builds one level of the pyramid
        for (let i = 0; i <= 3; i++) {
            agent.move(FORWARD, BaseSize - 1)
            agent.turn(TurnDirection.Left)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(FORWARD, 1)
        MadePyramid = true
        player.runChatCommand("pyramid " + (BaseSize - 2))
    } else {

    }
})

```

## Step 9
You want your comparison to read **'BaseSize > 0'**. If the size is greater than zero, let’s build something BUT if it is not, you will give the user a message.

### ~ tutorialhint
``` javascript
let MadePyramid = false
player.onChat("pyramid", function (BaseSize) {
    // Detect if we should continue building pyramid
    if (BaseSize > 0) {
        agent.setAssist(PLACE_ON_MOVE, true)
        // Builds one level of the pyramid
        for (let i = 0; i <= 3; i++) {
            agent.move(FORWARD, BaseSize - 1)
            agent.turn(TurnDirection.Left)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(FORWARD, 1)
        MadePyramid = true
        player.runChatCommand("pyramid " + (BaseSize - 2))
    } else {

    }
})
```

## Step 10
With that If statement, you stopped the looping! How else could you improve this code? There are two situations where the size will be zero. When the agent has just finished building a pyramid or the user forgot to enter a size for their pyramid. The code will go to the else point  in the ``||Logic: If Then||`` block when that happens.

## Step 11
Can you figure out a way to check for the preceding two conditions (A and B)? You would check for this in that else branch. Look closely at our final code before doing the challenges. There is a hint on how to solve this puzzle. Did you notice the new command?

### ~ tutorialhint
``` javascript
let MadePyramid = false
// Teleports the agent near you but a little away so
// you have time to get out of his way when he starts
// building
player.onChat("tp", function () {
    player.teleport(pos(3, 0, 3))
    agent.teleportToPlayer()
    player.teleport(pos(-3, 0, -3))
})
player.onChat("turn", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("pyramid", function (BaseSize) {
    // Detect if we should continue building pyramid
    if (BaseSize > 0) {
        agent.setAssist(PLACE_ON_MOVE, true)
        // Builds one level of the pyramid
        for (let i = 0; i <= 3; i++) {
            agent.move(FORWARD, BaseSize - 1)
            agent.turn(TurnDirection.Left)
        }
        agent.move(UP, 1)
        agent.setAssist(PLACE_ON_MOVE, false)
        agent.move(FORWARD, 1)
        MadePyramid = true
        player.runChatCommand("pyramid " + (BaseSize - 2))
    } else {

    }
})
```

## Step 12
Try using this variable and an ``||Logic:if||`` statement to complete the challenges!
