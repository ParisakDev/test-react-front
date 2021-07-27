import React from "react";
import { render,fireEvent } from "@testing-library/react";
import ButtonRemoveBook from "./ButtonRemoveBook";

it('button delete',()=>{
    let valueButton = "";

    const button = render(
            <ButtonRemoveBook handleDelete={()=>{
                valueButton = "resolved"
            }} />
    );
    const buttonToDelete = button.getByTestId('test-button-delete');

    fireEvent.click(buttonToDelete)
    expect(valueButton).toBe('resolved');

})
