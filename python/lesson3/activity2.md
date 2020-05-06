### @explicitHints true
# Activity 2 - Sorting things out. 

```python
.
```
# Activity 2 - Ideal planting spot.

## Step 1
Look at each of the **5** different location variables and see what crops are at these coordinates. Then change the **WATER** ,
in the `||blocks: place block at position||`  command, to either **PUMPKIN** or **MELON_BLOCK** to match the crop at the coordinate. 


```template
location1 = world(24, 4, -18)
location2 = world(24, 5, -18)
location3 = world(24, 4, -18)
location4 = world(24, 4, -18)
location5 = world(24, 4, -18)

blocks.place(WATER, location1)
blocks.place(WATER, location2)
blocks.place(WATER, location3)
blocks.place(WATER, location4)
blocks.place(WATER, location5)
```