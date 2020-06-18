# Mega Jump: Python

## Step 1
Add a ``||player:chat||`` command named **“jump”**.

```python
def on_chat():
    pass
player.on_chat("jump", on_chat)
```

## Step 2

Add the code in the ``||player:chat||`` command to ``||player:teleport||`` the player to the position **(0,100,0)** (which is 100 blocks higher than the current position). 

```python
player.onChat("jump", function () { 
   player.teleport(pos(0,100,0))  

}) 
```

## Step 3

Try it out in Minecraft by typing jump in the chat.  


## Step 4

Add a ``||variable||`` named **num1** to the “jump” chat command.   

## Step 5

Change the **100** in the ``||player:teleport||`` position to the ``||variable||`` **num1**. 

```python
def on_chat(num1):
    player.teleport(pos(0, num1, 0))
player.on_chat("jump", on_chat) 
```

## Step 6

Try it out in Minecraft by entering jump and then any number in the chat.  (Example jump 50, or jump 100). 

### Full Code: 

```python
def on_chat(num1):
    player.teleport(pos(0, 100, 0))
player.on_chat("jump", on_chat)
```

