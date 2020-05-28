### @explicitHints true

# Activity 2 - Dietary requirement.

```python
blocks.place()
```

## Step 1
Give the **first** dog everything that's already in the predefined list by changing the values of the first **4** `||blocks:place block at position||`
commands. So that they each place, in order, one of the items in the list. Then give the food from the chest to dog number one.

### ~ tutorialhint 
To drop items from the hot bar press the [**Q**] key on your keyboard. 

## Step 2
Give the **second** dog everything that's already in the list with additonal vitamins added. 
Do this by using the **append** method to add the variable **Vitamins** to the end of the list.
Then change the value of the last `||blocks: place block at position||` command so that it places the vitamins in the machine, and 
then give the food to dog number two.

## Step 3
Give the **third** dog everything that's already in the list but with no **beef**. 
Do this by using the **pop** method to remove the variable **Beef** from the list.
Then give the food to dog number three.

### ~ tutorialhint 
With the **pop** method you must use the list position value and **not** its name. 

```template
Bone = world(-21, 45, -31)
Beef = world(-21, 45, -29)
Chicken = world(-21, 45, -27)
Biscuit = world(-21, 45, -25)
Vitamins = world(-21, 45, -23)
// Replace the lines below with your code #   
Dog_Food=[Bone, Beef, Chicken, Biscuit]
//Add the variable Vitamins to the list using the append method | Step 2
//Remove the variable Beef using the pop method                 | Step 3

//Change the value of the list below                   | Step 1
blocks.place(REDSTONE_BLOCK, Dog_Food[0]) 
//Change the value of the list below                   | Step 1
blocks.place(REDSTONE_BLOCK, Dog_Food[0])
//Change the value of the list below                   | Step 1
blocks.place(REDSTONE_BLOCK, Dog_Food[0]) 
//Change the value of the list below                   | Step 1
blocks.place(REDSTONE_BLOCK, Dog_Food[0])   
//Change the value of the list below                            | Step 2
blocks.place(REDSTONE_BLOCK, Dog_Food[0]) 

```
