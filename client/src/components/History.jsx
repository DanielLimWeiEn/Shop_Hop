import styled from "styled-components"

const Container = styled.div`
   width: 85vw;
   height: 100vh;
   display:flex;
   flex-direction: column;
`

const Top = styled.div`
  display: flex;
  justify-content:center;
  align-items center;
  gap: 50px;
  height: 450px;
  width: 100%;
`

const Bottom = styled.div`
 display: flex;
  justify-content:center;
  align-items center;
`

const Summary = styled.div`
   height: 400px;
   width: 700px;
   border: 1px solid;
`
const Image = styled.img`
   width : 400px;
   height: 350px
`

const Spending = styled.div`
    height: 400px;
    width: 500px;
    border: 1px solid;
`

const ItemList = styled.div`
   height: 350px;
   width: 1250px;
   border: 1px solid;
`

const ItemHeading = styled.div`
    font-size: 25px;
    color: white;
    padding-left: 20px;
    padding-top: 5px;
    background-color: purple;
    height: 40px;
`

const History = () => {
  return (
      <Container>
          <Top>
              <Summary>
                  Graph
                  <Image src = "https://www.conceptdraw.com/solution-park/resource/images/solutions/bar-graphs/Graphs-and-Charts-Bar-Charts-Percentage-with-Various-Levels-of-Family-Income.png"/>
              </Summary>
              <Spending>
                 Your spending total is a morbillion dollars
              </Spending>
          </Top>
          <Bottom>
              <ItemList>
                  <ItemHeading>Items Purchased</ItemHeading>
              </ItemList>
          </Bottom>
      </Container>
  )
}

export default History
