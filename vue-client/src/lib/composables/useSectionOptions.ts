// lib/composables/useSectionOptions.ts
import { computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { sectionList } from '../query_options/section_list'

export const useSectionOptions = () => {
  const { data: sections, isPending } = useQuery(sectionList)

  const groupedSections = computed(() =>
    (sections.value ?? []).reduce(
      (acc: any, section: any) => {
        const existing = acc.find((g: any) => g.groupLabel === section.divisionName)

        if (existing) {
          existing.items.push({ label: section.sectionName, value: section.id })
        } else {
          acc.push({
            groupLabel: section.divisionName,
            items: [{ label: section.sectionName, value: section.id }],
          })
        }

        return acc
      },
      [] as { groupLabel: string; items: { label: string; value: number }[] }[]
    )
  )

  return { groupedSections, isPending }
}
