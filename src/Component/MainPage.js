
import CompA from './CompA';
import React from 'react';
import { NameProvder } from './NameContext';

import { AgeProvider } from './PersonContext';
export default function MainPage(){
    

    return (
        <div>
        <NameProvder value={"Shoaib!"}>
            <AgeProvider value={"22"}>
                <CompA/>
            </AgeProvider>
        </NameProvder>
        </div>
    )
}