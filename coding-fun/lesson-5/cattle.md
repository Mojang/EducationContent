### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Cattle

## Step 1
Look at the starter code and try running it. This code allows you to navigate the Agent without counting blocks. 

```template
player.onChat("cattle", function () {
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
})
``` 

## Step 2
Look at the path the Agent needs to take and make sure you finish the coding sequence with correct turns for the Agent. You can **duplicate** the code by right-clicking on the blocks and selecting **duplicate** option. 


