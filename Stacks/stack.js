export class StackUsingObject {
  constructor() {
    this._count = 0; // Inicializa o contador de elementos no stack
    this._items = {}; // Inicializa o objeto que armazenará os elementos do stack
  }

  // Método para adicionar um elemento ao stack
  push(element) {
    this._items[this._count] = element; // Adiciona o elemento na posição indicada pelo contador
    this._count++; // Incrementa o contador
  }

  // Método para obter o tamanho do stack
  size() {
    return this._count; // Retorna a quantidade de elementos no stack
  }

  // Método para verificar se o stack está vazio
  isEmpty() {
    return this._count === 0; // Retorna true se o stack estiver vazio, caso contrário, false
  }

  // Método para remover o elemento do topo do stack
  pop() {
    if (this.isEmpty()) return undefined; // Se o stack estiver vazio, retorna undefined

    this._count--; // Decrementa o contador
    const result = this._items[this._count]; // Obtém o elemento do topo do stack
    delete this._items[this._count]; // Remove o elemento do stack
    return result; // Retorna o elemento removido
  }

  // Método para obter o elemento do topo do stack sem removê-lo
  peek() {
    if (this.isEmpty()) return undefined; // Se o stack estiver vazio, retorna undefined

    return this._items[this._count - 1]; // Retorna o elemento do topo do stack
  }

  // Método para limpar todos os elementos do stack
  clear() {
    while (!this.isEmpty()) {
      // Enquanto o stack não estiver vazio
      this.pop(); // Remove o elemento do topo do stack
    }
  }

  // Método para converter o stack em uma string
  toString() {
    if (this.isEmpty()) return ''; // Se o stack estiver vazio, retorna uma string vazia

    let objString = `${this._items[0]}`; // Inicia a string com o primeiro elemento

    for (let i = 1; i < this._count; i++) {
      // Percorre os demais elementos
      objString = `${objString}, ${this._items[i]}`; // Adiciona cada elemento à string separando por vírgula
    }

    return objString; // Retorna a string representando o stack
  }
}
