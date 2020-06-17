# House Functions: Blocks

## Step 1
Add a ``||advanced:function||`` and name it **walls**. 

```blocks
function walls () {
}
```

## Step 2
Add a ``||agent:set block or item||`` command and place it within **walls** function. Set it to **Acacia Wood Planks** with the count of **64** in slot **1**.

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
}
```

## Step 3
Get a ``||loops:repeat||`` loop, set it to **3** times, and drag it into the **walls** ``||advanced:function||``—below the ``||agent:set block or item||``. Add a ``||agent:move||`` inside the ``||loops:repeat||`` loop and set it to **up by 1**.

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
    }
}
```

## Step 4
Get another ``||loops:repeat||`` loop, set it to **4** times, and drag it inside the first ``||loops:repeat||`` loop—beneath the first ``||agent:move||``. Add a ``||agent:turn right||`` into the second ``||loops:repeat||`` loop.

```blocks
function walls () {
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
        for (let index = 0; index < 4; index++) { 
            agent.turn(RIGHT_TURN) 
        } 
    } 
}) 
```

## Step 5
Get a third ``||loops:repeat||`` loop, drag it inside the second ``||loops:repeat||`` loop and place it above the a``||agent: turn right||``. Set the third ``||loops:repeat||`` loop to repeat **4** times. Add a ``||agent:place||`` to the innermost ``||loops:repeat||`` loop and set it to **down**. Add a ``||agent:move||``, set it to **forward by 1** and drag it inside the innermost ``||loops:repeat||`` loop under the ``||agent:place||`` down.

```blocks
function walls () {
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

## Step 6
Get a new ``||advanced:function||`` and name it **roof**.   

```blocks
function roof () {
	
}
```

## Step 7
Get a ``||agent:set block or item||``, set it to **brick slab** and then set the count to **1** and slot to **1** and drag it into the **roof** ``||advanced:function||``. Add a ``||agent:move||`` and set it to up by **1**.

```blocks
function roof () {
    agent.setItem(BRICKS_SLAB, 1, 1) 
    agent.move(UP, 1) 
}) 
```

## Step 8
Get a ``||loops:repeat||`` loop and drag it inside the **roof** ``||advanced:function||``. Set it to repeat **4** times. Add a ``||agent:move||`` and set it to **back by 4**. Also add another ``||agent:move||`` and set it to **right by 1**.  
	
```blocks
function roof () {
    agent.setItem(BRICKS_SLAB, 1, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        agent.move(BACK, 4) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## Step 9
Get another ``||loops:repeat||`` loop, set it to repeat **4** times. Add a ``||agent:place down||``, followed by a ``||agent:move||``—set it to **forward by 1**. Drag this ``||loops:repeat||`` loop inside the previous repeat loop—above the ``||agent:move||`` **back by 4**.

```blocks
function roof () {
    agent.setItem(BRICKS_SLAB, 1, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        for (let index = 0; index < 4; index++) { 
            agent.place(DOWN) 
            agent.move(FORWARD, 1) 
        } 
        agent.move(BACK, 4) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## Step 10
Drag an ``||player:on chat||`` command into the workspace and name it **house**. Add a ``||advanced:function||``, and have it call both the **walls** and **roof** ``||advanced:functions||``.

## Step 11
Go into Minecraft and test out all the events.

### Full Code: 

```blocks
function walls () {
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
}
function roof () {
    agent.setItem(BRICKS_SLAB, 1, 1)
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 4)
        agent.move(RIGHT, 1)
    }
}
player.onChat("house", function () {
    walls()
    roof()
})
```

