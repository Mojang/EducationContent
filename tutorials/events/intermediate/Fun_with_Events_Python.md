# Fun with Events: Python

## Step 1
Code an event for the case when a ``||player||`` walks, **projectile fireworks rockets** will spawn at the position of (0,10,0).

```python
def travelled_walk():
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
player.on_travelled(WALK, travelled_walk)
```

## Step 2
Add a ``||loops:for||`` loop around the spawn code to run it **25 times**.

```python
def travelled_walk():
    for index in range(25):
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
player.on_travelled(WALK, travelled_walk)
```

## Step 3
Code an event for the case when an **oak wood** ``||block||`` is broken, a **chicken** will spawn at position (0,10,0). 

```python
def block_broken_planks_oak():
    mobs.spawn(CHICKEN, pos(0, 10, 0))
blocks.on_block_broken(PLANKS_OAK, block_broken_planks_oak)
```

## Step 4
Add a  ``||loops:for||`` loop around the spawn code and have it  repeat **25 times**. 

```python
def block_broken_planks_oak():
    for index2 in range(25):
        mobs.spawn(CHICKEN, pos(0, 10, 0))
blocks.on_block_broken(PLANKS_OAK, block_broken_planks_oak)
```

## Step 5
Code an event for the case when a **golden apple** is ``||player: on item used||``, ``||mobs:apply||`` **levitation** is applied to **all chickens** for a duration of **10** and at **5** blocks high. 

```python
def item_interacted_golden_apple():
    mobs.apply_effect(LEVITATION, mobs.entities_by_type(CHICKEN), 10, 5)
player.on_item_interacted(GOLDEN_APPLE, item_interacted_golden_apple)
```

## Step 6
Go into Minecraft and test out all the events. 

### Full Code: 

```python
def travelled_walk():
    for index in range(25):
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
player.on_travelled(WALK, travelled_walk)
def block_broken_planks_oak():
    for index2 in range(25):
        mobs.spawn(CHICKEN, pos(0, 10, 0))
blocks.on_block_broken(PLANKS_OAK, block_broken_planks_oak)
def item_interacted_golden_apple():
    mobs.apply_effect(LEVITATION, mobs.entities_by_type(CHICKEN), 10, 5)
player.on_item_interacted(GOLDEN_APPLE, item_interacted_golden_apple)
```

