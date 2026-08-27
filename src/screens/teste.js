
import { Text, View } from 'react-native';

//funçoes
function gerarBoasVindas(nome) { 
  return "Bem-vindo, " + nome; 
}
//Arrow functions
const somar = (a, b) => {
  return a + b;
};

//Objetos
const aluno = { 
  nome: "João", 
  idade: 16, 
  curso: "React Native", 
  turma: "Turma 1" 
};

//Arrays
const tecnologias = [
  "JavaScript", "React Native", "Expo"
];

//Array de Objetos
const modulos = [
  {
    id: 1,
    nome: "JavaScript",
    dificuldade: "Fácil",
    concluido: true
  },
  {
    id: 2,
    nome: "React Native",
    dificuldade: "Médio",
    concluido: false
  },
  {
    id: 3,
    nome: "Componentes",
    dificuldade: "Médio",
    concluido: false
  }
];

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Lucas", nota: 5 },
  { nome: "Mariana", nota: 9 },
  { nome: "Pedro", nota: 4 }
];

//map
const resultado = alunos.map((aluno) => {
  return aluno.nome;
});

//filter
const alunosAprovados = alunos.filter((aluno) => {
  return aluno.nota >= 6;
});

//find
const produtos = [
  { id: 1, nome: "Mouse", preco: 35 },
  { id: 2, nome: "Teclado", preco: 80 },
  { id: 3, nome: "Monitor", preco: 650 }
];

const produtoEncontrado = produtos.find((produto) => {
  return produto.id === 2;
});

//Template string
const nome = "Isa";
const curso = "React Native";

const mensagem = `Olá, ${nome}! Bem-vindo ao curso de ${curso}.`;

export default function RevisaoJavaScriptScreen() {
  return (
    <View>
      <View>
        <Text>Funções</Text>
        <Text>{gerarBoasVindas("Isa")}</Text>
      </View>
      <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
      <View>
        <Text>Arrow functions</Text>
        <Text>{somar(2,4)}</Text>
      </View>
      <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
      <View>
        <Text>Objetos</Text>
        <Text>{aluno.nome}</Text>
      </View>
      <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text><View>
        <Text>Arrays</Text>
        <Text>{tecnologias[2]}</Text>
      </View>
      <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text><View>
        <Text>Array de objetos</Text>
        <Text>{modulos[0].nome} - {modulos[0].dificuldade}</Text>
        <Text>{modulos[1].nome}</Text>
        <Text>{modulos[2].nome}</Text>
      </View>
      <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text><View>
        <Text>Map</Text>
        <Text>{resultado}</Text>
      </View>
      <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
      <View>
        <Text>Filter</Text>
        <Text>{alunosAprovados.map((aluno) => (
          <Text>
            {aluno.nome} foi aprovado com nota {aluno.nota} - 
          </Text>
        ))}</Text>
      </View>
      <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
      <View>
        <Text>Find</Text>
        <Text>Id: {produtoEncontrado.id}</Text>
        <Text>Produto encontrado: {produtoEncontrado.nome}</Text>
        <Text>Preço: R$ {produtoEncontrado.preco}</Text>
      </View>
      <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
      <View>
        <Text>Template strings</Text>
        <Text>{mensagem}</Text>
      </View>
      <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
    </View>
  );
}