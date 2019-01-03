import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Input from '../Components/Input/Input.jsx';
import '../Components/Input/Input.css';

import Avatar from '../Components/Avatar/Avatar.jsx';
import '../Components/Avatar/Avatar.css';

import man from './man.svg';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Input Field', module)
  .add('Simple input field', () => <Input
        className={'Classname'}
        onBlur={action('onBlur')}
        value={'SomeValue'}
        disabled={false}
        placeholder={'Some placeholder'}
        onFocus={action('onFocus')}
        onChange={action('onChange')}
    />
  )
  .add('Simple input field (disabled)', () => <Input
        className={'Classname'}
        onBlur={action('onBlur')}
        value={'SomeValue'}
        disabled={true}
        placeholder={'Some placeholder'}
        onFocus={action('onFocus')}
        onChange={action('onChange')}
    />
  );

storiesOf('Avatar', module)
  .add('Default', () => <Avatar
        imageSource={''}
    />
  )
  .add('Custom URL', () => <Avatar
        imageSource={man}
    />
  )
  .add('Avatar SMALL', () => <Avatar
        imageSource={man}
        size={'small'}
    />
  )
  .add('Avatar MEDIUM', () => <Avatar
        imageSource={man}
        size={'medium'}
    />
  )
  .add('Avatar LARGE', () => <Avatar
        imageSource={man}
        size={'large'}
    />
  );
