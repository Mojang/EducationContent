# Farm: Javascript

## Step 1
Code an ``||player: on chat||`` command and name it **tp**. Code the agent ``||agent:to teleport to player||``. 

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## Step 2
Code an ``||player:on chat||`` command and name it **farm**.

```javascript
player.onChat("farm", function () { 
 
}) 
```

## Step 3
Code the ``||agent:agent||`` to set **carrots** at the count of **64** in slot **1**. 

```javascript
player.onChat("farm", function () {
    agent.setItem(CARROTS, 64, 1)
})
```

## Step 4
Code a ``|loops:for||`` loop that repeats **2** times. 

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
      
    } 
}) 
```

## Step 5
Code the ``||agent:agent||`` to move **back by 7** inside the ``||loops:for||`` loop.

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
    } 
}) 
```

## Step 6
After the ``||agent:agent move||`` **back** code, code the ``||agent: agent||`` to move **right by 4**.

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 2; index++) { 
        agent.move(BACK, 7) 
        agent.move(RIGHT, 4) 
    } 
}) 
```

## Step 7
Code a ``||loops:for||`` loop that repeats **7** times. Place it inside the first ``||loops:for||`` loop but above the ``||agent:move||`` move back code.

```javascript
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

## Step 8
Code the ``||agent:agent||`` to till **forward** inside the inner ``||loops:for||`` loop.

```javascript
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

## Step 9
After the ``||agent:agent till||``, code the ``||agent:agent||`` to move **forward by 1** .

```javascript
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

## Step 10
After the ``||agent:agent move||`` forward, code to have the ``||agent:agent||`` place forward. 

```javascript
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

## Step 11
Press the **Play** button, go into Minecraft and test out all the events.


```javascript
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
