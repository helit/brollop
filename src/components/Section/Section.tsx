import styled from '@emotion/styled'
import { Card, Typography } from '@mui/material'
import { ReactNode } from 'react'

const SectionWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: rgba(246, 238, 227, 0.9);
  color: #242424;
  padding: 20px;
`

interface SectionProps {
  children: ReactNode
  title?: string
  sectionId?: string
}

export const Section = ({ children, title, sectionId }: SectionProps) => {
  return (
    <section id={sectionId}>
      <SectionWrapper>
        <Typography variant="h3" fontFamily={'Charm'}>
          {title}
        </Typography>
        {children}
      </SectionWrapper>
    </section>
  )
}
