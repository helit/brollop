export type TabValue = {
  label: string
  labelEn: string
  value: string
  index: number
}

export const tabs: TabValue[] = [
  {
    label: 'Start',
    labelEn: 'Start',
    value: 'start',
    index: 0,
  },
  {
    label: 'Festanmälan',
    labelEn: 'Party registration',
    value: 'anmalan',
    index: 1
  },
]
