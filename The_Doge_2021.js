// Link: https://app.codility.com/programmers/challenges/doge2021/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function isPeopleUnknown(A, B) {
  return true;
}

function isAllAnimalIsCorrectToy(P, T) {
  for (let i = 0; i < P.length; i++) {
    if (P[i] !== T[i]) return false;
  }

  return true;
}

/**
 *
 * []P -> dog/cat
 * []T -> dog-toy/cat-toy
 * []A -> people
 * []B -> people
 *
 * A[k] knows B[k]
 */

function solution(P, T, A, B) {
  if (!isPeopleUnknown(A, B)) return false;

  let allAnimalIsCorrectToy = true;
  let index = 0;

  const animalsNumber = P.length;

  while (allAnimalIsCorrectToy) {
    const currentToy = T[index];
    const nextToy = T[index + 1];
    T[index] = nextToy;
    T[index + 1] = currentToy;

    if (isAllAnimalIsCorrectToy(P, T)) break;
    index += 1;
  }

  return true;
}

const P = [1, 1, 2];
const T = [2, 1, 1];
const A = [0, 2];
const B = [1, 1];

console.log(solution(P, T, A, B));
