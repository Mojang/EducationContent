### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Reach magma

## Step 1
Program the Agent move 1 step forward. While the Agent inspects block down and it is not **magma**, the Agent needs to move down. When the **magma** is reached, say ""**Reached the magma!**". 


```ghost
player.onChat("magma", function () {
    agent.move(FORWARD, 1)
    while (agent.inspect(AgentInspection.Block, DOWN) != MAGMA_BLOCK) {
        agent.move(DOWN, 1)
    }
    player.say("Reached the magma!")
})
```

```template
player.onChat("magma", function () {
    while (true) {
    	
    }
    player.say("")
})
```