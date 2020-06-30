### @explicitHints true
# Activity 2 - Spin cycle.

```python
for i in range(2):
pass
agent.collect_all()
agent.move(FORWARD, 5)
agent.drop_all(FORWARD)

```

## Step 1
**Part 1:** Write a code so that the Agent will pick up the dirty laundry, move **forward** into the machine, spin left **20** times and then get out of
the machine to place the clean laundry on the other side of where the dirty laundry was.

## Step 2
**Part 2:** Edit the same code so that the Agent does the same thing but for **3** loads of laundry. Do this by using a `||loops: for||` loop before all of the other 
code.

### ~ tutorialhint 
Don't forget that, in this case, two loops should not have the same variable name, so rename the second loop. 
To indent a large piece of code highlight all the code you want to indent and press the **tab** key. 

```template
//Replace the lines below with your code #    
//loop number 2 set to 3                              | Part 2
agent.collect_all()
agent.move(FORWARD, 7)
agent.drop_all(FORWARD)
//loop number 1                              | Part 1
//make the Agent turn left 20 times          | Part 1 
//end of loop 1
//make the Agent collect all                 | Part 1          
//make the Agent move back                   | Part 1
//make the Agent drop everything to the left | Part 1
//end of loop 2
```
