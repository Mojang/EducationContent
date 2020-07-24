# Agent Move: JavaScript

## Step 1
Code an ``||player:on chat||`` command and name it **“tp”**.

```javascript
player.onChat("tp", function () {
})
```

## Step 2

Inside the **tp**  ``||player:on chat||`` command, code the agent to ``||agent:teleport to player||`` .

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## Step 3

Code another ``||player:on chat||`` command and name it **“fd”**.

```javascript
player.onChat("fd", function () {
})
```

## Step 4

Inside the  ``||player:on chat||`` **fd** command , code the agent to ``||agent:move||`` and set it to **forward by 5**. 

```javascript
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
```

## Step 5

Code another ``||player:on chat||`` command and name it **“lt”**.

```spy
player.onChat("lt", function () {
})
```

## Step 6

Inside the ``||player:on chat||`` **lt** command, code the agent to ``||agent:turn||`` and set it to **turn left**.

```javascript
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## Step 7

Create yet another ``||player:on chat||`` command and name it **“rt”**.

```javascript
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## Step 8

Inside the **rt** chat command, code the ``||agent:agent||`` to **turn right**.

```javascript
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## Step 9

Press the **Play** button, return to Minecraft, press **t** to open the chat and type the commands **tp**, **rt**, **lt**, **fd**—one at a time—to see what happens.

```javascript
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
player.onChat("rt", function () { 
    agent.turn(RIGHT_TURN) 

})
```

