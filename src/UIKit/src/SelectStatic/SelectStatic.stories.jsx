import React from 'react';

import SelectStatic from './SelectStatic';

const data = [
  {
    value: 1,
    displayValue: 'Item1',
  },
  {
    value: 2,
    displayValue: 'Item2',
  },
  {
    value: 3,
    displayValue: 'Item3',
  },
  {
    value: 4,
    displayValue: 'Item4',
  },
  {
    value: 5,
    displayValue: 'Item5',
  },
  {
    value: 6,
    displayValue: 'Item6',
  },
  {
    value: 7,
    displayValue: 'Item7',
  },
];

export default {
  title: 'Select/Normal',
  component: SelectStatic,
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
      description: 'Блокировка селектора.',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    error: {
      description: 'Ошибка',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    isLoading: {
      description: 'Загрузка',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
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
    handleSelect: {
      description: 'Контроллер селектора',
      defaultValue: () => {},
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: null },
      },
    },
    options: {
      description: 'Массив опций',
      defaultValue: data.slice(0, 3),
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: null },
      },
    },
    selectedOption: {
      name: 'selectedOption',
      description: 'Текущее значение',
      defaultValue: null,
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: null },
      },
    },
    placeholder: {
      description: 'Плейсхолдер',
      defaultValue: 'Выберите...',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
  },
};

const Template = (args) => <SelectStatic {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  className: 'size--large',
};

export const Small = Template.bind({});
Small.args = {
  className: 'size--small',
};

export const Selected = Template.bind({});
Selected.args = {
  selectedOption: {
    value: 1,
    displayValue: 'Item1',
  },
};

export const Required = Template.bind({});
Required.args = {
  isRequired: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  selectedOption: {
    value: 1,
    displayValue: 'Item1',
  },
  disabled: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: '',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Обязательное поле',
};
