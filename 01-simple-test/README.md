01 - Simple Test
---

Setup simple test with Vite + Jest

### Setup

1. Install Jest

```
yarn add jest -D
```

2. Install @swc/jest

```
yarn add -D jest @swc/core @swc/jest
```

3. Setup jest config in `jest.config.js`

```
module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  }
}
```

4. Run a test

```
yarn test
```

### Other tools

- [vitest](https://vitest.dev/)
- [vite-jest](https://github.com/sodatea/vite-jest)
- [babel-jest](https://www.npmjs.com/package/babel-jest)
