# Agent Destroy Passage: Blocks


## Step 1
Rename a ``||player:on chat||`` command into **“destroy”**.

```blocks
player.onChat("destroy", function () {
})
```

## Step 2
Add a ``||loops:while||`` loop inside the ``||player:on chat||`` command. Get a ``||agent:detect||`` block and drag it into the ``||loops:while||`` loop inside the **true**. Set the ``||agent:detect||`` block to **block** and **forward**. 

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
})
```

## Step 3
Get a  ``||agent:destroy||``block, set it to **forward**, and drag it into the ``||loops:while||`` loop.

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
    }
})
```

## Step 4

Get a ``||agent:move||`` block and set it to **forward** by **one**. Drag the ``||agent:agent move||`` block into the ``||loops:while||`` loop after the ``||agent:destroy||`` block.

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## Step 5

Get a ``||agent:destroy||`` block and set it to **up**. Drag the ``||agent: agent destroy||`` block into the ``||loops:while||`` loop after the ``||agent:move||``.

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})
```
```ghost
agent.teleportToPlayer()
```

