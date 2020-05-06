### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Locate the Sample! 

## Step 1
**While** the Agent **inspects the block down** and doesn't find **ice**, program the Agent to **destroy** and **move down**. When the Agent locates the **ice**, it needs to **destroy down**, **collect** the sample and say "**Ice collected**"". 

```ghost 
player.onChat("ice", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != ICE) {
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
    }
    agent.destroy(DOWN)
    agent.collectAll()
    player.say("Ice collected!")
})
```

```template
player.onChat("ice", function () {
    while (true) {
        agent.destroy(DOWN)
    }
})
```
