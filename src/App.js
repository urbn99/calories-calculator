import React, {useState} from 'react'


function App() {

  
  const lowActivity = 1.45;
  const mediumActivity = 1.65;
  const hightActivity = 1.85;
  const veryHightActivity = 2.05;

  const minus500 = -500;
  const minus400 = -400;
  const minus300 = -300;
  const minus200 = -200;
  const minus100 = -100;
  const zero = 0;
  const plus100 = 100;
  const plus200 = 200;
  const plus300 = 300;
  const plus400 = 400;
  const plus500 = 500;

  const [weight, setWeight] = useState(80);
  const [activity, setActivity] = useState(mediumActivity);
  const [calories, setCalories] = useState(zero);
  const [protein, setProtein] = useState(2);
  const [fat, setFat] = useState(0.25);
  
  
  return (
    <div className='container'>
      <header>Kalkulator zapotrzebowania kalorycznego</header>


      
      <div className='weight'>
        <form>
          <label>Podaj wagę</label>
          <input 
            type='number' 
            className='input-weight'
            value={weight} 
            max= '200'
            min='10'
            onChange = {(e) => setWeight(e.target.value)}
          />
          <label>KG</label>
        </form>
      </div>
      

      




      <div className='inputs'>
        <div className='life-style'>

          <h4 className='fnt-15 mgn-10'>Tryb życia</h4>
            <form>
                
              <div>
                <input type="radio" className='input-radio' id="lowActivity" name="activityInput" onChange={() => setActivity(lowActivity)}></input>
                <label for='lowActivity'>Siedzący</label>
              </div>

              <div>
                <input type="radio" id="mediumActivity" name="activityInput" onChange={()=>setActivity(mediumActivity)} defaultChecked></input>
                <label for='mediumActivity'>Umiarkowanie aktywny</label>
              </div>
              <div>
                <input type="radio" id="highActivity" name="activityInput" onChange={()=>setActivity(hightActivity)}></input>
                <label for='highActivity'>Aktywny</label>
              </div>
              <div>
                <input type="radio" id="veryHighActivity" name="activityInput" onChange={() => setActivity(veryHightActivity)}></input>
                <label for='veryHighActivity'>Bardzo aktywny</label>
              </div>
            </form>
        </div>


        <div className='goal-calories'>
          <h4 className='fnt-15 mgn-10'>Cel</h4>

          <form>
            <div>
              <input type="radio" id="minus500" name="caloriesInput" onChange={()=>setCalories(minus500)}></input>
              <label for='minus500'>- 500 Kcal</label>
            </div>
            <div>
              <input type="radio" id="minus400" name="caloriesInput" onChange={() => setCalories(minus400)}></input>
              <label for='minus400'>- 400 Kcal</label>
            </div>
            <div>
              <input type="radio" id="minus300" name="caloriesInput" onChange={() => setCalories(minus300)}></input>
              <label for='minus300'>- 300 Kcal ( redukcja )</label>
            </div>
            <div>
              <input type="radio" id="minus200" name="caloriesInput" onChange={() => setCalories(minus200)}></input>
              <label for='minus200'>- 200 Kcal</label>
            </div>
            <div>
              <input type="radio" id="minus100" name="caloriesInput" onChange={() => setCalories(minus100)}></input>
              <label for='minus100'>- 100 Kcal</label>
            </div>
            <div>
              <input type="radio" id="zero" name="caloriesInput" onChange={() => setCalories(zero)} defaultChecked></input>
              <label for='zero'>0 Kcal ( utrzymanie )</label>
            </div>
            <div>
              <input type="radio" id="plus100" name="caloriesInput" onChange={() => setCalories(plus100)}></input>
              <label for='plus100'>+ 100 Kcal</label>
            </div>
            <div>
              <input type="radio" id="plus200" name="caloriesInput" onChange={() => setCalories(plus200)}></input>
              <label for='plus200'>+ 200 Kcal</label>
            </div>
            <div>
              <input type="radio" id="plus300" name="caloriesInput" onChange={() => setCalories(plus300)}></input>
              <label for='plus300'>+ 300 Kcal ( masa )</label>
            </div>
            <div>
              <input type="radio" id="plus400" name="caloriesInput" onChange={() => setCalories(plus400)}></input>
              <label for='plus400'>+ 400 Kcal</label>
            </div>
            <div>
              <input type="radio" id="plus500" name="caloriesInput" onChange={() => setCalories(plus500)}/>
              <label for='plus500'>+ 500 Kcal</label>
            </div>
          </form>
        </div>
      </div>
      
      <h3 className='calories-result fnt-15'>Twoje zapotrzebowanie kaloryczne: {Math.floor(weight * 22 * activity + calories)  } KCAL </h3>


      <div className="macros">
        <div className='macro'>
          <h3 className='fnt-15' >Białko</h3>
          <input type="range" className='ranger-input' id="protein" name="protein" min="1.5" max="3" value={protein} step="0.1" onChange={(e)=> setProtein(e.target.value)}/>
          <br/>
          <label for="protein">{protein}g</label>
          <h4>{Math.floor( weight * protein)}g</h4>
          <h4>{Math.floor( weight * protein * 4)}kcal</h4>
        </div>
      
        <div className='macro'>
          <h3 className='fnt-15' >Tłuszcze</h3>
          <input type="range" className='ranger-input' id="fat" name="fat" min="0.1" max="0.5" value={fat} step="0.05" onChange={(e) => setFat(e.target.value)}/>
          <br/>
          <label for="fat">{fat * 100}%</label>
          <h4>{Math.floor((weight * 22 * activity + calories) * fat / 9)} g</h4>
          <h4>{Math.floor((weight * 22 * activity + calories) * fat )} Kcal</h4>
          
        </div>

        <div className='carbons macro'>
          <h3 className='fnt-15' >Węglowodany</h3>
          
          <h4>{Math.floor(((weight * 22 * activity + calories) - Math.floor((weight * 22 * activity + calories) * fat) - weight * protein * 4) / 4)} g</h4>
          <h4>{Math.floor((weight * 22 * activity + calories) - Math.floor((weight * 22 * activity + calories) * fat) - weight * protein * 4)} Kcal</h4>

        </div>
      </div>

    </div>
    
  );
  
}

export default App;
