# House for Loops: Javascript

## Step 1
Code an ``||player:on chat||`` command that makes the ``||agent:teleport to player||``. Name it **tp**. 

```javascript
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
```

## Step 2
Code another ``||player:on chat||`` command and name it **walls**.

```javascript
player.onChat("walls", function () { 
 
}) 
```

## Step 3
Code a ``||agent:set block or item||`` of **acacia wood planks** at a count of **64** in slot **1** inside the **walls** ``||player: on chat||`` command.

```javascript
player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
}) 
```

## Step 4
Inside the **walls** ``||player:on chat||`` command, code a ``||loops:for||`` loop that repeats **3** times the ``||agent:move||`` **up by 1** step.

```javascript
  player.onChat("walls", function () { 
    agent.setItem(PLANKS_ACACIA, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(UP, 1) 
    } 
}) 
```

## Step 5
Inside the first ``||loops:for||`` loop and under the  ``||agent:move||`` code, code another ``||loops:for||`` loop that has ``||agent:agent turn right||`` step that repeats **4** times.

```javascript
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
Inside the second ``||loops:for||`` loop but above the ``||agent:turn right||`` code, code a third ``||loops:for||`` loop that repeats **4** times the steps of ``||agent:place||`` down and ``||agent:move||`` **forward by 1**.

```javascript
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
Code a new ``||player:on chat||`` command and name it **roof**.   

```javascript
player.onChat("roof", function () { 
 
}) 
```

## Step 8
Code the ``||agent:set block or item||`` to set a **Bricks slab** at a count of **64** in slot **1** and then code the agent to ``||agent:move||`` **up by 1**.

```javascript
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
}) 
```

## Step 9
Inside the **roof** ``||player:on chat||`` command, code a ``||loops:for||`` loop to repeat **4** times the steps of ``||agent:agent move||`` **back by 4** ``||agent:agent move||`` **right by 1**.  
	
```javascript
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
    agent.move(UP, 1) 
    for (let index = 0; index < 4; index++) { 
        agent.move(BACK, 1) 
        agent.move(RIGHT, 1) 
    } 
}) 
```

## Step 10
Inside the previous ``||loops:for||`` loop—above the ``||agent:move||`` **back** step—code another ``||loops:for||`` loop to repeat **4** times the steps of  ``||agent:place down||`` and ``||agent:move||`` **forward by 1**.

```javascript
player.onChat("roof", function () { 
    agent.setItem(BRICKS_SLAB, 64, 1) 
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
Press the **Play** button, go into Minecraft and test out **walls** and **roof**.

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("roof", function () {
    agent.setItem(BRICKS_SLAB, 64, 1)
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

