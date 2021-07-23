interface ComponentProps_0507 {
  onSelectItem: (item: any) => void
}
function renderSelector_0507(props: ComponentProps_0507) {
  /* ... */
}

let selectedId_0507: number = 0
function handleSelectItem_0507(item: any) {
  selectedId_0507 = item.id
}

renderSelector_0507({ onSelectItem: handleSelectItem_0507 })
