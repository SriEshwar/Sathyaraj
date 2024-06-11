import Developer from "./Developer";
import Role from "./Role";

function Company(){
  const show = true;
  // const welcome='Nice to meet you';
  // const emoji='😊';
  const intro={welcome:'Nice to meet you',emoji:'😊'}
  // const intro = {};
  const info = {tools:'React',role:'Developer'}
  const showIntro = intro.welcome!== undefined && intro.emoji!== undefined;

  const arrayInfo=[{tools:'Selenium',role:'Tester'},
  {tools:'Postman',role:'Tester'},
  {tools:'Angular',role:'Developer'}
  ];

    return(
      <><h1>Aspire Systems</h1>
      {/* { <Role welcome={welcome} emoji={emoji} /> } */}
      {/* {intro.welcome!== undefined && intro.emoji!== undefined ?
      <Role intro={intro} /> : null} */}
      {/* {showIntro ? <Role intro={intro}/> : null} */}
      {showIntro && <Role intro={intro}/>}
      <Developer info={info}/>
      {show? <h2>Developer is in control</h2> : <h2>Developer is not in control</h2>}
      <ul>
        <h2>Lists</h2>
        { arrayInfo.map((info) =>  <li key={info.tools}><Developer info={info}/></li> )}
      </ul>
      </>
    )
  }

export default Company;