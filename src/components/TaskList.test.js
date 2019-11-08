import React from "react";
import ReactDom from "react-dom";

import { PureTaskList } from "./TaskList";
import { withPinnedTasks } from "./TaskList.stories";

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() }; // create function stubs
  ReactDom.render(<PureTaskList tasks={withPinnedTasks} {...events} />, div);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  ReactDom.unmountComponentAtNode(div);
});
