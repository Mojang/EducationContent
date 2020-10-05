### @explicitHints 1

# Activity: Warp Belt

## Step 1
Drag a ``||Loops:on start||`` block onto the coding Workspace.
Create an empty array. 

## Step 2
Make a variable and name it **warp_array**. Drag a ``||Variables:set||`` block into the on start.

From the ``||Variables:set||`` drop-down menu, select the **warp_array** variable.

## Step 3
Drag ``||Arrays:create array with||`` into the ``||Variables:set "warp_array" to||``.

In ``||Arrays:create array with||``, click the minus sign **(–)** to empty it. You should see the title change to ``||Arrays:create empty array||``.

### ~ tutorialhint
``` blocks
let warp_array: number[] = []
warp_array = []
```

## Step 4
Make the "delete" command. Drag an ``||Player:on chat command||`` onto the Workspace.

Name this command **delete**.

## Step 5
Right-click the existing ``||Variables:set||`` in ``||Loops:on start||`` and select Duplicate.

Drag this new ``||Variables:set||`` block into ``||Player:on chat command "delete"||``.

## Step 6
Drag a ``||Player:say||`` after ``||Variables:set||``.

In ``||Player:say||``, enter a message, for example, **"Array deleted"**.

### ~ tutorialhint
``` blocks
let warp_array: number[] = []
player.onChat("delete", function () {
    warp_array = []
    player.say("Array deleted")
})
warp_array = []
```
## Step 7
Make the "save" command. Drag another ``||Player:on chat command||`` to the Workspace.

Name this command **save**.

## Step 8
Drag ``||Arrays:add value to end||`` into ``||Player:on chat command "save"||``.

Set the position into the warp array.From the ``||Arrays:add value to end||`` drop-down menu, select **warp_array** as the array you want to add values to.

Drag a ``||Player:player world position||`` into the Add value of ``||Arrays:add value to end||``.

### ~ tutorialhint
``` blocks
let warp_array: Position[] = []
warp_array.push(player.position())
```

## Step 9
Drag a ``||Player:say||`` block after the ``||Arrays:"warp_array" add value "player world position" to end||`` block.

In the ``||Player:say||`` block, enter a message, for example, **"position added"**.

### ~ tutorialhint
``` blocks
let warp_array: Position[] = [] 
player.onChat("delete", function () {
    warp_array = []
    player.say("Array deleted")
})
player.onChat("save", function () {
    warp_array.push(player.position())
    player.say("position added")
})
warp_array = []
```

## Step 10
Create a "warp" command. The player will use the warp command by passing in a number, such as "warp 1" or "warp 2", to teleport themselves to a saved location in the array.

Drag a ``||Player:on chat command||`` to the Workspace and name it **warp**.

## Step 11
In ``||Player:on chat command "warp"||``, click the plus sign **(+)** to add a parameter. It is called **num1** by default. This is a variable. This is the number of the location you want to warp to. Recall that in arrays, the number where something is stored is called the index or key. You will pass in the index here through ``||Player:on chat command "warp"||``. Then you will get the information stored in that location.

## Step 12
If you wanted to warp to our third saved location, you would enter **warp 3** in the chat window. The computer goes to the third location and gets your coordinates for you!

You should always name variables something meaningful. Rename **num1** to **Warp_LocationNum**.

## Step 13
Drag ``||Player:teleport to||`` into ``||Player:on chat command "warp"||``.

## Step 14
Now we just need to get the information stored in our array. From ``||Arrays:ARRAYS||``, drag ``||Arrays:get value at||`` into ``||Player:teleport to||`` and replace the existing coordinates block.

### ~ tutorialhint
``` blocks
let warp_array: Position[] = []
player.teleport(warp_array[0])
```

## Step 15
From the ``||Arrays:get value at||`` drop-down menu, select the **warp_array** variable.

Drag **Warp_LocationNum** into the second slot of the ``||Arrays:get value at||``.

### ~ tutorialhint
``` blocks
let warp_array: Position[] = []
player.onChat("warp", function (Warp_LocationNum) {
    player.teleport(warp_array[Warp_LocationNum])
})
```
## Step 16
Now, when you call the warp command with a number, the code will grab the position in the spot you specify. Then you will teleport to the position stored in the array. 

### ~ tutorialhint
``` blocks
let warp_array: Position[] = []
player.onChat("delete", function () {
    warp_array = []
    player.say("Array deleted")
})
player.onChat("save", function () {
    warp_array.push(player.position())
    player.say("position added")
})
player.onChat("warp", function (Warp_LocationNum) {
    player.teleport(warp_array[Warp_LocationNum - 1])
})
warp_array = []
```
