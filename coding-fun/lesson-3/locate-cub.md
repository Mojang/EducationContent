### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Locate the cub!

## Step 1
Program the Agent to dig a path without knowing how far it goes by using ``||loops:while||`` & ``||agent:agent detect||`` commands. The Agent needs to ``||agent:destroy forward & up||`` for you to be able to walk through all the snow! When done, press the **Play** button to compile the code. Don't forget to run your code in Minecraft. 

#### ~ tutorialhint 
Look at the coding snippets shapes when you snap them together. Use ``||agent:agent move forward||``.

```template
player.onChat("cub", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
})
```

```ghost
player.onChat("cub", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})

``` 
