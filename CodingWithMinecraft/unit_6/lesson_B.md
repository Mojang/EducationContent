### @explicitHints 1

# Activity: Zombie Pig 

## Step 1
Make a function. Click the Advanced tab on the Toolbox to display more Toolbox categories. 

Name this function **zombiepig**, and click **Ok**.

## Step 2
Make the platform() and teleport() functions. Repeat the previous step to create two more functions named: **atmosphere** and **setup**.

## Step 3
Drag ``||Player:on chat command||`` onto the Workspace.

Rename this ``||Player:on chat command||`` to **"play"**.

## Step 4
Drag the three blocks ``||Functions:call function setup||``, ``||Functions:call function atmosphere||``, ``||Functions:call function zombiepig||`` into ``||Blocks:on chat command "play"||``.

### ~ tutorialhint
``` blocks
function zombiepig()  {

}
function atmosphere()  {

}
player.onChat("play", function () {
    setup()
    atmosphere()
    zombiepig()
})
function setup()  {

}
```

## Step 5
Create the Zombie Pig. Drag a ``||Mobs:spawn animal||`` block into ``||Functions:zombie pig||``. Change the animal by selecting **Pig** from the drop-down menu. Then change the position in the Z coordinate to spawn a pig five blocks north of the player.

Create another spawn block and place it below the first. Replace **animal** with a projectile lightning bolt.

## Step 6
Enter the same coordinates used for the pig: **(~0, ~0, ~-5)**. The trick here is that if a pig is hit by lightning, it transforms the pig into a Zombie Pigman! This is why you want to spawn both at the same coordinates **(~0, ~0, ~-5)**.

### ~ tutorialhint
``` blocks
function zombiepig() {
    mobs.spawn(PIG, pos(0, 0, -5))
    mobs.spawn(LIGHTNING_BOLT, pos(0, 0, -5))
}
player.onChat("play", function () {
    setup()
    atmosphere()
    zombiepig()
})
function setup()  {

}
function atmosphere()  {

}
```

## Step 7
Adjust settings. You want the game to work automatically. After you enter play, the game should start with everything set up so you have some crazed Zombie Pigmen to battle. The first issue is the difficulty level of the game. The pig will not change into a Zombie Pig if the game is set to Peaceful.

## Step 8
Drag a ``||Gameplay:set difficulty to||`` into ``||Function:setup||``.

Adjust this new block so it reads ``||Gameplay:set difficulty to 'peaceful'||``.

## Step 9
Next, you want to change the game mode for your player. Setting the gamemode to Survival mode ensures that the Pigman will come after you! As soon as you hit the Pigman, it will start to attack you back! Drag a ``||Gameplay:change game mode to||`` into ``||Function:setup||``.

Adjust this new block so it reads ``||Gameplay:change game mode to 'survival'||``.

Also, adjust the target so that it targets "yourself".

## Step 10
Finally, fighting will be very difficult without a weapon. You can give yourself a weapon to make the game more reasonable for your player. Grab a ``||Mobs:give||`` block and place it as the last block in the ``||Function:setup||`` function.

## Step 11
You will need to target yourself and give yourself a sword or other weapon. The example gives one diamond sword.

### ~ tutorialhint
``` blocks
function atmosphere()  {

}
function setup() {
    gameplay.setDifficulty(EASY)
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    blocks.item(DIAMOND_SWORD),
    1
    )
}
function zombiepig() {
    mobs.spawn(PIG, pos(0, 0, -5))
    mobs.spawn(LIGHTNING_BOLT, pos(0, 0, -5))
}
player.onChat("play", function () {
    setup()
    atmosphere()
    zombiepig()
})
```

## Step 12
At this point, you can test your game! By entering play in the chat window, the mini-game will start.

## Step 13
Adjust time. The last step for this mini-game is to add visual effects by adjusting the time of day. This will give the appropriate atmosphere that all zombies require. You will add a **time set** block. 

## Step 14
A Minecraft day lasts 24,000 ticks for 20 minutes of play. By setting the game to midnight, you set the current time to the start of midnight. Time set blocks are an easy way to make time move to a common part of the day.  Midnight is equal to 18,000 ticks (12:00 AM).

## Step 15
Drag a ``||Gameplay:time set||`` block into the ``||Functions:atmosphere||`` function.

Adjust this to read ``||Gameplay:time set 'midnight'||``. Try it out in Minecraft!

### ~ tutorialhint
``` blocks
function atmosphere() {
    gameplay.timeSet(gameplay.time(MIDNIGHT))
}
function setup() {
    gameplay.setDifficulty(EASY)
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    blocks.item(DIAMOND_SWORD),
    1
    )
}
function zombiepig() {
    mobs.spawn(PIG, pos(0, 0, -5))
    mobs.spawn(LIGHTNING_BOLT, pos(0, 0, -5))
}
player.onChat("play", function () {
    setup()
    atmosphere()
    zombiepig()
})
```

## Step 16
Time not changing? Make sure the **Always Day** option isn't turned on. 

Spawn additional Pigmen. After defeating a pigman, you want another pigman to spawn. You can create a new pigman with the event ``||Mobs:on Mob killed||``. You will use the function ``||Agent:call Pigman||``.

## Step 17
Grab an ``||Mobs:on animal killed||`` event and place it on the Workspace.

Adjust this block so that it is ``||Mobs:on monster zombie pigman killed||``.

## Step 18
Add a ``||Functions:call function zombiepig||`` to this new event.

### ~ tutorialhint
``` blocks
function setup() {
    gameplay.setDifficulty(EASY)
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    blocks.item(DIAMOND_SWORD),
    1
    )
}
mobs.onMobKilled(mobs.monster(PIG_ZOMBIE), function () {
    zombiepig()
})
function atmosphere() {
    gameplay.timeSet(gameplay.time(MIDNIGHT))
}
function zombiepig() {
    mobs.spawn(PIG, pos(0, 0, -5))
    mobs.spawn(LIGHTNING_BOLT, pos(0, 0, -5))
}
player.onChat("play", function () {
    setup()
    atmosphere()
    zombiepig()
})
```

