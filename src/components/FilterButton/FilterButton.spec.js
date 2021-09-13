
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterButton from './FilterButton';

describe("FilterButton",()=>{

    let filterButton;
    let setFilterFunction;

    describe('clicking the "All" filter button',()=>{
        beforeEach(async()=>{          
            setFilterFunction=jest.fn().mockName("setFilter");
            ({filterButton}=render(<FilterButton
                            name="ALL"
                            ispressed={true} 
                            setFilter ={setFilterFunction} />
            ));
        })
        it("All filter should be called",()=>{
            userEvent.click(document.querySelector("button#filter-button-ALL"))
            expect(setFilterFunction).toHaveBeenCalledWith('ALL')
        })
    })
})