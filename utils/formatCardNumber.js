export default function formatCardNumber(number) {
    if (number === 11) return 'J';
    if (number === 12) return 'Q';
    if (number === 13) return 'K';
    if (number === 14) return 'A';
    return number;
}
