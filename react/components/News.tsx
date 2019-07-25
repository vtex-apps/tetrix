import React, { useState } from 'react'

const News = () => {

  const [open, setOpen] = useState(false)

  return (
    <section className="pa8">
      <h1 className="t-heading-1 c-emphasis">ÚLTIMAS NOTÍCIAS</h1>
      <div>
        <div className="flex flex-column pv5">
          <article>
            <p className="t-heading-4 ttu link no-underline">
              <a href="/tetrix/examples" className="link no-underline">
                CONFIRA EXEMPLOS DE QUESTÕES DO TETRIX!
              </a>
            </p>
            <small className="t-small">24 de julho de 2019</small>
          </article>
          <article>
            <p className="t-heading-4 ttu pointer" onClick={() => setOpen(!open)}>
              TESTE DE COMUNICAÇÃO
            </p>
            <p hidden={!open} className="w-80-l lh-copy">
              Todos os inscritos no Desafio Tetrix receberam um e-mail teste hoje (24/07).
              Caso não tenha recebido ainda, verifique sua caixa de spam. Caso não encontre, ocorreu um erro técnico.
              Para garantir que recebera o teste no sábado, nos envie um e-mail para <a href={'mailto:ola@tetrixodesafio.com'}>ola@tetrixodesafio.com</a> comunicando a falha técnica.
            </p>
            <small className="t-small">24 de julho de 2019</small>
          </article>
        </div>
      </div>
    </section>
)}

export default News
