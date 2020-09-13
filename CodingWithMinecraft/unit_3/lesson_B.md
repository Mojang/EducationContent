 ### @explicitHints 1
 
 # Activity: Minecraft moving company

## Step 1
Drag three ``||Player:on chat command||`` blocks into the coding Workspace.

Change the names of these ``||Player:on chat command||`` blocks to **"start"**, **"stop"**, and **"copy"**.

### ~ tutorialhint
``` blocks
    player.onChat("start", function () { })
    player.onChat("stop", function () { })
    player.onChat("copy", function () { })
```

## Step 2
Create the variables. Open ``||Variables:VARIABLES||`` and click the **Make a Variable** button. 

Name the variable **start**, and click **Ok**.

## Step 3
Make another variable and name the variable **stop**, and click **Ok**.

## Step 4
Set the variables. Place a ``||Variables:set||``variable block into ``||Player:on chat command||`` for start. 

Use the drop-down menu and adjust this to say set ``||Variables:start||`` to **0**.

## Step 5
Adjust **0** to ``||Player:player world position||``. Drag ``||Player:player world position||`` into ``||Variables:set start||`` and replace the **0**.

### ~ tutorialhint
```blocks
    let start: Position = null
    player.onChat("start", function () {
        start = player.position()
})
```
## Step 6
Print messages. Add ``||Player:say||`` block after ``||Variables:set start||``. 

### ~ tutorialhint
``` blocks
    let start: Position = null
    player.onChat("start", function () {
        start = player.position()
        player.say("Hi!")
})
```

## Step 7
Open ``||Text:TEXT||``, and place ``||Text:join||`` into the ``||Blocks:say||`` block, replacing **"Hi!"**.

In the first slot of ``||Text:join||``, enter **"Starting Point Set"**.

## Step 8
Next, open ``||vARIABLES: VARIABLES||``, and drag ``||Variables: start||`` into the second slot of the ``||Text:join||`` block.

### ~ tutorialhint
     ```blocks
          let start: Position = null
          player.onChat("start", function () {
     start = player.position()
     player.say("Starting Point Set: " + start)
})
```

## Step 9
Repeat for the stop command. Right-click ``||Player:on chat command||`` **"start"** and duplicate it. Rename ``||Player: on chat||`` command into **stop**. 

Change the ``||Player: say||`` text into **"Stopping Point Set"**. Add a ``||Variables: stop||`` variable into the ``||Text: join||`` block. 

### ~ tutorialhint
``` blocks
 let stop: Position = null
     player.onChat("stop", function () {
     stop = player.position()
     player.say("Stopping Point Set: " + stop)
})
```
## Step 10
Delete the empty ``||Player:on chat command||`` blocks for **"stop"** and **"copy"**.

## Step 11
Build the copy command. Open ``||Blocks:BLOCKS||``, and drag the ``||Blocks:clone||`` block into **"copy"** block.

### ~ tutorialhint
``` blocks
 player.onChat("copy", function () {
     blocks.clone(
     pos(0, 0, 0),
     pos(0, 0, 0),
     pos(0, 0, 0),
     CloneMask.Replace,
     CloneMode.Normal
     )
})
```

## Step 12
From ``||Variables:VARIABLES||``, drag ``||Variables:start||`` into  the first slot in ``||Block:clone||`` block. Your block should now read **clone from start**.

## Step 13
From ``||Variables:VARIABLES||``, drag ``||Variables:stop||`` into the second slot in ``||Block:clone||``. Your block should now read **clone from start to stop**.

### ~ tutorialhint
```blocks
     let start: Position = null
     let stop: Position = null
     player.onChat("copy", function () {
          blocks.clone(
          start,
          stop,
          pos(0, 0, 0),
          CloneMask.Replace,
          CloneMode.Normal
    )
})
```

## Step 14
Try your code in Minecraft. You need to build a house or a structure that you would like to copy. Move your player to one of the bottom corners of the structure, and in the chat window, type the command “start”. 

## Step 15
Move your player diagonally to the top corner from the start. In the chat window, type the command “stop”.
Move your player to an open space in the world where you want to copy the structure, and in the chat window, type the command “copy”.
Did it copy your house or structure correctly?

### ~ tutorialhint
``` blocks
let stop: Position = null
let start: Position = null
player.onChat("start", function () {
    start = player.position()
    player.say("Starting Point Set: " + start)
})
player.onChat("copy", function () {
    blocks.clone(
    start,
    stop,
    pos(0, 0, 0),
    CloneMask.Replace,
    CloneMode.Normal
    )
})
player.onChat("stop", function () {
    stop = player.position()
    player.say("Stopping Point Set: " + stop)
})
```
