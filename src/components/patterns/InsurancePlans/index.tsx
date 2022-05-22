import Button from "../../Button";
import styles from "./InsurancePlans.module.scss";

interface Props {
  home?: boolean,
}

export default function InsurancePlans({ home }: Props) {
  return (
    <div
      className={`
        ${styles.insuranceContainer} 
        ${!home && styles.insuranceInternalPage}
    `} >
      {home && <h2>seguros<span>.</span></h2>}
      <div className={styles.insuranceItem}>
        <h3 className={styles.silverPlanTitle}>PRATA</h3>
        <span>R$ 199 <span>mensal</span></span>
        <ul>
          <li>Duas trocas por ano</li>
          <li>Assistência técnica</li>
          <li>Suporte 08h às 18h</li>
          <li>Cobertura estadual</li>
        </ul>
        <Button secondary href="/orcamento">Inscreva-se</Button>
      </div>

      <div className={styles.insuranceItem}>
        <h3 className={styles.goldPlanTitle}>OURO</h3>
        <span>R$ 299 <span>mensal</span></span>
        <ul>
          <li>Cinco trocas por ano</li>
          <li>Assistência especial</li>
          <li>Suporte 24h</li>
          <li>Cobertura nacional</li>
          <li>Desconto em parceiros</li>
          <li>Acesso ao Clube Bikcraft</li>
        </ul>
        <Button href="/orcamento">Inscreva-se</Button>
      </div>
    </div>
  );
}