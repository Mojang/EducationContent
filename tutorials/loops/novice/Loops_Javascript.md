# Linked Loops: Javascript

## Step 1
Code an ``||player:on item used||`` event and set it to  **Bone**.

```javascript
player.onItemInteracted(BONE, function () { 
 
}) 
```

## Step 2
Within the ``||on item used||`` event, code a ``||loops:for||`` loop, that repeats **6** times.

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
      
    } 
}) 
```

## Step 3
Inside the ``||loops:for||`` loop, spawn a **Zombie Horse** at (0,0,0).

```javascript
player.onItemInteracted(BONE, function () {
    for (let index = 0; index < 6; index++) {
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    }
})
```

## Step 4
Code another ``||loops:for||`` loop inside the **Bone** ``||on item used||`` that repeats **4** times.

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
      
    } 
}) 
```

## Step 5
Inside the ``||loops:for||`` loop, spawn a **skeleton horse** at (0,0,0).  

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

## Step 6
Go into Minecraft and test out all the events.

### Full Code: 

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

