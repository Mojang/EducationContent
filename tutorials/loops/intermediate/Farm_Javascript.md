
# Farm: Javascript

## Step 1
Code an ``||player:on chat||`` command and name it **farm**.

```javascript
player.onChat("farm", function () { 
 
}) 
```

## Step 2
Code the ``||agent||`` to set **carrots** at the count of **64** in slot **1**. 

```javascript
player.onChat("farm", function () {
    agent.setItem(CARROTS, 64, 1)
})
```

## Step 3
Code a ``|loops:for||`` loop that repeats **3** times. 

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
      
    } 
}) 
```

## Step 4
Code the ``||agent||`` to move **back by 5** inside the ``||loops:for|| loop.

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(BACK, 5) 
    } 
}) 
```

## Step 5
After the ``||agent:move||`` back code, code the ``||agent||`` to move **right by 2**.

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        agent.move(BACK, 5) 
        agent.move(RIGHT, 2) 
    } 
}) 
```

## Step 6
Code a ``||loops:for||`` loop that repeats **5** times. Place it inside the first ``||loops:for||`` loop but above the ``||agent:move||`` move back code.

```javascript
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
Code a ``||agent:till||`` to till **forward** inside the inner ``||loops:for||`` loop.

```javascript
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
After the ``||agent:till||``, code the ``||agent||`` to move **forward by 1** .

```javascript
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
After the ``||agent:move||`` forward, code to have the ``||agent:place||`` forward. 

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

## Step 10
Go into Minecraft and test out all the events.

### Full Code: 

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

