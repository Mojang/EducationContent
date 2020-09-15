### @explicitHints 1

# Activity: All Mine!

## Step 1
Create controls for the agent. Rename the existing ``||Player:on chat command||`` to **"do"**.

## Step 2
You can make a simple menu to handle all the agent commands. Drag an ``||Logic:if then else||`` into ``||Player:on chat command "do"||``. Click the **(+)**  sign on the ``||Logic:if then else||`` to add a third branch for this because you will test for three conditions.

## Step 3
Click the **(+)** sign on ``||Player:on chat command "do"||`` and **rename num1** to **AgentOrder**.

### ~ tutorialhint
``` blocks
player.onChat("do", function (AgentOrder) {
    if (true) {

    } else if (false) {

    } else {

    }
})
```

##Step 4
Now just test to see what the user entered. You want the user to be able to teleport the agent and turn it. The third branch will give the user some information, if nothing is entered. Grab the **‘0 = 0’** comparison block and duplicate this because you need two.

Place these into the ``||Logic:if then else||`` block.

## Step 5
Adjust these so you test for what the user entered. We need to test the value of ``||Agent:AgentOrder||``. Let’s say a value of **1** means the agent teleports and a value of **2** means the agent should turn.


### ~ tutorialhint
``` blocks
player.onChat("do", function (AgentOrder) {
    if (AgentOrder == 1) {

    } else if (AgentOrder == 2) {

    } else {

    }
})

```

## Step 6
Last, you just need to add blocks to the branches to make your agent do the actions. Add an ``||Agent:agent teleport to player||`` block into the first branch of your ``||Logic:if then else||``.

## Step 7
Add an ``||Agent:agent turn||`` into the second branch of your ``||Logic:if then else||``.

## Step 8
In the last branch, add a message to give the user directions. Add a ``||Player:say||`` to the third branch of your ``||Logic:if then else||``.

## Step 9
Adjust the text in the ``||PLayer:say||`` to read **Enter 1 to teleport or 2 to turn**.

## Step 10
Make the “dig” command. Place an ``||Player:on chat command||`` into the coding Workspace, and rename it to **"dig"**.

## Step 11
You can only mine diamonds in Survival mode, so the first thing you should do is make sure you change the game mode to Survival. Place ``||Gameplay:change game mode||`` into ``||Player:on chat command "dig"||``.

## Step 12
Adjust ``||Gameplay:change game mode||`` by clicking the player selector drop-down menu to select **yourself @s**.

## Step 13
Drag an ``||Logic:if then else||`` out and drop it after the ``||Gameplay:change game mode||`` block.


### ~ tutorialhint
``` blocks
player.onChat("dig", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    if (true) {
    } else {
    }
})
```

## Step 14
Look for diamonds. You want to give an alert if the agent finds valuable blocks like diamond ore. Grab an **Equals (=)** comparison block to replace the **true** in your ``||Logic:if then else||``.

## Step 15
Drag an ``||Agent: agent inspect||`` into the first slot of the **Equals**, ``||Logic:0 = 0||``, replacing the number **0**. The ``||Agent:agent inspect||`` block will check the block directly in front of the agent.

Drag a ``||Blocks:block||`` out and drop it into the second slot of the **Equals**, ``||Logic:0 = 0||``.

In ``||Blocks:block||``, use the drop-down menu to select **Diamond Ore** as the block you are checking.


### ~ tutorialhint
``` blocks
player.onChat("dig", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    if (agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_ORE) {

    } else {

    }
})
```

## Step 16
Get rich! If you do find **Diamond Ore**, then you’ll want to print a message to the screen and mine the ore. Drag ``||Player:say||`` and drop it into the first branch of the ``||Logic:if then else||`` block.

In the ``||Player:say||`` block, enter a message like **"We’re rich!"**.

## Step 17
Drag the following three blocks and drop them in order under the ``||Player:say||`` block: ``||Agent:agent destroy||``, ``||Agent:agent move||``, and ``||Agent:agent collect all||``.

### ~ tutorialhint
``` blocks
player.onChat("dig", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    if (agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_ORE) {
        player.say("We're rich!")
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.collectAll()
    } else {
    }
})
```

## Step 18
Destroy the other blocks and keep mining. If the agent doesn’t find Diamond Ore, he should simply destroy the non-valuable block in front of it, and move forward without collecting anything. From ``||Agent:AGENT||``, drag ``||Agent:agent destroy||`` and ``||Agent:agent move||`` into the ``||Logic:else||`` clause.

## Step 19
You need to repeat this process **64** times, so you’ll use a loop. Drag a ``||Loops:repeat||`` loop out and surround your ``||Logic:if then else||`` block.

In the ``||Loops:repeat||`` loop, enter the number **64**.

### ~ tutorialhint
``` blocks
player.onChat("dig", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    for (let i = 0; i < 64; i++) {
        if (agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_ORE) {
            player.say("We’re rich!")
            agent.destroy(FORWARD)
            agent.move(FORWARD, 1)
            agent.collectAll()
        } else {
            agent.destroy(FORWARD)
            agent.move(FORWARD, 1)
        }
    }
})
```

## Step 20
Make a return trip. This will send your agent forward to mine **64** blocks, but you need to have it turn around and come back. So, you’ll use another loop outside your ``||Loops:repeat||`` loop. You are creating a “Nested Loop” because there will be a loop within a loop. Drag another ``||Loops:repeat||`` loop out and surround your existing ``||Loops:repeat 64||`` loop.

## Step 21
In the ``||Loops:repeat||`` loop, enter the number **2**, because you’ll want your agent to mine just two rows of blocks. At the end of the first row, you want your agent to move up and turn around.

## Step 22
Drag the following four blocks out and drop them in order under the inner ``||Loops:repeat||`` loop: ``||Agent:agent destroy||``, ``||Agent:agent move||``, and two ``||Agent:agent turn||`` blocks. Place them here to position your agent to come back. You will need to adjust the direction for a few of these blocks by using the the drop-down menu to select up.


### ~ tutorialhint
``` blocks 
player.onChat("dig", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    for (let i = 0; i < 2; i++) {
        for (let i = 0; i < 64; i++) {
            if (agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_ORE || agent.inspect(AgentInspection.Block, FORWARD) == GOLD_ORE) {
                player.say("We're rich!")
                agent.destroy(FORWARD)
                agent.move(FORWARD, 1)
                agent.collectAll()
            } else {
                agent.destroy(FORWARD)
                agent.move(FORWARD, 1)
            }
        }
        agent.destroy(UP)
        agent.move(UP, 1)
        agent.turn(TurnDirection.Left)
        agent.turn(TurnDirection.Left)
    }
})
```


