# Chopping Trees: Javascript

## Step 1

Create an ``||player:on chat||`` command and name it **“tp”**.

```javascript
player.onChat("tp", function () {
})
```

## Step 2

Inside the ``||player:on chat||`` command, code the agent to ``||agent:teleport||`` to the player.

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## Step 3

Create another ``||player: on chat||`` command and name it **“chop”**.

```javascript
player.onChat("chop", function () {
})
```

## Step 4

Create a new ``||variable: variable||``, name it **height**, and set it to **0**.

```javascript
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

Inside the **chop** ``||player:on chat||`` command—directly under the **height** variable—create a ``||loops:while||`` loop that begins with: **while the agent detects a block forward**.

```javascript
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
```

## Step 6

Add to the ``||loops:while||`` loop to change the **height** ``||variable: variable||`` to the value of **height plus 1**.

```javascript
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
    }
```

## Step 7

In the ``||loops:while||`` loop—under the change variable **height**—code the agent to  **destroy up**. 

Also, add a line to have the **agent move up by 1**.

```javascript
    height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
```

## Step 8

Add a ``||loops:for||`` loop  after the ``||loops:while||`` loop. Insert the **height** variable into the **times** argument of the ``||loops:repeat||`` loop.

```javascript
for (let index = 0; index < height; index++) {
    } 
```

## Step 9

Inside the ``||loops:for||`` loop,  add a line for **agent move down by 1** and **agent destroy forward**.

```javascript
for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
```

## Step 10

After the ``||loops:for||`` loop, code the agent to ``||agent:collect all||`` .

```javascript
    }
    agent.collectAll()
})
```

## Step 11

Go into Minecraft, type **t** and test out the **tp**, and **chop** chat commands. 

```javascript
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
