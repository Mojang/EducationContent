# House for Loops: Blocks

## Step 1
Get an ``||player:on chat||`` command and name it **teleport**. Get an ``||agent:teleport to player||`` and drag it into the ``||player:on chat||`` command.  

```blocks
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
```

## Step 2
Get a new ``||player:on chat||`` command and name it **walls**.

```blocks
player.onChat("walls", function () { 
 
}) 
```

## Step 3
Get a ``||agent:set block or item||`` and drag it into the on **walls** ``||player: on chat||`` command. Select **Acacia Wood Planks**, then set the count to **64** and slot to **1**.

```blocks
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
}) 
```

## Step 4
Get a ``||loops:repeat||`` loop, set it to **3** times, and drag it into the **walls** ``||player:on chat||`` command—below the ``||agent:set block or item||``. Add an ``||agent:move||`` inside the ``||loops:repeat||`` loop and set it to **up by 1**.

```blocks
  player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
    } 
}) 
```

## Step 5
Get another ``||loops:repeat||`` loop, set it to **4** times, and drag it inside the first ``||loops:repeat||`` loop—beneath the first ``||agent:move||``. Add an ``||agent:turn right||`` into the second ``||loops:repeat||`` loop.

```blocks
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## Step 6
Get a third ``||loops:repeat||`` loop and drag it inside the second ``||loops:repeat||`` loop and set it above the ``||agent: turn right||``. Set the third ``||loops:repeat||`` loop to repeat **4** times. Add a ``||agent:place||`` block to the innermost ``||loops:repeat||`` loop and set it to **down**. Add a ``||agent:move||``block, set it to **forward by 1** and drag it inside the innermost ``||loops:repeat||`` loop under the ``||agent:place||`` down.

```blocks
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            for (let index = 0; index < 4; index++) { 
                agent.place(DOWN) 
                agent.move(FORWARD, 1) 
            } 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## Step 7
Get a new ``||player:on chat||`` command and name it **roof**.   

```blocks
player.onChat("roof", function () { 
 
}) 
```

## Step 8
Get a ``||agent:set block or item||``, set it to **Bricks slab** and then set the count to **1** and slot to **1** and drag it into the **roof** ``||player:on chat||`` command. Add a ``||agent:move||`` and set it to up by **1**.

```blocks
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 1, 1) 
    agent.move(UP, 1) 
}) 
```

## Step 9
Get a ``||loops:repeat||`` loop and drag it inside the **roof** ``||player:on chat||`` command. Set it to repeat **4** times. Add an ``||agent:move||`` and set it to **back by 4**. Also, add an ``||agent:move||`` and set it to **right by 1**.  
	
```blocks
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 1, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## Step 10
Get another ``||loops:repeat||`` loop, set it to repeat **4** times. Add an ``||agent:place down||`` and also an ``||agent:move||`` and set it to **forward by 1**. Drag this ``||loops:repeat||`` loop inside the previous repeat loop, above the ``||agent:move||`` **back by 4**.

```blocks
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 1, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        for (let index = 0; index < 4; index++) { 
            agent.place(DOWN) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## Step 11
Go into Minecraft and test out all the events.

### Full Code: 

```blocks
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 1, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        for (let index = 0; index < 4; index++) { 
            agent.place(DOWN) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            for (let index = 0; index < 4; index++) { 
                agent.place(DOWN) 
                agent.move(FORWARD, 1) 
            } 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

