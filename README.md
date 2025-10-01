# 🛒 Consumo API FakeStore com TypeScript

Exercício prático de consumo de API externa utilizando **TypeScript**, **Fetch API** e **async/await**. O projeto demonstra como tipar corretamente dados retornados de uma API REST e exibir informações de produtos no console.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para praticar:

- Consumo de APIs externas com `fetch`
- Tipagem estática com TypeScript
- Programação assíncrona com `async/await`
- Tratamento de erros em requisições HTTP
- Manipulação de dados JSON tipados

## 🚀 Tecnologias Utilizadas

- **TypeScript** - Linguagem principal
- **Fetch API** - Para requisições HTTP
- **FakeStore API** - API pública de produtos

## 📦 Estrutura do Código

### Tipos Definidos

```typescript
type Rating = {
  rate: number;
  count: number;
};

type Produto = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
```

### Função Principal

A função `buscarProdutos()` retorna uma `Promise<Produto[]>` e realiza:

- Requisição GET para a API FakeStore
- Validação do status da resposta
- Conversão dos dados para JSON tipado
- Tratamento de erros

## 🔧 Como Executar

### Pré-requisitos

- Node.js instalado (v14 ou superior)
- TypeScript instalado globalmente ou localmente

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/DevAlex-full/fakestore-api-typescript.git
cd fakestore-api-typescript
```

2. Instale o TypeScript (se necessário):
```bash
npm install -g typescript
```

### Execução

#### Opção 1: Compilar e executar

```bash
tsc index.ts
node index.js
```

#### Opção 2: Usar ts-node (recomendado)

```bash
npm install -g ts-node
ts-node index.ts
```

## 📊 Saída Esperada

```
Buscando produtos da FakeStore API...

Total de produtos encontrados: 20

==================================================

1. Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
   Preço: $109.95
   Categoria: men's clothing
   Avaliação: 3.9 (120 avaliações)

2. Mens Casual Premium Slim Fit T-Shirts
   Preço: $22.30
   Categoria: men's clothing
   Avaliação: 4.1 (259 avaliações)

...

==================================================
```

## 🎯 Objetivos Alcançados

- ✅ Criação de tipos personalizados para os dados da API
- ✅ Implementação de função assíncrona com tipagem correta
- ✅ Tratamento adequado de erros
- ✅ Exibição formatada de informações no console
- ✅ Código limpo e bem estruturado

## 📚 Aprendizados

Este exercício reforça conceitos importantes:

1. **Tipagem Forte**: Uso de `type` para garantir segurança de tipos
2. **Promises**: Entendimento de operações assíncronas
3. **API REST**: Consumo de endpoints externos
4. **Error Handling**: Tratamento robusto de exceções
5. **TypeScript Avançado**: Tipagem de retornos de funções assíncronas

## 🔗 Recursos

- [FakeStore API Documentation](https://fakestoreapi.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## 👨‍💻 Autor

**DevAlex**

- GitHub: [@DevAlex-full](https://github.com/DevAlex-full)

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
