# Agent Maze: Javascript

## Step 1

Create an ``||logic:if then||`` command that evaluates whether an agent detects a block in front. If it evaluates to **true**, then turn left.

```javascript
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## Step 4

Add an ``||logic: else||`` statement to the ``||logic: if-statement||``, and within it include an instruction to have the ``||agent:agent move||`` **forward by 1**.  

**NOTE:** The full statement then becomes an ``||logic: if else||`` statement.

```javascript
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## Step 5

Place the ``||logic: if-else||`` statement within a ``||loops: forever||`` loop—so that these steps will continue until you stop them.

```javascript
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

```ghost 
agent.teleportToPlayer()
```
