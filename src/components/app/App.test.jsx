/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App color picker', () => {
  it('renders a color picker', () => {
    render(<App />);
    const undo = screen.getByLabelText('undo');
    const redo = screen.getByLabelText('redo');
    const pickColor = screen.getByLabelText('pick-color');
    const colorBox = screen.getByLabelText('color-box');
  
    fireEvent.change(pickColor, { target: { value: '#FF00D4' } });
    fireEvent.change(pickColor, { target: { value: '#0011FF' } });
    fireEvent.change(pickColor, { target: { value: '#BBFF00' } });

    expect(colorBox).toHaveStyle({ 'background-color': '#BBFF00' });

    fireEvent.click(undo);
    fireEvent.click(undo);
    expect(colorBox).toHaveStyle({ 'background-color': '#FF00D4' });

    fireEvent.click(redo);
    expect(colorBox).toHaveStyle({ 'background-color': '#0011FF' });

    fireEvent.change(pickColor, { target: { value: '#FB00FF' } });
    fireEvent.click(undo);
    expect(colorBox).toHaveStyle({ 'background-color': '#BBFF00' });
  });
});

  
