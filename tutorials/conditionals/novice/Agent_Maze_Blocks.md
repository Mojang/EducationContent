
# Agent Maze: Blocks


## Step 1
Get an ``||agent:on chat||`` command and name it **“it”**.

```blocks
player.onChat("it", function () {
})
```

## Step 2

Get an ``||agent:turn||``, set it to **left** and put it inside the ``||on chat||`` command.

```blocks
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## Step 3

Get an ``||if/then conditional||`` that evaluates an ``||agent:detect||``, set it to **block** and **forward**, then add an ``||agent:turn||`` **left** within the ``||if/then conditional||``.

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## Step 4

Click the **(+)** to add an ``||else||`` to the ``||if/then conditional||``, then put in an ``||agent:move||`` **forward by 1**.  **NOTE:** The full statement then becomes an if-else statement).

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## Step 5

Get a ``||forever loop||`` and place the ``||if/else statement||`` within this loop—so that these steps will continue until you stop them. 

```blocks
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## Step 6

Get a new ``||agent:on chat||`` command and name it **“tp”**.

```blocks
player.onChat("tp", function () {
})
```

## Step 7
Add an ``||agent teleport||`` to the inside of the ``||chat||`` command.

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

