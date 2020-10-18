# Run **`npm install`**
### `node app`
#### Commands
- **list**
- **file**

## list -> show list on console
#### Params
- b, base
- l, limit
---
## file -> create file with list
---
#### Params
- b, base
- l, limit

### Example
```js
  node app list -b 5 -l 5  
  // expected on console:  
  5 * 1 = 5  
  5 * 2 = 10  
  5 * 3 = 15  
  5 * 4 = 20  
  5 * 5 = 25  
```