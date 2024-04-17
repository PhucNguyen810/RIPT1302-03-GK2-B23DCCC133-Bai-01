function sum() {
    var inputA = parseFloat(document.getElementById('inputA').value);
    var inputB = parseFloat(document.getElementById('inputB').value);
    if (!isNaN(inputA) && !isNaN(inputB)) {
      document.getElementById('result').innerText = "Kết quả: " + (inputA + inputB);
    } else {
      document.getElementById('result').innerText = "Nhập đúng định dạng";
    }
  }
  
  function subtract() {
    var inputA = parseFloat(document.getElementById('inputA').value);
    var inputB = parseFloat(document.getElementById('inputB').value);
    if (!isNaN(inputA) && !isNaN(inputB)) {
      document.getElementById('result').innerText = "Kết quả: " + (inputA - inputB);
    } else {
      document.getElementById('result').innerText = "Nhập đúng định dạng";
    }
  }
  
  function multiply() {
    var inputA = parseFloat(document.getElementById('inputA').value);
    var inputB = parseFloat(document.getElementById('inputB').value);
    if (!isNaN(inputA) && !isNaN(inputB)) {
      document.getElementById('result').innerText = "Kết quả: " + (inputA * inputB);
    } else {
      document.getElementById('result').innerText = "Nhập đúng định dạng";
    }
  }
  
  function divide() {
    var inputA = parseFloat(document.getElementById('inputA').value);
    var inputB = parseFloat(document.getElementById('inputB').value);
    if (!isNaN(inputA) && !isNaN(inputB)) {
      if (inputB !== 0) {
        document.getElementById('result').innerText = "Kết quả: " + (inputA / inputB);
      } else {
        document.getElementById('result').innerText = "Không thể chia cho 0";
      }
    } else {
      document.getElementById('result').innerText = "Nhập đúng định dạng";
    }
  }
  
  function reset() {
    document.getElementById('inputA').value = "";
    document.getElementById('inputB').value = "";
    document.getElementById('result').innerText = "";
  }
  