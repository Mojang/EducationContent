# Spiral Activity: Javascript


## Step 1
Code a ``||player:on chat||`` command and name it **“spiral”**.

```spy
player.onChat("spiral", function () {
})
```

## Step 2

Code a ``||loops:while||`` loop that begins with: while the ``||agent:inspects||`` a block **forward** is not equal to a block of **gold**.

```spy
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## Step 3

Code an ``||logic:if-else||`` statement to go inside the ``||loops:while||`` loop that starts with: if the agent ``||agent:does NOT detect||`` a block **forward** then ``||agent:moves||`` **forward** by **1**. 

```spy
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
        	
        }
    }
})
```

## Step 4

In the ``||logic:else||`` clause of the ``||logic:if-else statement||``, write that the ``||agent:turns||`` **left**. 

```spy
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
            agent.turn(LEFT_TURN)
        }
    }
})
```

## Step 5

Outside of the ``||loops:while||`` loop, code the agent to ``||agent:move up||`` by **3** .

```spy
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
            agent.turn(LEFT_TURN)
        }
    }
    agent.move(UP, 3)
})
```

## Step 6

Code the ``||loops:while||`` loop to be repeated **2** times by adding a ``||loops:for||`` loop around it. 

```spy
 player.onChat("spiral", function () {
    for (let index = 0; index < 2; index++) {
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
            if (!(agent.detect(AgentDetection.Block, FORWARD))) {
                agent.move(FORWARD, 1)
            } else {
                agent.turn(LEFT_TURN)
            }
        }
        agent.move(UP, 3)
    }
})
```

### Full Code: 

```spy
 player.onChat("spiral", function () {
    for (let index = 0; index < 2; index++) {
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
            if (!(agent.detect(AgentDetection.Block, FORWARD))) {
                agent.move(FORWARD, 1)
            } else {
                agent.turn(LEFT_TURN)
            }
        }
        agent.move(UP, 3)
    }
})
```

