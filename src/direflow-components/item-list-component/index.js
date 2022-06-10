import { DireflowComponent } from 'direflow-component';
import "./App.css";
import App from './App';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'item-list-component',
  },
  plugins: [
    { 
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
  ],
});
