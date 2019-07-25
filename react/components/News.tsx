import React, { useState } from 'react'

const News = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="pa8">
      <h1 className="t-heading-1 c-emphasis">ÚLTIMAS NOTÍCIAS</h1>
      <div>
        <div className="flex flex-column pv5">
          <article>
            <h4 className="t-heading-4 ttu link no-underline">
              <a href="/tetrix/examples" className="link no-underline">
                CONFIRA EXEMPLOS DE QUESTÕES DO TETRIX!
              </a>
            </h4>
            <small className="t-small">24 de julho de 2019</small>
          </article>
          <article>
            <h4
              className="t-heading-4 ttu pointer"
              onClick={() => setOpen(!open)}
            >
              TESTE DE COMUNICAÇÃO
            </h4>
            <p hidden={!open} className="w-80-l lh-copy">
              Todos os inscritos no Desafio Tetrix receberam um e-mail teste
              hoje (24/07). Caso não tenha recebido ainda, verifique sua caixa
              de spam. Caso não encontre, ocorreu um erro técnico. Para garantir
              que recebera o teste no sábado, nos envie um e-mail para{' '}
              <a href={'mailto:ola@tetrixodesafio.com'}>
                ola@tetrixodesafio.com
              </a>{' '}
              comunicando a falha técnica.
            </p>
            <small className="t-small">24 de julho de 2019</small>
          </article>
          <article>
            <h4 className="t-heading-4 ttu link no-underline">
              <a
                href="https://drive.google.com/file/d/13-H1gOh1NT1uBloyHnnTYSI6EytIlrgR/view?usp=sharing"
                className="link no-underline ttu"
              >
                Instruções finais - Primeira fase Desafio Tetrix
              </a>
            </h4>
            <small className="t-small">25 de julho de 2019</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default News
