# Mega Jump: Blocks

## Step 1
Rename the existing ``||player:on chat||`` command into **“jump”**. 

```blocks
player.onChat("jump", function () { 
}) 
```

## Step 2

Place a ``||player:player teleport to||`` inside the ``||player:on chat||`` command **jump** and enter **100** in the **“y”** coordinate. 

```blocks
player.onChat("jump", function () { 
   player.teleport(pos(0,100,0))  
}) 
```

## Step 3

Try it out in Minecraft by typing **jump** in the chat.


## Step 4

 Click the (+) inside the ``||player:on chat||`` command jump and create a new ``||variable: variable||`` named **num1**. 

```blocks
player.onChat("jump", function (num1) {
    player.teleport(pos(0, 100, 0))
})
```

## Step 5

Get the new ``||variable||`` named num1 and drag it into the **y** coordinate of the ``||player:teleport to||``. 

```blocks
player.onChat("jump", function (num1) {
    player.teleport(pos(0, num1, 0))
})
```

## Step 6

Try it out in Minecraft by entering **jump** and then any number in the chat.  (Example jump 50, or jump 100). 

```blocks
player.onChat("jump", function (num1) {
    player.teleport(pos(0, num1, 0))
})
```

