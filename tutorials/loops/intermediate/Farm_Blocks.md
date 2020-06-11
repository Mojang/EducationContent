# Farm: Blocks

## Step 1
Get an ``||player:on chat||`` command and choose **farm**.

```blocks
player.onChat("farm", function () { 
 
}) 
```

## Step 2
Get an ``||agent:set block or item||`` and drag it into the **farm** ``||player:on chat||`` command.  

Select **carrots**, then set the count to **64** and slot to **1**.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
}) 
```

## Step 3
Below the ``||agent:set block or item||``, place a ``||loops:repeat||`` loop, set it to repeat **3** times, and drag it into the **farm** ``||player: on chat||`` command.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
      
    } 
}) 
```

## Step 4
Get a ``||agent:move||``, set it to **back by 5** and drag it inside the ``||loops:repeat||`` loop.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(BACK, 5) 
    } 
}) 
```

## Step 5
Get another ``||agent:move||``, set it to **right by 2** and drag it inside the ``||loops:repeat||`` loop and place it at the bottom of the loop.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(BACK, 5) 
        agent.move(RIGHT, 2) 
    } 
}) 
```

## Step 6
Get another ``||loops:repeat||`` loop, set it to repeat **5** times, and drag it inside the existing ``||loops:repeat||`` loop but above the ``||agent:move||`` **back by 5**.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        for (let index = 0; index < 5; index++) { 
          
        } 
        agent.move(BACK, 5) 
        agent.move(RIGHT, 2) 
    } 
}) 
```

## Step 7
Add a ``||agent:till||``, set it to **forward**, then drag it inside the second/inner repeat loop.  

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        for (let index = 0; index < 5; index++) { 
            agent.till(FORWARD) 
        } 
        agent.move(BACK, 5) 
        agent.move(RIGHT, 2) 
    } 
}) 
```

## Step 8
Add a ``||agent:move||``, set it to **forward by 1**, then drag it inside the second/inner repeat loop.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        for (let index = 0; index < 5; index++) { 
            agent.till(FORWARD) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 5) 
        agent.move(RIGHT, 2) 
    } 
}) 
```

## Step 9
Add an ``||agent:place||``, set it to **forward**, then drag it inside the second/inner repeat loop.

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        for (let index = 0; index < 5; index++) { 
            agent.till(FORWARD) 
            agent.move(FORWARD, 1) 
            agent.place(FORWARD) 
        } 
        agent.move(BACK, 5) 
        agent.move(RIGHT, 2) 
    } 
}) 
```

## Step 10
Go into Minecraft and test out all the events.

### Full Code: 

```blocks
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        for (let index = 0; index < 5; index++) { 
            agent.till(FORWARD) 
            agent.move(FORWARD, 1) 
            agent.place(FORWARD) 
        } 
        agent.move(BACK, 5) 
        agent.move(RIGHT, 2) 
    } 
}) 
```

