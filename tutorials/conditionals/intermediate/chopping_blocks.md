# Chopping Trees: Blocks

## Step 1
Get an ``||player:on chat||`` command and name it **“tp”**.

```blocks
player.onChat("tp", function () {
})
```

## Step 2
Get an ``||agent:teleport to player||`` and drag it inside the **tp**  ``||player:on chat||`` command.

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## Step 3

Create another ``||player:on chat||`` command and name it **“chop”**.

```blocks
player.onChat("chop", function () {
})
```

## Step 4

Create a new ``||variable: variable||`` and name it **height**, set it to **0**. Drag this new variable into the **chop** ``||player:on chat||`` command.

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

## Step 5

Get a ``||loops: while||`` loop and drag it into the workspace. Get an ``||agent:agent detect||`` block and set it to **block** and **forward**. Drag the ``||agent:detect||`` block inside the ``||loops:while||`` loop and then drag the while loop inside the **chop** ``||player:on chat||`` command directly under the **height** variable.

```blocks
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
```

## Step 6

Get a ``||variable: change variable||``, set it to the value of **height plus 1**. Drag the **height** variable into the ``||loops: while||`` loop.

```blocks
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
    }
```

## Step 7

Get an ``||agent:agent destroy||`` and set it to **up**. Drag it into the ``||loops: while||`` loop under the change variable **height**.

Get an ``||agent:agent move||`` and set it to **up by 1**. Drag it into the ``||loops: while||`` loop directly beneath the ``||agent:agent destroy||``.

```blocks
    height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
```


## Step 8

Add a ``||loops:repeat||`` loop after the ``||loops: while||`` loop. Get the **height** variable and drag it into the **times** argument of the ``||loops:repeat||`` loop.

```blocks
for (let index = 0; index < height; index++) {
    } 
```

## Step 9

Duplicate the ``||agent:move||`` block (from above), then change it to **down**. Drag the ``||agent:agent move down||`` into the ``||loops:repeat||`` loop.

Duplicate the ``||agent: agent destroy||`` (from above), then change it to **destroy forward**. Drag the ``||agent:agent destroy forward||`` into the  ``||loops:repeat||`` loop. Place it directly beneath the ``||agent:move||``.

```blocks
for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
```

## Step 10

Get a ``||agent:collect all||`` block and drag it into the  ``||loops:repeat||`` loop under the ``||agent:agent destroy forward||``.

```blocks
    }
    agent.collectAll()
})
```

## Step 11

Go into Minecraft, press **t** and test the tutorial out by typing **tp** and **chop** chat commands.

