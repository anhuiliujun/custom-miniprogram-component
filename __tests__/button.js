
const simulate = require('miniprogram-simulate');
const path = require('path');

describe('button', () => {
  it('works', () => {
    const id = simulate.load(path.join(__dirname, '../dist/button/index')) // 加载自定义组件，返回组件 id
    const comp = simulate.render(id) // 使用 id 渲染自定义组件，返回组件封装实例
    expect(comp.data).toEqual({
      a: 111,
    })
  })
})