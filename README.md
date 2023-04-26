# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: izeye/javascript-action@master
with:
  who-to-greet: 'Mona the Octocat'
```

## Build

```
npx ncc build index.js --license licenses.txt
```
