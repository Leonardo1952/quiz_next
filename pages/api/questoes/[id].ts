import questoes from '../bancoDeQuestoes'

export default function handler(req, res) {
  const idSelecionado = +req.query.id

  const questoesSelecionada = questoes.filter(questao => questao.id === idSelecionado)

  if(questoesSelecionada.length === 1){
    const qselecionada = questoesSelecionada[0].embaralharRespostas()
    res.status(200).json(qselecionada.paraObjeto())
  }else {
    res.status(204).send()
  }
}
