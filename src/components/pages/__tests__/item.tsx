import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Item from '../item'

describe('Item', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(<Item />))).toMatchSnapshot()
  })
})
