# Agent Maze: Blocks


## Step 1
Get an ``||player:on chat||`` command and name it **“it”**.

```blocks
player.onChat("it", function () {
})
```

## Step 2

Get an ``||agent:agent turn||``block, set it to **left** and put it inside the ``||player:on chat||`` command.

```blocks
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## Step 3

Get a ``||loops: forever||`` loop and drag it into the workspace. 

```blocks
loops.forever(function () {
	
})
```

## Step 4
Get an ``||logic:if then||`` conditional that evaluates a ``||agent:detect||``command, set it to **block** and **forward**, then add a ``||agent:turn||`` **left** block within the ``||logic: if then||``  conditional.

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## Step 5

Click the **(+)** sign to add ``||logic: else||`` to the ``||logic:if then||`` conditional, then put in an ``||agent:agent move||`` **forward by 1** block.

**NOTE:** The full statement then becomes an **if-else statement.

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## Step 6

Place the ``||logic:if else||`` statement within the ``||loops:forever||`` loop—so that these steps will continue until you stop them. 

```blocks
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    })
```

## Step 7

Get a new ``||player:on chat||`` command and name it **“tp”**.

```blocks
player.onChat("tp", function () {
})
```

## Step 7
Add a ``||agent:teleport to player||`` block inside the ``||player:on chat||`` command.

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```


