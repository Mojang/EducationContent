### @explicitHints 1
# Introduction to the Agent 

## Step 1
Change the name of the default ``||Player:on chat command||`` block to "tp".


### ~ tutorialhint
```blocks
player.onChat("tp", function () {})
```

## Step 2
Teleport the agent. Drag an ``||Agent:agent teleport to player||`` block and drop it inside the on chat command block.

### ~ tutorialhint
```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## Step 3
Move and turn your agent. Now, in Minecraft, when you enter **tp** in the chat window, the agent will teleport directly to your location. You should do this whenever you want to use the agent in a project. You might also want to create some additional basic commands to move the agent around.

### ~ tutorialhint
```blocks 
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
```

## Step 4
This makes it easier to control the agent precisely. Alternatively, you could always just stand where you want the agent to be and then enter **tp** in the chat window.
