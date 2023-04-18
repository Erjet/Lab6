function isprime(number) {
  if (typeof number == 'number'){
    return ""
  } else {
	  if ((number % 2) === 0) {
	
        return true
	
	  } else {

	    return false
    }
  }
}
function primesum() {
    let prime_array = []
    let i = 0
    let n = 0
    while (prime_array.length < 5) {
        i += 1
        n = 0 
        for (let loop = 0 ;loop <= i; loop++){
          console.log(i, loop, n,  ( i%loop === 0) )
          if ( i%loop === 0) {
              n += 1
          }
        }
        if (n == 2){
            prime_array.push(i)
        }

      console.log(prime_array)
    }
  }

function sum(number) {
  let num = 0
  let val = 0
  for (let loop = 0 ;loop < cycle; loop++) {
    num = num*10+1
    val = val + num
  }
}