### @explicitHints 1

# Activity: How Old Are You? 

## Step 1
Rename the existing ``||Player:on chat command "run"||`` to **"age"**.

Click the Plus **(+)** sign on the ``||Player:on chat command "run"||`` to create a **num1** variable parameter.

Rename **num1** to **FriendsAge**. This makes your code more readable. Always use meaningful names when making variables in coding. This makes finding errors more intuitive. You can rename variables from the drop-down menu.

### ~ tutorialhint
``` blocks
player.onChat("age", function(FriendsAge) {

})
```

## Step 2
Use a conditional. Drag an ``||Logic:if then else||`` block inside ``||Player:on chat command "age"||``.

Click the Plus **(+)** sign in the ``||Logic:if then else||`` to create another ``||Logic:else if||`` branch.

## Step 3
Insert the comparisons. Drag a **less** than, ``||Logic:0 < 0||``, comparison block into the ``||Logic:if||`` slot, replacing **true**.

## Step 4
Drag an **Equals**, ``||Logic:0 = 0||``, comparison block into the ``||Logic:else if||`` slot.

### ~ tutorialhint
``` blocks
player.onChat("age", function (FriendsAge) {
    if (0 < 0) {
    } else if (0 == 0) {
    } else {
    }
})
```

## Step 5
Compare with your variable. Drag two of the ``||Variables:num1||`` blocks into the first slot of each of the **Comparison** blocks.

In the second slot of the Comparison blocks, enter your age (for example, **12**).

### ~ tutorialhint
``` blocks
player.onChat("age", function (FriendsAge) {
    if (FriendsAge < 12) {

    } else if (FriendsAge == 12) {

    } else {

    }
})
```

## Step 6
Print blocks for each condition. Drag a ``||Blocks:print "Hello"||`` block onto your Workspace. Right-click ``||Blocks:print "Hello"||`` block and select **Duplicate** to make a copy.

Place one in each of your ``||Logic:if||``,``||Logic:else if||``, and ``||Logic:else||`` clauses.

### ~ tutorialhint
``` blocks
player.onChat("age", function (FriendsAge) {
    if (FriendsAge < 12) {
        blocks.print(
        "HELLO",
        GRASS,
        pos(0, 0, 0),
        WEST
        )
    } else if (FriendsAge == 12) {
        blocks.print(
        "HELLO",
        GRASS,
        pos(0, 0, 0),
        WEST
        )
    } else {
        blocks.print(
        "HELLO",
        GRASS,
        pos(0, 0, 0),
        WEST
        )
    }
})
```

## Step 7
Print different messages. In each ``||Blocksprint "Hello"||``, type a different message for people who are younger than you, your same age, or older than you.

## Step 8
Use the drop-down menu in the ``||Blocks:print||`` blocks to select a different block to use for each message.

In all the ``||Blocks:print||`` blocks, set the **Y** coordinate to 10 (so these messages print in the sky).

### ~ tutorialhint
``` blocks
player.onChat("age", function (FriendsAge) {
    if (FriendsAge < 12) {
        blocks.print(
        "Baby",
        SMOOTH_SANDSTONE,
        pos(0, 10, 0),
        WEST
        )
    } else if (FriendsAge == 12) {
        blocks.print(
        "Coincidence?",
        ORANGE_TERRACOTTA,
        pos(0, 10, 0),
        WEST
        )
    } else {
        blocks.print(
        "Grandpa",
        STONECUTTER,
        pos(0, 10, 0),
        WEST
        )
    }
})
```

## Step 9
Have fun showing the age messages. Pair up to run these messages. In the Minecraft Game, enter ‘t’ to open the chat window.

Ask your neighbor their age, and enter ‘age x’ – where x is your neighbor’s age.

Look in the sky above you at your message!
