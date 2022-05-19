import { DocumentTitle } from "../components/DocumentTitle"

import Footer from "../components/patterns/Footer"
import Header from "../components/patterns/Header"
import HeaderTitle from "../components/patterns/HeaderTitle";

import styles from "../styles/Terms.module.scss";

export default function Terms() {
  return (
    <>
      <DocumentTitle
        title="Termos e Condições | Bikcraft"
        description="Termos e Condições"
      />
      <Header />

      <main>
        <HeaderTitle
          subtitle="Termos de uso"
          title="termos e condições"
        />
      </main>

      <Footer />
    </>
  )
}