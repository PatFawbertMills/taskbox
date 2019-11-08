import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import Task from './Task';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

// function stubs - or 'mocked callbacks'
export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

// Test params
const longTitle = `Very long very long very long very long very long very long very long very long very long very long very long very long very long`;

// 'Task' is what will show in the sidebar
storiesOf('Task', module)
  .addDecorator(withKnobs)
  .addParameters({
    assets: [
      "/designs/app.png",
      "/designs/items.png",
      "/designs/list-1.png",
      "/designs/list-2.png"
    ]
  })
  .add('default', () => <Task task={object('task', {...task})} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />)
  .add('long title', () => <Task task={{ ...task, title: longTitle }} {...actions} />)
