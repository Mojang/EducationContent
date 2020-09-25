### @explicitHints 1
# Activity: Chicken Storm 

## Step 1
Drag an ``||Player:on chat||`` command into the coding Workspace and change the command to **"chickens"**.

## Step 2
Add a ``||Loops:repeat||`` loop inside ``||Player:on chat command||`` "chickens".

## Step 3
Add a ``||Mobs:spawn animal||`` block inside the ``||Loops:repeat||`` loop.

## Step 4
Change the **Y** coordinate to **10** inside ``||Mobs:spawn animal||``. Chickens will spawn 10 blocks above your head.

### ~ tutorialhint
``` blocks
player.onChat("chickens", function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
```

## Step 5
Go into Minecraft, press **T** to open the chat window, and enter **chickens** in the chat window. It’s raining hens! Now if you enter **chickens 15** in the chat window, the variable **num1** will take the value **15**. 

## Step 6
More chickens! From ``||Variables:VARIABLES||``, replace the number **4** in ``||Loops:repeat||`` with ``||Variables:num1||``.

### ~ tutorialhint
``` blocks
player.onChat("chickens", function (num1) {
    for (let i = 0; i < num1; i++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
```
