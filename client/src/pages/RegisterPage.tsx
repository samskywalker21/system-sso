import { useSuspenseQuery } from '@tanstack/react-query'
import { sectionsList } from '#/lib/queryOptions'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectSeparator,
} from '@/components/ui/select'

interface SectionListData {
  id: number
  sectionName: string
  sectionCode: string
  divisionId: number
  status: string
  createdAt: string
  updatedAt: string
  divisionName: string
  divisionCode: string
}

const RegisterPage = () => {
  const { data } = useSuspenseQuery(sectionsList)

  const ord = data.data.data.filter((row: SectionListData) => {
    return row.divisionId == 1
  })

  const msd = data.data.data.filter((row: SectionListData) => {
    return row.divisionId == 2
  })

  const lhsd = data.data.data.filter((row: SectionListData) => {
    return row.divisionId == 3
  })

  const rled = data.data.data.filter((row: SectionListData) => {
    return row.divisionId == 4
  })

  const pcdoho = data.data.data.filter((row: SectionListData) => {
    return row.divisionId == 5
  })

  const others = data.data.data.filter((row: SectionListData) => {
    return row.divisionId == 6
  })

  return (
    <div>
      <Select>
        <SelectTrigger className='w-60'>
          <SelectValue placeholder='Please select a section' />
        </SelectTrigger>
        <SelectContent position='popper'>
          <SelectGroup>
            <SelectLabel>Office of the Regional/Assistant Regional Director</SelectLabel>
            {ord.map((row: SectionListData) => {
              return <SelectItem value={`${row.id}`}>{row.sectionName}</SelectItem>
            })}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Management Support Division</SelectLabel>
            {msd.map((row: SectionListData) => {
              return <SelectItem value={`${row.id}`}>{row.sectionName}</SelectItem>
            })}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Local Health Support Division</SelectLabel>
            {lhsd.map((row: SectionListData) => {
              return <SelectItem value={`${row.id}`}>{row.sectionName}</SelectItem>
            })}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Regulations, Licensing, and Enforcement Division</SelectLabel>
            {rled.map((row: SectionListData) => {
              return <SelectItem value={`${row.id}`}>{row.sectionName}</SelectItem>
            })}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>PDOHO/CDOHO</SelectLabel>
            {pcdoho.map((row: SectionListData) => {
              return <SelectItem value={`${row.id}`}>{row.sectionName}</SelectItem>
            })}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Others</SelectLabel>
            {others.map((row: SectionListData) => {
              return <SelectItem value={`${row.id}`}>{row.sectionName}</SelectItem>
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default RegisterPage
