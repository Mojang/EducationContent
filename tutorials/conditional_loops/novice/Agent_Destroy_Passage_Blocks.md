
# Agent Destroy Passage: Blocks


## Step 1
Get an ``||player:on chat||`` command and name it “destroy”.

```blocks
player.onChat("destroy", function () {
})
```

## Step 2
Add a ``||loops:while loop||`` inside the ``||player:on chat command "destroy"||``. Get a ``||agent:detect||`` and drag it into the ``||while loop||`` inside the “true”. Set the agent ``||detect||`` to **block** and **forward**. 

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
})
```

## Step 3
Get a  ``||agent:destroy||``, set it to **forward**, and drag it into the ``||while loop||``.

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
    }
})
```

## Step 4

Get a ``||agent:move||`` and set it to **forward** by **one**. Drag the agent move into the ``||while loop||`` after the ``||agent:destroy||``.

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
```

## Step 5

Get a ``||agent:destroy||`` and set it to **up**. Drag the agent destroy into the ``||while loop||`` after the ``||agent:move||``.

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})
```

### Full Code: 

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})
```

