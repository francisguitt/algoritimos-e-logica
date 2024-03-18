




{

  const btnShow = document.getElementById("btn-show");
  btnShow.addEventListener("click", () => {
    Tree();
    createChristmasTree();

  })

  //######################################################
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


