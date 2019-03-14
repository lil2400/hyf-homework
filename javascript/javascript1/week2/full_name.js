  //Formal fullname
  function getFullname(fullname1, fullname2, useFormalName) {
      if (useFormalName && fullname1 !== '' && fullname2 !== '') { //checks if useFormalName is true and parameters are not empty
          return 'Lord ' + fullname1 + ' ' + fullname2
      } else if (useFormalName === false && fullname1 !== '' && fullname2 !== '') {
          return fullname1 + ' ' + fullname2;
      } else {
          return alert("Please write your full name")
      }
  }

  console.log(getFullname("Ilir", "Memedi", true)) //logs 'Lord Ilir Memedi'
  console.log(getFullname("Ilir", "Memedi", true)) //logs 'Ilir Memedi'