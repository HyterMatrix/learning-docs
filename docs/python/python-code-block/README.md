# python代码块

## 判断目录或文件是否存在，不存在就创建

```python
import os
dirs = '/Users/python/'

if not os.path.exists(dirs):
    os.makedirs(dirs)
```
