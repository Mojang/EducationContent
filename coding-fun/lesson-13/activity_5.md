### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Make it rain!

## Step 1
Put together multiple events to make it rain! 1. Get ``||player: on player walk||``, ``||player: on player climb||`` and ``||blocks: on block broken||``. 2. Create new variables: **walk**, **jump**, **break**. 3. Drag the ``||variable: set||`` inside each corresponding event block. 4. Set the variables to ``||logic: true||``. 5. Use a ``||loop: forever||`` block and drag  an ``||logic: if statement||``  inside of it. If all the conditions are set to true, change the ``||gameplay: weather||`` to **rain**. 



```ghost
let climb = false
let walk = false
let _break = false
player.onTravelled(CLIMB, function () {
    climb = true
})
player.onTravelled(WALK, function () {
    walk = true
})
blocks.onBlockBroken(STONE, function () {
    _break = true
})
loops.forever(function () {
    if (walk == true && climb == (true && _break == true)) {
        gameplay.setWeather(RAIN)
    }
})
```
