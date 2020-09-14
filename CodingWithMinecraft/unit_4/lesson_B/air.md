### @explicitHints 1
#Activity: Fall Is in the Air

## Step 1
Drag a ``||Player:on chat command||`` block to the Workspace.

## Step 2
Right-click the ``||Player:on chat command||`` and select duplicate. Do this twice so that you end up with three ``||Player:on chat command||`` blocks.

## Step 3
Name these commands **"cr"** (creative), **"su"** (survival), and **"pm"** (postmortem).

## Step 4
Drag out two event blocks: ``||Player:on player walk||``, and ``||Player:on player died||``.

## Step 5
Change ``||Player:on player walk||`` to ``||Player:on player fall||`` block.

### ~ tutorialhint
``` blocks
    player.onChat("cr", function () {

    })
    player.onChat("su", function () {

    })
    player.onTravelled(TravelMethod.Walk, function () {

    })
    player.onChat("pm", function () {

    })
    player.onDied(function () {

    })
```

## Step 6
Be “Creative”. Construct the ``||Player:on chat command||`` for **"cr"**. This command will change the game mode to Creative. You can fly in Creative mode, so this is very helpful to get to a high place.
 
## Step 7
Drag out ``||Gameplay:change game mode||``block and drop it inside ``||Player:on chat command "cr"||``.

## Step 8
In ``||Gameplay:change game mode||``, select **creative** mode, and change ``||Mobs:target||`` to yourself **@s**.

### ~ tutorialhint
``` blocks
player.onChat("cr", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
```

##Step 9
Just survive. Drag out ``||Gameplay:change game mode||`` block and drop it inside on chat command  "su".

## Step 10
In ``||Gameplay:change game mode||`` change ``||Mobs:target||`` to **yourself @s**.

### ~ tutorialhint
``` blocks
player.onChat("su", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
```

## Step 11
In ``||Variables:VARIABLES||``, click **Make a Variable**, and name the new variable ``||Variable:fall||``. This variable will start incrementing (adding up) each block, as the player falls.

##Step 12
Remember the fall. In ``||Variables:VARIABLES||``, click **Make a Variable**, and name the new variable ``||Variables:report||``.

## Step 13
Drag ``||Variables:change item||`` block into the ``||Player:on player fall||`` event.

## Step 14
In ``||Variables:change item||``, select your variable **fall** instead of the default, **item**.

## Step 15
Drag out ``||Variables:change item||``. Right-click and duplicate this once. Now you should have two. 

Put one ``||Variables:change item||`` into on player died.

## Step 16
In this ``||Variables:change item||`` block, select **report** instead of **item**.

## Step 17
Drag **fall** into the second slot and replace the **0** so the block reads **set report to fall**.

## Step 18
Reset the fall count. Move the other ``||Variable:set item||`` you duplicated in step 15. Put this inside ``||Player:on player died||`` at the very bottom. Change the variable to **fall**.

### ~ tutorialhint
``` blocks
let fall = 0
let report = 0
player.onDied(function () {
    report = fall
    fall = 0
})
player.onTravelled(TravelMethod.Fall, function () {
    fall += 1
})
```

## Step 19
Report your fall count. Drag ``||Player:say||`` into ``||Player:on chat command "pm"||``.

## Step 20
Click **Advanced** to see the ``||Text:TEXT||`` Toolbox category.

Drag ``||Text:join||`` into ``||PLayer:say||`` and replace **"Hi!"**.

### ~ tutorialhint
``` blocks
let report = 0
player.onChat("pm", function () {
    player.say("Hello" + "World")
})
```

## Step 21
Join the variable to the message. In ``||Text:join||``, enter **“You fell"** in the first slot, replacing *"Hello"*.

## Step 22
Drag ``||Variables:report||`` into the second ``||Text:join||`` slot, replacing *"World"*.

### ~ tutorialhint
```blocks
let report = 0
player.onChat("pm", function () {
    player.say("You fell " + report)
})
```
