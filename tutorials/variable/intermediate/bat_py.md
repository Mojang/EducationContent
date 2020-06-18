# Bat Cave: Python

## Step 1
Add a ``||player:on chat||`` command and name it **cave**.

```python
def on_chat():
    pass
player.on_chat("cave", on_chat)
```

## Step 2

Code the player to  ``||player:say||``, type **"Dig a cave"**, and drag it into the ``||player:on chat||`` command.

```python
player.onChat("cave", function () {
    player.say("Dig a cave")
}def on_chat():
    player.say("Dig a cave")
player.on_chat("cave", on_chat)
)
```

## Step 3

Set the time of day to **day**.

```python
def on_chat():
    player.say("Dig a cave")
    gameplay.time_set(gameplay.time(DAY))
player.on_chat("cave", on_chat)
```

## Step 4

Code the player to ``||blocks:fill with||`` an **air** block with these positions: **from  = -1.0,-1** and **to = 1,2,1**. Code it to **replace**.

```python
def on_chat():
    player.say("Dig a cave")
    gameplay.time_set(gameplay.time(DAY))
    blocks.fill(AIR, pos(-1, 0, -1), pos(1, 2, 1), FillOperation.REPLACE)
player.on_chat("cave", on_chat)
```

## Step 5

Repeat the fill step **50** times.

```python
def on_chat():
    player.say("Dig a cave")
    gameplay.time_set(gameplay.time(DAY))
    for index in range(50):
        blocks.fill(AIR, pos(-1, 0, -1), pos(1, 2, 1), FillOperation.REPLACE)
player.on_chat("cave", on_chat)
```

## Step 6

Set a ``||variables:new variable||`` and name it **bat_cave**, then set that variable to the  ``||player:player world position||``.

```python
        batcave: Position = None
def on_chat():
    player.say("Dig a cave")
    gameplay.time_set(gameplay.time(DAY))
    for index in range(50):
        blocks.fill(AIR, pos(-1, 0, -1), pos(1, 2, 1), FillOperation.REPLACE)
    batcave = player.position()
player.on_chat("cave", on_chat)
```

## Step 7

Code the player to ``||player:say||`` “You have 10 seconds to go out before the bats arrive.”

```python
batcave = player.position()
    player.say("You have 10 seconds to get out before the bats arrive.")
player.on_chat("cave", on_chat)
```

## Step 8

``||loops: pause||`` the code for **10** seconds (10,000 ms).

```python
player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
player.on_chat("cave", on_chat)
```

## Step 9

After the pause, code the player to say “Watch out for bats!”.

```python
    loops.pause(10000)
    player.say("Watch out for bats!")
player.on_chat("cave", on_chat)
```

## Step 10

Set the time to **dusk**.

```python
gameplay.timeSet(gameplay.time(DUSK))
```

## Step 11

``||mobs:spawn animal||`` a bat at the **bat_cave** variable.

```python
gameplay.time_set(gameplay.time(DUSK))
    mobs.spawn(BAT, batcave)
player.on_chat("cave", on_chat)
```

## Step 12

Repeat the **bat** ``||mobs:spawn animal||`` **200** times.

```python
for index2 in range(200):
        mobs.spawn(BAT, batcave)
player.on_chat("cave", on_chat)
```

## Step 13

Go into Minecraft and type **cave** in the chat to see all the code run.


### Full Code: 

```python
let batcave: Position = null
player.onChat("cave", function () {
    player.say("Dig a cave")
    gameplay.timeSet(gameplay.time(DAY))
    for (let index = 0; index < 50; index++) {
        blocks.fill(
        AIR,
        pos(-1, 0, -1),
        pos(1, 2, 1),
        FillOperation.Replace
        )
    }
    batcave = player.position()
    player.say("You have 10 seconds to get out before the bats arrive.")
    loops.pause(10000)
    player.say("Watch out for bats!")
    gameplay.timeSet(gameplay.time(DUSK))
    for (let index = 0; index < 200; index++) {
        mobs.spawn(BAT, batcave)
    }
})
```

