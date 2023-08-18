function calculateTriangleArea() {
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    const heightField = document.getElementById("triangle-height");
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;

    const triangleArea = document.getElementById("triangle-area");
    triangleArea.textContent = area;
}
 
function calculateRectangleArea() {
    const widthField = document.getElementById("rectangle-width");
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const  lengthField = document.getElementById("rectangle-length");
    const  lengthText =  lengthField.value;
    const length = parseFloat(lengthText);

    const rectangleArea = width * length;
    const totalRectangleArea = document.getElementById("rectangle-area");
    totalRectangleArea.textContent = rectangleArea;
}