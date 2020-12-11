function determinant() {
    var M = [ [1,2], [3,4]];
    console.log("Matrix");
    console.log(M[0][0] + " " + M[0][1]);
    console.log(M[1][0] + " " + M[1][1]);
    var res = (M[0][0] * M[1][1] - (M[0][1] * M[1][0]));
    console.log(res);
}
determinant();