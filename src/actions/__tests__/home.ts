import { homeLoading, homeReceiveData } from '../home'
import ActionTypes from '../../constants/action-types'

describe('home actions', () => {
  it('should create a homeLoading action', () => {
    expect(homeLoading.type).toEqual(ActionTypes.HOME_LOADING)
    expect(homeLoading(true).data).toEqual(true)
  })

  it('should create a homeReceiveData action', () => {
    const name = 'Bob'
    expect(homeReceiveData.type).toEqual(ActionTypes.HOME_RECEIVE_DATA)
    expect(homeReceiveData({ name }).data.name).toEqual(name)
  })
})
