import { PageTitle } from "../components/PageTitle"
import Footer from "../components/patterns/Footer"
import Header from "../components/patterns/Header"

function HomePage() {
  return (
    <>
      <PageTitle
        title="Bikcraft - Bicicletas Elétricas"
        description="Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft."
      />
      <Header />
      <Footer />
    </>
  )
}

export default HomePage