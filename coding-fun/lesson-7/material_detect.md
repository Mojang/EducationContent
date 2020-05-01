### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Detecting your first material

## Step 1
Here is some starter code for you. We probably going to walk them through step by step and give them a starter code. 

#### ~ tutorialhint

```template
player.onChat("material", function () {
    for (let index = 0; index < 3; index++) {
        agent.move(FORWARD, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
            agent.destroy(FORWARD)
            agent.collectAll()
        }
    }
})

``` 



