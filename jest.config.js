module.exports = {
  verbose: true,
  roots: ['<rootDir>/src/', '<rootDir>/src/components/', '<rootDir>/src/pages/'],
  testMatch:['**/*.tests.js', '**/*.spec.js'],
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  // moduleNameMapper: {
  //   '@/(.*)$': '<rootDir>/src/$1'
  // },
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest"
  }
}
