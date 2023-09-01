---
author: Iván SZKIBA
marp: true
theme: uncover
---

# k6 Office Hours #99

**k6 extensions updates**

*Iván Szkiba*

2023-09-01

https://github.com/szkiba/k6-oh-99

---

# 3 in 1

- presentation for k6 Office Hours
- https://github.com/szkiba/my-k6 demo
- custom k6 binary build pipeline/repository
  https://github.com/szkiba/k6-oh-99/releases
---

#### Repositories

- https://github.com/szkiba/my-k6
- https://github.com/szkiba/xk6bundler
- https://github.com/grafana/xk6-dashboard
- https://github.com/szkiba/xk6-faker
- https://github.com/szkiba/xk6-enhanced
- https://github.com/szkiba/xk6-g0
- https://github.com/szkiba/xk6-top

---

#### my-k6

> Bundle k6 with extensions without hassle

- GitHub template repository
- Set up a custom k6 build/distribution in minutes
- Configuration: list the extensions in README.md

---

### Bundled Extensions

```xk6
github.com/grafana/xk6-dashboard
github.com/szkiba/xk6-faker
github.com/szkiba/xk6-enhanced
github.com/szkiba/xk6-top
github.com/szkiba/xk6-g0
github.com/szkiba/xk6-output-plugin
```

https://github.com/szkiba/k6-oh-99/releases

---

#### xk6bundler

> Bundle k6 with extensions as fast and easily as possible

- extension of xk6
- CLI tool
- GitHub Action

---

### xk6-dashboard

> A k6 extension that enables creating web based metrics dashboard for k6

```bash
cd examples/xk6-dashboard
k6 run --out dashboard=open script.js
k6 run --out 'dashboard=port=-1&report=k6-report.html' script.js
k6 dashboard replay --open saved.json.gz
k6 dashboard replay --report report.html --port -1 saved.json.gz
```

---

### xk6-faker

> A k6 extension for random fake data generation.


```js
import faker, { Faker } from "k6/x/faker";

let f = new Faker(1234);

export default function () {
  // faker with random seed
  console.log(faker.name());

  // faker with custom seed
  console.log(f.name());
}
```

```bash
k6 run --quiet --no-summary examples/xk6-faker/script.js
```

---

### xk6-enhanced

> Add enhanced (TypeScript) compatibility to k6

```ts
interface User {
  name: string;
  age: number;
}
function NewUser(name: string, age: number): User {
  return {
    name: name,
    age: age,
  };
}
export default function () {
  console.log(NewUser("jim", 33));
}
```

```bash
k6 run --compatibility-mode=enhanced examples/xk6-enhanced/script.ts  
```

---

#### xk6-g0

> Write k6 tests in golang


```go
package main

import (
	"net/http"

	"github.com/stretchr/testify/assert"
)

func Default(assert *assert.Assertions) {
	res, err := http.Get("https://httpbin.test.k6.io/get")

	assert.NoError(err, "got response without error")
	assert.Equal(http.StatusOK, res.StatusCode, "status code was 200")
	assert.Equal("application/json", res.Header.Get("Content-Type"), "content type was application/json")
}
```

```go
cd examples/xk6-g0
k6 run script.go
go test .
```

