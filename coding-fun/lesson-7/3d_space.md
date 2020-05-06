### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 3d Space

## Step 1
While the Agent is **inspecting the block forward** and the block is **not** the **gold block**, the Agent needs to **move forward**. If the Agent does **not** detect a block forward, the Agnet needs to **move forward**, otherwise it needs to **turn left**. When the Agent reaches the **gold block**, it needs to **destroy** and **collect** it. After that the Agent needs to **move 3 levels up** and repeat the procedure. 


```template
player.onChat("3D", function () {
    for (let index = 0; index < 2; index++) {
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
            if (!(true)) {
            	
            } else {
            	
            }
        }
        agent.destroy(FORWARD)
    }
})
``` 
```ghost
player.onChat("3D", function () {
    for (let index = 0; index < 2; index++) {
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
            if (!(agent.detect(AgentDetection.Block, FORWARD))) {
                agent.move(FORWARD, 1)
            } else {
                agent.turn(LEFT_TURN)
            }
        }
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.move(UP, 3)
    }
})
```