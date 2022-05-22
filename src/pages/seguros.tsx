import { DocumentTitle } from "../components/DocumentTitle"

import Footer from "../components/patterns/Footer"
import Header from "../components/patterns/Header"
import HeaderTitle from "../components/patterns/HeaderTitle";
import InsurancePlans from "../components/patterns/InsurancePlans";

import styles from "../styles/Insurance.module.scss";

export default function Insurance() {
  return (
    <>
      <DocumentTitle
        title="Seguros | Bikcraft"
        description="Seguros"
      />
      <Header />

      <main className={styles.insuranceBg}>
        <HeaderTitle
          subtitle="Escolha o seguro"
          title="você seguro"
        />

        <InsurancePlans />
      </main>

      <Footer />
    </>
  )
}