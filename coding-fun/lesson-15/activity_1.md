### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# Columns!

## Step 1
Create an app that will **calculate** how many **blocks** you need to build the remaining columns. Here are some facts: there are 6 columns and each column is 6 blocks high. Start by creating and setting ``||height||`` and ``||quantity||`` variables to the correct numbers, then create a ``||total blocks||`` variable. 

## Step 2
Set up a condition, ``||logic: if||`` the ``||total blocks||`` = ``||height||`` * ``||quantity||``, then ``||player: say||`` ""Collected enough blocks!". 

## Step 3
Now add a ``||change total blocks||`` by 1 command, so that you know how many blocks you have collected. Make sure to add ``||blocks: pillar of quartz block broken||`` you will see the count and when you are done, you will see the message "Collected enough blocks!". 

```ghost
blocks.onBlockBroken(PILLAR_QUARTZ_BLOCK, function () {
    total_blocks += 1
    if (total_blocks == height * quantity) {
        player.say("Collected enough blocks!")
    }
})
let total_blocks = 0
let quantity = 0
let height = 0
height = 6
quantity = 6
```
