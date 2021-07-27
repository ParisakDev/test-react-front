import React from "react";
import { render,waitFor,cleanup} from "@testing-library/react";
import Articles from "./Articles";
import mockedAxios from 'axios';

afterEach(cleanup);

it('Articles button submit filters ',()=>{
    let access = '';
    const articles = render(<Articles testunit={(val)=>access=val} />);
    const buttonSubmit = articles.getByTestId('test-submit-filter');

    buttonSubmit.click(buttonSubmit)
    expect(access).toBe('resolved');

})


it('mocking axios request',async ()=>{
   
    mockedAxios.get = jest.fn().mockResolvedValueOnce();
    const { getByText } = render(<Articles />);

    await waitFor(() => {
        expect(getByText('Henri Potier'));
      });
});