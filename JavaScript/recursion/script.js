function pow (x,n){
    if (x==1){
        return x;
    }
    else {
        return x* pow(x,n-1);
    }
}
alert(pow(2,4));