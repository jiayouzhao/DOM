# DOM库用到的原生JS API

## 原生 JS API

1. string.trim()

2. template标签

3. insertBefore()
   
    ```js
    node.parentNode.insertBefore(newNode,node)
    ```
    ```js
    node.parentNode.insertBefore(newNode,node.nextSibling)
    ```

4. xxx instanceof Object

5. classList

    ```js
    xxx.classList.add()
    xxx.classList.remove()
    xxx.classList.contains()
    ```


## ES6

1. 对象属性获取 
    
    ```js
    let obj = {a:1,b:2,c:3}
    let {a} = obj
    ```

