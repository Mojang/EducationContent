### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Track Down the Rover 

## Step 1
Fix this coding snippet. Here is the objective: This time the Agent needs to **destroy down** and **move down**, while **inspecting** for a **gold** block on the **left**. The Agent needs to continue **moving down** until it locates the **gold** block on the left. While **moving down**, if the Agent finds a *stone** block **in front**, it needs to say, "Found the stone!", **destroy forward** and **collect** the block. 


```template
player.onChat("rover", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != BLOCK_OF_QUARTZ) {
            if (agent.inspect(AgentInspection.Block, UP) == GOLD_BLOCK) {
            agent.turn(LEFT_TURN)
        }
            if (agent.inspect(AgentInspection.Block, RIGHT) == IRON_BLOCK) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    player.say("Found the rover!")
})
```

