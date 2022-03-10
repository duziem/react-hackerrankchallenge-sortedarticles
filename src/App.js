import React, { useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [sortart, setSortart]= useState([])

    const handleClick= (e)=>{
        if(e.target.id.includes('upvoted')){
            let art= [...articles];
            art.sort((a,b)=>{
                return (b.upvotes - a.upvotes);
            })
            setSortart(art)
        }
        if(e.target.id.includes('recent')){
            let art= [...articles];
            art.sort((a,b)=>{
                if(b.date > a.date){
                    return 1;
                }
                if(b.date < a.date){
                    return -1;
                }
                return 0;

            })
            setSortart(art)
        }
        
    }

    useEffect(()=>{
        //let art= [...articles];
            articles.sort((a,b)=>{
                return (b.upvotes - a.upvotes);
            })
        // setSortart(art)
    }, [])

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button id='upvoted' data-testid="most-upvoted-link" className="small" onClick={handleClick}>Most Upvoted</button>
                <button id='recent' data-testid="most-recent-link" className="small" onClick={handleClick}>Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
