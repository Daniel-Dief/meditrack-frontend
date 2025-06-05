export default function uuid(tamanho = 16) {
    let result = '';
    const chars = 'abcdef0123456789';
    for (let i = 0; i < tamanho; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}