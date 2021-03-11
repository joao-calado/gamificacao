import React, { useState, useEffect } from 'react'

import Card from '../layout/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [alunos, setAlunos] = useState([{}])
    const cores = ["#35404F", "#59323C", "#5BB12F", "#260126", "#CD1719", "#354458", "#5A6A62", "#9B539C", "#8C4646", "#588C73", "#354458", "#E19D29"]

    useEffect(() => {

        let objetos = []

        function setDados(dados) {
            let obj = {}
            //criar objeto
            const vetAlunos = dados.split(",")
            vetAlunos.forEach(element => {
                obj = {}
                obj.nome = element.split(":")[0]
                obj.pontos = element.split(":")[1]
                objetos.push(obj)
            });
            //ordenar objeto de forma decrescente
            objetos.sort(function (a, b) {
                if (a.pontos > b.pontos) {
                    return -1;
                }
                if (a.pontos < b.pontos) {
                    return 1;
                }
                // a deve ser igual a b
                return 0;
            })
        }

        const getPlan = async () => {
            const etPoint = "https://spreadsheets.google.com/feeds/list/1AJt6VNVS0Qa4X3EP2KKcVJNpmrENHiYakFxx6u8bvQ8/oxlfih8/public/values?alt=json"
            const { feed } = await fetch(etPoint).then((resp) => resp.json())
            const { entry } = feed
            const ess = entry.pop()
            const { content } = ess;
            const { $t } = content

            setDados($t)
            setAlunos(objetos)

            console.log("Alunos: ", alunos)
            console.log("Objetos: ", objetos)
        }
        getPlan()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {
                alunos.map((aluno, index) =>
                    <Card cor={cores[parseInt(Math.random() * (8 - 0)) + 0]} >
                        <ul>
                            Nome: <strong>{aluno.nome} </strong>
                            Pontos: <strong>{aluno.pontos}</strong>
                        </ul>
                    </Card>
                )
            }
        </div>
    )
}