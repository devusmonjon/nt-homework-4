// masala 1
const kvadratTomoni = +prompt("Kvadratning tomonini kiriting");

function kvadratPerimetri(tomon) {
    return `kvadrat perimetri: ${tomon * 4}`;
}

console.log(kvadratPerimetri(kvadratTomoni));

// masala 2
function kvadratYuzasi(tomon) {
    return `kvadrat yuzasi ${tomon * tomon}`;
}

console.log(kvadratYuzasi(kvadratTomoni));
// masala 3
const tortburchakA = +prompt("a tomonini kiriting");
const tortburchakB = +prompt("b tomonini kiriting");

function tortburchakYuzasiVaPerimetri(a, b) {
    return `Yuzasi: ${a * b} \nPerimetri: ${2 * (a + b)}`;
}

console.log(tortburchakYuzasiVaPerimetri(tortburchakA, tortburchakB));
// masala 4
const diametr = +prompt("Diametrni kiriting");

function diametrYuzasi(diametr) {
    return `Diametr yuzasi: ${diametr * 3.14}`;
}

console.log(diametrYuzasi(diametr));
// masala 5
const kubA = +prompt("Kubning A tomonini kiriting");

function kubHajmiVaSirtimi(a) {
    return `Hajmi: ${a * a * a} \nSirti: ${6 * (a * a)}`;
}

console.log(kubHajmiVaSirtimi(kubA));
// masala 6
const parallA = +prompt("Parallelepepidning A tomonini kiriting");
const parallB = +prompt("Parallelepepidning B tomonini kiriting");
const parallC = +prompt("Parallelepepidning C tomonini kiriting");

function parallHajmiVaSirti(a, b, c) {
    return `Hajmi: ${a * b * c} \nSirti: ${2 * (a * b + b * c + a * c)}`;
}

console.log(parallHajmiVaSirti(parallA, parallB, parallC));
// masala 7
const radius = +prompt("Radiusni kiriting");

function yuzi(radius) {
    return `Yuzi: ${3.14 * radius * radius}`;
}

console.log(yuzi(radius));

// masala 8
const sonA = +prompt("A sonini kiriting");
const sonB = +prompt("B sonini kiriting");

function ortaArifmetik(a, b) {
    return `${a} va ${b} ning arifmetik orta: ${(a + b) / 2}`;
}

console.log(ortaArifmetik(sonA, sonB));

// masala 9
// ikkita manfiy bo'lmagan son a va b berilgan. Ularning o'rta geometrigi aniqlansin
const mSonA = +prompt("A sonini kiriting");
const mSonB = +prompt("B sonini kiriting");

function otaGeometrik(a, b) {
    return `O'rta geometrik: ${Math.sqrt(a * b)}`;
}

console.log(otaGeometrik(mSonA, mSonB));

// masala 10
// nolga teng bo'lagan ikkita son berilgan. Ularning yi'gindisini, ko'paytmasini va har birining kvadrati aniqlansin
const nolA = +prompt("A sonini kiriting");
const nolB = +prompt("B sonini kiriting");

function kvadrat(a, b) {
    return `Yigindisi: ${a + b} \nKo'paytmasi: ${a * b} \nA ining kvadrati: ${
        a * a
    }\nB ining kvadrati: ${b * b}`;
}
