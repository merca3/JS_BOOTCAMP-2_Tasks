function isAnagram(text1, text2) {
    const text1Sorted = text1.toLowerCase().replace(/ /g, '').split('').sort().join('');
    const text2Sorted = text2.toLowerCase().replace(/ /g, '').split('').sort().join('');

    return text1Sorted == text2Sorted;
}

export default isAnagram;