function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatNama(user)}!</h1>;
    }
    return <h1>Shalom, stranger.</h1>;
    
}