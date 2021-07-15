import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
//`

const Box = styled.div`
  background: #fff;
  border-radius: 8px;
`

export default function Home() {
  return (
  <main>
    <Box>
      Profile
    </Box>
    <Box>
      Timeline
    </Box>
    <Box>
      Comunity
    </Box>
  </main>
    )
}
