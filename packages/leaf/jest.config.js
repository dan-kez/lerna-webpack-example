module.exports = {
    displayName: 'leaf',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testRegex: 'src/.*(/__tests__/.*|(.|/)(test|spec)).(ts|js)x?$',
    moduleNameMapper: {
      '^.+\\.(css|less|scss|svg)$': 'babel-jest',
    },
    testURL: 'http://localhost/'
  };
  