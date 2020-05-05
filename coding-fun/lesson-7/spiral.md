### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Spiral

## Step 1
While the Agent is **inspecting the block forward** and the block is **not** the **gold block**, the Agent needs to **move forward**. If the Agent does **not** detect a block forward, the Agnet needs to **move forward**, otherwise it needs to **turn left**. 



```ghost
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.move(FORWARD, 1)
        } else {
            agent.turn(LEFT_TURN)
        }
    }
})
```
