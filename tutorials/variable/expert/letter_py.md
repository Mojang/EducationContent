# Letter Printing: Python

## Step 1

Code an ``||player:on chat||`` command and name it **mix**, which contains a ``||variables: new variable||`` called **starting_world_position** that is set to ``||player:player world position||``.

```python
def on_chat():
    starting_world_position = player.position()
player.on_chat("mix", on_chat)
```

## Step 2

Add code to ``||blocks:print||`` a variable **word1** out of ``||blocks:grass||`` blocks at the position **(0,0,0)**, facing **West**.

```python
    starting_world_position = player.position()
    blocks.print(word1, GRASS, pos(0, 0, 0), WEST)
player.on_chat("mix", on_chat)
```

## Step 3

Set the variable **starting_world_ position** to **(0,0,0)**. Set the variable **word1** to "rail".
  
```python
starting_world_position: Position = None
word1 = ""
word1 = "rail"
```

## Step 4

Create another ``||player:on chat||`` command and name it **mix2**. Inside this command, ``||blocks:print||`` the variable **word1** out of **smooth sandstone** at position **(0,0,0)**, facing **West**. Also, ensure that the **starting_world_ position** variable is set to ``||player: player world position||``. 

```python
 def on_chat2():
    blocks.print(word1, SMOOTH_SANDSTONE, pos(0, 0, 0), WEST)
    starting_world_position = player.position()
player.on_chat("mix2", on_chat2)
```

## Step 5

Inside the ``||player:on chat||`` **mix2** command, ``||blocks:print||`` a new **word2** variable out of **purple wool** at position **0,0,0**, facing **West**. 

```python
def on_chat2():
    blocks.print(word1, SMOOTH_SANDSTONE, pos(0, 0, 0), WEST)
    blocks.print(word2, PURPLE_WOOL, pos(0, 0, 0), WEST)
    starting_world_position = player.position()
player.on_chat("mix2", on_chat2)
```

## Step 6

Outside of the ``||player:on chat||`` commands, set a new variable with the name **word2**.

```python
starting_world_position: Position = None
word2 = ""
word1 = ""
word1 = "rail"
word2 = "road"
```

## Step 7

Add ``||blocks:print|`` both **word1** and **word2** variables **lapiz lazuli** at position **(0,0,0)**, facing **West** to the **mix2** ``||player:on chat||`` command.

```python
def on_chat2():
    blocks.print(word1, SMOOTH_SANDSTONE, pos(0, 0, 0), WEST)
    blocks.print(word2, PURPLE_WOOL, pos(0, 0, 0), WEST)
    blocks.print("" + word1 + word2, LAPIS_LAZULI_BLOCK, pos(0, 0, 0), WEST)
    starting_world_position = player.position()
player.on_chat("mix2", on_chat2)
```

## Step 8

Create code that will ``||blocks:print||`` the alphabet when the player is **flying**. You will need to set the **alphabet** variable to “ABCDEFGHIJKLMNOPQ”.

```python
def travelled_fly():
    alphabet = "ABCDEFGHIJKLMNOPQ"
    player.on_travelled(FLY, travelled_fly)
```

## Step 9

Have the printing of the alphabet to start with a **random letter** each time and ``||blocks:print||`` in **pumpkin** blocks at the position of **(-5, 2, 0)**, facing **West**.

```python
def travelled_fly():
    alphabet = "ABCDEFGHIJKLMNOPQ"
    RandomLetter = randint(0, 12)
    blocks.print(alphabet.charAt(RandomLetter), PUMPKIN, pos(-5, 2, 0), WEST)
player.on_travelled(FLY, travelled_fly)
```

## Step 10

Set the **alphabet** and **RandomLetter** variables. For consistency, we set them in the same location we set all the other variables.

```python
RandomLetter = 0
alphabet = ""
starting_world_position: Position = None
word2 = ""
word1 = ""
word1 = "rail"
word2 = "road"
```

## Step 11

Go into Minecraft and test all of your code.


```python
def on_chat():
    starting_world_position = player.position()
    blocks.print(word1, GRASS, pos(0, 0, 0), WEST)
player.on_chat("mix", on_chat)
def on_chat2():
    blocks.print(word1, SMOOTH_SANDSTONE, pos(0, 0, 0), WEST)
    blocks.print(word2, PURPLE_WOOL, pos(0, 0, 0), WEST)
    blocks.print("" + word1 + word2, LAPIS_LAZULI_BLOCK, pos(0, 0, 0), WEST)
    starting_world_position = player.position()
player.on_chat("mix2", on_chat2)
def travelled_fly():
    alphabet = "ABCDEFGHIJKLMNOPQ"
    RandomLetter = randint(0, 12)
    blocks.print(alphabet.charAt(RandomLetter), PUMPKIN, pos(-5, 2, 0), WEST)
player.on_travelled(FLY, travelled_fly)
RandomLetter = 0
alphabet = ""
starting_world_position: Position = None
word2 = ""
word1 = ""
word1 = "rail"
word2 = "road"
```

