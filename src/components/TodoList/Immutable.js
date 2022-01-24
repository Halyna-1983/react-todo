import React, { useState } from 'react';

const Immutable = () => { 
  const [student, setStudent] = useState({
  location: {
    country: 'ukr', 
    city: 'lviv'
  }, 
  hobbies: {
    active: {
      football: 'football', 
      hokey: 'hokey'
    }, 
    passive: {
      indoor: {
        playStation: 'playStation', 
        tvShows: 'tvshows'
      }, 
      outdoor: {
        drinkCoffee: 'drinkCoffee', 
        walk: 'walk'
      }
    }
  }
  })
  console.log(student);

  
  const studentChangeCountry = {
    ...student,
    location: {...student.location, country: 'Poland'}
  }
  console.log(studentChangeCountry);


   const studentChangeLocation = {
    ...student,
     location: {
       ...student.location, country: 'Poland', city: 'Wroclaw'
     }
  }
  console.log(studentChangeLocation);
  

  const studenPlayBaseball = {
    ...student, 
    hobbies: {
      ...student.hobbies, active: {
        ...student.hobbies.active, football: 'ball', hokey: 'play'
      }
    }
  }
  console.log(studenPlayBaseball);
  

  const studentInForest = {
    ...student,
    hobbies: {
      ...student.hobbies, passive: {
        ...student.hobbies.passive, outdoor: {
          ...student.hobbies.passive.outdoor, walk: 'walk in forest'
        }
      }
    }
  }
  console.log(studentInForest);
 
    return (
        <div>
            <h1>Students info:</h1>
        </div>
    )
}
export default Immutable;