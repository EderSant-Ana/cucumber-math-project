module.exports = {
  default: {
    // Look for feature files
    paths: ['features/*.feature'],
    
    // Load step definitions written in TypeScript
    require: ['step-definitions/*.ts'], 
    
    // Use the custom World class defined in src/World.ts
    worldParameters: {
      // You can pass configuration here if needed, but for now it's empty
    },

    // Format the output
    format: [
      'summary', 
      'progress-bar'
    ]
  }
}