### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Repair the Rover 

## Step 1
Fix this coding snippet. Here is the objective: while **inspecting** for a block of **air** and **not** finding it, the Agent needs to **move right**. If the Agent finds the block of **lapis lazuli** **in front**, it needs to **move right**, **turn left**, then **move right**. After that the Agent needs to say, "Found the break!" and **place a block of redstone forward**.



```template
player.onChat("repair", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) == AIR) {
        agent.move(RIGHT, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == LAPIS_LAZULI_BLOCK) {
            agent.move(RIGHT, 1)
            agent.turn(RIGHT_TURN)
            agent.move(LEFT, 1)
        }
    }
    player.say("Found the break!")
    agent.setItem(GRASS, 1, 1)
    agent.place(FORWARD)
})
```
