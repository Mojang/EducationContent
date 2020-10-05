### @explicitHints 1

# Activity: Help Your Agent Farm 

## Step 1
By default, new projects start with a ``||Player:on chat command||``, but you will need two. Duplicate this ``||Player:on chat command||`` by right-clicking and selecting duplicate.

## Step 2
Name one **"tp"** to teleport the agent to your location, and name the other one **"farm"**.

## Step 3
Put ``||Agent:agent teleport to player||`` inside ``||Player:on chat command "tp"||``.


### ~ tutorialhint
``` blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("farm", function () {
})
```

## Step 4
Till Some soil. Drag a ``||Loops:repeat||`` block into ``||Player:on chat command "farm"||``.

## Step 5
This will determine the length of our row, so in ``||Loops:repeat||`` change **4** to **6**.

## Step 6
Put an ``||Agent:agent till||`` and ``||Agent:agent move||`` block into ``||Loops:repeat||``.


### ~ tutorialhint
``` blocks
player.onChat("farm", function () {
    for (let i = 0; i < 6; i++) {
        agent.till(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## Step 7
Come Back and Till Another Row. So far, using the current code, the agent will till the soil directly in front of it (with its own diamond hoe) and move forward into that space. It does this six times because of the ``||Loops:repeat||`` loop. Try running the code in Minecraft to see what happens.

## Step 8
Notice where the agent ends up after the ``||Loops:repeat||`` block finishes. This is great, but you need two rows! You need to get the agent to turn around and till the next row over so it ends up like the following picture. 

## Step 9
Adding another ``||Loops:repeat||`` block will allow you to accomplish this. You will also need to add some directions to turn the agent around before it starts the next row. Here is our attempt:


### ~ tutorialhint
``` blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("farm", function () {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 6; j++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
        }
        agent.turn(TurnDirection.Left)
        agent.move(FORWARD, 1)
        agent.turn(TurnDirection.Left)
    }
})
```

## Step 10
If you run this code, you will notice that there is a problem. The agent is not set up properly, and the second row is not aligned. How can you fix the code to make this work properly? Again, you want something where the rows are aligned perfectly. The direction the robot faces at the end is not important.
