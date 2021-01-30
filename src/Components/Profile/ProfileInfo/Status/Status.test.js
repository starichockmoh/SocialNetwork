import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("Status component", () => {
    test("status from props should be in state", () => {
        const component = create(<Status ProfileStatus ="SALAM" />);
        const instance = component.getInstance();
        console.log(instance)
        expect(instance.state.statusText).toBe("SALAM");
    });
    test("after creating span should be displayed", () => {
        const component = create(<Status ProfileStatus ="SALAM" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("span with status", () => {
        const component = create(<Status ProfileStatus ="SALAM" />);
        const root = component.root;
        let span = root.findByType('span')
        console.log(span.props.children[0])
        expect(span.props.children[0]).not.toBeNull();//хуйня
    });
    test("after creating input should not be displayed", () => {
        const component = create(<Status ProfileStatus ="SALAM" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });
    test("input should be with correct status", () => {
        const component = create(<Status ProfileStatus ="SALAM" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick()
        let input = root.findByType('input');
        expect(input.props.value).toBe("SALAM");
    });
    test("callback was call", () => {
        const mockCallback = jest.fn()
        const component = create(<Status ProfileStatus ="SALAM" UpdateProfileStatus = {mockCallback}/>);
        const instance = component.getInstance()
        instance.deactiveEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
