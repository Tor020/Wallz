
```scss
// Columns -- Horizontal Axis


// These Two Are Equivalent

grid-column-start:1;
grid-column-end:2;

grid-column: 1 / 2;

// This is the shorthand version

```



```scss
// Rows -- Vertical Axis


// These Two Are Equivalent

grid-row-start:1;
grid-row-end:2;

grid-row:1 / 2;
// This is the shorthand version

```


```scss

#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {

grid-column: 2/ span 3
}

```

```scss
// grid-area accepts four values separated by slashes: grid-row-start, grid-column-start, grid-row-end, followed by grid-column-end. 
// grid-area: grid-row-start / grid-column-start // grid-row-end / grid-column-end

grid-area: 2 / 1 / 3 / 3 //equivalent to

grid-row: 2 / 3
grid-column: 1 / 3       //equivalent to  

grid-column-start:1;     //equivalent to
grid-column-end:2;
grid-row-start:1;
grid-row-end:2;

```