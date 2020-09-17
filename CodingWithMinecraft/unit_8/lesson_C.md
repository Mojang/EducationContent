# Activity: Blocks by ID 

## Step 1
Drag an ``||Loops:on start||`` block to the Workspace. Make a new variable and name it **Blocks**.

## Step 2
Make an array for block IDs. Drag ``||Variables:set||`` into the ``||Blocks:on start||``. Adjust the variable from **item** to **Blocks**.

## Step 3
Drag a ``||Arrays:create array with||`` into ``||Variables:set||``.

Add blocks to the array. Add the numbers 1-5 separated by commas. These five block IDs are: 1 = stone, 2 = grass, 3 = dirt, 4 = cobblestone, and 5 = oak wood plank.

## Step 4
Click the Plus **(+)** sign on ``||Arrays:create array with||`` to add **4** more slots in your array so the total length of your array is **5**.

## Step 5
Drag a ``||Math:number||`` block into the first slot of the ``||Arrays:create array with||`` block.

Populate the rest of your array with number blocks. 

### ~ tutorialhint
``` blocks
let Blocks: number[] = []
Blocks = [0, 0, 0, 0, 0]
```

## Step 6
Pick your numbers. Create an assortment of 5 different types of blocks. Be aware that certain blocks will not mix well! For example, fire will burn all adjacent flammable blocks. This might be fun to play with or perhaps you want to make a design.

## Step 7
Type the numbers to cycle through the first five block IDs: **1** = stone, **2** = grass, **3** = dirt, **4** = cobblestone, and **5** = oak wood plank. Again, you can search for a list of block IDs for the education edition or you could just try out different numbers from (1-252). For the most part you should be ok but again, do not be totally surprised if a fatal error occurs. Just restart. 

### ~ tutorialhint
``` blocks
let Blocks: number[] = []
Blocks = [1, 2, 3, 4, 5]
```

## Step 8
A Loop to Print Out the Blocks. Now that we have our Block Array set up, let’s work on displaying the blocks in a ``||Loops:for||`` loop.

Drag an ``||Player:on chat command||`` block to the Workspace and name it name it “PrintBlocks”.

## Step 9
Drag a ``||Loops:for||`` loop and place in ``||Blocks:on chat command "PrintBlocks"||``.

Drag a ``||Math:subtraction||`` block out to replace the default number **4**. We will subtract **1** from the length of the array.

### ~ tutorialhint
``` blocks
let Blocks: number[] = []
player.onChat("PrintBlocks", function () {
    for (let index = 0; index <= 0 - 0; index++) {

    }
})
Blocks = [1, 2, 3, 4, 5]
```

## Step 10
Search for ``||Arrays:length of array||``. This returns the number of values in an array. Place this in the first slot of your ``||Math:subtraction||``.

Add ``||Variables:Blocks||`` into ``||Arrays:length of array||``.

## Step 11
Add a **1** into the second slot of your ``||Math:subtraction||``. 

### ~ tutorialhint
``` blocks
let Blocks: number[] = []
player.onChat("PrintBlocks", function () {
    for (let index = 0; index <= Blocks.length - 1; index++) {

    }
})
Blocks = [1, 2, 3, 4, 5]
```

## Step 12
Here we can see: We are getting the length of our array which will be 5. We subtract 1. This means the loop will now go from 0 to **4**, (5-1).

## Step 13
Index becomes important. This is what we will use as the index or key for our array because now the numbers will align perfectly.

But by doing it this way, you could have multiple arrays that use the same key. In one of the experiments below the code does just that! 

## Step 14
Print Blocks by IDs. Drag a ``||Blocks:place||`` into the ``||Loops:for||`` loop.

Again, drag a ``||Blocks:block by ID||`` out to replace the default grass block in ``||Blocks:place||``.

## Step 15
Drag a ``||Arrays:get value at||`` and place it inside ``||Blocks:block by ID||``.

``||Arrays:get value at||`` will look in our ``||Variavles:Blocks||`` array and get our IDs(1-5) according to the key we feed it. So we have to adjust this just a bit more to get what we want. However, if you supply 0 for example we want it to give us the ID of 1.

## Step 16
Adjust ``||Arrays:get value at||`` so it reads ``||Arrays:"Blocks" get value at "index"||``. You can get the variable ``||Variables:Index||``.

In the position parameters for ``||Blocks:place||``, set the XYZ coordinates as **(~2, ~0, ~index)**. Drag ``||Variables:Index||`` and place it as the **Z** coordinate. 

### ~ tutorialhint
``` blocks
let Blocks: number[] = []
player.onChat("PrintBlocks", function () {
    for (let index = 0; index <= Blocks.length - 1; index++) {
        blocks.place(blocks.blockById(Blocks[index]), pos(2, 0, index))
    }
})
Blocks = [1, 2, 3, 4, 5]
```

## Step 17
Try the “PrintBlocks” command.  You should see the blocks being built! You can add to the array to print more blocks or change the numbers from 1-5 to any numbers between 1 and 252. Again, this is an estimation and things do change so be aware that if something goes terribly wrong, you should just not use that ID anymore!!!
