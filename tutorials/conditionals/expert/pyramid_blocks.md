# Agent Pyramid: Blocks


## Step 1
Create an ``||player:on chat||`` command and name it **"pyramid"**. Click the **(+)** sign and create a new **size** variable.

```blocks
player.onChat("pyramid", function (size){ 
 
}) 
```

## Step 2
Get an ``||logic:if-then||`` statement and drag it into the **pyramid** ``||player:on chat||`` command. Drag a ``||logic: comparison||`` into the **true** argument of the ``||logic:if-then||`` conditional  and set it to **>** (greater than). Then, insert the **size** variable into the first argument **left**. Leave the right argument empty.

```blocks
player.onChat("pyramid", function (size)){ 
    let size = 0 
    if (size > 0) { 
      
    } 
```

## Step 3

Add a ``||agent:set block or item||`` into the ``||logic:if-then||`` conditional and select **Sandstone**. Drag a ``||math: return product||`` into the **count** field, set it to **multiply**, drag the **size** variable into BOTH arguments of the product (multiplication template), and set the **in slot** argument to **1**. 

```blocks
player.onChat("pyramid", function (size){ 
    let size = 0 
    if (size > 0) { 
        agent.setItem(SANDSTONE, size * size, 1) 
    } 
}) 
```

## Step 4

Add a ``||agent:set active slot||`` block into the ``||logic:if-then||`` conditional and set the **slot** argument to 1.

```blocks
        agent.setItem(SANDSTONE, size * size, 1) 
        agent.setSlot(1) 
    } 
})
```

## Step 5

Add a ``||agent:place on move||`` block into the ``||logic:if-then||`` conditional and set the **logical** argument to **true**.

```blocks
        agent.setSlot(1) 
        agent.setAssist(PLACE_ON_MOVE, true) 
    } 
}) 
```

## Step 6

Get a ``||loops:for||`` loop and drag it into the ``||logic:if-then||`` conditional. Create a new variable with the name **I** and drag it into the **index** of the ``||loops:for||`` loop. Add a ``||math:return difference||`` of two numbers and set it to 4 minus 1.
	
```blocks
    agent.setAssist(PLACE_ON_MOVE, true) 
        for (let i = 0; i <= 0 - 0; i++) { 
          
        } 
    } 
```

## Step 7

Add an ``||agent:agent move||`` block into the ``||loops:for||`` loop, set the first argument to **forward** and set the second argument to **size**.

```blocks
        for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
        } 
```

## Step 8

 Add an ``||agent:agent turn||`` into the ``||loops:for||`` loop and set it to **left turn**.

```blocks
for (let i = 0; i <= 0 - 0; i++) { 
            agent.move(FORWARD, size) 
            agent.turn(LEFT_TURN) 
        } 
```

## Step 9

Outside the for loop, add another ``||agent:agent move||`` block, set it to **up by 1**, and then drag it into the end of the ``||logic:if-then||`` conditional .

```blocks
   } 
        agent.move(UP, 1) 
    } 
```


## Step 10

Add an ``||agent:agent place on move||`` block, set it to **false**, and drag it into the end of the ``||logic:if-then||`` conditional. Add another ``||agent:agent move||`` block, set it to **forward by 1**, and drag it into the end ``||logic:if-then||`` conditional.

```blocks
  agent.move(UP, 1) 
        agent.setAssist(PLACE_ON_MOVE, false)
```

## Step 11


Get a ``||player:run chat||`` command and drag it into the workspace. Get a ``||text:join||`` and drag it into the **string** argument of the ``||player:run chat||`` command. Type **pyramid** into the first string argument of the ``||text:join||``.  Get a ``||math:return difference||`` and drag it into the second string argument of the ``||text:join||``. Add the **size** variable into the first field in the ``||math:return difference||``block, then set the second field of the ``||math:return difference||`` to **2**. Drag the completed ``||player:run chat||`` command into the end ``||logic:if-then||`` conditional.

```blocks
        agent.setAssist(PLACE_ON_MOVE, false) 
        player.runChatCommand("pyramid" + (size - 2)) 
    } 
}) 
```

## Step 12

Go into Minecraft, type **t** and test the **pyramid** chat command.

```blocks
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

