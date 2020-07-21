# Agent Maze: Blocks


## Step 1
Get an ``||player:on chat||`` command and name it **“it”**.

```blocks
player.onChat("it", function () {
})
```

## Step 2

Get a ``||agent:turn||``, set it to **left** and put it inside the ``||player:on chat||`` command.

```blocks
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## Step 3

Get an ``||logic:if then||`` conditional that evaluates a ``||agent:detect||``, set it to **block** and **forward**, then add a ``||agent:turn||`` **left** within the ``||logic: if then||``  conditional.

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## Step 4

Click the **(+)** to add an ``||logic: else||`` to the ``||logic:if then||`` conditional, then put in a ``||agent:move||`` **forward by 1**. **NOTE:** The full statement then becomes an if-else statement.

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## Step 5

Get a ``||loops: forever||`` loop and place the ``||logic:if else||`` statement within this loop—so that these steps will continue until you stop them. 

```blocks
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## Step 6

Get a new ``||player:on chat||`` command and name it **“tp”**.

```blocks
player.onChat("tp", function () {
})
```

## Step 7
Add a ``||agent:teleport to player||`` to inside the ``||player:on chat||`` command.

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

### Full Code: 

```blocks
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


