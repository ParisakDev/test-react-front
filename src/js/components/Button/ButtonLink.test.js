import React from "react";
import { render } from "@testing-library/react";
import ButtonLink from "./ButtonLink";
import { BrowserRouter as Router } from 'react-router-dom';
import { screen } from '@testing-library/dom';

test('ButtonLink props',()=>{
    render(
        <Router>
            <ButtonLink path={'/'} label="test" ></ButtonLink>
        </Router>
    );
    const label = screen.getByText('test')
    expect(label).toBeInTheDocument();
})

