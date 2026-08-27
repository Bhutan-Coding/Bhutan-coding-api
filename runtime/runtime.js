// runtime_vm.js
const vm = require('vm');

const codeString = `
    const result = x * y;
    console.log("Hello from inside the runtime environment!");
    result; // The last statement acts as the return value
`

const contextObject = {
    x: 10,
    y: 5,
    console: console // 
};

const context = vm.createContext(contextObject);

try {

    const script = new vm.Script(codeString);
    const executionResult = script.runInContext(context);
    
    console.log(`Execution Output: ${executionResult}`); // Outputs: 50
} catch (error) {
    console.error("Runtime Compilation/Execution Error:", error.message);
}
