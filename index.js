// Code your solution here


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// function findMatching(list, arg){

//     let newList =[];
//         for(let i=0; i<list.length;i++){
            
//             if ( list[i].toUpperCase() === arg.toUpperCase()){
//                 newList.push(list[i]);               
//             }           
//         }
//         return newList;
// }

function findMatching(drivers, str) {
    
    const lowercaseQstr = str.toLowerCase();
  
    
    const matchingDrivers = drivers.filter(driver => {
      const lowercaseDriverName = driver.toLowerCase();
      return lowercaseDriverName === lowercaseQstr;
    });
  
    return matchingDrivers;
  }



function fuzzyMatch(drivers, str) {
    
    const lowercasestr = str.toLowerCase();
    
    
    const matchingDrivers = drivers.filter(driver => {
      const lowercaseDriverName = driver.toLowerCase();
      return lowercaseDriverName.startsWith(lowercasestr);
    });
    
    return matchingDrivers;
  }

  function matchName(drivers, name) {

    const matchingDrivers = drivers.filter(driver => {
      return driver.name === name;
    });
    
    return matchingDrivers;
  }
  

