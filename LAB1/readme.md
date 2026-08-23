# EventLoop

JS is synchronous and single threaded bydefault

## There can be async behaviour 
- with BrowserAPI - setTimeout, setInterval, setImmediate, nextTick
- with promises
- with event handlers

# Promise

## function not executed but must be executed after a file it fetch some status during the execution at final it may resolve.

## modern javascript is divided into 2 categories
Modern JS is of two types

1. CommonJS (.cjs) -> supports OOPs -> require
   - priority (nextTick, Promise, setImmediate/setTimeout)

2. ModuleJS (.mjs) -> follow modular approach -> import
   - priority (Promise, nextTick, setImmediate/setTimeout)

  File System (FS Module)
   FS module directly communicate with system rather than browser the comoon operation on a file or folder are
   1. Right File
   2. Read File
   3. Update File





   all funtions are promise so it must be called await