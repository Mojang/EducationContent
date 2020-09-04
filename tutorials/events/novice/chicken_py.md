# Chicken Rain: Python


## Step 1
Create an ``||player:on chat||`` command and name it **“chicken”**.

```python
def on_chat():
    pass
player.on_chat("chicken", on_chat)
```

## Step 2

Inside the ``||player:on chat||`` command, spawn a chicken **10** blocks above the head of the player at (0, **10**, 0). 

Press the **Play** button, go to Minecraft and type **t** to open the chat and type **chicken** to spawn a single chicken. 

```python
def on_chat():
    mobs.spawn(CHICKEN, pos(0, 10, 0))
player.on_chat("chicken", on_chat)
```

## Step 3

Place a ``||loops: for loop||`` around the spawn code to repeat the spawn code **100 times**.

Press the **Play** button, go to Minecraft and type **t** to open the chat and type **chicken** to spawn 100 chickens. 

```python
def on_chat():
    for index in range(100):
        mobs.spawn(CHICKEN, pos(0, 10, 0))
player.on_chat("chicken", on_chat)
```

