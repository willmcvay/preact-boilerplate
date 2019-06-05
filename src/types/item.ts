export interface ItemItem {
  name: string
}

export interface ItemState {
  loading: boolean
  itemData: ItemItem | null
}
