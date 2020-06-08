
# Spiral Activity: Javascript


## Step 1
Code a ``||chat||`` command and name it **“spiral”**.

```javascript
player.onChat("spiral", function () {
})
```

## Step 2

Code a ``||while loop||`` that begins with: while the ``||agent inspects||`` a block **forward** is not equal to a block of **gold**.

```javascript
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## Step 3

Code an ``||if/else statement||`` to go inside the ``||while loop||`` that starts with: if the agent ``||does NOT detect||`` a block **forward** then ``||agent moves||`` **forward** by **1**. 

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

In the ``||else||`` clause of the ``||if/else statement||``, write that the ``||agent turns||`` **left**. 

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

Outside of the ``||while loop||``, code the agent to ``||move up||`` by **3** .

```javascript
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

Code the ``||while loop||`` to be repeated **2** times by adding a ``||for loop||`` around it. 

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

### Full Code: 

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

