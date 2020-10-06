# Mega Jump: JavaScript

## Step 1
Add an ``||player:on chat||`` command named **“jump”**.

```javascript
player.onChat("jump", function () { 
}) 
```

## Step 2

Add the code in the ``||player:chat||`` command to ``||player:teleport||`` the player to the position **(0,100,0)** (which is 100 blocks higher than the current position). 

```javascript
player.onChat("jump", function () { 
   player.teleport(pos(0,100,0))  
}) 
```

## Step 3

Try it out in Minecraft by typing jump in the chat.  


## Step 4

Add a ``||variable: variable||`` named **num1** to the “jump” chat command.   

```javascript
    player.onChat("jump", function (num1) { 
        player.teleport(pos(0,100,0))  
}) 
```

## Step 5

Change the **100** in the ``||player:teleport||`` position to the ``||variable||`` **num1**. 

```javascript
   player.onChat("jump", function (num1) { 
      player.teleport(pos(0,num1,0))  

}) 
```

## Step 6

Try it out in Minecraft by entering jump and then any number in the chat.  (Example jump 50, or jump 100). 


```javascript
player.onChat("jump", function (num1) { 
   player.teleport(pos(0,num1,0))  
}) 
```

