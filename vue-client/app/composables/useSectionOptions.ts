interface Section {
  id: number
  sectionName: string
  sectionCode: string
  divisionId: number
  status: 'A' | 'I'
  createdAt: string
  updatedAt: string
  divisionName: string
}

interface Sections {
  data: Section[]
}

export const useSectionOptions = () => {
  const { data: sections, pending } = useFetchAPI<Sections>('/auth/sections', {
    key: 'sections_options'
  })

  const list = computed(() => {
    return sections.value?.data.map((row) => {
      return {
        label: row.sectionName,
        value: row.id
      }
    })
  })

  return { list, pending }
}
