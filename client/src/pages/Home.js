import React from 'react';
import photo from '../images/photo.jpg'
// import styles from '../styles/mystyle.module.css'
// import { useQuery } from '@apollo/client';

//import ProfileList from '../components/ProfileList';

//

const Home = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];
const mystyle = {
  display: 'flex',
  width: '540px', /* you can use % */
  height: 'auto',


};


  return (

     <main>
        <div>
          <img src={photo} style={mystyle} alt='bigboy'/>
          <p>Talking about the leader of the marching band, I was born in ... I been the leader for ...</p>
         </div>


    </main>
  );
};


export default Home;