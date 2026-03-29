//Flatten objects for Select Component Options
// valueKey: key of value
// labelKey: key of getLabelsLockup
// asGroup: if list to be returned is in a group format
// groupName: name to be displayed in group
// groupKey: key to group by
// keyValue: key to filter list by

// export const flattenSelectOptions = (
//   list: Record<any, any>[],
//   valueKey: string,
//   labelKey: string,
//   asGroup: boolean,
//   groupName?: string,
//   groupKey?: string,
//   keyValue?: number | string
// ) => {
//   if (asGroup) {
//     const options = list.filter((row) => row[groupKey ?? ''] == keyValue)
//     const items = options.map((row) => {
//       return {
//         value: String(row[valueKey]),
//         label: row[labelKey],
//       }
//     })

//     return { group: groupName, items }
//   }

//   const items = list.map((row) => {
//     return {
//       value: String(row[valueKey]),
//       label: row[labelKey],
//     }
//   })

//   return items
// }

import type { ComboboxItemGroup, ComboboxItem } from '@mantine/core'

// Overloads — tells TS which return type to expect based on asGroup
export function flattenSelectOptions(
  list: Record<string, any>[],
  valueKey: string,
  labelKey: string,
  asGroup: true,
  groupName?: string,
  groupKey?: string,
  keyValue?: number | string
): ComboboxItemGroup<ComboboxItem>

export function flattenSelectOptions(
  list: Record<string, any>[],
  valueKey: string,
  labelKey: string,
  asGroup: false,
  groupName?: string,
  groupKey?: string,
  keyValue?: number | string
): ComboboxItem[]

// Implementation
export function flattenSelectOptions(
  list: Record<string, any>[],
  valueKey: string,
  labelKey: string,
  asGroup: boolean,
  groupName?: string,
  groupKey?: string,
  keyValue?: number | string
): ComboboxItemGroup<ComboboxItem> | ComboboxItem[] {
  const toItem = (row: Record<string, any>): ComboboxItem => ({
    value: String(row[valueKey]),
    label: row[labelKey],
  })

  if (asGroup) {
    const items =
      groupKey && keyValue !== undefined
        ? list.filter((row) => row[groupKey] === keyValue).map(toItem)
        : list.map(toItem)

    return { group: groupName ?? '', items }
  }

  return list.map(toItem)
}
