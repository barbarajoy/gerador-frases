import { useState } from 'react'
import './App.css'

function App() {
  const [textoFrase, setTextoFrase] = useState("Siga os bons")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda com eles.',
        'Só existe um êxito: a capacidade de levar a vida que se quer.',
        'A coragem não é ausência do medo; é a persistência apesar do medo.',
        'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
        'O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos!',
        'Escreva em seu coração: todo dia é o melhor dia do ano.',
        'Você cria a sua própria vida, um dia de cada vez! Tenha um dia iluminado e cheio de motivação!',
        'Um novo dia é um novo milagra! Agradeça sempre!'
      ]
    },
    {
      id: 3,
      nome: "Filosofia",
      frases: [
        'Só sei que nada sei.',
        'Conhece-te a ti mesmo e conhecerás o universo e os deuses.',
        'Não fales bem de ti aos outros, pois não os convencerás. Não fales mal, pois te julgarão muito pior do que és.',
        'Nada é suficiente para quem considera pouco o suficiente.'
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAletorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${(allFrases[categoriaSelecionada].frases[numeroAletorio])}"`);

  }

  return (
   <div className="container">
    <img
      className='logo'
      src="https://cdn.pixabay.com/photo/2022/05/29/05/23/quotation-mark-7228450_1280.png"
      alt="Logo frases"
    />

    <h2 className="title">Categorias</h2>
    <section className='category-area'>
      {allFrases.map( (item, index) => (
        <button
          key={item.id}
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#dd7b22"
          }}
          onClick={ () => handleSwitchCategory(index)}
          className='category-button'>
            {item.nome}
        </button>
      )  )}
    </section>

    <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>
    {textoFrase !== "" && <p className="texto-frase">{textoFrase}</p>}

   </div>
  )

}

export default App
