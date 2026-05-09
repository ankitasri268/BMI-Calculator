function calculateMetricBMI() {
    const weightInput = document.getElementById("metricWeight");
    const heightInput = document.getElementById("metricHeight");
    const result = document.getElementById("metricBMI")
    const weight = parseFloat(weightInput.value)
    const height = parseFloat(heightInput.value)
    if(!weight || !height) {
        result.textContent = "Please Enter a Valid Weight and Height"
        return;
    }
     const newHeight = height/100
     const bmi = weight/(newHeight**2)
     result.value = bmi.toFixed(2)
}
function calculateUSBMI() {
    const weightInput = document.getElementById("USWeight");
    const heightInput = document.getElementById("USHeight");
    const result = document.getElementById("USBMI")
    const weight = parseFloat(weightInput.value)
    const height = parseFloat(heightInput.value)
    if(!weight || !height) {
        result.textContent = "Please Enter a Valid Weight and Height"
        return;
    }
     const bmi = (weight/(height**2))*703
     result.value = bmi.toFixed(2)
}