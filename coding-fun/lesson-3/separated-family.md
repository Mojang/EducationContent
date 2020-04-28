### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Separated Family!

## Step 1
Program the Agent to build a bridge across the chasm in the ice. Ensure that the Agent has **64** blocks of **oak planks** in the inventory. 

#### ~ tutorialhint 
Don't forget to use **not** in your **while** loop. Think where you want the Agent to place blocks. 


```ghost
player.onChat("family", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
})

``` 
