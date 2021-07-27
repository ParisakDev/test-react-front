import React from "react";
import { render,fireEvent,cleanup } from "@testing-library/react";
import FieldOrder from "./FieldOrder";

afterEach(cleanup)

it('SearchHeader',()=>{
    let access = 0;
    const fieldOrder = render(<FieldOrder searchByOrder={access} setSearchByOrder={()=>{}} />);
    const one = document.querySelector('.radio-input-0');
    fireEvent.change(one,{target:{value:1}});

    expect(one.value).toBe('1');
})