# Letter Printing: Blocks

## Step 1
Create an ``||player:on chat||`` command and name it **mix** that contains a ``||variables: new variable||`` called **starting_world_position**. Set this ``||variable:variable||`` to ``||player:player world position||``.

```blocks
player.onChat("mix", function () {
    starting_world_position = player.position()
})
```

## Step 2

Add the code to ``||blocks:print||`` a variable **word1** out of ``||blocks:grass||`` blocks at the position **(0,0,0)**, facing **West**.

```blocks
player.onChat("mix", function () {
    starting_world_position = player.position()
    blocks.print(
    word1,
    GRASS,
    pos(0, 0, 0),
    WEST
    )
})
```

## Step 3

Add an ``||loops:on start||`` and insert a new variable **word1**. Set the variable to **"rail"**. Set the variable **starting_world_ position** to **(0,0,0)**.

```blocks
Let starting_world_position: Position = null
let word1 = ""
word1 = "rail"
```

## Step 4

Create an ``||player:on chat||`` command and name it **mix2**. Add another ``||variables: variable||``, set it to the **starting_world_ position**, then set it to ``||player:player world position||``. Drag that variable into the ``||player:on chat||`` **mix2** command. Inside the ``||player:on chat||`` command, add a ``||blocks:print||`` block and assign it the variable **word1** out of **smooth sandstone** at position **(0,0,0)**, facing **West**. Drag **word1** directly beneath the  **starting_world_ position** variable.

```blocks
player.onChat("mix2", function () {
    blocks.print(
    word1,
    SMOOTH_SANDSTONE,
    pos(0, 0, 0),
    WEST
    )
    starting_world_position = player.position()
})
```

## Step 5

Add another ``||blocks:print||`` block and assign it the variable **word2** out of **purple wool** at position **0,0,0**, facing **West**. Drag **word2** directly beneath the **word1** variable.

```blocks
player.onChat("mix2", function () {
    blocks.print(
    word1,
    SMOOTH_SANDSTONE,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    word2,
    PURPLE_WOOL,
    pos(0, 0, 0),
    WEST
    )
      starting_world_position = player.position()
})
```

## Step 6

Add another ``||variables:variable||``, select **word2** and assign the string "road" to it. Drag the **word2** variable into the ``||loops:on start||`` command directly beneath the **word1** variable.

```blocks
let starting_world_position: Position = null
let word2 = ""
let word1 = ""
word1 = "rail"
word2 = "road"
```

## Step 7

Add another ``||blocks:print||``command, insert a ``||text:join||`` block and assign both **word1** and **word2**. Set the ``||blocks:print||`` to **lapiz lazuli** at position **(0,0,0)**, facing **West**. Drag the complete ``||blocks:print|`` into the ``||player:on chat||`` **mix2** command directly beneath the **word2** variable. 

```blocks
player.onChat("mix2", function () {
    blocks.print(
    word1,
    SMOOTH_SANDSTONE,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    word2,
    PURPLE_WOOL,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    "" + word1 + word2,
    LAPIS_LAZULI_BLOCK,
    pos(0, 0, 0),
    WEST
    )
    starting_world_position = player.position()
})
```

## Step 8

Get an ``||player:on player walk||`` block and set it to **fly**. Create a new variable with the name **alphabet**, then assign it the text string **"ABCDEFGHIJKLMNOPQ"**. Drag this variable into the ``||player:on player fly||`` block.

```blocks
player.onTravelled(FLY, function () {
    alphabet = "ABCDEFGHIJKLMNOPQ"
})
```

## Step 9

Add another ``||variables: variable||`` **RandomLetter**. Get a ``||math:pick random||`` block and set the range from **0** to **12**. Then, insert the complete ``||math:pick random||`` block into the **RandomLetter** variable.


```blocks
player.onTravelled(FLY, function () {
    alphabet = "ABCDEFGHIJKLMNOPQ"
    RandomLetter = Math.randomRange(0, 12)
    blocks.print(
    alphabet.charAt(RandomLetter),
    PUMPKIN,
    pos(-5, 2, 0),
    WEST
    )
})
```

## Step 10

Set the **alphabet** and **RandomLetter** variables. For consistency, we set them in the same location we set all the other variables.

```blocks
let RandomLetter = 0
let alphabet = ""
let starting_world_position: Position = null
let word2 = ""
let word1 = ""
word1 = "rail"
word2 = "road"
```

## Step 11

Go into Minecraft and test all of your code.

```blocks
player.onChat("mix", function () {
    starting_world_position = player.position()
    blocks.print(
    word1,
    GRASS,
    pos(0, 0, 0),
    WEST
    )
})
player.onChat("mix2", function () {
    blocks.print(
    word1,
    SMOOTH_SANDSTONE,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    word2,
    PURPLE_WOOL,
    pos(0, 0, 0),
    WEST
    )
    blocks.print(
    "" + word1 + word2,
    LAPIS_LAZULI_BLOCK,
    pos(0, 0, 0),
    WEST
    )
    starting_world_position = player.position()
})
player.onTravelled(FLY, function () {
    alphabet = "ABCDEFGHIJKLMNOPQ"
    RandomLetter = Math.randomRange(0, 12)
    blocks.print(
    alphabet.charAt(RandomLetter),
    PUMPKIN,
    pos(-5, 2, 0),
    WEST
    )
})
let RandomLetter = 0
let alphabet = ""
let starting_world_position: Position = null
let word2 = ""
let word1 = ""
word1 = "rail"
word2 = "road"
```
