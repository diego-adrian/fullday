## fullday

Este paquete es una combinacion con [dayjs](https://www.npmjs.com/package/dayjs) y [vite.dev](https://vite.dev/) en la cual agregamos 3 metodos, las cuales son:

- formatDate
- isWeekend
- isValidDate

## install

```
npm install fullday
```

## examples

```js
import fullday from "fullday";
const response = fullday.formatDate(new Date(), "DD/MM/YYYY");
console.log(response, "response");

const isValid = fullday.isValid(new Date());
console.log(isValid, "isValid");

const isWeekend = fullday.isWeekend(new Date());
console.log(isWeekend, "isWeekend");
```
