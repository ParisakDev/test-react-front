import React from "react";
import { render,fireEvent,cleanup,screen } from "@testing-library/react";
import {renderHook,act} from "@testing-library/react-hooks";
import ButtonCart from "./ButtonCart";

it('button click',()=>{
    let valueButton = "";
    const mockIsbn = "8fabf68-8374-48fe-a7ea-a00ccd07afff";
    const button = render(<ButtonCart addClass={valueButton} isbn={mockIsbn} isLabel={false} testunit={(value)=>valueButton = value} />);
    const buttonToAdd = button.getByTestId('test-button-cart');

    fireEvent.click(buttonToAdd)
    expect(valueButton).toBe('resolved');

})
