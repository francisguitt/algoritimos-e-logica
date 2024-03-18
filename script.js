
//Cada exemplo tem seu escopo {  }


{
  //ARVORE DE NATAL
  const Tree = () => {
    let tree = "";
    for (let i = 1; i <= 10; i++) {
      const espaces = " ".repeat(10 - i);
      const stars = "*".repeat(2 * i - 1);
      tree += espaces + stars + "\n";
    }

    const trunkspaces = " ".repeat(9) + "|"
    tree += trunkspaces + "\n"
    tree += trunkspaces + "\n"
    console.log(tree)
  }
  Tree();
}



{
  //###########################################
  //ARVORE DE NATAL
  const createChristmasTree = () => {
    let tree = "";
    // Construindo a parte superior da árvore
    for (let i = 1; i <= 5; i++) {
      let spaces = "";
      for (let j = 1; j <= 5 - i; j++) {
        spaces += " ";
      }
      let stars = "";
      for (let k = 1; k <= 2 * i - 1; k++) {
        stars += "*";
      }
      tree += spaces + stars + "\n";
    }
    let trunkSpaces = "    ";
    let trunk = "|";
    tree += trunkSpaces + trunk + "\n";
    tree += trunkSpaces + trunk + "\n";
    console.log(tree);
  }
  createChristmasTree();


}


{
  //#############################################
  //GRÁFICOS
  const createBarChart = (data) => {
    let maxValue = Math.max(...data);
    for (let i = maxValue; i > 0; i--) {
      let row = "";
      for (let j = 0; j < data.length; j++) {
        if (data[j] >= i) {
          row += "* ";
        } else {
          row += "  ";
        }
      }
      console.log(row);
    }
    let xAxisLabels = "";
    for (let i = 0; i < data.length; i++) {
      xAxisLabels += (i + 1) + " ";
    }
    console.log(xAxisLabels);
  }
  const data = [3, 7, 2, 5, 8];
  createBarChart(data);
  //##################

}

{
  //Desafio de Ordenação: javascript
  const bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  // Exemplo de uso:
  const numbers = [5, 3, 8, 2, 1];
  console.log("Array antes da ordenação:", numbers);
  console.log("Array ordenado:", bubbleSort(numbers));


}

{
  //Desafio de Fatorial: javascript

  const fatorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * fatorial(n - 1);
    }
  }

  // Exemplo de uso:
  const num = 5;
  console.log(`O fatorial de ${num} é:`, fatorial(num));
}

{
  //Desafio de Palíndromo:javascript

  const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
  }

  // Exemplo de uso:
  const word = "radar";
  console.log(`A palavra "${word}" é um palíndromo?`, isPalindrome(word));
}


{
  //Desafio de Números Primos:javascript

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }

    return true;
  }

  // Exemplo de uso:
  const num = 7;
  console.log(`O número ${num} é primo?`, isPrime(num));
}


{
  //Desafio de Fibonacci:javascript

  const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  }

  // Exemplo de uso:
  const count = 10;
  console.log(`Os primeiros ${count} números da sequência de Fibonacci são:`)
}
