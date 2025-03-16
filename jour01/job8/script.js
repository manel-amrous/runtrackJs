// Fonction pour vérifier si un nombre est premier
function estPremier(n) {
    if (n < 2) return false; // Un nombre inférieur à 2 n'est pas premier
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Si divisible par un autre nombre que 1 et lui-même, pas premier
        }
    }
    return true;
}

// Fonction pour additionner deux nombres s'ils sont premiers
function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// 📌 TESTS
console.log(sommeNombresPremiers(3, 5));  // ✅ 8 (3 et 5 sont premiers)
console.log(sommeNombresPremiers(7, 11)); // ✅ 18 (7 et 11 sont premiers)
console.log(sommeNombresPremiers(4, 9));  // ❌ false (4 et 9 ne sont pas premiers)
console.log(sommeNombresPremiers(2, 13)); // ✅ 15 (2 et 13 sont premiers)
console.log(sommeNombresPremiers(1, 5));  // ❌ false (1 n'est pas premier)
