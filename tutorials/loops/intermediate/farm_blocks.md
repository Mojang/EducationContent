# Farm: Blocks

## Step 1
Rename an ``||player: on chat||`` command into **tp**. Drag ``||agent:agent teleport||`` into the **tp** ``||player: on chat||`` command.

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## Step 3

Get another ``||player:on chat||`` command and name it **farm**.

```blocks
player.onChat("farm", function () { 
 
}) 
```

## Step 4
Get a ``||agent:set block or item||`` block and drag it into the **farm** ``||player:on chat||`` command. Select **carrots**, then set the count to **64** and slot to **1**.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
}) 
```

## Step 5
Below the ``||agent:set block or item||`` block, place a ``||loops:repeat||`` loop, set it to repeat **2** times, and drag it into the **farm** ``||player: on chat||`` command.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
      
    } 
}) 
```

## Step 6
Get an ``||agent:agent move||`` block, set it to **back by 7** and drag it inside the ``||loops:repeat||`` loop.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
    } 
}) 
```

## Step 7
Get another ``||agent:agent move||``, set it to **right by 4** and drag it inside the ``||loops:repeat||`` loop and place it at the bottom of the loop.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## Step 8
Get another ``||loops:repeat||`` loop, set it to repeat **7** times, and drag it inside the existing ``||loops:repeat||`` loop but above the ``||agent:move||`` **back by 7**.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
          
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## Step 9
Add a ``||agent:till||`` block, set it to **forward**, then drag it inside the second/inner repeat loop.  

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
            agent.till(FORWARD) 
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## Step 10
Add a ``||agent:move||`` block, set it to **forward by 1**, then drag it inside the second/inner repeat loop.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        for (let index = 0; index < 7; index++) { 
            agent.till(FORWARD) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## Step 11
Add a ``||agent:place||`` block, set it to **forward**, then drag it inside the second/inner repeat loop.

```blocks
player.onChat("farm", function () {
    agent.setItem(CARROTS, 64, 1)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 7; index++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        }
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
    }
})
```

## Step 12
Press the **Play** button, go into Minecraft and test out all the events.

```blocks
player.onChat("farm", function () {
    agent.setItem(CARROTS, 64, 1)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 7; index++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        }
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
    }
})
```

```ghost
agent.teleportToPlayer()
agent.move(FORWARD, 1)
agent.turn(LEFT_TURN)
```
