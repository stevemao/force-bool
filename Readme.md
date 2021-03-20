> Parse environment variable to a boolean

```ts
import forceBool from 'force-bool'

const nodeEnv = forceBool('SOME_FEATURE')
// => true if 'true', false if 'false' or not set
```
