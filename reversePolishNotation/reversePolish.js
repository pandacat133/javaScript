class ReversePolish {

  constructor () {
    this.stack;
  }

  calculate(rpn) {
      let ar = rpn.split( /\s+/ ), st = [], token;
      while( token = ar.shift() ) {
          if ( token == +token ) {
              st.push( token );
          } else {
              let n2 = st.pop(), n1 = st.pop();
              st.push( eval( n1 + token + ' ' + n2 ) );
          }
      }
      return st.pop();
  }

}