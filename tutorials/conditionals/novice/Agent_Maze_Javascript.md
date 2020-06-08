
# Agent Maze: Javascript


## Step 1
Create a new ``||player:on chat||`` command and name it **“it”**.

```javascript
player.onChat("it", function () {
})
```

## Step 2


Inside the ``||player:on chat||`` command,  Code the agent to **turn left**.

```javascript
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## Step 3

Create an ``||logic:if then||`` that evaluates whether an agent detects a block in front. If it evaluates to **true**, then turn left.

```javascript
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## Step 4

Add an ``||logic: else||`` to the ``||logic: if-statement||``, and within it include an instruction to have the ``||agent:move||`` **forward by 1**.  **NOTE:** The full statement then becomes an ``||logic: if else||`` statement.

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

## Step 6

Create a new ``||player:on chat||`` command and name it **“tp”**.

```javascript
player.onChat("tp", function () {
})
```

## Step 7

Add a ``||mobs:teleport to player||`` inside the ``||player: on chat||`` command.

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

### Full Code: 

```javascript
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

