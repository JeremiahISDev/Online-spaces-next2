import React from 'react';
import styles from '../styles/Demo.module.css';
function Demo() {
	return (
		<>
			<div className={styles.background}>
				<div className={styles.person}>
          <img src="/account.svg" width="200" height="200" className={styles.img}/>
          <div className={styles.name}><h3 className="text-4xl text-white flex justify-center mt-24">John Smith</h3></div>
        </div>
        <div className="flex justify-center">
          <div className="bg-cyan-900 rounded-full muteButton flex justify-center w-fit p-2 ml-2 place-items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
</svg>
          </div><div className="bg-red-900 rounded-full vidButton w-fit p-2 ml-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
</svg></div>
          <div className="bg-cyan-900 rounded-full vidButton w-fit p-2 ml-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FFF" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg></div>
           
        </div>
			</div>
		</>
	);
}
export default Demo;