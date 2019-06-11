// import { homeDataFetch } from '../home'
// import ActionTypes from '../../constants/action-types'
// import * as fetcher from '../../utils/fetcher'
// import { URLS } from '../../constants/api'
// import { homeDataStub } from '../__stubs__/home'

// jest.mock('../../utils/fetcher')

// const mockDispatch = jest.fn()

// describe('home thunks', () => {
//   describe('homeDataFetch', () => {
//     it('should receive data', async () => {
//       const fetcherSpy = jest.spyOn(fetcher, 'default').mockReturnValue(Promise.resolve(homeDataStub))

//       await homeDataFetch()(mockDispatch)

//       expect(mockDispatch).toHaveBeenCalledTimes(2)
//       expect(mockDispatch).toHaveBeenCalledWith({
//         type: ActionTypes.HOME_LOADING,
//         data: true
//       })
//       expect(mockDispatch).toHaveBeenCalledWith({
//         type: ActionTypes.HOME_RECEIVE_DATA,
//         data: homeDataStub
//       })
//       expect(fetcherSpy).toHaveBeenCalledTimes(1)
//       expect(fetcherSpy).toHaveBeenCalledWith({
//         url: URLS.react,
//         method: 'GET'
//       })
//     })

//     it('should thow and catch an error if no data returned', async () => {
//       const fetcherSpy = jest.spyOn(fetcher, 'default').mockReturnValue(Promise.resolve(undefined))
//       const consoleSpy = jest.spyOn(console, 'error')

//       await homeDataFetch()(mockDispatch)

//       expect(mockDispatch).toHaveBeenCalledTimes(1)
//       expect(mockDispatch).toHaveBeenCalledWith({
//         type: ActionTypes.HOME_LOADING,
//         data: true
//       })

//       expect(fetcherSpy).toHaveBeenCalledTimes(1)
//       expect(fetcherSpy).toHaveBeenCalledWith({
//         url: URLS.react,
//         method: 'GET'
//       })

//       expect(consoleSpy).toHaveBeenCalledTimes(1)
//       expect(consoleSpy).toHaveBeenCalledWith('Error fetching data')
//     })
//   })

//   afterEach(() => {
//     jest.resetAllMocks()
//   })
// })
