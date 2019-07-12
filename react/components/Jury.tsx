import React from 'react'

import Geraldo from '../images/Geraldo.png'
import Mariano from '../images/Mariano.png'
import Raissa from '../images/Raissa.png'
import Alfredo from '../images/Alfredo.png'
import RafaForte from '../images/RafaForte.png'

const Jury = () => (
  <section className="pa8">
    <h1 className="t-heading-1 c-emphasis">CONHEÇA O JÚRI</h1>
    <div>
      <div className="flex justify-between">
        <img src={Geraldo} />
        <img src={Mariano} />
        <div className="w-60">
          <h2 className="t-heading-2">
            GERALDO THOMAZ<br />
            E MARIANO GOMIDE
          </h2>
          <div>
            Fundadores e atuais CEO's da VTEX, a organizadora do Desafio Tetrix.
            Formados em Engenharia pela UFRJ, são apaixonados pelo Rio e pelo Brasil.
            Acreditam fortemente que a educação é o caminho para que o Brasil posssa competir de igual para igual em tecnologia e negócios com outros países.
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <img src={Raissa} />
        <div className="w-60">
          <h2 className="t-heading-2">
            RAISSA ROTOLO
          </h2>
          <div>
            Formada em Engenharia de Produção e com MBA em Gestão de Marketing pela UFRJ,
            é encantada pela perspectiva de impacto que a tecnologia pode trazer à
            sociedade. Hoje é diretora de vendas de uma das mais novas soluções da VTEX, o Omnichannel
            - que possibilita a experiência de compra centrada no consumidor e unificada entre o mundo físico e digital.
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <img src={Alfredo} />
        <div className="w-60">
          <h2 className="t-heading-2">
            ALFREDO SOARES
          </h2>
          <div>
            Fundador da Xtech commerce e sócio da VTEX Commerce.
            Também é escritor do livro Bora Vender. Acredita que saber vender é uma das habilidades
            mais importantes para a vida profissional.
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <img src={RafaForte} className="w-33" />
        <div className="w-60">
          <h2 className="t-heading-2">
            RAFAEL FORTE
          </h2>
          <div>
            Formado em Direito e com MBA pela FGV, é country manager da VTEX no Brasil,
            liderando mais de 300 pessoas. Anteriormente à carreira da VTEX, fundou a
            empresa de tecnologia WX7 e lecionou na IBMEC.
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Jury
