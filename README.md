# Jetbrains Internship Qodana test task

This project is specially prepared for Jetbrains Internship in Qodana Frontend

This is simple todo list with required features:
* Task can be marked as **done**
* Read from file *(in my implementation it can be imported from [utils page](https://jb-test-task.vercel.app/utils))*
* Reloading the page should not affect the information
* Separate tabs for todos and done *(implemented it in a mobile version, desktop is only single-board)*
* [Bar chart](https://jb-test-task.vercel.app/stats) with per-days stats.
## Preview

[Vercel preview](https://jb-test-task.vercel.app)

![main](https://i.imgur.com/DxDwoU6.png)
![stats](https://i.imgur.com/uEXtQ6g.png)
![utils](https://i.imgur.com/XDjEnAx.png)

## Install

```
npm i
npm run-script start
```


## Usage

### On desktop

A desktop version has one board with to columns. Every task can be edited and removed from any column.

By default, the task is filled with a random hint, which can be changed at any time.

Task can be done and undone easily by pressing checkbox on each task card.

### On mobile

A mobile version has two tabs (**todo** and **done**).

As desktop version, by default, the task is filled with a random hint, which can be changed at any time.

When you click on the checkbox, the task is removed from the list and goes to another one (**todo** -> **done**, **done** -> **todo**).


### Utils

In [utils page](https://jb-test-task.vercel.app/utils) you can clear, view and paste your own task raw data (for example, when you migrate from device)

Task data stored as JSON of array of **Task** object

**Task object**
```
Task {
  id: number;
  name?: string;
  status: 'todo' | 'done';
  date: Date;
  placeholder?: string;
}
```

For example
```
[{"id":1618169893584,"status":"done","date":"2021-04-19T21:00:00.000Z","placeholder":"Jump the enemy","name":"wad"},{"id":1618169896100,"status":"done","date":"2021-04-19T21:00:00.000Z","placeholder":"Ask to jig","name":"Ask to jig"}]
```
