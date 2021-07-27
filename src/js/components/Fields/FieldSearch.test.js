import React from "react";
import { render,fireEvent,cleanup } from "@testing-library/react";
import FieldSearch from "./FieldSearch";


afterEach(cleanup)


it('SearchHeader',()=>{
    let access = false;
    render(<FieldSearch id="0" searchString={""} setSearchString={()=>{access=true}} placeholder={'test'} />);
    const targetClose = document.querySelector('.close');

    fireEvent.click(targetClose)
    expect(access).toBeTruthy();

})


it('SearchHeader input Change',()=>{
    let val = '';
    const fieldSearch = render(<FieldSearch id="1" searchString={val} setSearchString={()=>{}} handleChange={(value)=>val=value} label="test" placeholder={'test'} />);
    const input = fieldSearch.getByTestId('test');
    fireEvent.change(input,{target:{value:"test"}});

    expect(val).toBe("test");

})

