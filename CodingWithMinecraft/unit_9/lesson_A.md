### @explicitHints 1
# Activity: Maze Generation

## Step 1
Use the starter code presented. 

```template
player.onChat("maze", function () {
    blocks.fill(
    STONE,
    pos(-5, 0, -5),
    pos(5, 0, 5),
    FillOperation.Replace
    )
    agent.teleportToPlayer()
    blocks.place(AIR, pos(0, 0, 0))
    agent.setAssist(DESTROY_OBSTACLES, false)
    player.teleport(pos(0, 5, 0))
    player.say("let's dig that maze!")
    dig()
})
function dig() {

}
```

## Step 2
The agent will need materials to patch holes it makes in the maze. Because the agent is “learning” as it goes, it may accidently break a block of the maze wall only to later realize we need that block. Thus, the agent then patches the hole it made by mistake. you can give the agent some wood to patch the holes. Give the agent some oak wood planks in its inventory, in the upper left inventory slot.

## Step 3
Let’s try out the program! Type the command “maze” in the chat window to see the program run. Double tap the space bar and fly up to get.

## Step 4
Build the starting and ending locations. For the next activity, the agent will need to know when it has successfully completed the maze. In activity 2, you will be creating some code to get the agent to navigate the maze successfully. To get set up for the next activity, you will need to prepare the starting and ending areas of the maze.

## Step 5
You will need to equip the player with a diamond pickaxe and redstone block. The pickaxe is to destroy the stone for the starting point and ending point. The redstone will mark the ending point. Open Terminal using ‘/‘, then type the give command to equip the player with a diamond pickaxe and a block of redstone. 
**/give @s diamond_pickaxe**
**/give @s redstone_block**

## Step 6
Now all you need to do is build a starting and ending point. Decide a starting point and an ending point. Most likely these will be on opposite ends of the maze.

## Step 7
Destroy a block at the starting point.

Destroy a block at the ending point. Place a redstone block underneath the ending point.

## Step 8
After destroying the grass block that marks the ending location, place a redstone block in the dirt.

## Step 9
In the next activity, Maze Pathfinding, you’ll have the agent stop when it detects redstone under its feet. This is how you will know it has completed the maze!
