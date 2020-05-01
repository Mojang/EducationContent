### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 3d Space

## Step 1
Starter code:

#### ~ tutorialhint

```template
player.onChat("3d", function () {
    for (let index = 0; index < 2; index++) {
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
            if (agent.detect(AgentDetection.Block, FORWARD)) {
                agent.move(FORWARD, 1)
            } else {
                agent.turn(LEFT_TURN)
            }
        }
        agent.move(UP, 1)
    }
})

``` 
