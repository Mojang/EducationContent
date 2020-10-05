### @explicitHints 1

# Activity: Agent Tree Chopper 

## Step 1
Rename the existing ``||Player:on chat command||`` to **"tp"**.
Drag an ``||Agent:agent teleport to player||`` block inside ``||Player:on chat command "tp"||``.

## Step 2
Now, let's also create a directional command, so we can turn our Agent around. You can right-click on ``||Player:on chat command "tp"||`` and select **Duplicate** to make a copy.

Rename the duplicate **"lt"**.

## Step 3
Delete the inside block for this new duplicate and replace ``||Agent:agent teleport to player||`` with ``||Agent:agent turn 'left'||``.

### ~ tutorialhint
``` blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
```

##Step 4
Create the height variable. Drag an ``||Player:on chat command||`` block into the coding Workspace and rename it **"chop"**.

You'll use a variable to keep track of the height of the tree. In the ``||Variables:VARIABLES||`` Toolbox drawer, click the **Make a Variable** button. Name the new variable **height**.

## Step 5
Initialize height to **zero**. Drag out ``||Variables:set||`` and snap it inside ``||Player:on chat command "chop"||``.

## Step 6
In the ``||Variables:set||`` block, use the drop-down menu to select **height** as the variable and set **height** to **0**.

### ~ tutorialhint
``` blocks
let height = 0
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("chop", function () {
    height = 0
})
```

## Step 7
Start at the base of a tree. Assume the agent is placed facing the base of the tree when the chop command is given. Use the "tp" and "lt" commands to get your agent in place and then finally "chop". Use a ``||Loops:while||`` loop, which is like a ``||Loops:repeat||`` loop combined with a conditional statement. The code will continue as long as there is a block in front of the agent. If there is a block in front of the agent, then it will keep moving up the tree.

## Step 8
Drag out a ``||Loops:while||`` loop and drop it under ``||Variables:set 'height'||``. This would be inside ``||Player:on chat command "chop"||``.

## Step 9
Drag out ``||Agent:agent detect 'block' 'forward'||`` and drop it into the ``||Loops:while||`` loop replacing ``||Logic:true||``.

### ~ tutorialhint
``` blocks
let height = 0
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {

    }
})
```

## Step 10
Move up the tree and chop. Place a ``||Variables:change||`` block inside the ``||Loops:while||`` loop.

The new block should read ``||Variables:change 'height' by 1||``. This will increase the height variable by 1 each time the agent moves up. This is how we can keep track of the height of the tree.

## Step 11
If leaves or branches are above the agent's head, you need to destroy them in order to move the agent up. Place an ``||Agents: agent destroy||`` block below ``||Variables:change 'height' by 1||``. You will need to adjust this block by selecting **up** as the direction from the drop-down menu.

## Step 12
Finally, get your agent to move up. Grab an ``||Agent:agent move||`` block, and then use the drop-down menu to select up as the **direction** like you did in the previous step.

### ~ tutorialhint
``` blocks
let height = 0
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
})
```

## Step 13
Come back down. Drag out a ``||Loops:repeat||`` loop, and drop it after the ``||Loops:while||`` loop in your ``||Player:on chat command "chop"||``.

## Step 14
Drag out height and replace the **4** in the ``||Loops:repeat||`` loop.

### ~ tutorialhint
``` blocks
let height = 0
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
    for (let i = 0; i < height; i++) {

    }
})
```

## Step 15
Chop while you drop. At this point the agent should be standing at the top of a tree. You need to get it to climb back down, chop the tree, and collect the wood. Place an ``||Agent:agent move||`` and ``||Agent:agent destroy||`` inside the ``||Loops:repeat||`` loop.

## Step 16
Now you need to adjust these blocks for the situation. The agent needs to **move down** and will be chopping each piece of the tree that is **in front** of it. In the ``||Agent:move||`` block, select **down** as the direction. The agent will move down. Then, the agent should destroy the tree block in front of it. The default settings are ok for ``||Agent:destroy||``.

## Step 17
Finally, you want your agent to collect all the wood it chopped. Place an ``||Agent:agent collect all||`` after the ``||Loops:repeat||`` loop. This is now the last block in our ``||Player:on chat command||`` for **"chop"**.

### ~ tutorialhint
``` blocks 
let height = 0
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
    for (let i = 0; i < height; i++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
    agent.collectAll()
})
```
