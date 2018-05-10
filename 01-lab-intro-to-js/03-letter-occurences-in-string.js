function letterOccurrencesInString(string, letter) {
    let occurrences = 0;
    for (let char of string) {
        if (char === letter) {
            occurrences++;
        }
    }

    return occurrences;
}