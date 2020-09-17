# Activity: Maze Pathfinding

## Step 1
Use the provided starter code from the **Introduction to the Agent** activity.

```template
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("fd", function () {
    agent.move(SixDirection.Forward, 1)
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("bk", function () {
    agent.move(SixDirection.Back, 1)
})
player.onChat("rt", function () {
    agent.turn(TurnDirection.Right)
})
```

## Step 2
Let’s use the basic agent controls to move the agent to the starting point of the maze. Move your player to the start of the maze. Type the command “tp” into the chat window. Your agent should teleport over there. Then you will need to turn the agent left(“lt”) or right(“rt”) to get it facing inwards.

## Step 4
Create an ``||Player:on chat command||`` block and rename it to **"mr"** which stands for maze runner.

You’ll put the whole algorithm in a ``||Loops:while||`` loop, which will tell your agent to continue searching for the end of the maze as long as it isn’t standing on **redstone**. From ``||Loops:LOOPS||``, drag a ``||Loops:while||`` loop into ``||Player:on chat command "mr"||``.

## Step 5
Put a ``||Logic:not||`` block into the ``||Loops:while||`` loop replacing the true.

## Step 6
Drag an ``||Agent:agent detect||`` into the ``||Logic:not||``.

In the ``||Agent:agent detect||`` block, use the drop-down menu to select **redstone** as the type of block to detect.

In the ``||Agent:agent detect||`` block, use the drop-down menu to select **down** as the direction.

### ~ tutorialhint
``` blocks
player.onChat("mr", function () {
    while (!(agent.detect(AgentDetection.Redstone, DOWN))) {
    }
})
```

## Step 7
Check for a path to the left. Next, we’ll check to see if there is a path open to the left and if so, turn left and move forward.

Drag an ``||Logic:if then else||`` command into the ``||Loops:while||`` loop.

## Step 8
Drag a ``||Logic:not||`` block into the ``||Logic:if then||`` conditional slot replacing the **true** block.

## Step 9
Drag an ``||Agent:agent detect||`` into the ``||Logic:not||`` block.

## Step 10
In the ``||Agent:agent detect||`` block, use the drop-down menu to select **left** as the direction to look.

### ~ tutorialhint
``` blocks
player.onChat("mr", function () {
    while (!(agent.detect(AgentDetection.Redstone, DOWN))) {
        if (!(agent.detect(AgentDetection.Block, LEFT))) {

        } else {

        }
    }
})
```

## Step 11
Turn and move forward. If the Agent doesn’t detect a block to its left, then we want the Agent to turn left and move forward. Drag an ``||Agent:agent turn||``, and an ``||Agent:agent move||`` command into the first branch of your ``||Logic:if then||``.

## Step 12
Check for a path forward or to the right. Now we need to add 2 more conditions to check forward and to the right of the Agent. Click the Plus **(+)** sign at the bottom of the If then else block twice, to add 2 more ``||Logic:Else if||`` clauses.

### ~ tutorialhint
``` blocks
player.onChat("mr", function () {
    while (!(agent.detect(AgentDetection.Redstone, DOWN))) {
        if (!(agent.detect(AgentDetection.Block, LEFT))) {

        } else if (false) {

        } else if (false) {

        } else {

        }
    }
})
```

## Step 13
Duplicate Conditions for the Other Branches of Your If.  Right-click on the ``||Logic:not||`` block in the first If then conditional slot, and select Duplicate – do this twice to create two more ``||Logic:not||`` ``||Agent:agent detect||`` conditions.

Drop these duplicated conditions into the two additional ``||Logic:else if||`` slots.

## Step 14
In the second branch of the ``||Logic:else if||``, use the drop-down menu to select forward as the direction to check. Thus, we are checking left and then forward.

## Step 15
In the third branch of the ``||Logic:else if||``, use the drop-down menu to select right as the direction to check. Thus, we are checking left, forward, and then right.

### ~ tutorialhint
``` blocks
player.onChat("mr", function () {
    while (!(agent.detect(AgentDetection.Redstone, DOWN))) {
        if (!(agent.detect(AgentDetection.Block, LEFT))) {
            agent.turn(TurnDirection.Left)
            agent.move(FORWARD, 1)
        } else if (!(agent.detect(AgentDetection.Block, FORWARD))) {
        } else if (!(agent.detect(AgentDetection.Block, RIGHT))) {
        } else {
        }
    }
})
```

## Step 16
Move ahead forward. If the agent doesn’t detect a block in front of it, then it should simply move forward. From ``||Agent:AGENT||``, drag an ``||Agent:agent move||`` block into the second branch of the ``||Logic:else if ||``clause.

## Step 17
Move along to the right. If the agent doesn’t detect a block to its right, then the agent should turn right and move forward.

## Step 18
Drag an ``||Agent:agent turn||``, and an ``||Agent:agent move||`` block into the third branch of the ``||Logic:else if||`` clause.

## Step 19
In the ``||Agent:agent turn||`` block, use the drop-down menu to select **right** as the direction to turn.

## Step 20
You may also want to just duplicate these blocks. That is perfectly fine as well!

### ~ tutorialhint
``` blocks
player.onChat("mr", function () {
    while (!(agent.detect(AgentDetection.Redstone, DOWN))) {
        if (!(agent.detect(AgentDetection.Block, LEFT))) {
            agent.turn(TurnDirection.Left)
            agent.move(FORWARD, 1)
        } else if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else if (!(agent.detect(AgentDetection.Block, RIGHT))) {
            agent.turn(TurnDirection.Right)
            agent.move(FORWARD, 1)
        } else {
        }
    }
})
```

## Step 21
Turn around and go backward. Finally, if the agent is at a dead-end (none of the three directions are open), you want the agent to turn around and head back in the opposite direction. From ``||Agent:AGENT||``, drag the following 3 blocks into the last ``||Logic:else||`` clause: 2 agent turn blocks, and an ``||Agent:agent move||`` block.

### ~ tutorialhint
``` blocks
player.onChat("mr", function () {
    while (!(agent.detect(AgentDetection.Redstone, DOWN))) {
        if (!(agent.detect(AgentDetection.Block, LEFT))) {
            agent.turn(TurnDirection.Left)
            agent.move(FORWARD, 1)
        } else if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else if (!(agent.detect(AgentDetection.Block, RIGHT))) {
            agent.turn(TurnDirection.Right)
            agent.move(FORWARD, 1)
        } else {
            agent.turn(TurnDirection.Left)
            agent.turn(TurnDirection.Left)
            agent.move(FORWARD, 1)
        }
    }
})
```

## Step 22
Found the redstone! If the agent detects Redstone, it will know it has reached the finish. You can have the agent do a happy dance at the end of the maze! Feel free to reuse the code from the **Dance Dance Agent** activity in **Lesson 5: Iteration**.

## Step 23
To run the code for ``||Player:on chat command "dance"||``, place a ``||Player:run chat command ""||`` block from ``||Player:PLAYER||`` underneath and outside the ``||Loops:while||`` loop. It should read ``||Player:run chat command "dance"||`` when you are finished. **Using ``||Player:run chat command "dance"||`` is like making a function call. You could use a function here instead if you wanted to**.

### ~ tutorialhint
``` blocks
player.onChat("fd", function () {
    agent.move(FORWARD, 1)
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("bk", function () {
    agent.move(BACK, 1)
})
player.onChat("rt", function () {
    agent.turn(TurnDirection.Right)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("mr", function () {
    while (!(agent.detect(AgentDetection.Redstone, DOWN))) {
        if (!(agent.detect(AgentDetection.Block, LEFT))) {
            agent.turn(TurnDirection.Left)
            agent.move(FORWARD, 1)
        } else if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else if (!(agent.detect(AgentDetection.Block, RIGHT))) {
            agent.turn(TurnDirection.Right)
            agent.move(FORWARD, 1)
        } else {
            agent.turn(TurnDirection.Left)
            agent.turn(TurnDirection.Left)
            agent.move(FORWARD, 1)
        }
    }
    player.runChatCommand("dance")
})
player.onChat("dance", function () {
    for (let i = 0; i < 4; i++) {
        agent.move(LEFT, 1)
        agent.attack(FORWARD)
        agent.move(RIGHT, 1)
        agent.move(RIGHT, 1)
        agent.move(LEFT, 1)
    }
})
```
