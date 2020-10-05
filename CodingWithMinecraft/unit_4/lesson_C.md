### @explicitHints 1
# Activity: Wordsmith 

## Step 1
Drag ``||Loops:on start||`` to the Workspace.

Open ``||Variables:VARIABLES||``, create 2 new variables and name them **word1** and **word2**. Add ``||Variables:set item||`` inside ``||Loops:on start||``.

## Step 2
Click **Advanced** to see the ``||Text:TEXT||`` Toolbox category. Select the ``||Variables||`` and place this inside ``||Variables:set item||``, replacing the number **0**. You will set this variable to a string.

## Step 3
Use the ``||Variables:set item||`` drop-down list to rename **item** to **word1**.

Right-click ``||Variables:set word1||`` and duplicate it. Put this new duplicate in ``||Loops:on start||``.

## Step 4
Now go back to the second ``||Variables:set word1||`` and change **word1** to **word2** from the drop-down list.

### ~ tutorialhint
``` blocks
let word2 = ""
let word1 = ""
word1 = ""
word2 = ""
```

## Step 5
Write two funny words! Replace the empty **" "** with some text for **word1**.

Replace the empty **" "** with some text for **word2**. Here is an example **rail** for ``||Variables:word1||`` and **road** for ``||Variables:word2||``.

### ~ tutorialhint
``` blocks
let word2 = ""
let word1 = ""
word1 = "rail"
word2 = "road"
```

## Step 6
Print word1. Drag ``||Player:on chat command||`` into the Workspace. Name the command **mix**.

Drag ``||Blocks:print||`` block to snap inside ``||Player:on chat command mix||`` block.

## Step 7
Put ``||Variables:word1||`` inside ``||Blocks:print||`` .

Change the grass to **Redstone Ore**.

### ~ tutorialhint
``` blocks
let word2 = ""
let word1 = ""
player.onChat("mix", function () {
    blocks.print(
    word1,
    REDSTONE_ORE,
    pos(0, 0, 0),
    WEST
    )
})
word1 = "rail"
word2 = "road"
```

##  Step 8
Set up word2. Duplicate ``||Blocks:print||`` ``||Variables:word1||``.

Change this so it prints  ``||Variables:word2||``. Change the **Grass** to **Redstone Lamp**.

## Step 9
Fine-tune and test. You need to print in the air a bit to leave enough room for everything to fit. Also, you started printing **south** on the **north/south axis**. Adjust the ``||Blocks:print||``, so it reads **along South (positive Z)**.

### ~ tutorialhint
```blocks
let word2 = ""
let word1 = ""
player.onChat("mix", function () {
    blocks.print(
    word1,
    REDSTONE_ORE,
    pos(0, 0, 0),
    SOUTH
    )
})
word1 = "rail"
word2 = "road"
```

## Step 10
Your two words are now printing, but there is a little problem. If you don't stop moving after typing **mix**, the two words will not be aligned when they print.

## Step 11
To fix it store your player's world position. Click **Make a Variable** and name the new variable **Starting_World_Position**.

Add ``||Variables:set item||`` to the top of ``||Player:on chat command mix||``. Change this block to read **Set Starting_World_Position**.

## Step 12
Put ``||Player:player world position||`` into ``||Variables:set Starting_World_Position||``.

### ~ tutorialhint
``` blocks
let word2 = ""
let Starting_World_Position: Position = null
let word1 = ""
player.onChat("mix", function () {
    Starting_World_Position = player.position()
    blocks.print(
    word1,
    REDSTONE_ORE,
    pos(0, 30, 0),
    SOUTH
    )
    blocks.print(
    word2,
    REDSTONE_LAMP,
    pos(0, 20, 0),
    SOUTH
    )
})
word1 = "rail"
word2 = "road"
```

## Step 13
Fix the print block's position.

### ~ tutorialhint
``` blocks
let word2 = ""
let Starting_World_Position: Position = null
let word1 = ""
player.onChat("mix", function () {
    Starting_World_Position = player.position()
    blocks.print(
    word1,
    REDSTONE_ORE,
    positions.add(
    Starting_World_Position,
    pos(0, 30, 0)
    ),
    SOUTH
    )
    blocks.print(
    word2,
    REDSTONE_LAMP,
    positions.add(
    Starting_World_Position,
    pos(0, 20, 0)
    ),
    SOUTH
    )
})
word1 = "rail"
word2 = "road"
```

## Step 14
Join and print. Duplicate one of the ``||Blocks:print||`` blocks and place it at the bottom of ``||Player:on chat command mix||``.

Adjust settings so that you print using **Block of Redstone**.

## Step 15
The **Y** relative coordinate should be **5**.

## Step 16
Search for "join". Place this ``||Text:TEXT||`` block, so ``||Blocks:print||`` block reads **print join word1 word2**.

### ~ tutorialhint
``` blocks
let word2 = ""
let word1 = ""
let Starting_World_Position: Position = null
player.onChat("mix", function () {
    Starting_World_Position = player.position()
    blocks.print(
    word1,
    REDSTONE_ORE,
    positions.add(
    Starting_World_Position,
    pos(0, 30, 0)
    ),
    SOUTH
    )
    blocks.print(
    word2,
    REDSTONE_LAMP,
    positions.add(
    Starting_World_Position,
    pos(0, 20, 0)
    ),
    SOUTH
    )
    blocks.print(
    word1 + word2,
    REDSTONE_BLOCK,
    positions.add(
    Starting_World_Position,
    pos(0, 5, 0)
    ),
    SOUTH
    )
})
word1 = "rail"
word2 = "road"
```
