# Chicken Rain: Javascript


## Step 1
Create a ``||player:on chat||`` command and name it **“chicken”**.

```javascript
player.onChat("chicken", function (){ 
 
}) 
```

## Step 2

Inside the ``||player:on chat||`` command, spawn a chicken 10 blocks above the head of the player at (0, 10, 0). 

**NOTE:** The **~** character in the position indicates that the coordinates are relative to the position of the player.

Go to Minecraft, press **t** to open the chat and type "chicken". Look up to see a single chicken drop from the sky from 10 blocks above your player.

```javascript
player.onChat("chicken", function () { 
    mobs.spawn(CHICKEN, pos(0, 10, 0)) 
}) 
```

## Step 3

Place a ``||loops: for loop||`` around the spawn code to repeat the spawn code **100 times**.

```javascript
player.onChat("chicken", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
```

### Full Code: 

```javascript
player.onChat("chicken", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
```

