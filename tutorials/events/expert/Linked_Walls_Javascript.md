# Linked Walls: Javascript

## Step 1

Code an ``||player:on chat||`` command and name it “**position**”.

```javascript
player.onChat("position", function () {
    
})
```

## Step 2
Create a variable **PlayerPosition** and set it to the ``||player world||`` position. 

```javascript
let PlayerPosition: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
}) 
```

## Step 3
Inside the ``||player:on chat||`` command,  create a variable **from_position** and set it equal to **PlayerPosition** plus (6,0,0).
	
```javascript
let PlayerPosition: Position = null 
let from_position: Position = null 
player.onChat("position", function () { 
    PlayerPosition = player.position() 
    from_position = positions.add( 
    player.position(), 
    pos(6, 0, 0) 
    ) 
}) 
```

## Step 4
Inside the ``||player:on chat||`` command,  create a variable **to_position** and set it equal to the variable **PlayerPosition** plus (-6,13,0). 

```javascript
let PlayerPosition: Position = null
let from_position: Position = null
let to_position: Position = null
player.onChat("position", function () {
    PlayerPosition = player.position()
    from_position = positions.add(
    PlayerPosition,
    pos(6, 0, 0)
    )
    to_position = positions.add(
    PlayerPosition,
    pos(-6, 13, 0)
    )
})
```

## Step 5
Code another ``||player:on chat||`` command and name it “**wall**”.

```javascript
player.onChat("wall", function () { 
 
}) 
```

## Step 6
Inside the **wall** ``||player:on chat||`` command, code a ``||blocks:fill and replace||`` and set it to **glass** from the **from_position** variable to the **to_position** variable. 

```javascript
player.onChat("wall", function () {
    blocks.fill(
    GLASS,
    from_position,
    to_position,
    FillOperation.Replace
    )
})
```

## Step 7
Using ``||blocks: on broken||``, code an event such that when a **glass** block is broken, ``||blocks:place||`` a **diamond** block at a ``||positions: pick random position||`` in the range beginning with the **from_position** variable to the **to_position** variable. 

```javascript
blocks.onBlockBroken(GLASS, function () {
    blocks.place(DIAMOND_BLOCK, randpos(
    from_position,
    to_position
    ))
})
```

## Step 8
Using ``||blocks: on broken||``, code an event such that when a **diamond** block is broken, ``||blocks:place||`` a **orange wool** block at a ``||positions: pick random position||`` in the range beginning with the **from_position** variable to the **to_position** variable. 

```javascript
blocks.onBlockBroken(DIAMOND_BLOCK, function () {
    blocks.place(ORANGE_WOOL, randpos(
    from_position,
    to_position
    ))
})
```

## Step 9
Go into Minecraft and test out all the events.

### Full Code: 

```javascript
let from_position: Position = null
let to_position: Position = null
let PlayerPosition: Position = null
blocks.onBlockBroken(GLASS, function () {
    blocks.place(DIAMOND_BLOCK, randpos(
    from_position,
    to_position
    ))
})
player.onChat("wall", function () {
    blocks.fill(
    GLASS,
    from_position,
    to_position,
    FillOperation.Replace
    )
})
player.onChat("position", function () {
    PlayerPosition = player.position()
    from_position = positions.add(
    PlayerPosition,
    positions.create(6, 0, 0)
    )
    to_position = positions.add(
    PlayerPosition,
    positions.create(-6, 13, 0)
    )
})
blocks.onBlockBroken(DIAMOND_BLOCK, function () {
    blocks.place(ORANGE_WOOL, randpos(
    from_position,
    to_position
    ))
})
```

