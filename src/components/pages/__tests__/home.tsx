import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from '../home'

describe('Home', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(<Home />))).toMatchSnapshot()
  })
})
