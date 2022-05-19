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

        <div className={styles.termsContainer}>
          <h2>1. Política de Estorno</h2>
          <p>1.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.</p>
          <p>1.2 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.</p>
          <p>1.3 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.</p>
          <h2>2. Conta do Usuário</h2>
          <p>2.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.</p>
          <h2>3. Seguro Bikcraft</h2>
          <p>3.1 Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e Boleto.</p>
        </div>
      </main>

      <Footer />
    </>
  )
}