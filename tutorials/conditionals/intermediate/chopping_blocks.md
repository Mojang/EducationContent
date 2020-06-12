# Chopping Trees: Blocks


## Step 1
Create an ``||player:on chat||`` command and name it **“it”**.

```blocks
player.onChat("it", function () {
})
```

## Step 2

Get a ``||agent:turn||``, set it to **left**, and drag it inside the ``||player:on chat||`` command.

```blocks
player.onChat("it", function () {
    agent.turn(LEFT_TURN)
})
```

## Step 3

Create another ``||player:on chat||`` command and name it **“tp”**.

```blocks
player.onChat("tp", function () {
})
```

## Step 4

Get an ``||agent:teleport to player||`` and drag it inside the **tp**  ``||player:on chat||`` command.

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## Step 5

Create a third ``||player:on chat||`` command and name it **“chop”**.

```blocks
player.onChat("chop", function () {
})
```

## Step 6

Get a new ``||variable||``, click the dropdown,  then create a new **height** variable and set it to **0**. Drag this new variable into the **chop** ``||agent:on chat||`` command.

```blocks
let height = 0
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("chop", function () {
    height = 0
})
```

## Step 7

Get a ``||loops: while||`` loop and drag it into the workspace. Get an ``||agent:detect||`` and set it to **block** and **forward**. Drag this ``||agent:detect||`` inside the ``||loops:while||`` loop and then drag the while loop inside the **chop** ``||player:on chat||`` command directly under the **height** variable.

```blocks
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
```

## Step 8

Get a ``||change variable||``, set it to the value of **height plus 1**. Drag the **height** variable into the ``||loops: while||`` loop.

```blocks
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
    }
```

## Step 9

Get an ``||agent:destroy||`` and set it to **up**. Drag it into the ``||loops: while||`` loop under the change variable **height**.

Get an ``||agent:move||`` and set it to **up by 1**. Drag it into the ``||loops: while||`` loop directly beneath the ``||agent:destroy||``.

```blocks
    height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
```


## Step 10

Add a ``||loops:repeat||`` loop after the ``||loops: while||`` loop. Get the **height** variable and drag it into the **times** argument of the ``||loops:repeat||`` loop.

```blocks
for (let index = 0; index < height; index++) {
    } 
```

## Step 11

Duplicate the **up** ``||agent:move||`` (from above), then change it to **down**. Drag the **down** ``||agent:move||`` into the ``||loops:repeat||`` loop.

Duplicate the **up** ``||agent:destroy||`` (from above), then change it to **forward**. Drag the **forward** ``||agent:destroy||`` into the  ``||loops:repeat||`` loop. Place it directly beneath the ``||agent:move||``.

```blocks
for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
```

## Step 12

Get a ``||agent:collect all||`` and drag it into the  ``||loops:repeat||`` loop under the **forward** ``||agent:destroy||``.

```blocks
    }
    agent.collectAll()
})
```

## Step 13

Go into Minecraft and test out the **it**, **tp**, and **chop** chat commands.

### Full Code: 

```blocks
let height = 0
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
    for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
    agent.collectAll()
})
```


