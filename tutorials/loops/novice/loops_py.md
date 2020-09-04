# Loops: Python

## Step 1
Code an ``||player:on item used||`` event and set it to  **Bone**.

```python
def item_interacted_bone():
    pass
player.on_item_interacted(BONE, item_interacted_bone)
```

## Step 2
Within the ``||player: on item used||`` event, code a ``||loops:for||`` loop, that repeats **6** times.

```python
def item_interacted_bone():
    for index in range(6):
        pass
player.on_item_interacted(BONE, item_interacted_bone)
```

## Step 3
Inside the ``||loops:for||`` loop, spawn a **Zombie Horse** at (0,0,0).

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
player.on_item_interacted(BONE, item_interacted_bone)
```

## Step 4
Code another ``||loops:for||`` loop inside the **Bone** ``||player:on item used||`` that repeats **4** times.

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    for index2 in range(4):
        pass
player.on_item_interacted(BONE, item_interacted_bone)
```

## Step 5
Inside the ``||loops:for||`` loop, spawn a **skeleton horse** at (0,0,0).  

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    for index2 in range(4):
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0))
player.on_item_interacted(BONE, item_interacted_bone)
```

## Step 6
Press the Play button, go into Minecraft and test out all the events.

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    for index2 in range(4):
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0))
player.on_item_interacted(BONE, item_interacted_bone)
```

