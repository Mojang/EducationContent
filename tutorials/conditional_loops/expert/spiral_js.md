# Spiral Activity: Javascript


## Step 1
Code an ``||player:on chat||`` command and name it **“spiral”**.

```javascript
player.onChat("spiral", function () {
})
```

## Step 2

Code a ``||loops:while||`` loop that begins with: while the ``||agent:agent inspects||`` a block **forward** is not equal to a block of **gold**.

```javascript
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## Step 3

Code an ``||logic:if-else||`` statement to go inside the ``||loops:while||`` loop that starts with: if the agent ``||agent:does NOT detect||`` a block **forward** then ``||agent:moves||`` **forward** by **1**. 

```javascript
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

```javascript
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
Press the **Play** button, go to Minecraft, type **t** and try out **spiral**. 

```javascript
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
```ghost
agent.teleportToPlayer()
```
