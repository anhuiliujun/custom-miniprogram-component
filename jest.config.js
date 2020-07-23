module.exports = {
  bail: 1,
  verbose: true,
  testEnvironment: 'jsdom',
  testURL: 'https://jest.test',
  moduleFileExtensions: ['js', 'ts'],
  snapshotSerializers: ['miniprogram-simulate/jest-snapshot-plugin']
}