<template>
  <div class="flex flex-col gap-5 p-5">
    <div class="text-3xl font-semibold">Divisions</div>
    <UCard>
      <div class="flex flex-row justify-between pb-3">
        <div class="flex">
          <UInput v-model="search" />
        </div>
        <div class="flex">
          <UPagination
            active-color="primary"
            active-variant="subtle"
            v-model:page="page"
            :items-per-page="limit"
            :total="data?.meta.total"
            :sibling-count="3"
          />
        </div>
      </div>

      <UTable
        :columns="columns"
        :data="data?.data"
        :loading="status === 'pending' ? true : false"
        loading-animation="elastic"
      />
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { UBadge } from '#components'
import { DivisionTableActions } from '#components'
import type { TableColumn } from '@nuxt/ui'

interface Divisions {
  meta: Meta
  data: Division[]
}

interface Division {
  id: number
  divisionName: string
  divisionCode: string
  status: string
  createdAt: Date
  updatedAt: Date
}

interface Meta {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
  firstPage: number
  firstPageUrl: string
  lastPageUrl: string
  nextPageUrl: null
  previousPageUrl: null
}

const page = ref(1)
const limit = ref(10)
const search = ref('')
const debouncedSearch = refDebounced(search, 500)

watch(debouncedSearch, () => (page.value = 1))

const { data, status, refresh } = useFetchAPI<Divisions>('/division/paginated', {
  method: 'GET',
  key: 'divisions',
  query: {
    page,
    limit,
    search: debouncedSearch
  }
})

const columns: TableColumn<Division>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'divisionName',
    header: 'Name'
  },
  {
    accessorKey: 'divisionCode',
    header: 'Code'
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const message = {
        A: 'Active' as const,
        I: 'Inactive' as const
      }[row.getValue('status') as string]

      const color = {
        A: 'success' as const,
        I: 'error' as const
      }[row.getValue('status') as string]

      return h(UBadge, { variant: 'subtle', class: 'rounded-xl', color }, () => message)
    }
  },
  {
    header: 'Actions',
    cell: ({ row }) => {
      return h(DivisionTableActions, { row: row.original, onRefetch: () => refresh() })
    }
  }
]
</script>

<style scoped></style>
