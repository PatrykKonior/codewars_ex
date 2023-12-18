function hello(name) {
    if (name === '' || typeof name === 'undefined') return "Hello, World!"
    let result = name[0].toUpperCase() + name.substring(1).toLowerCase()
    return `Hello, ${result}!`
    }