# Letter Printing: Spy

## Step 1

Code an ``||player:on chat||`` command and name it **mix**, which contains a ``||variables:set new variable||`` called **starting_world_position** that is set to ``||player:player world position||``.

```spy
player.onChat("mix", function () {
    starting_world_position = player.position()
})
```

## Step 2

Add code to ``||blocks:print||`` a variable **word1** out of ``||blocks:grass||`` blocks at the position **(0,0,0)**, facing **West**.

```spy
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

Set the variable **starting_world_ position** to **(0,0,0)**. Set the variable **word1** to "rail".
  
```spy
Let starting_world_position: Position = null
let word1 = ""
word1 = "rail"
```

## Step 4

Create an ``||player:on chat||`` command and name it **mix2**. Create a new ``||player:on chat||`` **mix2** command.  Inside this command, ``||blocks:print||`` the variable **word1** out of **smooth sandstone** at position **(0,0,0)**, facing **West**. Also, ensure that the **starting_world_ position** variable is set to ``||player:player world position||``. 

```spy
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

Inside the ``||player:on chat||`` **mix2** command, ``||blocks:print||`` a new **word2** variable out of **purple wool** at position **0,0,0**, facing **West**. 

```spy
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

Outside of the ``||player:on chat||`` commands, set a new variable with the name **word2**.

```spy
let starting_world_position: Position = null
let word2 = ""
let word1 = ""
word1 = "rail"
word2 = "road"
```

## Step 7

To the **mix2** ``||player:on chat||`` command,  ``||blocks:print|`` both **word1** and **word2** variables **lapiz lazuli** at position **(0,0,0)**, facing **West**

```spy
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

Get an ``||player:on player walk||`` and set it to **fly**. Create a new variable with the name **alphabet**, then assign it the text string “ABCDEFGHIJKLMNOPQ”. Drag this variable into the ``||player:on player fly||``.

```spy
player.onTravelled(FLY, function () {
    alphabet = "ABCDEFGHIJKLMNOPQ"
})
```

## Step 9

Add another ``||variables:set new variable||`` **RandomLetter**. Get a ``||math:pick random||`` and set the range from **0** to **12**. Then, insert the complete ``||math:pick random||`` into the **RandomLetter** variable. To print your letters, insert a ``||blocks:print||`` into the ``||player:on player fly||``  under the **RandomLetter** variable. Add a character from into the ``||blocks:print||`` and assign the **alphabet** and **RandomLetter** variables, respectively. Set the remaining parameters of the ``||blocks:print||`` to **pumpkin**, **(-5, 2, 0)**, and along the **West** direction (negative x).


```spy
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

Set the **alphabet** and **RandomLetter** variables. For consistency, we set them in the same location we set all the other variables. Add another ``||variables:set new variable||``, set it to the **alphabet** variable and insert a text ``||text:""||`` string with the empty string **“”** assigned to it. Drag the  **alphabet** variable into the ``||loops: on start||`` directly beneath the **word2** variable. Add another ``||variables:set new variable||``, set it to the **RandomLetter** variable and set it to **0**. Drag **RandomLetter** into the ``||loops: on start||`` directly beneath the **alphabet** variable.

```spy
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


### Full Code: 

```spy
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

