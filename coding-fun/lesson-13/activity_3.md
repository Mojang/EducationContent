### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Building

## Step 1
``||mobs:Give||`` yourself at least **34 emerald** blocks. Create a new ``||variable||`` and name it **count**.  Get an ``||blocks:on block placed||`` block and set it to **emerald**. Drag the ``||change count||`` block inside the ``||blocks: on block placed||`` and add ``||player: say||`` block. Add ``||count||`` inside the ``||player: say||`` block. This way whenever you place blocks, the game will be counting how many blocks you placed. 

### ~ tutorialhint 

You can select iron, gold, emerald or diamond. 

```blocks
let count = 0
blocks.onBlockPlaced(EMERALD_BLOCK, function () {
    count += 1
    player.say(count)
})

```

```ghost
blocks.onBlockBroken(STONE, function () {
    count += 1
    player.say(count)
})
let count = 0
mobs.give(
mobs.target(NEAREST_PLAYER),
STONE,
1
)
})
```


