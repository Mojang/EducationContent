# Fun with Events: Javascript

## Step 1
Code an event for the case when a ``||player:player||`` walks, **projectile fireworks rockets** will spawn at the position of (0,**10**,0).

```javascript
player.onTravelled(WALK, function () {
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
})
```

## Step 2
Add a ``||loops:for||`` loop around the spawn code to run it **25 times**.

```javascript
player.onTravelled(WALK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
    }
})
```

## Step 3
Code an event for the case when an **oak wood** is ``||blocks:onBlockBroken||``, a **chicken** will spawn at position (0,10,0). 

```javascript
blocks.onBlockBroken(PLANKS_OAK, function () {
    mobs.spawn(CHICKEN, pos(0, 10, 0))
})
```

## Step 4
Add a  ``||loops:for||`` loop around the spawn code and have it  repeat **25 times**. 

```javascript
blocks.onBlockBroken(PLANKS_OAK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
```

## Step 5
Code an event for the case when a **golden apple** is ``||player: on item used||``, ``||mobs:apply||`` **levitation** is applied to **all chickens** for a duration of **10** and at **5** blocks high. 

```javascript
player.onItemInteracted(GOLDEN_APPLE, function () {
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5)
})
```

## Step 6
Press the **Play** button, go into Minecraft and test out all the events. 


```javascript
player.onTravelled(WALK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
    }
})

blocks.onBlockBroken(PLANKS_OAK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
player.onItemInteracted(GOLDEN_APPLE, function () {
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5)
})
```

