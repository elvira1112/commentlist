import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import CommonList from '../src/commonList';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('CommonList', CommonList)
  .add('HashData', () => {
    return <CommonList comments={testComments.slice(0, 3)} totalCount={3} />
  })
  .add('Paginated', () => <CommonList comments={testComments} totalCount={10} />)
  .add('Loading', () => <CommonList loading={true} />)
  .add('Empty', () => <CommonList comments={[]} />);

const testComments = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: {
    name: 'Luke',
    avatar: 'luke.jpg',
  },
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    author: {
      name: 'Leah',
      avatar: 'leah.jpg',
    },
  },
  {
    text: 'Duis aute irure dolor in reprehenderit in voluptate.',
    author: {
      name: 'Han',
      avatar: 'han.jpg',
    },
  },
  // Additional tests truncated for brevity
];
