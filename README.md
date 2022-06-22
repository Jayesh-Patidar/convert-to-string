# Convert To String
This library provide you a helper function to convert numbers in string, ordinal numbers and ordinal string. The helper function also provide a basic configuration to change the locale from `en-IN` to `en-US` according to your requirement i.e. you can now change the numbers to words in `Indian` or `International` system. The helper function provide an option to change the case of words between `sentence`, `title`, `upper` and `lower`. Play around with this library and happy coding 😉!!

## Features

- Convert number into string
- `Indian` and `International` system support
- Conversion to `ordinal` numbers available
- Conversion to `ordinal string` available
- Change sentence case easily either to `upper`, `lower`, `title`, `sentence`

## Installation
To install the package just run the command `npm install convert-to-string` in your terminal.

## API Reference

### `convertToString(number, options)`

The function takes two parameters `number` which is required and should be of number type and `options` which is optional and is of object type. The function returns a string and the output can vary on the basis of different options. The full description of option parameters is given below:

| option           | Type      | Possible Values                       | Description                                                                                                                                                                                                                                          |
| :--------------- | :-------- | :------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`         | `string`  | `en-IN`, `en-US`                      | The locale value option which defines the output to be either in `Indian` or `International` format. Default is `en-In`.                                                                                                                             |
| `toOrdinalWords` | `boolean` | `true`, `false`                       | The ordinal words option. If selected to `true`, the resultant output will be in ordinal string. Example `21 => twenty first`, Default is `false`.                                                                                                   |
| `toOrdinal`      | `boolean` | `true`, `false`                       | The ordinal option. If selected to `true`, the resultant output will be in ordinal numeral. Example `21 => twenty first`. If both `toOrdinalWords` and `toOrdinal` are set to `true` then `toOrdinalWords` will take precedence. Default is `false`. |
| `changeCaseTo`   | `string`  | `upper`, `lower`, `sentance`, `title` | The change case option is used to change the case of output string in desired format either between available options. Default is `lower`.                                                                                                           |

## Usage/Examples

### 1) Basic Examples
```javascript
const { convertToString } = require("convert-to-string");

convertToString(100); // one hundred

convertToString(1067); // one thousand sixty seven

convertToString(342578); // three lakh forty two thousand five hundred seventy eight
```

### 2) Configurations
```javascript
const { convertToString } = require("convert-to-string");

convertToString(100, { toOrdinal: true }); // 100th

convertToString(1067, { toOrdinalWords: true }); // one thousand sixty seventh

convertToString(342578, { locale: 'en-US' }); // three hundred forty two thousand five hundred seventy eight

convertToString(78866782, { locale: 'en-IN' }); // seven crore eighty eight lakh sixty six thousand seven hundred eighty two

convertToString(78866782, { locale: 'en-US', toOrdinalWords: true }); // seventy eight million eight hundred sixty six thousand seven hundred eighty second

convertToString(3234, { changeCaseTo: 'title' }); // Three Thousand Two Hundred Thirty Four

convertToString(3234, { changeCaseTo: 'sentence' }); // Three thousand two hundred thirty four
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Authors

- [@Jayesh-Patidar](https://github.com/Jayesh-Patidar)

## Contributing

Contributions are always welcome! Open a pull request or add comments on the
[issues page](https://github.com/Jayesh-Patidar/convert-to-string/issues). Thanks!

## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022 Jayesh Patidar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
