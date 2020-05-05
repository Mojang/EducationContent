### @explicitHints true
# Activity 2 - Sorting things out. 

```python
.
```
# Activity 2 - Ideal planting spot.

## Step 1
Look at each of the **5** different location variables and see what blocks are on those coordinates. Then change the **STONE** block type ,to the block type on the coordinate, in the `||blocks: place block at position||` 
command. The blocks can be **PUMPKIN** or **MELON_BLOCK**.

```template
location1 = world(24, 4, -18)
location2 = world(24, 5, -18)
location3 = world(24, 4, -18)
location4 = world(24, 4, -18)
location5 = world(24, 4, -18)

blocks.place(STONE, location1)
blocks.place(STONE, location2)
blocks.place(STONE, location3)
blocks.place(STONE, location4)
blocks.place(STONE, location5)
```