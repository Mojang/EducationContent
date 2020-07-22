# Agent Destroy Passage: Javascript


## Step 1
Code an ``||player:on chat||`` command and name it **“destroy”**.

```spy
player.onChat("destroy", function () {
})
```

## Step 2
Add a ``||loops:while||`` loop inside the ``||player:on chat ||``  command that continues as long as it ``||agent: detects||`` a block **forward**. 

```spy
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {  	
    }
})
```

## Step 3
Code the agent to ``||agent:destroy||`` **forward** inside the ``||loops:while||`` loop.

```spy
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
    }
})
```

## Step 4

Code the agent to ``||agent:move forward||`` by **one** after the ``||agent:destroy forward||`` code inside the ``||loops:while||`` loop.

```spy
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## Step 5

Code the agent to ``||agent:destroy||`` **up** after it ``||agent:moves forward||`` , then **end** the ``||loops:while||`` loop.

```spy
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})
```
## Step 6

Press the **Play** button, go to Minecraft, type **t** and try out **destroy**. 

```blocks
player.onChat("destroy", function () { 
    while (agent.detect(AgentDetection.Block, FORWARD)) { 
        agent.destroy(FORWARD) 
        agent.move(FORWARD, 1) 
        agent.destroy(UP) 
    } 
})


```ghost
agent.teleportToPlayer()
```

