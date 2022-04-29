import React from 'react';

import InputPassword from './InputPassword';

export default {
  title: 'Input/Password',
  component: InputPassword,
  argTypes: {
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
      defaultValue: 'Пароль',
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
    placeholder: {
      description: 'Плейсхолдер',
      defaultValue: 'Введите пароль',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
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

const Template = (args) => <InputPassword {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  className: 'size--large',
};

export const Small = Template.bind({});
Small.args = {
  className: 'size--small',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: '',
};

export const Required = Template.bind({});
Required.args = {
  isRequired: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Ошибка',
};
