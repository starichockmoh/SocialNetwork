import React from 'react';

import InputOutline from './InputOutline';
import ShowPasswordIcon from '../InputPassword/assets/ShowPasswordIcon';

export default {
  title: 'Input/Outlined',
  component: InputOutline,
  argTypes: {
    autoComplete: {
      description: 'Автозаполнение (история)',
      options: ['on', 'off'],
      defaultValue: 'on',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'on' },
      },
      control: { type: 'inline-radio' },
    },
    className: {
      description: 'Имя класса. Для задания дополнительных стилей',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    disabled: {
      description: 'Блокировка инпута.',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    error: {
      description: 'Текст ошибки',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    glyph: {
      description: 'Глиф (React компонент)',
      defaultValue: null,
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: null },
      },
    },
    isRequired: {
      description: 'Флаг "обязательное поле"',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    label: {
      description: 'Лейбл',
      defaultValue: 'Label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    name: {
      description: 'Имя',
      defaultValue: 'inputName',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inputName' },
      },
      control: { type: 'text' },
    },
    onChange: {
      description: 'Контроллер инпута',
      defaultValue: null,
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: null },
      },
    },
    onGlyphClick: {
      description: 'Обработчик нажатий на глиф',
      defaultValue: null,
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: null },
      },
    },
    placeholder: {
      description: 'Плейсхолдер',
      defaultValue: 'Placeholder',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    type: {
      description: 'Тип инпута',
      defaultValue: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
      control: { type: 'text' },
    },
    value: {
      description: 'Значение инпута',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
  },
};

const Template = (args) => <InputOutline {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  className: 'size--large',
};

export const Small = Template.bind({});
Small.args = {
  className: 'size--small',
};

export const Required = Template.bind({});
Required.args = {
  isRequired: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  disabled: true,
  value: 'Значение инпута',
};

export const Glyph = Template.bind({});
Glyph.args = {
  glyph: ShowPasswordIcon,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Ошибка',
};
