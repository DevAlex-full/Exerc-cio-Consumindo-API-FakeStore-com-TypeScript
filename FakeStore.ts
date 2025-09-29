// Definição do tipo Rating
type Rating = {
  rate: number;
  count: number;
};

// Definição do tipo Produto
type Produto = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

// Função assíncrona para buscar produtos da API
async function buscarProdutos(): Promise<Produto[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    
    const produtos: Produto[] = await response.json();
    return produtos;
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    throw erro;
  }
}

// Função principal para executar o programa
async function main() {
  try {
    console.log('Buscando produtos da FakeStore API...\n');
    
    const produtos = await buscarProdutos();
    
    console.log(`Total de produtos encontrados: ${produtos.length}\n`);
    console.log('='.repeat(50));
    
    // Exibindo título e preço de cada produto
    produtos.forEach((produto, index) => {
      console.log(`\n${index + 1}. ${produto.title}`);
      console.log(`   Preço: $${produto.price.toFixed(2)}`);
      console.log(`   Categoria: ${produto.category}`);
      console.log(`   Avaliação: ${produto.rating.rate} (${produto.rating.count} avaliações)`);
    });
    
    console.log('\n' + '='.repeat(50));
    
  } catch (erro) {
    console.error('Falha ao executar o programa:', erro);
  }
}

// Executar o programa
main();