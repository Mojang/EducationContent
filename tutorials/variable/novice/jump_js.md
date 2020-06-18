# Mega Jump: JavaScript

## Step 1
Add a ``||player:chat||`` command named **“jump”**.

```spy
player.onChat("jump", function () { 
}) 
```

## Step 2

Add the code in the ``||player:chat||`` command to ``||player:teleport||`` the player to the position **(0,100,0)** (which is 100 blocks higher than the current position). 

```spy
player.onChat("jump", function () { 
   player.teleport(pos(0,100,0))  

}) 
```

## Step 3

Try it out in Minecraft by typing jump in the chat.  


## Step 4

Add a ``||variable||`` named **num1** to the “jump” chat command.   

```spy
    player.onChat("jump", function (num1) { 
        player.teleport(pos(0,100,0))  
}) 
```

## Step 5

Change the **100** in the ``||player:teleport||`` position to the ``||variable||`` **num1**. 

```spy
   player.onChat("jump", function (num1) { 
      player.teleport(pos(0,num1,0))  

}) 
```

## Step 6

Try it out in Minecraft by entering jump and then any number in the chat.  (Example jump 50, or jump 100). 

### Full Code: 

```spy
player.onChat("jump", function (num1) { 
   player.teleport(pos(0,num1,0))  
}) 
```

