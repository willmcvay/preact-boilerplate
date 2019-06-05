export interface HomeItem {
  name: string
}

export interface HomeState {
  loading: boolean
  homeData: HomeItem | null
}
