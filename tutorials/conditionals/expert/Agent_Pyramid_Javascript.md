
# Agent Pyramid: Javascript


## Step 1
Create a ``||player: on chat||`` command, name it **“pyramid”**, and set the second argument to **function (size)**.

```javascript
player.onChat("pyramid", function (size){ 
 
}) 
```

## Step 2

Add an ``||logic:if||`` statement that evaluates whether **size** is greater than 0.

```javascript
player.onChat("pyramid", function (size)){ 
    let size = 0 
    if (size > 0) { 
      
    } 
```

## Step 3

Inside the ``||logic:if||`` statement, code the agent to ``||agent:set block or item||`` of **sandstone** to be the value of the **size** variable multiplied by **size**—in slot 1.

```javascript
player.onChat("pyramid", function (size){ 
    let size = 0 
    if (size > 0) { 
        agent.setItem(SANDSTONE, size * size, 1) 
    } 
}) 
```

## Step 4

Code the agent to ``||agent:set the active slot||`` as the 1 slot.

```javascript
        agent.setItem(SANDSTONE, size * size, 1) 
        agent.setSlot(1) 
    } 
})
```

## Step 5

Next, set the agent ``||agent:place on move||`` to **true**.

```javascript
        agent.setSlot(1) 
        agent.setAssist(PLACE_ON_MOVE, true) 
    } 
}) 
```

## Step 6

Add a ``||loops:for||`` loop that says the variable **i** from 0 to 4 minus 1.

```javascript
    agent.setAssist(PLACE_ON_MOVE, true) 
        for (let i = 0; i <= 0 - 0; i++) { 
          
        } 
    } 
```

## Step 7

 Code the agent to ``||agent:move forward||`` by the value of the **size** variable.

```blocks
        for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
        } 
```

## Step 8

Code the agent to ``||turn left||`` and end of the ``||loops:for||`` loop. 

```javascript
for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
            agent.turn(LEFT_TURN) 
        } 
```

## Step 9

After the ``||loops:for||`` loop, but still inside the ``||logic:if||`` statement, code the agent to **move up by 1**. 

```javascript
   } 
        agent.move(UP, 1) 
    } 
```

## Step 10

 Code the agent ``||agent:place on move||`` to be **false**. 

```javascript
  agent.move(UP, 1) 
        agent.setAssist(PLACE_ON_MOVE, false)
```

## Step 11

Place a ``||player:run chat||`` command to join the **pyramid** chat plus the value of the **size** variable minus 2.

```javascript
        agent.setAssist(PLACE_ON_MOVE, false) 
        player.runChatCommand("pyramid" + (size - 2)) 
    } 
}) 
```

## Step 12

Go into Minecraft and test the **pyramid** chat command.

### Full Code: 

```javascript
player.onChat("pyramid", function (size) { 
    if (size > 0) { 
        agent.setItem(SANDSTONE, size * size, 1) 
        agent.setSlot(1) 
        agent.setAssist(PLACE_ON_MOVE, true) 
        for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
            agent.turn(LEFT_TURN) 
        } 
        agent.move(UP, 1) 
        agent.setAssist(PLACE_ON_MOVE, false) 
        player.runChatCommand("pyramid" + (size - 2)) 
    } 
}) 
```

