import { KeyboardEvent, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from "react-hook-form";

import { DocumentTitle } from "../components/DocumentTitle"
import Header from "../components/patterns/Header"
import HeaderTitle from "../components/patterns/HeaderTitle";
import Footer from "../components/patterns/Footer"
import ModalAlert from '../components/ModalAlert';

import styles from "../styles/Contact.module.scss";
import form from "../styles/Form.module.scss";
import button from "../styles/components/Button.module.scss";
import { api } from '../services/api';

type Inputs = {
  name: string,
  areaCode: string,
  phone: string,
  email: string,
  message: string,
};

const contactFormSchema = yup.object().shape({
  message: yup.string()
    .required('Mensagem é obrigatória'),
  email: yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  phone: yup.string()
    .required('Telefone é obrigatório')
    .length(9, 'Telefone deve ter 9 dígitos'),
  areaCode: yup.string()
    .required('DDD é obrigatório'),
  name: yup.string()
    .required('Nome é obrigatório')
});

export default function Contact() {
  const [modalAlertIsOpen, setModalAlertIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(contactFormSchema)
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    sendContactData(data);
  }

  function toggleOpenCloseModal() {
    setModalAlertIsOpen(!modalAlertIsOpen);
  }

  async function sendContactData({ areaCode, email, message, name, phone }: Inputs) {
    setIsLoading(true);
    await api.post('/contact', {
      areaCode, email, message, name, phone
    })
      .then(function (response) {
        setModalMessage('Mensagem enviada com sucesso!');
        setIsLoading(false);
        toggleOpenCloseModal();
        reset();
      })
      .catch(function (error) {
        setModalMessage('Erro ao enviar a mensagem! Tente novamente');
        setIsLoading(false);
        toggleOpenCloseModal();
      });
  }

  function onlyNumbers(event: KeyboardEvent) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  return (
    <>
      <DocumentTitle
        title="Contato | Bikcraft"
        description="Contato"
      />
      <Header />

      <ModalAlert
        isOpen={modalAlertIsOpen}
        onRequestClose={toggleOpenCloseModal}
        modalText={modalMessage}
      />

      <main>
        <div className={styles.contactBg}>
          <HeaderTitle
            subtitle="Respostas em até 24h"
            title="nosso contato"
          />
          <div className={styles.contactContainer}>
            <section className={styles.contactData} aria-label="Endereço">
              <h2>Loja Online</h2>
              <div className={styles.contactAddress}>
                <p>Aquela Rua, 42 - Guará II</p>
                <p>Brasília - DF</p>
                <p>Brasil - Terra - Vita Láctea</p>
              </div>
              <address className={styles.contactMeans}>
                <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
                <a href="mailto:assistencia@bikcraft.com">assistencia@bikcraft.com</a>
                <a href="tel:+556199999999">+55 61 9999-9999</a>
              </address>
              <div className={styles.contactSocial}>
                <a href="./">
                  <img src="/img/redes/instagram-p.svg" width="32" height="32" alt="Instagram" />
                </a>
                <a href="./">
                  <img src="/img/redes/facebook-p.svg" width="32" height="32" alt="Facebook" />
                </a>
                <a href="./">
                  <img src="/img/redes/youtube-p.svg" width="32" height="32" alt="Youtube" />
                </a>
              </div>
            </section>
            <section className={styles.contactForm} aria-label="Formulário">
              <form
                id="contactForm"
                className={form.form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    {...register("name")}
                  />
                  <span className={form.error}>{errors.name?.message}</span>
                </div>
                <div className={styles.formPhone}>
                  <div>
                    <label htmlFor="phone">DDD</label>
                    <input
                      type="text"
                      id="areaCode"
                      name="areaCode"
                      placeholder="61"
                      maxLength={2}
                      onKeyPress={onlyNumbers}
                      {...register("areaCode")}
                    />
                    <span className={form.error}>{errors.areaCode?.message}</span>
                  </div>
                  <div>
                    <label htmlFor="phone">Telefone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="99999-9999"
                      maxLength={9}
                      onKeyPress={onlyNumbers}
                      {...register("phone")}
                    />
                    <span className={form.error}>{errors.phone?.message}</span>
                  </div>
                </div>
                <div className={form.col2}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="contato@email.com"
                    {...register("email")}
                  />
                  <span className={form.error}>{errors.email?.message}</span>
                </div>
                <div className={form.col2}>
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="O que você precisa?"
                    {...register("message")}
                  />
                  <span className={form.error}>{errors.message?.message}</span>
                </div>
                <button
                  className={button.buttonContainer}
                  type='submit'
                  disabled={isLoading}
                >Enviar Mensagem</button>
              </form>
            </section>
          </div>
        </div>
      </main>

      <article className={styles.storesBg}>
        <div className={styles.storesContainer}>
          <h2>lojas locais<span>.</span></h2>

          <div className={styles.storesItem}>
            <img src="/img/lojas/df.jpg" width="560" height="260" alt="mapa marcando o endereço em Aquela Rua, 42 - Guará II - Brasília - DF" />
            <div className={styles.storesContent}>
              <h3>Brasília</h3>
              <div className={styles.storesData}>
                <p>Aquela Rua, 42 - Guará II</p>
                <p>Brasília - DF</p>
              </div>
              <div className={styles.storesData}>
                <a href="mailto:df@bikcraft.com">df@bikcraft.com</a>
                <a href="tel:+556199999999">+55 61 9999-9999</a>
              </div>
              <p className={styles.storesTime}><img src="/img/icones/horario.svg" width="20" height="20" alt="" />08-18h de seg à dom</p>
            </div>
          </div>

          <div className={styles.storesItem}>
            <img src="/img/lojas/rj.jpg" width="560" height="260" alt="mapa marcando o endereço em Rua Ali Perto, 25 - Rio de Janeiro - RJ" />
            <div className={styles.storesContent}>
              <h3>Rio de Janeiro</h3>
              <div className={styles.storesData}>
                <p>Rua Ali Perto, 25</p>
                <p>Rio de Janeiro - RJ</p>
              </div>
              <div className={styles.storesData}>
                <a href="mailto:rj@bikcraft.com">rj@bikcraft.com</a>
                <a href="tel:+552199999999">+55 21 9999-9999</a>
              </div>
              <p className={styles.storesTime}><img src="/img/icones/horario.svg" width="20" height="20" alt="" />08-18h de seg à dom</p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}