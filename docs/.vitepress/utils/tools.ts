export type StorageSetItemEvent = { key?: string, newValue?: string } & Event
export const dispatchEventStorage = () => {
  const signSetItem = localStorage.setItem
  localStorage.setItem = function (key, value) {
    const setEvent: StorageSetItemEvent = new Event('storageSetItemEvent')
    setEvent.key = key
    setEvent.newValue = value
    window.dispatchEvent(setEvent)
    signSetItem.apply(this, [key, value])
  }
}

export const getRoot = () => {
  return window.document.querySelector(':root') as HTMLElement
}

export const setProperty = (key:string, value:any) => {
  return getRoot().style.setProperty(key, value)
}

export const getPropertyValue = (property:string) => {
  return getComputedStyle(getRoot()).getPropertyValue(property)
}
