IPC Child test
===

This is to test whether you can set up an ipc channel between a parent and child script when you execute the child script via an npm script.

It doesn't seem possible with a basic setup. Tips welcome.

## Output

Desired output when called directly

```
$ node call-directly.js
Message received from child:  This the child script.
Closed with code:  0
```

Lame output when called through npm script

```
$ node call-with-npm.js

> process-test@1.0.0 child /path/to/ipc-msg-test
> node child.js

Closed with code:  0
```
