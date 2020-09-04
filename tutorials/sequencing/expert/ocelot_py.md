# Ocelot Enclosure: Python

## Step 1
Code an ``||player:on chat||`` command and name it **fence**.

```python
def on_chat():
    pass
player.on_chat("fence", on_chat)
```

## Step 2

Code a ``||builder:builder teleport||`` world position **-695, 9, 880**, facing **West**.

```python
def on_chat():
    builder.teleport_to(world(-695, 9, 880))
    builder.face(WEST)
player.on_chat("1", on_chat)
```

## Step 3

``||builder:Move||`` the builder **forward by 21**. 

```python
    builder.face(WEST)
    builder.move(FORWARD, 21)
player.on_chat("1", on_chat)
```

## Step 4

``||builder:Turn||`` the builder to the **right**.

```python
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
player.on_chat("1", on_chat)
```

## Step 5

``||builder:Move||`` the builder **forward by 9** and ``||builder:turn||`` **right**. 

```python
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
player.on_chat("1", on_chat)
```

## Step 6

``||builder:Move||`` the builder **forward by 21**, ``||builder:turn||`` **right**, and ``||builder:move||`` **forward by 9**.

```python
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
player.on_chat("1", on_chat)
```

## Step 7

To place fencing along the perimeter of the rectangle, code the builder to ``||builder:trace||`` his former path while building with **Oak Fence** .

```python
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## Step 8

Randomly ``||mobs:spawn||`` one **ocelot** inside the fence that was just built.

```python
    builder.trace_path(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
player.on_chat("1", on_chat)
```

## Step 9

Randomly ``||mobs:spawn||`` another **ocelot** inside the fence that was just built.

```python
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
player.on_chat("1", on_chat)
```

## Step 10

Randomly ``||mobs:spawn||`` two wolves inside the fence that was just built.

```python
    mobs.spawn(OCELOT, randpos(world(-20, 4, -58), world(-37, 4, -50)))
    mobs.spawn(WOLF, randpos(world(-20, 4, -58), world(-37, 4, -50)))
    mobs.spawn(WOLF, randpos(world(-20, 4, -58), world(-37, 4, -50)))
player.on_chat("1", on_chat)
```

## Step 11

Return to Minecraft and test your code.

```python
def on_chat():
    builder.teleport_to(world(-695, 9, 880))
    builder.face(WEST)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.trace_path(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
    mobs.spawn(OCELOT, randpos(world(-698, 9, 870), world(-715, 9, 880)))
    mobs.spawn(WOLF, randpos(world(-698, 9, 870), world(-715, 9, 880)))
    mobs.spawn(WOLF, randpos(world(-698, 9, 870), world(-715, 9, 880)))
player.on_chat("fence", on_chat)
```

