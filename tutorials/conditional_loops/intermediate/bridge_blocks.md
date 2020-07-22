
# Build a Bridge: Blocks


## Step 1
Get an ``||player:on chat||`` command and name it **“build”**.

```blocks
player.onChat("build", function () {
})
```

## Step 2
Get a ``||agent:set block||`` and set it to **oak wood planks**, count of **64**, in slot **1**. Drag the newly completed ``||agent:set block||`` inside the ``||player:on chat||`` command. 

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
})
```

## Step 3
Get an ``||agent:agent move||`` block, set it to **forward** by **1** and drag it into the ``||player:on chat||``  command after the ``||agent:set||`` block.

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
})
```

## Step 4

Get a ``||loops:while||`` loop and drag it into the  ``||player:on chat||``  command after the ``||agent:agent move||`` **forward** block. Get a ``||logic:not||`` block and drag it into the **true** of the ``||loops:while||`` loop. Get an ``||agent:agent detect||`` block and set it to **block** and **down**. Drag the completed ``||agent:agent detect||`` block into the **not** parentheses.

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

## Step 5

Get an ``||agent:agent place||`` block, set it to **down** and drag it inside the ``||loops:while||`` loop.

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
    }
})
```

## Step 6

Right-click on the existing ``||agent:move||`` **forward by 1** to duplicate it. Drag the new ``||agent:move||`` **forward by 1** into the ``||loops:while||`` loop under the ``||agent:agent place||`` down block.

```blocks
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```


